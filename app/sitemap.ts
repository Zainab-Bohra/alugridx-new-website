export default function sitemap() {
  const baseUrl = "https://www.alugridx.com";
  const now = new Date();

  return [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/about-us`, lastModified: now },
    { url: `${baseUrl}/products`, lastModified: now },
    { url: `${baseUrl}/contact-us`, lastModified: now },
    { url: `${baseUrl}/blog`, lastModified: now },
  ];
}
