(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(t,e,n){"use strict";n(66),n(24),n(82);e.a=function(t,e){t.app;e("adobeFonts",(function(t){var a,e={kitId:"qry6rwk",scriptTimeout:3e3,async:!0},n=t.documentElement,o=setTimeout((function(){n.className=n.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"}),e.scriptTimeout),r=t.createElement("script"),c=!1,s=t.getElementsByTagName("script")[0];n.className+=" wf-loading",r.src="https://use.typekit.net/"+e.kitId+".js",r.async=!0,r.onload=r.onreadystatechange=function(){if(a=this.readyState,!(c||a&&"complete"!=a&&"loaded"!=a)){c=!0,clearTimeout(o);try{Typekit.load(e)}catch(t){}}},s.parentNode.insertBefore(r,s)}))}},137:function(t,e,n){"use strict";var o=n(2),r=n(198),c=n.n(r);o.a.use(c.a)},181:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("56b15182",content,!0,{sourceMap:!1})},182:function(t,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("257af960",content,!0,{sourceMap:!1})},183:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("48c28920",content,!0,{sourceMap:!1})},192:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isActiveMenu:!1,headerHiddenFlag:!1,headerTopFlag:!0}},mounted:function(){var t=this,e=0;window.addEventListener("scroll",(function(){var n=window.pageYOffset&&document.documentElement.scrollTop;t.headerHiddenFlag=n>e&&n>15,e=n}));window.addEventListener("scroll",(function(){var e=window.pageYOffset&&document.documentElement.scrollTop;t.headerTopFlag=0==e}))}},r=(n(275),n(21)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Header"}},[n("header",{class:{"is-active":t.isActiveMenu,scrolled:t.headerHiddenFlag,"is-top":t.headerTopFlag}},[n("nuxt-link",{attrs:{to:"/","aria-label":"Home"}},[n("Logo")],1),t._v(" "),n("hr"),t._v(" "),t._m(0),t._v(" "),n("hr")],1),t._v(" "),n("nav",{staticClass:"nav",class:{"is-active":t.isActiveMenu}},[n("Menu",{nativeOn:{click:function(e){t.isActiveMenu=!1}}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{lang:"en",href:"/#index-contact"}},[t._v("Service")])]),t._v(" "),n("li",[n("a",{attrs:{lang:"en",href:"/#index-projects"}},[t._v("Projects")])]),t._v(" "),n("li",[n("a",{attrs:{lang:"en",href:"/#index-about"}},[t._v("About me")])]),t._v(" "),n("li",[n("a",{attrs:{lang:"en",href:"/#index-inhouse"}},[t._v("in house")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(202).default,Header:n(192).default,Menu:n(300).default})},201:function(t,e,n){"use strict";n(273);var o=n(21),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(192).default})},202:function(t,e,n){"use strict";n.r(e);var o=n(21),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"Logo",attrs:{lang:"en"}},[t._v("Takumi Isobe")])}),[],!1,null,null,null);e.default=component.exports},203:function(t,e,n){n(204),t.exports=n(205)},243:function(t,e,n){"use strict";n.r(e);n(34);e.default=function(t){var e=t.route,n=t.redirect,path=e.path,o=e.hash,r=e.query.type;"/"!==path.slice(-1)&&"/404"!==path&&n(301,o?path+"/#"+o:r?path+"/?type="+r:path+"/")}},267:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("14a41a40",content,!0,{sourceMap:!1})},268:function(t,e,n){var o=n(46),r=n(138),c=n(269),l=o(!1),h=r(c);l.push([t.i,'@font-face{font-family:"Lausanne";src:url('+h+') format("woff2")}#fontplus-trial-banner{display:none}:root{--backgroundColor:#0a0a0a;--textColor:#fff;--bodyColor:#58582d;--gray:#d8d8d8;--mainColor:#88b82b;--outer-height:100vh;--pX:8px}*{margin:0;padding:0;box-sizing:border-box}html{font-size:62.5%}body,html{width:100vw;overflow-x:hidden;background-color:#0a0a0a;background-color:var(--backgroundColor)}@media screen and (max-width:480px){html{font-size:55%}}a,button,div,h1,h2,h3,h4,h5,h6,p,span{font-family:"Lausanne",TsukuGoPro-B,TazuganeGothicStdN-Medium,sans-serif;font-weight:300;color:#fff;color:var(--textColor);font-display:swap;font-feature-settings:"palt";letter-spacing:.075em;-webkit-font-smoothing:antialiased;line-height:1.8}:lang(en){letter-spacing:-.03em;line-height:1.4;-webkit-font-smoothing:antialiased}svg,svg g,svg path{fill:#fff;fill:var(--textColor)}.h{font-size:3.6rem}.h0{font-size:2.8rem}.h1,h1{font-size:2.4rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.8rem}.h4,h4{font-size:1.6rem}.h5,h5{font-size:1.4rem}.h6,h6{font-size:1.2rem}.p,p{font-weight:600;line-height:1.85;font-size:1.35rem;letter-spacing:.025em;text-align:justify;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;word-break:break-all}a,li{text-decoration:none}a{display:inline-block;transition:.75s ease-in-out}a:hover{opacity:.85}img{-o-object-fit:cover;object-fit:cover;-o-object-position:50%;object-position:50%}.heading{font-size:3.2rem}.orange{color:#e34600}.uppercase{text-transform:uppercase;letter-spacing:.15em;font-weight:700}.semitrans{opacity:.7}.white{color:#58582d;color:var(--bodyColor)}.gray{color:var(--subColor)}ul li{text-decoration:none;list-style:none}main{margin:auto}.pc{display:none}@media screen and (min-width:720px){html{font-size:55%}}@media only screen and (min-width:481px) and (max-width:720px){html{font-size:50%}}@media screen and (min-width:720px){html{font-size:62.5%}.h0{font-size:5.6rem}.h1,h1{font-size:3.6rem}.h2,h2{font-size:2.8rem}.h3,h3{font-size:2.4rem}.h4,h4{font-size:2rem}.h5,h5{font-size:1.6rem}.h6,h6{font-size:1.4rem}.h7{font-size:1.2rem}.p,p{font-size:1.6rem;text-align:left}.sp{display:none}.pc{display:block}}@media screen and (max-width:480px){.sp{display:none}.pc{display:block}}',""]),t.exports=l},269:function(t,e,n){t.exports=n.p+"fonts/TWKLausanne-350.8c55393.woff2"},270:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("f52d43e0",content,!0,{sourceMap:!1})},271:function(t,e,n){var o=n(46),r=n(138),c=n(272),l=o(!1),h=r(c);l.push([t.i,".fade-enter-active,.fade-leave-active{transition:opacity 1s}.fade-enter,.fade-leave-to{opacity:0}.h1,.h2,.h3,.h4,.h5,.h6,.orange,h1,h2,h3,h4,h5,h6,p,span{mix-blend-mode:difference}#index-top .box .circle-1{-webkit-animation:circle1 10s cubic-bezier(.8,0,0,.8) 5s infinite;animation:circle1 10s cubic-bezier(.8,0,0,.8) 5s infinite}#index-top .box .circle-2{-webkit-animation:circle2 10s cubic-bezier(.8,0,0,.8) 5s infinite;animation:circle2 10s cubic-bezier(.8,0,0,.8) 5s infinite}@-webkit-keyframes circle1{50%{transform:translateX(50%)}}@keyframes circle1{50%{transform:translateX(50%)}}@-webkit-keyframes circle2{50%{transform:translateX(-50%)}}@keyframes circle2{50%{transform:translateX(-50%)}}@-webkit-keyframes bgColor{0%{background-color:#fff}to{background-color:#000}}@keyframes bgColor{0%{background-color:#fff}to{background-color:#000}}@-webkit-keyframes text{0%{color:#000}to{color:#fff}}@keyframes text{0%{color:#000}to{color:#fff}}.bg{width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:-1;background-attachment:fixed;background-image:url("+h+');background-position:0 0;background-size:cover;background-repeat:no-repeat;opacity:.5;transition:.5s ease-in-out}.reveal{visibility:hidden;overflow:hidden}.reveal img{height:100%;width:100%;-o-object-fit:cover;object-fit:cover;transform-origin:left}.linkHover{position:relative;transition:.5s cubic-bezier(.75,0,0,.75)}.linkHover *,.linkHover:before{display:inline-block}.linkHover:before{content:"";width:.5rem;height:.5rem;margin-right:3rem;background-color:var(--textColor);position:absolute;top:47%;left:-2rem;border-radius:50%;opacity:0;transition:all .3s cubic-bezier(1,0,0,1)}.linkHover:hover:before{opacity:1;transform:scale(2.25) translateY(-1px)}.linkHover:hover{opacity:1;transform:translateX(-1rem)}body .is-menuOpen{position:fixed;top:0;left:0;width:100%}',""]),t.exports=l},272:function(t,e,n){t.exports=n.p+"img/bg_sp.d0a3e86.jpg"},273:function(t,e,n){"use strict";n(181)},274:function(t,e,n){var o=n(46)(!1);o.push([t.i,".fade-enter-active,.fade-leave-active{transition:opacity 1s}.fade-enter,.fade-leave-active{opacity:0}",""]),t.exports=o},275:function(t,e,n){"use strict";n(182)},276:function(t,e,n){var o=n(46)(!1);o.push([t.i,"#Header,header{mix-blend-mode:normal}#Header{position:relative;z-index:99}header.is-top{padding-top:1.5rem;background:transparent}header.scrolled{transform:translateY(-64px)}header{width:100%;position:fixed;top:0;transition:1s ease-in-out;z-index:99;padding:2rem 8.25vw 0;background:#0d0d12}header hr{width:100vw;margin-left:-8.25vw;background:#fff;border:.3px solid #fff}header hr:first-of-type,header hr:nth-of-type(2){margin-top:1.3rem}header ul{margin-top:1.2rem;width:100%;display:flex;justify-content:space-between}header ul li a{font-size:1.6rem}header ul li div{opacity:.5;font-size:1.2rem}header #Path_1603{opacity:0}header.is-top #Path_1603{opacity:1}header .Logo{margin-left:-.5rem;font-size:2rem;transition:.5s}header #Path_1603{transition:.3s ease-in-out}header.scrolled #Path_1603{opacity:0}header .Logo path{transition:1s ease-in-out}header .Logo:hover path{fill:var(--textColor)}.button-menu{width:5rem;display:block;background:none;border:none;position:relative}.button-menu svg{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);transition:1.5s ease-in-out}.button-menu svg:first-of-type{transition:.25s ease-in-out;opacity:1}.button-menu svg:nth-of-type(2),header.is-active .button-menu svg:first-of-type{opacity:0}header.is-active .button-menu svg:nth-of-type(2){opacity:1}header a{transition:0s}.nav,header.is-active *{fill:var(--textColor)}.nav{width:100vw;height:100vh;color:var(--textColor);position:fixed;z-index:998;background-color:#150404;opacity:0;transition:1s ease-in-out;visibility:hidden}.nav.is-active{opacity:1;visibility:visible}.nav,.nav *{color:var(--backgroundColor);fill:var(--backgroundColor)}.Menu h4{opacity:.5}.nav .box{display:none}@media screen and (min-width:720px){header .Logo{width:12rem}}@media screen and (min-width:1640px){header{margin:auto;max-width:1800px}header.scrolled{transform:translate(0)}}",""]),t.exports=o},277:function(t,e,n){"use strict";n(183)},278:function(t,e,n){var o=n(46)(!1);o.push([t.i,"main.Menu{width:80%}.Menu .wrapper{margin-top:calc(var(--pX)*22.5)}.Menu .wrapper h2{margin-top:calc(var(--pX)*3.5)}.Menu .wrapper h4{margin-top:calc(var(--pX)*0)}.Menu .container{margin-top:calc(var(--pX)*7.5)}.Menu .box{margin-top:calc(var(--pX)*2)}.Menu .box h5{margin-top:calc(var(--pX)*-1.5)}",""]),t.exports=o},299:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=299},300:function(t,e,n){"use strict";n.r(e);n(277);var o=n(21),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"Menu"},[n("div",{staticClass:"wrapper"},[n("nuxt-link",{attrs:{to:"/about","aria-label":"About Me"},nativeOn:{click:function(e){t.isActiveMenu=!1}}},[n("h2",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"121.038",height:"20.795",viewBox:"0 0 121.038 20.795"}},[n("path",{attrs:{id:"Path_1609","data-name":"Path 1609",d:"M16.57,0h2.393L10.514-19.687h-1.3L.793,0H3.145L5.578-5.934h8.531ZM6.412-7.957,9.83-16.27l3.445,8.313ZM29.117-13.7a5.476,5.476,0,0,0-4.5,2.256v-9.119H22.445V-1.148A10.5,10.5,0,0,0,27.75.219c4.4,0,7.082-2.434,7.082-7.055C34.832-11.293,32.33-13.7,29.117-13.7Zm-1.3,12.141a5.414,5.414,0,0,1-3.2-.93V-7.26A4.383,4.383,0,0,1,28.8-11.908c2.27,0,3.828,2.023,3.828,5.086S31.072-1.559,27.818-1.559ZM43.66.219c3.938,0,6.549-3.09,6.549-6.932,0-3.76-2.516-6.973-6.426-6.973-3.937,0-6.59,3.227-6.59,7.014C37.194-2.994,39.654.219,43.66.219Zm.027-1.9c-2.748,0-4.457-2.133-4.457-4.977,0-2.98,1.9-5.154,4.512-5.154,2.639,0,4.389,2.188,4.389,5.086C48.131-3.937,46.518-1.682,43.688-1.682Zm19.15-11.785v7.4a4.286,4.286,0,0,1-4.047,4.5c-2.516,0-2.8-2.3-2.8-3.568v-8.326h-2.16v8.873c0,2.789,1.3,4.826,4.4,4.826a5.361,5.361,0,0,0,4.607-2.352V.014h2.187v-13.48ZM74.414-1.6c-2.037,0-2.037-1.668-2.037-2.557v-7.465h4.279v-1.846H72.364v-2.816h-.479l-1.9,2.816-1.436,1.354v.479h1.777v8.176c0,.656,0,3.678,3.035,3.678a4.455,4.455,0,0,0,3.65-1.928V-2.2A6.709,6.709,0,0,1,74.414-1.6Zm30.891-18.088L96.555-9.611,87.7-19.687h-.451V0h2.064V-14.547l7.205,8.039,7.164-8.066V0h2.092V-19.687ZM121.831-7.137c0-3.937-2.229-6.562-5.756-6.562-3.773,0-6.3,3.049-6.3,7,0,3.5,1.982,6.918,6.467,6.918a7.981,7.981,0,0,0,4.895-1.545V-3.24a7.814,7.814,0,0,1-4.676,1.613c-2.926,0-4.621-2.037-4.717-4.908h10.076C121.817-6.672,121.831-6.822,121.831-7.137Zm-5.742-4.812c2.188,0,3.555,1.545,3.76,3.732h-7.957A4.3,4.3,0,0,1,116.088-11.949Z",transform:"translate(-0.793 20.563)"}})])])]),t._v(" "),n("h4",{staticClass:"h5 semitrans"},[t._v("わたしについて")]),t._v(" "),n("h2",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"180.696",height:"20.781",viewBox:"0 0 180.696 20.781"}},[n("path",{attrs:{id:"Path_1610","data-name":"Path 1610",d:"M26.25-19.687,20.945-4.43,15.2-19.687h-.834L8.244-4.375,3.117-19.687H.807L7.574,0H8.7l6.029-15.189L20.494,0H21.6l7.014-19.687ZM35.543.219c3.938,0,6.549-3.09,6.549-6.932,0-3.76-2.516-6.973-6.426-6.973-3.937,0-6.59,3.227-6.59,7.014C29.076-2.994,31.537.219,35.543.219Zm.027-1.9c-2.748,0-4.457-2.133-4.457-4.977,0-2.98,1.9-5.154,4.512-5.154,2.639,0,4.389,2.188,4.389,5.086C40.014-3.937,38.4-1.682,35.57-1.682ZM52.711-13.7a5.269,5.269,0,0,0-4.744,2.707V-13.48H45.848V0h2.188V-6.562c0-2.967,1.887-5.113,4.43-5.113.205,0,.41.014.574.027v-2.037C52.916-13.686,52.957-13.7,52.711-13.7ZM68.129,0,61.239-7.178l5.92-6.289H64.492L58.709-7.355V-20.562H56.522V0h2.188V-6.973L65.34,0Zm23.85,0h2.393L85.922-19.687h-1.3L76.2,0h2.352l2.434-5.934h8.531ZM81.821-7.957l3.418-8.312,3.445,8.313Zm22.9-5.742a5.269,5.269,0,0,0-4.744,2.707V-13.48H97.854V0h2.188V-6.562c0-2.967,1.887-5.113,4.43-5.113.205,0,.41.014.574.027v-2.037C104.922-13.686,104.963-13.7,104.717-13.7ZM113.559.219a6.961,6.961,0,0,0,3.555-.9V-2.748a5.85,5.85,0,0,1-3.322.984,4.659,4.659,0,0,1-4.854-4.854,4.933,4.933,0,0,1,4.936-5.113,5.584,5.584,0,0,1,3.24,1.025v-2.078a6.023,6.023,0,0,0-3.254-.9,6.972,6.972,0,0,0-6.945,7.232A6.374,6.374,0,0,0,113.559.219ZM127.774-13.7a5.293,5.293,0,0,0-4.58,2.311v-9.174h-2.187V0h2.188V-7.451a4.235,4.235,0,0,1,4.033-4.443c2.816,0,2.816,2.857,2.816,3.568V0h2.16V-8.873C132.2-11.662,130.9-13.7,127.774-13.7Zm10.482-2.816a1.474,1.474,0,0,0,1.449-1.477,1.453,1.453,0,0,0-1.449-1.463,1.45,1.45,0,0,0-1.436,1.463A1.462,1.462,0,0,0,138.257-16.516ZM137.149,0h2.2V-13.467h-2.2Zm16.156-13.467L149.19-3.842l-3.883-9.625h-2.365L148.671,0h.957l5.961-13.467Zm15.746,6.33c0-3.937-2.229-6.562-5.756-6.562-3.773,0-6.3,3.049-6.3,7,0,3.5,1.982,6.918,6.467,6.918a7.981,7.981,0,0,0,4.895-1.545V-3.24a7.814,7.814,0,0,1-4.676,1.613c-2.926,0-4.621-2.037-4.717-4.908h10.076C169.038-6.672,169.052-6.822,169.052-7.137Zm-5.742-4.812c2.188,0,3.555,1.545,3.76,3.732h-7.957A4.3,4.3,0,0,1,163.309-11.949ZM176.677.219c2.816,0,4.826-1.408,4.826-3.8,0-4.471-7-3.828-7-6.508,0-1.066,1.121-1.832,2.625-1.832a5.928,5.928,0,0,1,3.637,1.436v-2.037a6.1,6.1,0,0,0-3.691-1.176c-2.871,0-4.635,1.654-4.635,3.773,0,4.211,7.027,3.336,7.027,6.275,0,1.107-1,1.941-2.734,1.941a6.817,6.817,0,0,1-4.484-1.8L172.233-1.2A7.587,7.587,0,0,0,176.677.219Z",transform:"translate(-0.807 20.563)"}})])]),t._v(" "),n("h4",{staticClass:"h5 semitrans"},[t._v("これまでのプロジェクト")]),t._v(" "),n("nuxt-link",{attrs:{to:"/contact","aria-label":"Contact"}},[n("h2",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"97.198",height:"20.125",viewBox:"0 0 97.198 20.125"}},[n("path",{attrs:{id:"Path_1611","data-name":"Path 1611",d:"M11.771-19.906A9.973,9.973,0,0,0,1.449-9.529C1.449-3.568,5.7.219,11.416.219A9.5,9.5,0,0,0,17.2-1.449V-3.76A8.576,8.576,0,0,1,11.621-1.9C7.068-1.9,3.76-4.963,3.76-9.625a7.906,7.906,0,0,1,8.094-8.217,8.455,8.455,0,0,1,5.332,1.777v-2.393A9.571,9.571,0,0,0,11.771-19.906ZM27.012.219c3.938,0,6.549-3.09,6.549-6.932,0-3.76-2.516-6.973-6.426-6.973-3.937,0-6.59,3.227-6.59,7.014C20.545-2.994,23.006.219,27.012.219Zm.027-1.9c-2.748,0-4.457-2.133-4.457-4.977,0-2.98,1.9-5.154,4.512-5.154,2.639,0,4.389,2.188,4.389,5.086C31.483-3.937,29.869-1.682,27.039-1.682ZM44.111-13.7A5.361,5.361,0,0,0,39.5-11.348V-13.48H37.317V0H39.5V-7.4a4.286,4.286,0,0,1,4.047-4.5c2.516,0,2.8,2.3,2.8,3.568V0h2.16V-8.873C48.514-11.662,47.215-13.7,44.111-13.7ZM57.766-1.6c-2.037,0-2.037-1.668-2.037-2.557v-7.465h4.279v-1.846H55.715v-2.816h-.479l-1.9,2.816L51.9-12.113v.479h1.777v8.176c0,.656,0,3.678,3.035,3.678a4.455,4.455,0,0,0,3.65-1.928V-2.2A6.709,6.709,0,0,1,57.766-1.6ZM68.973-13.686a8.389,8.389,0,0,0-4.744,1.408v1.955a7.716,7.716,0,0,1,4.389-1.6c2.475,0,2.625,1.7,2.625,2.9v.41c-5.018.834-8.162,2.119-8.162,5.264C63.08-1.2,64.557.219,67.141.219a5.055,5.055,0,0,0,4.348-2.051V0h1.873V-8.818C73.362-10.295,73.362-13.686,68.973-13.686Zm-1.5,12.373a2.066,2.066,0,0,1-2.3-2.105c0-1.846,1.9-2.721,6.07-3.5v1.436A3.927,3.927,0,0,1,67.469-1.312ZM83.762.219a6.961,6.961,0,0,0,3.555-.9V-2.748a5.85,5.85,0,0,1-3.322.984,4.659,4.659,0,0,1-4.854-4.854,4.933,4.933,0,0,1,4.936-5.113,5.584,5.584,0,0,1,3.24,1.025v-2.078a6.023,6.023,0,0,0-3.254-.9,6.972,6.972,0,0,0-6.945,7.232A6.374,6.374,0,0,0,83.762.219ZM96.049-1.6c-2.037,0-2.037-1.668-2.037-2.557v-7.465h4.279v-1.846H94v-2.816H93.52l-1.9,2.816-1.436,1.354v.479h1.777v8.176c0,.656,0,3.678,3.035,3.678a4.455,4.455,0,0,0,3.65-1.928V-2.2A6.709,6.709,0,0,1,96.049-1.6Z",transform:"translate(-1.449 19.906)"}})])])]),t._v(" "),n("h4",{staticClass:"h5 semitrans"},[t._v("お問い合わせ")]),t._v(" "),n("h2",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"96.254",height:"26.086",viewBox:"0 0 96.254 26.086"}},[n("path",{attrs:{id:"Path_1612","data-name":"Path 1612",d:"M2.953.219c6.029,0,6.029-4.361,6.029-6.166v-13.74H6.836V-6.48c0,1.764,0,4.771-4.143,4.771a9.774,9.774,0,0,1-1.9-.178V0A9.052,9.052,0,0,0,2.953.219Zm16.184,0c3.938,0,6.549-3.09,6.549-6.932,0-3.76-2.516-6.973-6.426-6.973-3.937,0-6.59,3.227-6.59,7.014C12.67-2.994,15.131.219,19.137.219Zm.027-1.9c-2.748,0-4.457-2.133-4.457-4.977,0-2.98,1.9-5.154,4.512-5.154,2.639,0,4.389,2.188,4.389,5.086C23.608-3.937,21.994-1.682,19.164-1.682Zm19.15-11.785v7.4a4.286,4.286,0,0,1-4.047,4.5c-2.516,0-2.8-2.3-2.8-3.568v-8.326H29.3v8.873c0,2.789,1.3,4.826,4.4,4.826a5.361,5.361,0,0,0,4.607-2.352V.014H40.5v-13.48ZM52.256-13.7a5.269,5.269,0,0,0-4.744,2.707V-13.48H45.393V0H47.58V-6.562c0-2.967,1.887-5.113,4.43-5.113.205,0,.41.014.574.027v-2.037C52.461-13.686,52.5-13.7,52.256-13.7Zm10.606,0a5.361,5.361,0,0,0-4.607,2.352V-13.48H56.067V0h2.188V-7.4a4.286,4.286,0,0,1,4.047-4.5c2.516,0,2.8,2.3,2.8,3.568V0h2.16V-8.873C67.264-11.662,65.965-13.7,62.862-13.7Zm19.9,6.563c0-3.937-2.229-6.562-5.756-6.562-3.773,0-6.3,3.049-6.3,7,0,3.5,1.982,6.918,6.467,6.918a7.981,7.981,0,0,0,4.895-1.545V-3.24a7.814,7.814,0,0,1-4.676,1.613c-2.926,0-4.621-2.037-4.717-4.908H82.75C82.75-6.672,82.764-6.822,82.764-7.137Zm-5.742-4.812c2.188,0,3.555,1.545,3.76,3.732H72.825A4.3,4.3,0,0,1,77.022-11.949Zm17.66-1.518-3.91,9.98-3.924-9.98H84.415L89.637-.984,86.684,6.4h2.324l8.039-19.865Z",transform:"translate(-0.793 19.688)"}})])]),t._v(" "),n("h4",{staticClass:"h5 semitrans"},[t._v("軌跡")])],1),t._v(" "),n("div",{staticClass:"container"},[n("h5",{staticClass:"semitrans"},[t._v("こちらも是非覗いてみてください！")]),t._v(" "),n("h3",{staticClass:"h1"},[n("a",{attrs:{href:"https://instagram.com/takumiisobe_/"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"101.997",height:"22.547",viewBox:"0 0 101.997 22.547"}},[n("path",{attrs:{id:"Path_1609","data-name":"Path 1609",d:"M2.215,0h1.84V-16.875H2.215ZM14.4-11.742A4.6,4.6,0,0,0,10.45-9.727v-1.828H8.575V0H10.45V-6.34A3.674,3.674,0,0,1,13.919-10.2c2.156,0,2.4,1.969,2.4,3.059V0h1.852V-7.605C18.173-10,17.059-11.742,14.4-11.742ZM25.388.188c2.414,0,4.137-1.207,4.137-3.258,0-3.832-6-3.281-6-5.578,0-.914.961-1.57,2.25-1.57a5.081,5.081,0,0,1,3.117,1.23v-1.746a5.23,5.23,0,0,0-3.164-1.008c-2.461,0-3.973,1.418-3.973,3.234,0,3.609,6.023,2.859,6.023,5.379,0,.949-.855,1.664-2.344,1.664a5.843,5.843,0,0,1-3.844-1.547l-.012,1.98A6.5,6.5,0,0,0,25.388.188ZM36.81-1.371c-1.746,0-1.746-1.43-1.746-2.191v-6.4h3.668v-1.582h-3.68v-2.414h-.41l-1.629,2.414-1.23,1.16v.41h1.523v7.008c0,.563,0,3.152,2.6,3.152a3.819,3.819,0,0,0,3.129-1.652v-.422A5.751,5.751,0,0,1,36.81-1.371ZM46.417-11.73a7.19,7.19,0,0,0-4.066,1.207v1.676a6.614,6.614,0,0,1,3.762-1.371c2.121,0,2.25,1.453,2.25,2.484v.352c-4.3.715-7,1.816-7,4.512,0,1.84,1.266,3.059,3.48,3.059A4.333,4.333,0,0,0,48.573-1.57V0h1.605V-7.559C50.178-8.824,50.178-11.73,46.417-11.73ZM45.127-1.125a1.771,1.771,0,0,1-1.969-1.8c0-1.582,1.629-2.332,5.2-3V-4.7A3.366,3.366,0,0,1,45.127-1.125ZM58.8-1.863c-1.055-.059-2.848-.094-2.848-.973,0-.387.34-.8,1.184-1.043a5.018,5.018,0,0,0,1.277.164,4.024,4.024,0,0,0,4.277-4.043,3.93,3.93,0,0,0-4.2-3.973,4.089,4.089,0,0,0-4.336,4.066,3.771,3.771,0,0,0,1.91,3.352c-1.125.316-1.758.973-1.758,1.828,0,1.887,3.082,1.945,4.441,2.074,1.512.141,3.082.574,3.082,2.145S60.241,4.043,58.32,4.043c-1.77,0-3.4-.621-3.4-1.934A1.737,1.737,0,0,1,56.28.539V.117C54.593.34,53.269,1.2,53.269,2.625c0,1.84,2.191,3.047,5.027,3.047,3.129,0,5.344-1.465,5.344-4C63.64-.633,61.8-1.687,58.8-1.863Zm-.3-8.379a2.438,2.438,0,0,1,2.543,2.5A2.531,2.531,0,0,1,58.413-5.2a2.462,2.462,0,0,1-2.578-2.473A2.573,2.573,0,0,1,58.5-10.242Zm13.79-1.5a4.516,4.516,0,0,0-4.066,2.32v-2.133H66.4V0h1.875V-5.625c0-2.543,1.617-4.383,3.8-4.383.176,0,.352.012.492.023V-11.73C72.461-11.73,72.5-11.742,72.285-11.742Zm7.087.012a7.19,7.19,0,0,0-4.066,1.207v1.676a6.614,6.614,0,0,1,3.762-1.371c2.121,0,2.25,1.453,2.25,2.484v.352c-4.3.715-7,1.816-7,4.512,0,1.84,1.266,3.059,3.48,3.059A4.333,4.333,0,0,0,81.528-1.57V0h1.605V-7.559C83.133-8.824,83.133-11.73,79.372-11.73ZM78.082-1.125a1.771,1.771,0,0,1-1.969-1.8c0-1.582,1.629-2.332,5.2-3V-4.7A3.366,3.366,0,0,1,78.082-1.125Zm22.356-10.617a4.35,4.35,0,0,0-4.066,2.32c-.34-1.371-1.512-2.32-3.539-2.32a4.29,4.29,0,0,0-3.984,2.18v-1.992H87.032V0h1.875V-6.187c0-2.2,1.266-3.973,3.3-3.973,2.461,0,2.461,2.578,2.461,3.2V0H96.56V-6.176c0-2.062,1.207-3.984,3.328-3.984,2.215,0,2.449,2.051,2.449,3.164V0h1.875V-7.512C104.212-9.117,103.755-11.742,100.439-11.742Z",transform:"translate(-2.215 16.875)"}})])])])]),t._v(" "),n("div",{staticClass:"box"},[n("h6",{staticClass:"h5"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"64.541",height:"13.59",viewBox:"0 0 64.541 13.59"}},[n("path",{attrs:{id:"Path_1609","data-name":"Path 1609",d:"M5.817-9.953A4.926,4.926,0,0,0,.759-4.8,4.708,4.708,0,0,0,5.708.109,4.816,4.816,0,0,0,8.572-.738v-.772a4.512,4.512,0,0,1-2.81.916A4.053,4.053,0,0,1,1.518-4.833,4.243,4.243,0,0,1,5.831-9.27a4.56,4.56,0,0,1,2.734.889v-.793A4.81,4.81,0,0,0,5.817-9.953ZM13.6.109a3.222,3.222,0,0,0,3.22-3.438,3.212,3.212,0,0,0-3.158-3.452A3.308,3.308,0,0,0,10.4-3.295,3.208,3.208,0,0,0,13.6.109Zm.007-.636a2.551,2.551,0,0,1-2.536-2.769,2.644,2.644,0,0,1,2.584-2.851,2.56,2.56,0,0,1,2.481,2.816A2.563,2.563,0,0,1,13.608-.526Zm8.3-6.248A2.744,2.744,0,0,0,19.5-5.462v-1.21h-.7V3.2h.711V-.7a3.075,3.075,0,0,0,2.119.807c1.757,0,3.042-1.354,3.042-3.555C24.667-5.564,23.471-6.774,21.905-6.774ZM21.564-.52a2.538,2.538,0,0,1-2.037-1.025V-3.63a2.451,2.451,0,0,1,2.3-2.557c1.278,0,2.112,1.114,2.112,2.741C23.936-1.7,22.979-.52,21.564-.52Zm9.1-6.152L28.541-1.285,26.436-6.672h-.807L28.165-.451,26.709,3.2h.772l3.965-9.871Zm5.515-.109a2.706,2.706,0,0,0-2.406,1.436V-6.672h-.7V0H33.8V-3.438A2.526,2.526,0,0,1,36.12-6.1a2.727,2.727,0,0,1,.328.021v-.684C36.346-6.774,36.3-6.781,36.182-6.781ZM38.743-8.36a.521.521,0,0,0,.506-.52.511.511,0,0,0-.506-.513.506.506,0,0,0-.506.513A.517.517,0,0,0,38.743-8.36ZM38.374,0H39.1V-6.672h-.725Zm5.692-.923C43.424-.978,42.3-1,42.3-1.593c0-.308.3-.588.834-.745a2.652,2.652,0,0,0,.745.1A2.249,2.249,0,0,0,46.24-4.512a2.21,2.21,0,0,0-2.3-2.27,2.311,2.311,0,0,0-2.406,2.3,2.156,2.156,0,0,0,1.183,1.969c-.649.178-1.053.547-1.053,1.046,0,.964,1.5,1.019,2.406,1.121,1.142.13,2.051.444,2.051,1.436,0,1.073-1.08,1.579-2.29,1.579-1.094,0-2.146-.417-2.146-1.258,0-.5.376-.834.9-1.032V.178c-.868.185-1.545.649-1.545,1.422,0,1.066,1.271,1.709,2.782,1.709,1.668,0,3-.779,3-2.235C46.822-.232,45.755-.779,44.067-.923Zm-1.88-3.548a1.717,1.717,0,0,1,1.75-1.723A1.63,1.63,0,0,1,45.6-4.512a1.661,1.661,0,0,1-1.716,1.688A1.638,1.638,0,0,1,42.187-4.471Zm9.35-2.311A2.669,2.669,0,0,0,49.2-5.592v-4.689h-.725V0H49.2V-3.739a2.369,2.369,0,0,1,2.242-2.434c1.217,0,1.565,1.019,1.565,1.941V0h.718V-4.4C53.724-5.824,53.061-6.781,51.536-6.781ZM58-.506c-.991,0-.991-.827-.991-1.162V-6.05h2.146v-.615H57V-8.019h-.2l-.588,1.347-.725.424v.2h.827v4.594c0,.8.3,1.565,1.347,1.565a2.179,2.179,0,0,0,1.641-.759v-.2A3.046,3.046,0,0,1,58-.506Zm5.029.615c1.326,0,2.27-.711,2.27-1.839,0-2.2-3.616-1.784-3.616-3.336,0-.677.69-1.114,1.518-1.114a2.664,2.664,0,0,1,1.757.718v-.7a2.791,2.791,0,0,0-1.784-.615C61.91-6.781,61-6.05,61-5c0,2.092,3.623,1.593,3.623,3.261,0,.684-.608,1.2-1.579,1.2a3.161,3.161,0,0,1-2.222-.957L60.816-.7A3.412,3.412,0,0,0,63.031.109Z",transform:"translate(-0.759 10.281)"}})])]),t._v(" "),n("h5",{staticClass:"h4"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"155.698",height:"13.368",viewBox:"0 0 155.698 13.368"}},[n("path",{attrs:{id:"Path_1610","data-name":"Path 1610",d:"M4.307-1.028C3-1.028,3-2.1,3-2.672v-4.8H5.748V-8.657H2.988v-1.811H2.681L1.459-8.657l-.923.87v.308H1.679v5.256c0,.422,0,2.364,1.951,2.364A2.864,2.864,0,0,0,5.977-1.1v-.316A4.313,4.313,0,0,1,4.307-1.028Zm7.2-7.77a5.393,5.393,0,0,0-3.05.905v1.257a4.96,4.96,0,0,1,2.821-1.028c1.591,0,1.688,1.09,1.688,1.863v.264C9.745-5,7.723-4.175,7.723-2.153c0,1.38.949,2.294,2.61,2.294a3.25,3.25,0,0,0,2.795-1.318V0h1.2V-5.669C14.333-6.618,14.333-8.8,11.511-8.8ZM10.544-.844A1.328,1.328,0,0,1,9.068-2.2c0-1.187,1.222-1.749,3.9-2.25v.923A2.525,2.525,0,0,1,10.544-.844ZM24.807,0l-4.43-4.614,3.806-4.043H22.469L18.751-4.729v-8.49H17.345V0h1.406V-4.482L23.014,0Zm7.477-8.657V-3.9a2.755,2.755,0,0,1-2.6,2.892c-1.617,0-1.8-1.477-1.8-2.294V-8.657H26.492v5.7c0,1.793.835,3.1,2.83,3.1a3.446,3.446,0,0,0,2.962-1.512V.009H33.69V-8.657Zm14.6-.149a3.263,3.263,0,0,0-3.05,1.74,2.43,2.43,0,0,0-2.654-1.74A3.218,3.218,0,0,0,38.2-7.172V-8.666H36.834V0H38.24V-4.641c0-1.652.949-2.979,2.479-2.979,1.846,0,1.846,1.934,1.846,2.4V0h1.415V-4.632c0-1.547.905-2.988,2.5-2.988,1.661,0,1.837,1.538,1.837,2.373V0h1.406V-5.634C49.719-6.838,49.376-8.807,46.889-8.807Zm6.721-1.811a.947.947,0,0,0,.932-.949.934.934,0,0,0-.932-.94.932.932,0,0,0-.923.94A.94.94,0,0,0,53.61-10.617ZM52.9,0h1.415V-8.657H52.9Zm5.579-10.617a.947.947,0,0,0,.932-.949.934.934,0,0,0-.932-.94.932.932,0,0,0-.923.94A.94.94,0,0,0,58.476-10.617ZM57.765,0H59.18V-8.657H57.765Zm7.011.141c1.811,0,3.1-.905,3.1-2.443,0-2.874-4.5-2.461-4.5-4.184,0-.686.721-1.178,1.688-1.178a3.811,3.811,0,0,1,2.338.923v-1.31a3.923,3.923,0,0,0-2.373-.756c-1.846,0-2.979,1.063-2.979,2.426,0,2.707,4.518,2.145,4.518,4.034,0,.712-.642,1.248-1.758,1.248a4.382,4.382,0,0,1-2.883-1.16L61.919-.773A4.877,4.877,0,0,0,64.776.141Zm8.971,0a4.205,4.205,0,0,0,4.21-4.456A4.206,4.206,0,0,0,73.826-8.8,4.291,4.291,0,0,0,69.59-4.289,4.174,4.174,0,0,0,73.747.141Zm.018-1.222A2.9,2.9,0,0,1,70.9-4.28a3.027,3.027,0,0,1,2.9-3.313c1.7,0,2.821,1.406,2.821,3.27C76.621-2.531,75.584-1.081,73.764-1.081Zm10.9-7.726a3.52,3.52,0,0,0-2.892,1.45v-5.862h-1.4V-.738a6.753,6.753,0,0,0,3.41.879c2.83,0,4.553-1.564,4.553-4.535C88.334-7.26,86.726-8.807,84.66-8.807ZM83.826-1a3.48,3.48,0,0,1-2.057-.6V-4.667a2.818,2.818,0,0,1,2.689-2.988c1.459,0,2.461,1.3,2.461,3.27S85.917-1,83.826-1ZM97.6-4.588c0-2.531-1.433-4.219-3.7-4.219-2.426,0-4.052,1.96-4.052,4.5,0,2.25,1.274,4.447,4.157,4.447a5.131,5.131,0,0,0,3.146-.993v-1.23A5.023,5.023,0,0,1,94.15-1.046,2.949,2.949,0,0,1,91.118-4.2H97.6C97.6-4.289,97.6-4.386,97.6-4.588ZM93.913-7.682a2.394,2.394,0,0,1,2.417,2.4H91.215A2.765,2.765,0,0,1,93.913-7.682Zm9.47,3.19h4.939V-5.528h-4.939ZM114.03,0h7.945V-1.292h-5.44v-.026l2.61-2.988c.791-.905,2.417-2.593,2.417-4.948a3.334,3.334,0,0,0-3.674-3.542,5.158,5.158,0,0,0-3.375,1.222v1.424a4.718,4.718,0,0,1,3.173-1.406,2.224,2.224,0,0,1,2.435,2.391c0,2-1.67,3.876-2.531,4.834L114.03-.369Zm14.508.141c2.769,0,4.315-2.215,4.315-6.486,0-4.254-1.538-6.451-4.219-6.451-2.663,0-4.386,2.162-4.386,6.583C124.249-2.092,125.752.141,128.538.141Zm-.018-1.169c-2,0-2.9-1.934-2.9-5.221,0-3.656,1.107-5.379,2.979-5.379,1.925,0,2.874,1.819,2.874,5.256C131.474-2.883,130.489-1.028,128.521-1.028ZM134.715,0h7.945V-1.292h-5.44v-.026l2.61-2.988c.791-.905,2.417-2.593,2.417-4.948a3.334,3.334,0,0,0-3.674-3.542,5.158,5.158,0,0,0-3.375,1.222v1.424a4.718,4.718,0,0,1,3.173-1.406,2.224,2.224,0,0,1,2.435,2.391c0,2-1.67,3.876-2.531,4.834l-3.56,3.964Zm9.771,0h7.945V-1.292h-5.44v-.026l2.61-2.988c.791-.905,2.417-2.593,2.417-4.948a3.334,3.334,0,0,0-3.674-3.542,5.158,5.158,0,0,0-3.375,1.222v1.424a4.718,4.718,0,0,1,3.173-1.406,2.224,2.224,0,0,1,2.435,2.391c0,2-1.67,3.876-2.531,4.834l-3.56,3.964Zm10.755.141a1,1,0,0,0,.993-.984,1,1,0,0,0-.993-.993.99.99,0,0,0-.984.993A.988.988,0,0,0,155.241.141Z",transform:"translate(-0.536 13.219)"}})])])])])}),[],!1,null,null,null);e.default=component.exports}},[[203,11,1,12]]]);