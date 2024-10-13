// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    // pixi配置
  app: {
    // baseURL: '/',
    head: {
      
      script: [
        { src: '/js/live2dcubismcore.min.js' },
        { src: '/js/live2d.min.js' },
      ]
    }
  },

  //兼容2024-04-03之前的版本
  compatibilityDate: '2024-04-03',
  
  // 开发工具，显示页面毫秒数
  devtools: { enabled: true },

  //css配置
  css: [
    '~/assets/css/tailwind.css',
  ],
  // 配置tailwindcss等第三方组件样式
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr:true,

  modules: ['@nuxt/content', '@nuxt/image'],
  content: {
  }

})