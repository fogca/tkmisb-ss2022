<template>
    <main>
    
        <section id="c1">
            <h1 class="h0" lang="en">Contact</h1>
            <h2 class="h4">お気軽にご連絡ください</h2>
            <div class="wrapper">
                <div class="container">
                    <h4 class="h6">メールでのご連絡はこちら</h4>
                    <a href="mailto:hi@takumiisobe.com" target = _blank class="linkHover">
                    <h3 lang="en" class="h2">
                        hi@takumiisobe.com                    
                    </h3>
                    </a>
                </div>

                <div class="container">
                    <h4 class="h6">インスタグラムでのご連絡はこちら</h4>
                    <a href="https://www.instagram.com/takumiisobe_/" target = _blank class="linkHover">
                    <h3 lang="en" class="h2">
                        Instagram Direct Message                     
                    </h3>
                    </a>
                </div>

                <div class="container">
                    <h4 class="h6">フェイスブックでのご連絡はこちら</h4>
                    <a href="https://www.messenger.com/t/100069870710731" target = _blank class="linkHover">
                    <h3 lang="en" class="h2">
                        Facebook Messanger                        
                    </h3>
                    </a>
                </div>
            </div>

            <div class="box">
                <!--
                <Sns />
                -->
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
export default {
    head: {
      titleTemplate: null,
      title: 'Contact | Takumi Isobe - Creative Space',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'お問い合わせ - 依頼や制作に関するご質問等ありましたらお気軽にお問い合わせ下さい。' || '' },
        { hid: 'keywords', name: 'keywords', content: 'Contact, お問い合わせ, Takumi, Takumi Isobe, Creative Space,  Design Studio, Tokyo, Japan, デザイン, クリエイティブスペース, 磯部 拓, UI/UX Design' },
        { hid: 'og:type', property: 'og:type', content: 'Website' },
        { hid: 'og:title', property: 'og:title', content: 'Contact' },
        { hid: 'og:description', property: 'og:description', content: 'お問い合わせ - 依頼や制作に関するご質問等ありましたらお気軽にお問い合わせ下さい。' },
        { hid: 'og:url', property: 'og:url', content: 'https://takumiisobe.com/contact/'},
      ]
    },
    mounted () {
    window:onload = function() {
      let spHeight = window.innerHeight
      document.getElementById('c1').style.height=spHeight+'px';
    }
    try{
        FONTPLUS.start();
      } catch(e){
        console.log("[error]load FONTPLUS.")
      }
    }
}
</script>

<style>
#c1 {
    min-height: 95vh;
    padding-top: calc(var(--pX) * 22.5);
    padding-left: calc(var(--pX) * 1.5);
    position: relative;
}

#c1 .wrapper {margin-top: calc(var(--pX) * 7.5);}
#c1 .wrapper .container {margin-bottom: calc(var(--pX) * 3.5);}
#c1 .wrapper .container h4 {opacity: .5;}

#c1 .box {
  position: absolute;
  bottom: 5rem;
  right: 1rem;
}
</style>