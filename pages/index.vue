<template>
  <main class="index-main">
    
    <section id="index-top">
      <div class="wrapper">
        <h1 class="h2" lang="en" id="top-Line">
          <span class="pc">
          <span class="sp">As a partner of the </span>
          <span class="sp">brand that is always challenging, </span></span><br>
          <span class="pc">
          <span class="sp">I will support from the visual </span>
          <span class="sp">area to the creative area.</span></span>
        </h1>
        <h2 class="h6">挑戦し続けるブランドのパートナーとして、<br class="sp">視覚領域から<br class="pc">クリエイティブ領域までを伴走し、<br class="sp">顧客の元に届くまで、様々な形で支援を行います。</h2>
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
            <div class="h4 year" lang="en">2020</div>
            <div class="h5"><span class="h4" lang="en">University of Westminster</span> 入学</div>
          </div>
          <div class="box">
            <div class="h4 year" lang="en">2021</div>
            <div class="h5">大学休学 - クリエイティブスタジオにて<br>視覚領域における実務経験を積む</div>
          </div>
          <div class="box">
            <div class="h4 year" lang="en">2022</div>
            <div class="h5">
              クリエイティブスタジオ<span class="h4" lang="en"> one inc.</span> デザイナー<br>
              <span class="h4" lang="en">Shochu X</span> アートディレクター
            </div>
          </div>
        </div>
        <div class="p">
          英国・ロンドンのUniversity of Westminsterにて経営学を専攻・在学中。オーストラリアやイギリスでの生活で、日本との視覚表現の違いや感じ方の相違に興味を抱き、デザインや写真、動画を始める。<br>
          <span class="pc">
            帰国の度に日本文化や和が持つ独自の余白の心地良さを体感し、伝統・文化への知見を深める。また大学を休学し、東京のクリエイティブスタジオにて実務経験を積む。現在はグラフィックデザイン・UIデザイン・ビジュアルの撮影に加え、Webサイト・アプリの構築・テクニカルディレクションを行う。Web領域においては、モダンウェブアーキテクチャとも呼ばれる、JAMStackでの構築を多く手掛け、従来の一般的なCMSから一線を画す、ユーザー・クライアント・デベロッパーフレンドリーなワークフローに注力している。(主に使用するフレームワークはVue.js / Nuxt.js)
          </span>
          <div class="accordion">
            <input id="acd-check1" class="acd-check" type="checkbox">
            <label class="acd-label" for="acd-check1"></label>
            <div class="acd-content">
              また大学を休学し、東京のクリエイティブスタジオにて実務経験を積む。現在はグラフィックデザイン・UIデザイン・ビジュアルの撮影に加え、Webサイト・アプリの構築・テクニカルディレクションを行う。Web領域においては、モダンウェブアーキテクチャとも呼ばれる、JAMStackでの構築を多く手掛け、従来の一般的なCMSから一線を画す、ユーザー・クライアント・デベロッパーフレンドリーなワークフローに注力している。(主に使用するフレームワークはVue.js / Nuxt.js)
            </div>
          </div>
        </div>
      </div>
    </section>


    <section id="index-laboratory">
      <div class="section-header">
        <h1 lang="en" class="heading">Laboratory</h1>
        <h2 class="h5">発酵・熟成・蒸留の実験場</h2>
      </div>
      <div class="wrapper">
        <h3 class="kanro"><Kanro /></h3>
        <h4>発酵・熟成・蒸留を通し、体の健やかさを<br class="sp">
            求めて、様々な観点から<br class="pc">香草や食材を配合し、<br class="sp">
            まだ見ぬ飲食の体験を創り出します。
        </h4>
        <div class="container">
          <img src="@/assets/image/sp_farmentation.jpg" alt="" class="sp">
          <img src="@/assets/image/sp_aging.jpg" alt="" class="sp">
          <img src="@/assets/image/sp_distillation.jpg" alt="" class="sp">
          <img src="@/assets/image/pc_farmentation.jpg" alt="" class="pc">
          <img src="@/assets/image/pc_aging.jpg" alt="" class="pc">
          <img src="@/assets/image/pc_distillation.jpg" alt="" class="pc">
        </div>
      </div>
    </section>

    <section id="index-contact">
      <div class="section-header">
        <h1 lang="en" class="heading">Contact</h1>
        <h2 class="h5">お気軽にお問い合わせください</h2>
      </div>
      <div class="wrapper">
        <div class="container">
          <h3 class="h5">メールでのお問い合わせはこちら</h3>
          <a href="
          mailto:hi@takumiisobe.com?subject=お問い合わせ&body=この度はお問い合わせをいただきまして、%0D%0A誠にありがとうございます。%0D%0A%0D%0A%0D%0A【お名前】%0D%0A%0D%0A%0D%0A【メールアドレス】%0D%0A%0D%0A%0D%0A【お問い合わせの内容】%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A上記をご記入の上、本メールを送信していただけますと幸いに存じます。%0D%0A順次ご対応させていただきます。%0D%0A%0D%0Aどうぞ、よろしくお願いいたします。%0D%0A%0D%0A%0D%0A磯部たくみ
          " class="mail h3" lang="en">hi@takumiisobe.com</a>
        </div>

        <div class="container">
          <h3 class="h5">メールでのお問い合わせはこちら</h3>
          <a href="https://www.messenger.com/t/100069870710731" target="blank_" class="mail h3" lang="en">Facebook Messanger</a>
        </div>
      </div>

    </section>
  
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

  #Index section#index-projects, #Index section#index-laboratory, 
  #Index section#index-about, #Index section#index-contact {
    padding-top: 9.5rem;}

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

@keyframes animation {
  0% { background-position: 100% 0; }
  10% { background-position: 100% 0; }
  45% { background-position: 0 0; }
  80% { background-position: -100% 0; }
  90% { background-position: -100% 0; }
  100% { background-position: -100% 0; }
}



#Index section#index-laboratory {padding-top: 10rem;}
#index-laboratory .kanro {margin: 5rem 0 1rem;}
#index-laboratory .kanro svg {width: 16.5rem;}
#index-laboratory .container {margin-top: 6.5rem;}
#index-laboratory .container img.sp {margin-bottom: 2rem;}

#index-contact a.mail {position:relative;}

#index-contact a.mail::after {
  content: "";
  width: 18rem; 
  width: 100%;
  height: 1px; 
  position: absolute; 
  bottom: -.25rem; 
  left: 0;
  margin: 0 auto; 
  overflow: hidden; 
  background: linear-gradient(to right, var(--textColor) 50%, rgba(255, 255, 255, 0) 50%); 
  background-position: -15.5rem 0; 
  background-size: 200% 100%; 
  animation: animation 5s cubic-bezier(0.8, 0, 0.35, 1) forwards infinite;
}
#index-contact a:nth-of-type(2)::after  {animation: animation 5s 1s cubic-bezier(0.8, 0, 0.35, 1) forwards infinite;}

#index-contact .wrapper {margin-top: 5rem;}
#index-contact .wrapper .container {margin-bottom: 3rem;}
#index-contact .wrapper .container a.mail {margin-top: .5rem;}








@media screen and (min-width: 720px) {

  #Index section {
    padding-left: 21.5%;
    padding-right: 10%;
  }

  .circles {top: 50%;}
  .circles div {width: 30vw;height: 30vw;}
  
  .bg {background-image: url("assets/image/bg@.jpg");}

  #Index section#index-projects, #Index section#index-laboratory, 
  #Index section#index-about, #Index section#index-contact {
    padding-top: 12.5rem;}

  #Index section#index-top {    
    margin-top: 11.25vh;
    padding-top: 11.25vh;}
  
  #index-top .wrapper h1 {font-size: 2.4rem;}
  #index-top .wrapper h2 {
    font-size: 1.8rem;
    line-height: 2;
    margin-top: 1rem;}


  #index-projects .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
  #index-projects .wrapper a {width: 47.5%;position: initial;}
  #index-projects .container .img-box {width: 100%;min-height: initial;}


  #index-projects .wrapper img {
    aspect-ratio: 3/2;
    height: 100%;}
  #index-projects .box {
    padding-top: 1rem;
    padding-bottom: 2.5rem;
    position: initial;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: .5s .15s ease-in-out;}


  #index-about .accordion {display: none;}
  #index-about .wrapper {width: 70%;}
  #index-about .p {font-size: 2.2rem;margin-top: 5rem;}
  #index-about .p span {font-size: 1.6rem;margin-top: 2.5rem;}


#index-laboratory .wrapper .container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
  gap: 1rem;
  margin-top: 4rem;
}


#index-laboratory .wrapper .kanro {
  margin: 5rem 0 2.5rem;
  width: 18rem;}



}





</style>
