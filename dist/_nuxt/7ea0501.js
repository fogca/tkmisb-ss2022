(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{307:function(e,t,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("1b7833da",content,!0,{sourceMap:!1})},320:function(e,t,n){e.exports=n.p+"img/media.da030d2.webp"},321:function(e,t,n){"use strict";n(307)},322:function(e,t,n){var r=n(46),o=n(138),c=n(323),l=r(!1),d=o(c);l.push([e.i,"#Index main{position:relative;z-index:2}#Index section{padding:0 8.25%}#index-top{height:100vh;position:relative;mix-blend-mode:normal;z-index:-1}#index-top .wrapper{position:absolute;top:auto;bottom:0;padding-bottom:5rem}.circles{position:fixed;top:45%;left:50%;transform:translate(-50%,-50%);display:flex;z-index:-1;mix-blend-mode:normal}.circles div{width:42.5vw;height:42.5vw;border-radius:50%;background:#fff;position:relative;mix-blend-mode:normal;will-change:animation}.circles .circle-1{margin-right:-5rem;z-index:3;background:#13131b;border:1px solid #fff}.circles .circle-2{margin-left:-5rem;z-index:2s}#index-top .wrapper h1{line-height:1.2;margin:1rem 0}#index-top .wrapper h2{margin-bottom:1.5rem}#index-top #top-Line span{display:inline-block}#Index section#index-service{padding-top:12.5rem;margin-top:-6.25rem}#index-service .wrapper{margin-top:5rem}#index-service .container{margin-bottom:6rem}#index-service .container:nth-of-type(4){margin-bottom:0}#index-service .container .orange{font-size:3.6rem;line-height:1.2}#index-service .container h2{margin:1.75rem 0 .5rem}#Index section#index-projects{padding-top:12.5rem}#index-projects .wrapper{margin-top:3rem}#index-projects .reveal{width:100%;height:60vw;mix-blend-mode:normal}#index-projects .container{margin-bottom:6rem}#index-projects .container h1{margin:.6rem 0}#index-projects .container h2{margin-top:1.5rem}#index-projects .container img{width:100%;height:100%;mix-blend-mode:normal;transition:.3s ease-in-out}#index-projects .container:first-of-type{pointer-events:none}@media screen and (min-width:720px){#Index section{padding-left:21.5%;padding-right:10%}.circles{top:50%}.circles div{width:30vw;height:30vw}.bg{background-image:url("+d+")}#index-top{padding-top:28.25rem}#index-top .wrapper{margin-top:5rem;display:flex;justify-content:space-between;align-items:flex-start}#index-top .wrapper p{width:47.5%}#index-top .wrapper p:first-of-type{font-size:1.48rem;line-height:2}#index-top .wrapper p:nth-of-type(2){font-size:1.8rem;line-height:1.6}#index-top h3{margin-top:1rem;line-height:2}#index-projects{margin-top:12.5rem}#index-projects .wrapper{margin-top:5rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start}#index-projects .wrapper a{width:49.5%;position:relative}#index-projects .wrapper img{aspect-ratio:3/2;height:100%}#index-projects .box{padding-left:3rem;padding-bottom:2.5rem;position:relative;display:flex;flex-direction:column;justify-content:flex-end;transition:.5s ease-in-out .15s}#index-projects .container:hover{opacity:1}}",""]),e.exports=l},323:function(e,t,n){e.exports=n.p+"img/bg@.488bd49.jpg"},335:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(48),n(13),n(34),{head:{titleTemplate:null,title:"Takumi Isobe - Creative Space",bodyAttrs:{id:"Index"},script:[{src:"/js/animation.js",body:!0}]},methods:{Animation:function(){gsap.set(".reveal",{autoAlpha:0}),gsap.from(".reveal",1,{xPercent:0,opacity:0,scrollTrigger:{trigger:".reveal"}}),gsap.from(".reveal img",1,{xPercent:0,scale:1.25,delay:-3.5,scrollTrigger:{trigger:".reveal"}})}},mounted:function(){this.$adobeFonts(document);try{FONTPLUS.start()}catch(e){console.log("[error]load FONTPLUS.")}gsap.registerPlugin(ScrollTrigger),this.Animation(),performance.getEntriesByType("navigation").forEach((function(e){"back_forward"==e.type&&null!=sessionStorage.getItem("scrollY")&&window.scrollTo(0,sessionStorage.getItem("scrollY"))})),window.addEventListener("beforeunload",(function(){sessionStorage.setItem("scrollY",window.scrollY)}))},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$microcms,t.next=3,n.get({endpoint:"archives",queries:{limit:10}});case 3:return data=t.sent,t.abrupt("return",data);case 5:case"end":return t.stop()}}),t)})))()}}),c=(n(321),n(21)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"index-main"},[r("div",{staticClass:"bg"}),e._v(" "),e._m(0),e._v(" "),r("section",{attrs:{id:"index-top"}},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"h4 orange"},[e._v("关于我 - 磯部拓")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("nuxt-link",{staticClass:"h3",attrs:{to:"/about",lang:"en"}},[e._v("About me")])],1)]),e._v(" "),e._m(3),e._v(" "),r("section",{attrs:{id:"index-projects"}},[e._m(4),e._v(" "),r("div",{staticClass:"wrapper"},e._l(e.contents,(function(content){return r("nuxt-link",{key:content.id,staticClass:"container",attrs:{to:"/archives/"+content.id,"aria-label":content.title}},[r("div",{staticClass:"box"},[content.thumbnail?r("img",{staticClass:"thumbnail",attrs:{src:content.thumbnail.url,alt:content.title}}):r("img",{staticClass:"thumbnail",attrs:{src:n(320),alt:""}})]),e._v(" "),r("div",{staticClass:"box"},[r("h2",{staticClass:"h5",attrs:{lang:"en"}},[e._v(e._s(content.direction))]),e._v(" "),r("h1",{staticClass:"h2",attrs:{lang:"en"}},[e._v(e._s(content.title))]),e._v(" "),r("h3",{staticClass:"h6 semitrans",attrs:{lang:"en"}},[e._v(e._s(content.work))])])])})),1)]),e._v(" "),r("section",{attrs:{id:"index-about"}}),e._v(" "),r("section",{attrs:{id:"index-inhouse"}}),e._v(" "),r("section",{attrs:{id:"index-contact"}}),e._v(" "),r("section",{attrs:{id:"index-instagram"}})])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"circles"},[n("div",{staticClass:"circle circle-1"}),e._v(" "),n("div",{staticClass:"circle circle-2"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"h0",attrs:{lang:"en",id:"top-Line"}},[n("span",[e._v("H")]),n("span",[e._v("i")]),n("span",[e._v(",")]),n("span"),e._v(" "),n("span",[e._v("I")]),n("span",[e._v("'")]),n("span",[e._v("m")]),n("span"),e._v(" "),n("span",[e._v("T")]),n("span",[e._v("a")]),n("span",[e._v("k")]),n("span",[e._v("u")]),n("span",[e._v("m")]),n("span",[e._v("i")]),n("span"),e._v(" "),n("span",[e._v("I")]),n("span",[e._v("s")]),n("span",[e._v("o")]),n("span",[e._v("b")]),n("span",[e._v("e")]),n("span",[e._v(",")]),e._v(" "),n("br"),n("span"),n("span",[e._v("a")]),n("span",[e._v("n")]),e._v(" "),n("span"),n("span",[e._v("a")]),n("span",[e._v("r")]),n("span",[e._v("t")]),e._v(" "),n("span"),n("span",[e._v("d")]),n("span",[e._v("i")]),n("span",[e._v("r")]),n("span",[e._v("e")]),n("span",[e._v("c")]),n("span",[e._v("t")]),n("span",[e._v("o")]),n("span",[e._v("r")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"h5"},[e._v("常に変化を求め、古く、新しく、時には可笑しく。"),n("br"),e._v("有為転変の世に最大限適応していくブランド構築を"),n("br"),e._v("行っていきます。")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"index-service"}},[n("div",{staticClass:"section-header"},[n("small",{staticClass:"h5"},[e._v("服务")]),e._v(" "),n("h1",{staticClass:"heading",attrs:{lang:"en"}},[e._v("Services")])]),e._v(" "),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"container"},[n("div",{staticClass:"orange"},[e._v("品牌"),n("br"),e._v("識別")]),e._v(" "),n("h2",{staticClass:"h1",attrs:{lang:"en"}},[e._v("01. Brand Identity")]),e._v(" "),n("p",[e._v("多種多様なブランドのパートナーとして、適切なマーケットアプローチを通し、アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。")])]),e._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"orange"},[e._v("平面"),n("br"),e._v("設計")]),e._v(" "),n("h2",{staticClass:"h1",attrs:{lang:"en"}},[e._v("02. Graphic / UI Design")]),e._v(" "),n("p",[e._v("多種多様なブランドのパートナーとして、適切なマーケットアプローチを通し、アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。")])]),e._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"orange"},[e._v("网络"),n("br"),e._v("开发")]),e._v(" "),n("h2",{staticClass:"h1",attrs:{lang:"en"}},[e._v("03. Web Development")]),e._v(" "),n("p",[e._v("多種多様なブランドのパートナーとして、適切なマーケットアプローチを通し、アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。")])]),e._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"orange"},[e._v("摄影"),n("br"),e._v("导演")]),e._v(" "),n("h2",{staticClass:"h1",attrs:{lang:"en"}},[e._v("04. Photography")]),e._v(" "),n("p",[e._v("多種多様なブランドのパートナーとして、適切なマーケットアプローチを通し、アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section-header"},[n("small",{staticClass:"h5"},[e._v("选定项目")]),e._v(" "),n("h1",{staticClass:"heading",attrs:{lang:"en"}},[e._v("Selected projects")])])}],!1,null,null,null);t.default=component.exports}}]);