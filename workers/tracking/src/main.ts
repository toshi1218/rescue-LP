import trackingWorker from './index';
import { handleCrmRequest, type CrmBindings } from './crm';

type Bindings = CrmBindings & {
  ALLOWED_ORIGIN: string;
  ADMIN_PASSWORD?: string;
  CF_ACCESS_TEAM_DOMAIN?: string;
  CF_ACCESS_AUD?: string;
  ADMIN_ALLOWED_EMAIL?: string;
  UPLOADS: R2Bucket;
};

export default {
  async fetch(request: Request, env: Bindings, ctx: ExecutionContext): Promise<Response> {
    const crmResponse = await handleCrmRequest(request, env);
    if (crmResponse) return crmResponse;
    return trackingWorker.fetch(request, env, ctx);
  },

  async scheduled(controller: ScheduledController, env: Bindings, ctx: ExecutionContext): Promise<void> {
    if (trackingWorker.scheduled) await trackingWorker.scheduled(controller, env, ctx);
  },
} satisfies ExportedHandler<Bindings>;
