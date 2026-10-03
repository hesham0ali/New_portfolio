/**
 * Reuses the configured WhatsApp destination while replacing only its message.
 * This keeps the phone number in one source of truth.
 */
export function createWhatsAppServiceUrl(
  configuredContactUrl: string,
  messageTemplate: string,
) {
  const url = new URL(configuredContactUrl);
  url.searchParams.set("text", messageTemplate.trim());

  return url.toString();
}
