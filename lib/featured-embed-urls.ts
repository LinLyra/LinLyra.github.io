/**
 * Optional Notion (or any embeddable) URL when clicking a Featured card on the homepage.
 * Key = project path without domain, e.g. "/business/aerotropolis-south-connector-2026"
 * If set, opens in a site modal instead of a new browser tab. Add your links here as you update each project.
 */
export const featuredEmbedByHref: Record<string, string> = {
  "/business/aerotropolis-south-connector-2026":
    "https://peridot-eocursor-4db.notion.site/Aerotropolis-South-Connector-3523be3c13158057a5c3ddf8944f9d3a",
}

export function getFeaturedEmbedUrl(href: string): string | undefined {
  return featuredEmbedByHref[href]
}
