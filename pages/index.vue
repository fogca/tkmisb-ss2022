<template>
  <main class="index-main">
    
    <section id="index-top">
      <div class="wrapper">
        <h1 class="h2" lang="en" id="top-Line">
          <span>As a companion partner of the </span><br>
          <span>brand that continues to challenge, </span><br>
          <span>we will support from the visual </span><br>
          <span>area to the creative area.</span>
        </h1>
        <h2 class="h6">挑戦し続けるブランドのパートナーとして、<br>視覚領域からクリエイティブ領域までを伴走し、<br>顧客の元に届くまで、様々な形で支援を行います。</h2>
      </div>
    </section>

    <section id="index-projects">

      <div class="wrapper">
        <nuxt-link v-for="content in contents" :key="content.id" :to="`/archives/${content.id}`" class="container" :aria-label="content.title">
          
          <div class="img-box">
            <img v-if="content.thumbnail" :src="content.thumbnail.url" :alt="content.title" class="thumbnail">
            <img v-else src="~@/assets/image/media.webp" alt="" class="thumbnail">
          </div>

          <div class="box">
            <h2 lang="en" class="h6">{{ content.direction }}</h2>
            <h1 lang="en" class="h2">{{ content.title }}</h1>
            <h3 lang="en" class="h6 semitrans">{{ content.work }}</h3>
          </div>
        </nuxt-link>
      </div>
    </section>

    <section id="index-about">
      <div class="section-header">
        <small class="h5">磯部たくみ</small>
        <h1 lang="en" class="heading">About Takumi</h1>
      </div>
      <div class="wrapper">
        <div class="container">
          <div class="box">
            <div class="h2 year" lang="en">2020</div>
            <div class="h3"><span class="h2" lang="en">University of Westminster</span> 入学</div>
          </div>
          <div class="box">
            <div class="h2 year" lang="en">2021</div>
            <div class="h3">大学休学 - クリエイティブスタジオにて<br>視覚領域における実務経験を積む</div>
          </div>
          <div class="box">
            <div class="h2 year" lang="en">2020</div>
            <div class="h3"><span class="h2" lang="en">University of Westminster</span> 入学</div>
          </div>
        </div>
        <p class="h3">
          ロンドンUniversity of Westminsterにて経営学を専攻・在学中。オーストラリアやイギリスで生活していく中で、日本との視覚表現の違いや感じ方の相違に興味を抱き、グラフィックデザイン・UIデザイン・写真・動画を始める。休暇の度に帰国しては、日本文化や思考の心地良さを体感し、伝統工芸や日本文化に興味を持ち始める。<br><br>
          また大学を休学し、東京のクリエイティブスタジオにて実務経験を積む。現在はグラフィックデザイン・UIデザイン・ビジュアルの撮影に加え、Webサイト・アプリの構築・テクニカルディレクションを行う。Web領域においては、モダンウェブアーキテクチャとも呼ばれる、JAMStackでの構築を多く手掛け、従来の一般的なCMSを使用しない、ユーザー・クライアント・デベロッパーフレンドリーなワークフローに注力している。(主に使用するフレームワークはVue.js / Nuxt.js)
        </p>
        <a href="
        mailto:hi@takumiisobe.com?subject=お問い合わせ&body=この度はお問い合わせをいただきまして、%0D%0A誠にありがとうございます。%0D%0A%0D%0A%0D%0A【お名前】%0D%0A%0D%0A%0D%0A【メールアドレス】%0D%0A%0D%0A%0D%0A【お問い合わせの内容】%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A上記をご記入の上、本メールを送信していただけますと幸いに存じます。%0D%0A順次ご対応させていただきます。%0D%0A%0D%0Aどうぞ、よろしくお願いいたします。%0D%0A%0D%0A%0D%0A磯部たくみ
        " class="mail">メールのお問い合わせ</a>
      </div>

    </section>
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

      document.getElementById('circle-color').addEventListener('click', () => {
        const currentPos = window.pageYOffset && document.documentElement.scrollTop 
        if (currentPos > 300) {
          document.documentElement.style.setProperty('--backgroundColor', '#090909');
          document.documentElement.style.setProperty('--textColor', '#e3e3e3');
        } else {
          document.documentElement.style.setProperty('--backgroundColor', '#e3e3e3');
          document.documentElement.style.setProperty('--textColor', '#090909');
        }
        //startPos = currentPos
      })

      /*
      window.addEventListener('scroll', () => {
        const currentPos = window.pageYOffset && document.documentElement.scrollTop 
        if (currentPos > 300) {
          document.documentElement.style.setProperty('--backgroundColor', '#090909');
          document.documentElement.style.setProperty('--textColor', '#e3e3e3');
        } else {
          document.documentElement.style.setProperty('--backgroundColor', '#e3e3e3');
          document.documentElement.style.setProperty('--textColor', '#090909');
        }
        //startPos = currentPos
      })
      */
      
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

#Index main {position: relative;z-index: 2;padding-bottom: 10rem;}
#Index section {padding: 0 6.5%;}

#index-top {
  margin-top: 10rem;
}

#index-top .wrapper h1 {
  font-size: 1.75rem;
  line-height: 1.6;
  margin: 1rem 0 .5rem;
  font-family: "Lausanne-450", sans-serif;
}
#index-top .wrapper h2 {
  line-height: 2.3;
  font-size: 1.1rem;}


#index-top #top-Line span {display: inline-block;}
#Index section#index-projects {padding-top: 6.5rem;}

#index-projects .container {margin-bottom: 6rem;}
#index-projects .container .img-box {
  width: 100%;
  aspect-ratio: 3/2;
  min-height: calc(87vw /3 * 2);
  overflow: hidden;
}
#index-projects .container h1 {margin: 0.3rem 0;}
#index-projects .container h2 {margin-top: 1rem;}
#index-projects .container img {
  width: 100%;
  height: 100%;
  will-change: transform;
}

#index-projects .container:nth-of-type(1) {pointer-events: none;}


#Index section#index-about {padding-top: 10rem;margin-top: -2.5rem;}
#index-about .wrapper {margin-top: 4rem;}
#index-about .wrapper .container .box {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-bottom: 2rem;}

#index-about .wrapper .container .box div {letter-spacing: -.05em;}
#index-about .wrapper .container .box div:nth-of-type(1) {margin-right: 2.5rem;}
#index-about .wrapper p {margin-top: 4rem;}

#index-about .wrapper a {font-size: 2rem;}
#index-about .wrapper a.mail {position:relative;margin-top: 4rem;}

#index-about .wrapper a.mail::after {
  content: "";
  width: 18rem; 
  width: 100%;
  height: 1px; 
  position: absolute; 
  bottom: -.25rem; 
  left: 0;
  margin: 0 auto; 
  overflow: hidden; 
  background: linear-gradient(to right, white 50%, rgba(255, 255, 255, 0) 50%); 
  background-position: -15.5rem 0; 
  background-size: 200% 100%; 
  animation: animation 5s cubic-bezier(0.8, 0, 0.35, 1) forwards infinite;
}

@keyframes animation {
  0% { background-position: 100% 0; }
  10% { background-position: 100% 0; }
  45% { background-position: 0 0; }
  80% { background-position: -100% 0; }
  90% { background-position: -100% 0; }
  100% { background-position: -100% 0; }
}








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
