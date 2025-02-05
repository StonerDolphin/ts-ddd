// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4},
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  modules: [
    "@prisma/nuxt",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
  ],
})