import axios from 'axios'
export default {
  pageTransition: 'fade',

  // Target: https://go.nuxtjs.dev/config-target
  // This way of writing would be the latest 2022 June
  ssr: 'true',
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Takumi Isobe - Creative Space',
    htmlAttrs: {
      lang: 'ja-JP',
      //lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'アートディレクター 磯部たくみのクリエイティブスペースです。挑戦し続けるブランドの伴走するパートナーとして、視覚領域からクリエイティブ領域までの支援を行って参ります。主な業務内容としてはUIデザイン・グラフィックデザイン・モーショングラフィックス・WEBサイト構築・撮影、と視覚領域のブランド構築などを行なっています。' || '' },
      { hid: 'keywords', name: 'keywords', content: 'Takumi, Takumi Isobe, Creative Space, Design Studio, Tokyo, Japan, デザイン, クリエイティブスペース, 磯部 拓, 磯部たくみ, UI/UX Design' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'Takumi Isobe- Creative Director' },
      { hid: 'og:type', property: 'og:type', content: 'Portfolio' },
      { hid: 'og:url', property: 'og:url', content: 'takumiisobe.com' },
      { hid: 'og:title', property: 'og:title', content: 'Takumi Isobe - Creative Director' },
      { hid: 'og:description', property: 'og:description', content: 'アートディレクター 磯部たくみのクリエイティブスペースです。挑戦し続けるブランドの伴走するパートナーとして、視覚領域からクリエイティブ領域までの支援を行って参ります。主な業務内容としてはUIデザイン・グラフィックデザイン・モーショングラフィックス・WEBサイト構築・撮影、と視覚領域のブランド構築などを行なっています。' },
      { hid: 'og:image', property: 'og:image', content: 'takumiisobe.com' },

      { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Twitter' }
    ],
    link: [
      { rel: 'index', href: 'https://takumiisobe.com/' },
      { rel: 'projects', href: 'https://takumiisobe.com/#index-projects/' },
      { rel: 'about', href: 'https://takumiisobe.com/#index-about/' },
      { rel: 'contact', href: 'https://takumiisobe.com/#index-contact/' },
      { rel: 'icon', type: 'image/x-icon', href: '/fav.ico' }
    ],
    script: [      
      //{ src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js", ssr: false },
      //{ src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js", ssr: false },
      { src: "https://webfont.fontplus.jp/accessor/script/fontplus.js?kqbwQX--jVA%3D&box=2bQkUFfZnEc%3D&aa=1&ab=2", ssr: false },
      //{ src: "js/animation.js", ssr: false, body: true },
              
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/base.css',
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //{ src: '~/plugins/axios.js', ssr: false }
    //{ src: '~/plugins/luxy', ssr: false }
    { src: '~/plugins/adobe-fonts', ssr: false },
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "nuxt-microcms-module",
    '@nuxtjs/date-fns',
    'nuxt-gsap-module',
    //'@aceforth/nuxt-optimized-images',
  ],
  microcms: {
    options: {
      serviceDomain: "creative-takumiisobe",
      apiKey: "11f3d55fb9c54d849daaf3256b790f060e2d",
    },
    mode: process.env.NODE_ENV === "production" ? "server" : "all",
  },
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    trailingSlash: true,
    middleware: ['redirect'],
    //this will make the scroll position to the top when page changed
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    //'@nuxtjs/color-mode'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://takumiisobe.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    routes(callback) {
      axios.get(`https://creative-takumiisobe.microcms.io/api/v1/archives?limit=30`,
        {
          headers: { 'X-MICROCMS-API-KEY': "11f3d55fb9c54d849daaf3256b790f060e2d" }
        }
      )
        .then((res) => {
          const routes = res.data.contents.map((archives) => {
            return '/archives/' + archives.id
          })
          callback(null, routes)
        })
        .catch(callback)
    }
  },
  colorMode: {
    //preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  /*
   ** @nuxtjs/pwa Configuration
   ** https://github.com/nuxt-community/pwa-module
   */
   manifest: {
    name: '磯部たくみのクリエイティブスペース',
    lang: 'ja',
    short_name: 'Takumi Isobe',
    title: '磯部たくみのクリエイティブスペース',
    'og:title': '磯部たくみのクリエイティブスペース',
    description: 'アートディレクター 磯部たくみのクリエイティブスペースです。挑戦し続けるブランドの伴走するパートナーとして、視覚領域からクリエイティブ領域までの支援を行って参ります。主な業務内容としてはUIデザイン・グラフィックデザイン・モーショングラフィックス・WEBサイト構築・撮影、と視覚領域のブランド構築などを行なっています。',
    'og:description': 'アートディレクター 磯部たくみのクリエイティブスペースです。挑戦し続けるブランドの伴走するパートナーとして、視覚領域からクリエイティブ領域までの支援を行って参ります。主な業務内容としてはUIデザイン・グラフィックデザイン・モーショングラフィックス・WEBサイト構築・撮影、と視覚領域のブランド構築などを行なっています。',
    theme_color: '#3E1515',
    background_color: '#E2E2E2'
  },
};
