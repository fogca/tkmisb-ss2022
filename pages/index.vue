<template>
  <main id="luxy" ref="scrollWrap"> 
    
    <div class="section-wrapper luxy-el" ref="scrollContainer">
    <section id="index-top">
      <div class="section-header">
        <small class="h6">業務内容</small>
        <h1 lang="en" class="heading luxy-el">art direction</h1>
        <h2 lang="en" class="h4">Design / Web development / Photography</h2>
      </div>
      <div class="wrapper">
        <p class="h5">多種多様なブランドのパートナーとして、適切なマーケットアプローチを通し、アート・テクニカルディレクションを実施し、ブランドの価値を最大限に高めます。ブランドの伝わる化を一つの課題とし、ビジュアル・テクノロジーを通し、魅せるだけで終わらない、受け手に伝わるブランドの構築を行なっていきます。ビジュアル領域における制作のご相談は、お気軽にお問い合わせください。</p>
        <p lang="en" class="h5">As a partner of a wide variety of brands, we will carry out art and technical direction through an appropriate market approach to maximise the core value of the brand. Through visual technology, I will build a brand that can be conveyed to the recipients, not just fascinating. Feel free to contact us for visual development.</p>
      </div>
      <div class="wrapper">
        <h3 class="h5">
          <div>- ブランドデザインの構築<br>- ブランドコンテンツの企画・制作<br>- UI / グラフィックデザインの開発<br></div>
          <div>- モダンフロント開発<br>- デジタル施策の企画<br>- メインビジュアルの撮影</div>
        </h3>
        <div id="cookie" class="cookie-consent">
          <div class="cookie-text h7"><span lang="en" class="h5">This website uses Cookie</span><br>当サイトではCookieを使用します。Cookieの使用に関する詳細は「<a href="#privacy-policy">プライバシーポリシー</a>」をご覧ください。</div>
          <div>
            <button lang="en" class="cookie-agree">Accepet</button>
            <button lang="en" class="cookie-decline">Decline</button>
          </div>
          
        </div>
      </div>
      
    </section>

    <section id="index-projects">
      <div class="section-header">
        <small class="h6">これまでのプロジェクト</small>
        <h1 lang="en" class="heading">projects</h1>
      </div>

      <div class="wrapper">
        <nuxt-link v-for="content in contents" :key="content.id" :to="`/archives/${content.id}`" class="container" :aria-label="content.title">
          
          <div class="reveal">
            <img v-if="content.thumbnail" :src="content.thumbnail.url" :alt="content.title" class="thumbnail">
            <img v-else src="~@/assets/image/media.webp" alt="" class="thumbnail">
          </div>

          <div class="box">
            <h2 lang="en" class="h4">{{ content.title }}</h2>
            <h3 lang="en" class="h4">{{ content.description }}</h3>
            <h4 lang="en" class="h6 semitrans">{{ content.work }}</h4>
          </div>
        </nuxt-link>
      </div>
    </section>

    <section id="index-about"></section>
    <section id="index-inhouse"></section>
    <section id="index-contact"></section>
    <section id="index-instagram"></section>
    </div>
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
  #Index section {
    padding-left: 21.5%;
    padding-right: 10%;
  }
  #Index #luxy {z-index: 3;}
  #Index .section-wrapper {position: relative;z-index: 2;}
  .bg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;left: 0;
    z-index: 1;
    background-attachment: fixed;
    background-image: url("assets/image/bg@.jpg");
    background-position: top left;
    background-size: 100%;
    background-repeat: no-repeat;
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

  
  #index-top .cookie-consent {
    width: calc(68.5% * .475);
    padding: 4.5rem 8rem 4.5rem 5rem;
    background: white;
    transition: 1s ease-in-out;
    position: fixed;
    left: auto;
    right: 0;
    margin-right: 10%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #index-top .cookie-text {width: 65%;}
  #index-top .cookie-consent * {color: black;}
  #index-top .cookie-agree {font-size: 1.8rem;}
  #index-top .cookie-decline {font-size: 1.4rem;opacity: .5;margin-top: .5rem;}
  #index-top #cookie.scrolled {opacity: 0;pointer-events: none;}
  #index-top #cookie button {border: none;background: transparent;display: block;}



  #index-projects {margin-top: 12.5rem;}
  #index-projects .wrapper {
    margin-top: 5rem;
    display: grid;
    grid-template-rows: 40vh 40vh 40vh;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
  #index-projects .wrapper a {
    position: relative;
    height: 40vh;}
  #index-projects .wrapper img {height: 100%;}
  #index-projects .box {
    padding-left: 3rem;
    padding-bottom: 2.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0;
    transition: .5s .15s ease-in-out;}
#index-projects .container:hover {opacity: 1;}
#index-projects .container:hover .box {
  opacity: 1;
  transition: .5s ease-in-out;}
#index-projects .container:hover img {
  filter: brightness(.75) contrast(1.15);
  transform: translateY(-50%) scale(1.025);
}
  #index-projects a:nth-of-type(2), #i2 a:nth-of-type(4) {pointer-events: none;}
  #index-projects .container:nth-of-type(1) {grid-row: 1;grid-column: 1/ 3;}
  #index-projects .container:nth-of-type(4) {grid-row: 2;grid-column: 2/ 4;}


  #index-projects .container:nth-of-type(1) h2 {margin-top: 1.5rem;}
  #index-projects .container:nth-of-type(1) h3 {
    display: block;
    font-size: 1.4rem;
    margin: 0.3rem 0 0.4rem;
  }

   
    


    @media screen and (max-width: 480px) {


      #Index section {padding: 0 10%;}

      #index-top .wrapper {flex-direction: column;}
      #index-top .wrapper p {width: 100%;}
      #index-top .wrapper p:nth-of-type(1) {font-size: 1.3rem;}
      #index-top .wrapper p:nth-of-type(2) {font-size: 1.4rem;}
      #index-top #cookie {display: none;}

      .bg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;left: 0;
    z-index: 1;
    background-attachment: fixed;
    background-image: url("assets/image/bg_sp.jpg");
    background-position: top left;
    background-size: 100%;
    background-repeat: no-repeat;
  }
        header {
            position: fixed;
            padding: 5rem 7vw 0;}
        header .Logo {font-size: 1.8rem;}
    }


#index-projects .top {display: none;}
#index-projects h1 {margin-bottom: calc(var(--pX) * 1.5);}
#index-projects img {width: calc(100%);}

#index-projects .container h2 {margin-top: 0.5rem;}
#index-projects .container h3 {margin: calc(var(--pX) * 1) 0 calc(var(--pX) * .75);}
#index-projects .container h3 {display: none;}
#index-projects .container h4 {font-size: 1.05rem;}
#index-projects .container {
  display: grid;
  margin-top: 0;
  overflow: hidden;}
#index-projects .container .thumbnail, #i2 .container .box {grid-area: 1/-1;}
#index-projects .container img {transition: .5s ease-in-out;}
#index-projects .container .box h2, #i2 .container .box * {color: var(--backgroundColor);}
#index-projects .container .box h2, #i2 .container .box h3 {opacity: 1;}
#index-projects .container .box h3 {display: block;}

#index-projects .container img {transition: 1s;}



#i3 {
  display: none;
  width: 100%;
  padding-bottom: 7.5rem;
}

#i3 h2 {margin: 1.5rem 0 4.5rem;}
#i3 .media {
  width: 100vw;
  height: 132.5vw;
  margin-left: -7.25vw;
  margin-bottom: 7.5rem;
  background-image: url("~assets/image/media.webp");
  background-position: center;
  background-size: 100%;
}


@media screen and (max-width: 480px) {

  #i2 .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5rem;
  }
  #i2 .container:nth-of-type(1) h3 {display: none;}
  #i2 .wrapper a:nth-of-type(3),#i2 .wrapper a:nth-of-type(4),
  #i2 .wrapper a:nth-of-type(6),#i2 .wrapper a:nth-of-type(7) {width: 49%;}
  #i2 .wrapper a:nth-of-type(3) img,#i2 .wrapper a:nth-of-type(4) img,
  #i2 .wrapper a:nth-of-type(6) img,#i2 .wrapper a:nth-of-type(7) img {aspect-ratio: 3/4;}
}


@media screen and (min-width: 720px) {

  #i1 {
    height: auto;
    min-height: auto;
    display: block;
    padding-top: 15rem;
    margin-bottom: 15rem;
  }
  #i1 .top {display: none;}
  #i1 .top h4 {
    margin-left: 1.75%;
    margin-top: -.75%;
  }

  #i1 h1.heading {
    font-size: 3.6rem;
    line-height: 1.8;}

  #i1 .wrapper {display: flex;}
  #i1 .wrapper div:nth-of-type(1).box {
    width: auto;
    margin-left: 5rem;
  }
  #i1 .wrapper div:nth-of-type(1).box p {    
    font-size: 1.6rem;
    width: 100%;
    margin-top: 0;}
  #i1 .wrapper div:nth-of-type(1).box h4, #i1 .wrapper div:nth-of-type(1).box h3 {margin-top: 0;}

  #i1 .wrapper div:nth-of-type(1).box h3 {
    font-size: 1.65rem;
    line-height: 2;
    width: 50%;}
  
  #i1 p {width: 45%;margin-bottom: 2.5rem;}
  #i1 .box h2.h3 {font-size: 2rem;}
  #i1 .box span.h4 {font-size: 1.6rem;}
  #i1 .box a h2.bilingual::before {margin-bottom: 0;}


  #i2 .top {display: none;}
  #i2 .wrapper {
    display: flex;
    align-items: top;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 7.5rem;
  }

  #i2 .wrapper a {
    width: 49.5%;
    margin-bottom: 2.5rem;}
  #i2 .wrapper a img {
    width: 100%;
    height: calc((30vw  - 16.3px)/5*6);}
  #i2 .wrapper a h2 {font-size: 2.4rem;}
  #i2 .wrapper a h3 {font-size: 1.6rem;}
  #i2 .wrapper a h4 {font-size: 1.2rem;}

  #i2 .container {
    display: grid;
    margin-top: 0;
    overflow: hidden;}

  #i2 .container .thumbnail, #i2 .container .box {grid-area: 1/-1;}
  #i2 .container img {transition: .5s ease-in-out;}
  #i2 .container .box h2, #i2 .container .box * {color: var(--backgroundColor);}
  #i2 .container .box h2, #i2 .container .box h3 {opacity: 1;}
  #i2 .container .box h3 {display: block;}
  #i2 .container .box {
    padding-left: 3rem;
    padding-bottom: 2.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    opacity: 0;
    transition: .5s .15s ease-in-out;}
  #i2 .container:hover {opacity: 1;}
  #i2 .container:hover .box {
    opacity: 1;
    transition: .5s ease-in-out;}
  #i2 .container:hover img {
    filter: brightness(.75) contrast(1.15);
    transform: scale(1.025);
  }
  #i2 .container img {transition: 1s;}


  #i2 .wrapper a:nth-of-type(1) {
    width: 100%;
    margin-bottom: 2.5rem;}
  #i2 .wrapper a:nth-of-type(1) h2{font-size: 2.8rem;}
  #i2 .wrapper a:nth-of-type(1) h3{font-size: 2rem;}
  #i2 .wrapper a:nth-of-type(1) h4{font-size: 1.4rem;}
  #i2 .wrapper a:nth-of-type(1) img {
    width: 100%;
    aspect-ratio: 2/1;
    height: 45vw;
    margin-left: 0;}


#i2 .wrapper a:nth-of-type(2), #i2 .wrapper a:nth-of-type(3),#i2 .wrapper a:nth-of-type(4), 
#i2 .wrapper a:nth-of-type(6), #i2 .wrapper a:nth-of-type(7) {width: calc(30vw  - 16.3px);}

#i2 .wrapper a:nth-of-type(1), #i2 .wrapper a:nth-of-type(5), #i2 .wrapper a:nth-of-type(8) {
  width: calc(60vw - 8px);
}









/*
  #i2 .wrapper a:nth-of-type(2) {
    width: 100%;
    display: flex;}
  #i2 .wrapper a:nth-of-type(2) img {width: 60%;} 
  #i2 .wrapper a:nth-of-type(2) .box {
    display: block;
    margin-left: 5rem;
    transition: .5s ease-out;}
  #i2 .wrapper a:nth-of-type(2):hover .box {transform: translateX(-.5rem);}
  #i2 .wrapper a:nth-of-type(2) * {
    opacity: 1;
    color: var(--textColor);}
  #i2 .wrapper a:nth-of-type(2) h2 {font-size: 3.2rem;}
  #i2 .wrapper a:nth-of-type(2) h3 {font-size: 2rem;}
  #i2 .wrapper a:nth-of-type(2) h4 {font-size: 1.4rem;}

*/


}


@media only screen and (min-width: 481px) and (max-width: 1024px) {
  #i1 .wrapper {flex-direction: column;}
  #i1 .wrapper h1 {font-size: 4rem;}
  #i1 .wrapper div:nth-of-type(1).box {
    margin-left: 0;
    margin-top: 3rem;
  }
}


</style>
