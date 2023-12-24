module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.DEPLOY_HOOK,
      apiToken: process.env.API_TOKEN,
      appFilter: process.env.APP_FILTER,
      teamFilter: "none",
      roles: ["strapi-super-admin"],
    },
  },
});
