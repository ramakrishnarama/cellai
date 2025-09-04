/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.cellai.in", // ✅ Your domain
    generateRobotsTxt: true,          // ✅ Generate robots.txt file
    sitemapSize: 7000,                 // Optional, splits large sitemaps
    changefreq: "weekly",              // Suggests how often content changes
    priority: 0.7,                     // Default priority
    exclude: ["/admin/*", "/api/*"],   // ✅ Exclude private paths
    robotsTxtOptions: {
      additionalSitemaps: [
        "https://www.cellai.in/sitemap.xml", // reference main sitemap
      ],
    },
  };
  