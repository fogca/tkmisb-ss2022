import axios from 'axios'
export default {
  pageTransition: 'fade',

  // Target: https://go.nuxtjs.dev/config-target
  mode: 'universal',
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
      { hid: 'description', name: 'description', content: 'ディレクター・デザイナー・デベロッパーである磯部拓のクリエイティブスペース - takumiisobeです。主な業務内容としてはUIデザイン・グラフィックデザイン・モーショングラフィックス・WEBサイト構築・撮影、と視覚領域のブランド構築などを行なっています。' || '' },
      { hid: 'keywords', name: 'keywords', content: 'Takumi, Takumi Isobe, Creative Space, Design Studio, Tokyo, Japan, デザイン, クリエイティブスペース, 磯部 拓, UI/UX Design' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'Takumi Isobe- Creative Director' },
      { hid: 'og:type', property: 'og:type', content: 'Portfolio' },
      { hid: 'og:url', property: 'og:url', content: 'takumiisobe.com' },
      { hid: 'og:title', property: 'og:title', content: 'Takumi Isobe - Creative Director' },
      { hid: 'og:description', property: 'og:description', content: 'ディレクター・デザイナー・デベロッパーである磯部拓のクリエイティブスペース - takumiisobeです。主な業務内容としてはUIデザイン・グラフィックデザイン・モーショングラフィックス・WEBサイト構築・撮影、と視覚領域のブランド構築などを行なっています。' },
      { hid: 'og:image', property: 'og:image', content: 'takumiisobe.com' },

      { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Twitter' }
    ],
    link: [
      { rel: 'index', href: 'https://takumiisobe.com/' },
      { rel: 'about', href: 'https://takumiisobe.com/about/' },
      { rel: 'contact', href: 'https://takumiisobe.com/contact/' },
      { rel: 'icon', type: 'image/x-icon', href: '/takumiisobe_fav.ico' }
    ],
    script: [
      { src: "/js/header.js", body: true },
      //{ src: "//typesquare.com/3/tsst/script/ja/typesquare.js?616abf4f07244993b0057f1eac1e02e5", ssr: false },
      { src: "//cdn.jsdelivr.net/npm/gsap@3.7.0/dist/gsap.min.js", ssr: false },
      { src: "//cdn.jsdelivr.net/npm/gsap@3.7.0/dist/ScrollTrigger.min.js", ssr: false },
      { src: "https://webfont.fontplus.jp/accessor/script/fontplus.js?kqbwQX--jVA%3D&box=2bQkUFfZnEc%3D&aa=1&ab=2", ssr: false }
              
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
    { src: '~/plugins/adobe-fonts', ssr: false },
    { src: '~/plugins/luxy', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "nuxt-microcms-module",
    '@nuxtjs/date-fns',
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
    '@nuxtjs/pwa'
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
  /*
   ** @nuxtjs/pwa Configuration
   ** https://github.com/nuxt-community/pwa-module
   */
   manifest: {
    name: 'Takumi Isobe - Creative Space',
    lang: 'ja',
    short_name: 'Takumi Isobe',
    title: 'Takumi Isobe - Creative Space',
    'og:title': 'Takumi Isobe - Creative Space',
    description: 'ディレクター・デザイナー・デベロッパーである磯部拓のクリエイティブスペース - takumiisobeです。主な業務内容としてはUIデザイン・グラフィックデザイン・モーショングラフィックス・WEBサイト構築・撮影、と視覚領域のブランド構築などを行なっています。',
    'og:description': 'ディレクター・デザイナー・デベロッパーである磯部拓のクリエイティブスペース - takumiisobeです。主な業務内容としてはUIデザイン・グラフィックデザイン・モーショングラフィックス・WEBサイト構築・撮影、と視覚領域のブランド構築などを行なっています。',
    theme_color: '#3E1515',
    background_color: '#E2E2E2'
  },
};
