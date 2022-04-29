<template>
    <main>
    
        <section id="a1">
          <div class="wrapper">
            <div>
              <h1 class="heading">はじめまして。磯部 拓です。<br>生産者の価値や理念を見える化し、<br>伝わる視覚表現の構築を行います。</h1>
              <h2 lang="en" class="h3 semitrans">Director,  Designer, Developer, Photographer</h2>
            </div>
            <div class="box">
              <p>ディレクター・デザイナー・デベロッパーである磯部拓のクリエイティブスペース - takumiisobeです。主な業務内容としてはUIデザイン・グラフィックデザイン・モーショングラフィックス・WEBサイト構築・撮影、と視覚領域のブランド構築などを行なっています。 生産者の伝えたいことや想いを汲み取り、対話して得たものを抽出して、そのままの感覚を視覚領域に広げていく。そして手にとって貰い、感じ、喜んでもらう、これが視覚表現を通して成したいことです。その為に、価値や理念・ミッションの見える化を図り、コミュニケーション可能な視覚表現の構築を目指します。</p>  
            </div>
          </div>
        </section>

          <hr>

        <section id="a2">
            
            <p>
              ロンドンUniversity of Westminsterにて経営学を専攻・在学中。オーストラリアやイギリスで生活していく中で、日本との視覚表現の違いや感じ方の相違に興味を抱き、グラフィックデザイン・UIデザイン・写真・動画を始める。休暇の度に帰国しては、日本の良さを実感し、伝統工芸や日本文化に興味を持ち始める。また大学を休学し、東京のクリエイティブスタジオにて実務経験を積む。現在はグラフィックデザイン・UIデザイン・ビジュアルの撮影に加え、Webサイト・アプリの構築・テクニカルディレクションを行う。Web領域においては、モダンウェブアーキテクチャとも呼ばれる、JAMStackでの構築を多く手掛け、従来の一般的なCMSを使用しない、ユーザー・クライアント・デベロッパーフレンドリーなワークフローに注力している。(主に使用するフレームワークはVue.js / Nuxt.js)
            </p>
        </section>

    <nuxt-link to="/"></nuxt-link>
    <nuxt-link to="/contact"></nuxt-link>
    <nuxt-link to="/about"></nuxt-link>
    <nuxt-link to="/"></nuxt-link>
    <nuxt-link to="/contact"></nuxt-link>
    <nuxt-link to="/about"></nuxt-link>
    </main>

</template>

<script>
export default {
    head: {
      titleTemplate: null,
      title: 'About Me | Takumi Isobe',
      bodyAttrs: {
        id: "About"
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'クリエイティブスペース ディレクター 磯部拓についてご紹介いたします。' || '' },
        { hid: 'keywords', name: 'keywords', content: 'Takumi, Takumi Isobe, Creative Space,  Design Studio, Tokyo, Japan, デザイン, クリエイティブスペース, 磯部 拓, UI/UX Design' },
        { hid: 'og:type', property: 'og:type', content: 'Website' },
        { hid: 'og:title', property: 'og:title', content: 'About' },
        { hid: 'og:description', property: 'og:description', content: 'クリエイティブスペース ディレクター 磯部拓についてご紹介いたします。' },
        { hid: 'og:url', property: 'og:url', content: 'https://takumiisobe.com/about/'},
      ]
    },
    
    mounted () {
      try{
        FONTPLUS.start();
      } catch(e){
        console.log("[error]load FONTPLUS.")
      }
    },
}
</script>

<style>

#a1 {padding-top: 15vh}

#a1 h1.heading {
  white-space: nowrap;
  font-size: 2rem;
  line-height: 1.85;}
#a1 h2 {
  font-size: 1.4rem;
  margin-top: 1rem;
  margin-bottom: 2rem;}
#a1 .wrapper {margin-top: 3rem;}
#a1 p {
  text-align: justify;
  margin: calc(var(--pX) * 1.5) 0 calc(var(--pX) * 6);}
#a1 .wrapper h4 {margin: calc(var(--pX) * 5) 0 calc(var(--pX) * .5);}
#a1 .wrapper h2 a {border-bottom: 1px solid;}

#a2 {
    margin-top: calc(var(--pX) * 5);
    margin-bottom: calc(var(--pX) * 12.5);
}

#a2 hr {margin: 4rem 0;}


@media screen and (min-width: 720px) {

  #a1 h1.heading {
    font-size: 3.6rem;
    line-height: 1.8;}

  #a1 .wrapper {display: flex;}
  #a1 .wrapper .box {
    width: auto;
    margin-left: 5rem;
  }
  #a1 .wrapper .box p {    
    font-size: 1.6rem;
    width: 100%;
    margin-top: 0;}
  #a1 .wrapper .box h4, #a1 .wrapper .box h3 {margin-top: 0;}

  #a1 .wrapper .box h3 {
    font-size: 1.65rem;
    line-height: 2;
    width: 50%;}
  
  #a1 p {width: 45%;margin-bottom: 2.5rem;}

  #About hr {margin: 10rem 0;}

  #a2 p {
    width: 72.5%;
    margin: auto;
  }
}
</style>