export type ChatConfig = {
  pricing: string;
  turnaround: string;
  operational_notes: string;
};

export async function fetchChatConfig(
  supabaseUrl: string,
  supabaseKey: string
): Promise<ChatConfig | null> {
  try {
    const res = await fetch(
      `${supabaseUrl}/rest/v1/chat_config?select=key,value`,
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      }
    );
    if (!res.ok) return null;
    const rows: { key: string; value: string }[] = await res.json();
    const map = Object.fromEntries(rows.map((r) => [r.key, r.value]));
    return {
      pricing: map['pricing'] ?? '',
      turnaround: map['turnaround'] ?? '',
      operational_notes: map['operational_notes'] ?? '',
    };
  } catch {
    return null;
  }
}
