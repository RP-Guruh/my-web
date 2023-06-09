// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head: {
        title: "Guruh Web",
        meta: [
          { charset: "utf-8" },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1, user-scalable=no",
          },
        ],
        link: [
          {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css'
          }
        ],
      },
    },

    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  
    css: [
      "@/assets/css/main.css",
      "@/assets/css/global.css"
    ],
   
    modules: ["@nuxtjs/color-mode"],
  });