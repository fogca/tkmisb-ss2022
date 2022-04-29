<template>
  <main>
<!--
<Menu />

    <section id="iCase">

        <nuxt-link :to="'cases/' + content.id" v-for="content in contents" :key="content.id" class="case">
            <h1 class="h3">{{ content.title }}</h1>
            <h2 class="h4">{{ content.client }}</h2>
            <img :src="content.thumbnail.url" :alt="content.title">
            <h3>{{ content.description }}</h3>
            <div v-html="content.body"></div>
          <nuxt-link :to="'cases/' + content.id" class="mt-5 regular discover">Discover</nuxt-link>
        </nuxt-link>
  
    </section>

    <Footer />
-->
  </main>

</template>

<script>
//import axios from 'axios'
export default {
    head: {
      titleTemplate: null,
      title: 'Archives | Takumi Isobe - Creative Space',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Brand Identity | Graphic - UI Design | Web -App Development | Photography' || '' },
        { hid: 'keywords', name: 'keywords', content: 'Takumi, Takumi Isobe, Creative Space,  Design Studio, Tokyo, Japan, デザイン, クリエイティブスペース, 磯部 拓, UI/UX Design' },
        { hid: 'og:type', property: 'og:type', content: 'Website' },
        { hid: 'og:title', property: 'og:title', content: 'Archives' },
        { hid: 'og:description', property: 'og:description', content: 'Brand Identity | Graphic - UI Design | Web -App Development | Photography' },
        { hid: 'og:url', property: 'og:url', content: 'https://takumiisobe.com/archives/'},
      ]
    },
   
    
}
</script>

<style>

#iCase {padding-top: 15vh;}

.case img {width: 100%;}


</style>
