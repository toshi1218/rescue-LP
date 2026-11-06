export type HreflangAlternate = { hreflang: string; href: string };

export interface RouteMetadata {
  canonical: string;
  robots: string;
  alternates: HreflangAlternate[];
}

export type RouteMetadataManifest = Record<string, RouteMetadata>;

export interface RouteMetadataOverrides {
  alternates?: HreflangAlternate[];
  robots?: string;
}

interface MetadataTarget {
  getPathname: () => string;
  setAlternates: (alternates: HreflangAlternate[]) => void;
  setRobots: (robots: string) => void;
  loadManifest: () => Promise<RouteMetadataManifest>;
  reload: () => void;
}

export function normalizeRoutePath(pathname: string): string {
  return `${pathname.replace(/\/+$/, '')}/`;
}

/**
 * The build manifest owns language/indexing policy. The initial document already
 * has that policy; warm the cache without changing its server-rendered tags.
 * An early navigation without a cached policy uses the destination's HTML
 * instead of guessing language counterparts or temporarily indexing a noindex page.
 */
export function createRouteMetadataController(target: MetadataTarget) {
  let activePath: string | undefined;
  let hasNavigated = false;
  let manifest: RouteMetadataManifest | undefined;
  let pending: Promise<void> | undefined;

  function warm(): Promise<void> {
    if (!pending) {
      pending = target.loadManifest().then((value) => {
        manifest = value;
      }).catch(() => {
        // Keep the current SSR policy. A later navigation will reload its HTML.
      });
    }
    return pending;
  }

  function synchronize(pathname: string, overrides: RouteMetadataOverrides = {}) {
    const path = normalizeRoutePath(pathname);
    // A superseded React effect must not write metadata for an older route.
    if (normalizeRoutePath(target.getPathname()) !== path) return;

    if (activePath !== undefined && activePath !== path) hasNavigated = true;
    activePath = path;
    void warm();

    if (hasNavigated) {
      const policy = manifest?.[path];
      if (policy) {
        target.setAlternates(overrides.alternates ?? policy.alternates);
        target.setRobots(overrides.robots ?? policy.robots);
        return;
      }
      // NotFound provides both policies explicitly, including empty alternates.
      if (overrides.alternates === undefined || overrides.robots === undefined) {
        target.reload();
        return;
      }
    }

    if (overrides.alternates !== undefined) target.setAlternates(overrides.alternates);
    if (overrides.robots !== undefined) target.setRobots(overrides.robots);
  }

  return { synchronize, warm };
}
