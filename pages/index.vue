<template>
  <main>
    
    <section id="index-top">
      <div class="wrapper">
          <div>
              <h1 lang="en" class="h3">Takumi Isobe is an art director, mostly develop compelling brand identity using the most sophisticated ideas and presentation techniques available today. Feel free to get in touch with me.</h1>
              <p>視覚表現はあくまでも、ブランド・プロダクトに寄り添うものであり、本質を汲み取り、対話し、その延長線上で行われるべきであると考えます。そして落とし込む。この落とし込みのプロセスは多々、”創造する”や”変換する”といった言葉で説明されますが、”落とし込む”が最適のように感じます。汲み取り、対話して得たものを抽出して、そのままの感覚を視覚領域に広げていく。</p>
          </div>
          <h2 class="h4 uppercase">Sake place - kanro</h2>
      </div>
      <div class="box">
          <ul>
              <li><a href="" class="h1 uppercase" id="myText">Visual Direction</a></li>
              <li><a href="" class="h1 uppercase">Graphic design</a></li>
              <li><a href="" class="h1 uppercase">Photography</a></li>
              <li><a href="" class="h1 uppercase">Web development</a></li>
          </ul>
      </div>
    </section>

    <section id="i2">
      <div class="top">
        <h1 class="back">これまでのプロジェクト</h1>
        <h2 lang="en" class="h4 marquee">Work Archives - UI Design / Graphic Design / Web Development / Photography, all done by takumiisobe - Creative Director &nbsp; Work Archives - UI Design / Graphic Design / Web Development / Photography, all done by takumiisobe - Creative Director &nbsp; Work Archives - UI Design / Graphic Design / Web Development / Photography, all done by takumiisobe - Creative Director</h2>
      </div>

      <div class="wrapper">

        <nuxt-link v-for="content in contents" :key="content.id" :to="`/archives/${content.id}`" class="container" :aria-label="content.title">
          <img v-if="content.thumbnail" :src="content.thumbnail.url" :alt="content.title" class="thumbnail">
          <img v-else src="~@/assets/image/media.webp" alt="" class="thumbnail">
          <div class="box">
            <h2 lang="en" class="h4">{{ content.title }}</h2>
            <h3 lang="en" class="h4">{{ content.description }}</h3>
            <h4 lang="en" class="h6 semitrans">{{ content.work }}</h4>
          </div>
        </nuxt-link>
      </div>
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
//import axios from 'axios'
export default {
    head: {
      titleTemplate: null,
      title: 'Takumi Isobe - Creative Space',
      bodyAttrs: {
        id: 'Index'
      }
    },

    
    mounted () {
      this.$adobeFonts(document)

      try{
        FONTPLUS.start();
      } catch(e){
        console.log("[error]load FONTPLUS.")
      }
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
#Index main {width: 90%;}


        header {
            position: fixed;
            padding: 6.5rem 6vw 0;
        }
        header .Logo {font-size: 2rem;}
    
        
    
    #index-top {
        width: 100vw;
        height: 100vh;
        position: relative;
        
    }
    #index-top .wrapper {
        position: absolute;
        top: auto;
        bottom: 6rem;
        width: 610px;}
    
    #index-top .wrapper h1.h3 {
        margin-bottom: 1.5rem;
        word-break: break-all;
        hyphens: auto;
        font-size: 3rem;
        text-align: justify;}

    #index-top .wrapper p {
        margin-bottom: 10rem;
        text-align: justify;}
    
    #index-top .box {
        
        transform-origin: left top;
        position: absolute;
        right: 0;
        top: 6.5rem;
        transform: rotate(90deg) translateY(-425px);
        }
   
    #index-top .box ul li a {font-size: 5.4rem;}


    @media screen and (max-width: 480px) {
        header {
            position: fixed;
            padding: 5rem 7vw 0;}
        header .Logo {font-size: 1.8rem;}

        main {padding: 0 7vw;}

        #index-top .wrapper {
            width: 300px;
            position: initial;
        }
        #index-top .wrapper div {
            width: 300px;
            position: absolute;
            top: 18rem;
        }
        #index-top .wrapper h1.h3 {
            font-size: 1.8rem;
            font-weight: 700;
        }
        #index-top .wrapper h2 {
            position: absolute;
            top: auto;
            bottom: 4rem;
        } 
        #index-top .wrapper p {font-size: 1.05rem;}

        #index-top .box {display: none;}
    }

#i2 {margin: 1rem 0 7.5rem;}
#i2 .top {display: none;}
#i2 h1 {margin-bottom: calc(var(--pX) * 1.5);}

#i2 img {width: calc(100%);}
#i2 .container {margin-bottom: 2.5rem;}
#i2 .container img:nth-of-type(2) {margin-top: calc(var(--pX) * -1);}
#i2 .container h2 {margin-top: 0.5rem;}
#i2 .container h3 {margin: calc(var(--pX) * 1) 0 calc(var(--pX) * .75);}
#i2 .container h3 {display: none;}
#i2 .container h4 {font-size: 1.05rem;}
#i2 a:nth-of-type(2), #i2 a:nth-of-type(4) {pointer-events: none;}
#i2 .container:nth-of-type(1) {margin-bottom: 3rem;}
#i2 .container:nth-of-type(1) img {
  width: calc(100% + 15vw);
  margin-left: -7.5vw;
}
#i2 .container:nth-of-type(1) h2 {margin-top: 1.5rem;}
#i2 .container:nth-of-type(1) h3 {
  display: block;
  font-size: 1.4rem;
  margin: 0.3rem 0 0.4rem;
}

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
  #Index main {width: 90%;}

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
