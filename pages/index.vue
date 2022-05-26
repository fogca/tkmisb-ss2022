<template>
  <main class="index-main">
    <div class="bg"></div>
    <div class="circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
    </div>
    
    <section id="index-top">
      <!--
      <div class="box">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>-->
      <div class="wrapper">
        <div class="h4 orange">关于我 - 磯部拓</div>
        <h1 class="h0" lang="en" id="top-Line">
          <span>H</span><span>i</span><span>,</span><span> </span>
          <span>I</span><span>'</span><span>m</span><span> </span>
          <span>T</span><span>a</span><span>k</span><span>u</span><span>m</span><span>i</span><span> </span>
          <span>I</span><span>s</span><span>o</span><span>b</span><span>e</span><span>,</span>
          <br><span> </span><span>a</span><span>n</span>
          <span> </span><span>a</span><span>r</span><span>t</span>
          <span> </span><span>d</span><span>i</span><span>r</span><span>e</span><span>c</span><span>t</span><span>o</span><span>r</span>
          <!--Hi, I’m Takumi Isobe, <br>an art director-->
          </h1>
        <h2 class="h5">常に変化を求め、古く、新しく、時には可笑しく。<br>有為転変の世に最大限適応していくブランド構築を<br>行っていきます。</h2>
        <nuxt-link to="/about" class="h3" lang="en">About me</nuxt-link>
      </div>
    </section>

    <section id="index-service">
      <div class="section-header">
        <small class="h5">服务</small>
        <h1 lang="en" class="heading">Services</h1>
      </div>
      <div class="wrapper">
        <div class="container">
          <div class="orange">品牌<br>識別</div>
          <h2 class="h1" lang="en">01. Brand Identity</h2>
          <p>多種多様なブランドのパートナーとして、適切なマーケットアプローチを通し、アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。</p>
        </div>
        <div class="container">
          <div class="orange">平面<br>設計</div>
          <h2 class="h1" lang="en">02. Graphic / UI Design</h2>
          <p>多種多様なブランドのパートナーとして、適切なマーケットアプローチを通し、アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。</p>
        </div>
        <div class="container">
          <div class="orange">网络<br>开发</div>
          <h2 class="h1" lang="en">03. Web Development</h2>
          <p>多種多様なブランドのパートナーとして、適切なマーケットアプローチを通し、アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。</p>
        </div>
        <div class="container">
          <div class="orange">摄影<br>导演</div>
          <h2 class="h1" lang="en">04. Photography</h2>
          <p>多種多様なブランドのパートナーとして、適切なマーケットアプローチを通し、アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。</p>
        </div>

      </div>
    </section>

    <section id="index-projects">
      <div class="section-header">
        <small class="h5">选定项目</small>
        <h1 lang="en" class="heading">Selected projects</h1>
      </div>

      <div class="wrapper">
        <nuxt-link v-for="content in contents" :key="content.id" :to="`/archives/${content.id}`" class="container" :aria-label="content.title">
          
          <div class="box">
            <img v-if="content.thumbnail" :src="content.thumbnail.url" :alt="content.title" class="thumbnail">
            <img v-else src="~@/assets/image/media.webp" alt="" class="thumbnail">
          </div>

          <div class="box">
            <h2 lang="en" class="h5">{{ content.direction }}</h2>
            <h1 lang="en" class="h2">{{ content.title }}</h1>
            <h3 lang="en" class="h6 semitrans">{{ content.work }}</h3>
          </div>
        </nuxt-link>
      </div>
    </section>

    <section id="index-about"></section>
    <section id="index-inhouse"></section>
    <section id="index-contact"></section>
    <section id="index-instagram"></section>
  
  </main>

</template>

<script>
export default {
    head: {
      titleTemplate: null,
      title: 'Takumi Isobe - Creative Space',
      bodyAttrs: {
        id: 'Index'
      },
      script: [
        { src: "/js/animation.js", body: true },
      ]
    },

    methods: {
      Animation() {
        gsap.set(".reveal", { autoAlpha: 0 });
        gsap.from(".reveal", 1, {
          xPercent: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: ".reveal",
          },
        });
        gsap.from(".reveal img", 1, {
          xPercent: 0,
          scale: 1.25,
          delay: -3.5,
          scrollTrigger: {
            trigger: ".reveal",
          },
        });
      },
    },
    
    mounted () {
      this.$adobeFonts(document)

      try{
        FONTPLUS.start();
      } catch(e){
        console.log("[error]load FONTPLUS.")
      }

      gsap.registerPlugin(ScrollTrigger);
      this.Animation();

      //Store the certain local position and bring it back here when the page back
      (() => {
      let entries = performance.getEntriesByType("navigation");
      entries.forEach((entry) => {
        if (entry.type == "back_forward" && sessionStorage.getItem("scrollY") != null) {
          window.scrollTo(0, sessionStorage.getItem("scrollY"));
        }
      });
      })();
      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("scrollY", window.scrollY);
      });
      
    },
    
    async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'archives',
      queries: { limit: 10 },
    });
    return data;
  }
}

</script>

<style>

#Index main {position: relative;z-index: 2;}
#Index section {padding: 0 8.25%;}

#index-top {
  height: 100vh;
  position: relative;
  mix-blend-mode: normal;
  z-index: -1;
}

#index-top .wrapper {
  position: absolute;
  top: auto;
  bottom: 0;
  padding-bottom: 5rem;
}

.circles {
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  z-index: -1;
  mix-blend-mode: normal;
}

.circles div {
  width: 42.5vw;
  height: 42.5vw;
  border-radius: 50%;
  background: white;
  position: relative;
  mix-blend-mode: normal;
  will-change: animation;
}

.circles .circle-1 {
  margin-right: -5rem;
  z-index: 3;
  background: #13131B;
  border: solid 1px white;
}
.circles .circle-2 {margin-left: -5rem;z-index: 2s;}

#index-top .wrapper h1 {
  line-height: 1.2;
  margin: 1rem 0;
}
#index-top .wrapper h2 {margin-bottom: 1.5rem;}


#index-top #top-Line span {display: inline-block;}

#Index section#index-service {padding-top: 12.5rem;margin-top: -6.25rem;}
#index-service .wrapper {margin-top: 5rem;}
#index-service .container {margin-bottom: 6rem;}
#index-service .container:nth-of-type(4) {margin-bottom: 0;}
#index-service .container .orange {font-size: 3.6rem;line-height: 1.2;}
#index-service .container h2 {margin: 1.75rem 0 .5rem;}


#Index section#index-projects {padding-top: 12.5rem;}
#index-projects .wrapper {margin-top: 3rem;}
#index-projects .reveal {
  width: 100%;
  height: 60vw;
  mix-blend-mode: normal;
}
#index-projects .container {margin-bottom: 6rem;}
#index-projects .container h1 {margin: 0.6rem 0 0.6rem;}
#index-projects .container h2 {margin-top: 1.5rem;}
#index-projects .container img {
  width: 100%;
  height: 100%;
  mix-blend-mode: normal;
  transition: .3s ease-in-out;
}

#index-projects .container:nth-of-type(1) {pointer-events: none;}


@media screen and (min-width: 720px) {

  #Index section {
    padding-left: 21.5%;
    padding-right: 10%;
  }

  .circles {top: 50%;}
  .circles div {width: 30vw;height: 30vw;}
  
  .bg {
    background-image: url("assets/image/bg@.jpg");
  }

  #index-top {padding-top: 28.25rem;}
  #index-top .wrapper {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  #index-top .wrapper p {width: 47.5%;}
  #index-top .wrapper p:nth-of-type(1) {font-size: 1.48rem;line-height: 2;}
  #index-top .wrapper p:nth-of-type(2) {font-size: 1.8rem;line-height: 1.6;}
  #index-top h3 {margin-top: 1rem;line-height:2;}


  #index-projects {margin-top: 12.5rem;}
  #index-projects .wrapper {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
  #index-projects .wrapper a {
    width: 49.5%;
    position: relative;
    }
  #index-projects .wrapper img {
    aspect-ratio: 3/2;
    height: 100%;}
  #index-projects .box {
    padding-left: 3rem;
    padding-bottom: 2.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: .5s .15s ease-in-out;}
#index-projects .container:hover {opacity: 1;}

}







</style>
