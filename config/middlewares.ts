import type { Core } from "@strapi/strapi";

// OPTIONAL (guide step B4): full replacement for config/middlewares.ts — lets the admin show Cloudinary thumbnails.
const config: Core.Config.Middlewares = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "market-assets.strapi.io", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "market-assets.strapi.io", "res.cloudinary.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

export default config;
