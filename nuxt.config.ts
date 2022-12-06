import ElementPlus from 'unplugin-element-plus/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ... other options
  // build: {
  //   transpile: ['element-plus/es'],
  // },
  vite: {
    plugins: [ElementPlus()],
  },
})