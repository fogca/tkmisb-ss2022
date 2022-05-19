<template>
    <main>
        <section id="s1">
            <h1 lang="en" class="h2">{{ archive.title }}</h1>
            <h2 lang="en" class="h5">{{ archive.description }}</h2>
            <div class="wrapper">
              <dl>
                <dt lang="en" class="h5 semitrans">Primary Role</dt>
                <dd lang="en" class="h4">{{ archive.direction }}</dd>
              </dl>
              <dl>
                <dt lang="en" class="h5 semitrans">Scope of Works</dt>
                <dd lang="en" class="h4">{{ archive.work }}</dd>
              </dl>
              <dl>
                <dt lang="en" class="h5 semitrans">Project Date</dt>
                <dd lang="en" class="h4">
                  <time
                    v-if="archive.date"
                    class="h4"
                    :datetime="archive.date"
                    v-text="$dateFns.format(new Date(archive.date), 'MMMM yyyy')"
                  />
                </dd>
              </dl>
              <dl>
                <dt lang="en" class="h5 semitrans">Client</dt>
                <dd lang="en" class="h4">{{ archive.client }}</dd>
              </dl>
            </div>
            <img :src="archive.thumbnail.url" class="thumbnail" :alt="archive.title">
            
        </section> 

        <section id="s2">
            <p v-html="archive.body" class="body h5"></p>
            <a v-if="archive.link" :href="archive.link" class="link">
              <h3 lang="en">Visit to Site</h3>
            </a>
        </section>   

        <section id="s3">
          <h2 class="h4" lang="en">Discover more</h2>
          <h1 class="back">これまでのプロジェクト</h1>
          <div class="wrapper">

            <nuxt-link v-if="next3" :to="`/archives/${next3.id}`" rel="next">
              <hr>
              <div class="container">
                <span lang="en" class="h6 semitrans">
                <time
                  lang="en"
                  v-if="next3.date"
                  class="h6"
                  :datetime="next3.date"
                  v-text="$dateFns.format(new Date(next3.date), 'MMMM yyyy')"
                />
                - {{ next3.direction }}
                </span>
                <h2 lang="en" class="h2">{{ next3.title }}</h2>
                <h3 lang="en" class="h5">{{ next3.work }}</h3>
                <Arrow />
                </div>
            </nuxt-link>

            <nuxt-link v-if="next2" :to="`/archives/${next2.id}`" rel="next">
              <hr>
              <div class="container">
                <span lang="en" class="h6 semitrans">
                <time
                  lang="en"
                  v-if="next2.date"
                  class="h6"
                  :datetime="next2.date"
                  v-text="$dateFns.format(new Date(next2.date), 'MMMM yyyy')"
                />
                - {{ next2.direction }}
                </span>
                <h2 lang="en" class="h2">{{ next2.title }}</h2>
                <h3 lang="en" class="h5">{{ next2.work }}</h3>
                <Arrow />
                </div>
            </nuxt-link>

            <nuxt-link v-if="next" :to="`/archives/${next.id}`" rel="next">
              <hr>
              <div class="container">
                <span lang="en" class="h6 semitrans">
                <time
                  lang="en"
                  v-if="next.date"
                  class="h6"
                  :datetime="next.date"
                  v-text="$dateFns.format(new Date(next.date), 'MMMM yyyy')"
                />
                - {{ next.direction }}
                </span>
                <h2 lang="en" class="h2">{{ next.title }}</h2>
                <h3 lang="en" class="h5">{{ next.work }}</h3>
                <Arrow />
                </div>
            </nuxt-link>

            <nuxt-link v-if="prev" :to="`/archives/${prev.id}`" rel="prev">
              <hr>
              <div class="container">
                <span lang="en" class="h6 semitrans">
                <time
                  lang="en"
                  v-if="prev.date"
                  class="h6"
                  :datetime="prev.date"
                  v-text="$dateFns.format(new Date(prev.date), 'MMMM yyyy')"
                />
                - {{ prev.direction }}
                </span>
                <h2 lang="en" class="h2">{{ prev.title }}</h2>
                <h3 lang="en" class="h5">{{ prev.work }}</h3>
                <Arrow />
                </div>
            </nuxt-link>
            <nuxt-link v-if="prev2" :to="`/archives/${prev2.id}`" rel="prev">
                           <hr>
              <div class="container">
                <span lang="en" class="h6 semitrans">
                <time
                  lang="en"
                  v-if="prev2.date"
                  class="h6"
                  :datetime="prev2.date"
                  v-text="$dateFns.format(new Date(prev2.date), 'MMMM yyyy')"
                />
                - {{ prev2.direction }}
                </span>
                <h2 lang="en" class="h2">{{ prev2.title }}</h2>
                <h3 lang="en" class="h5">{{ prev2.work }}</h3>
                <Arrow />
                </div>
            </nuxt-link>
            <nuxt-link v-if="prev3" :to="`/archives/${prev3.id}`" rel="prev">
              <hr>
              <div class="container">
                <span lang="en" class="h6 semitrans">
                <time
                  lang="en"
                  v-if="prev3.date"
                  class="h6"
                  :datetime="prev3.date"
                  v-text="$dateFns.format(new Date(prev3.date), 'MMMM yyyy')"
                />
                - {{ prev3.direction }}
                </span>
                <h2 lang="en" class="h2">{{ prev3.title }}</h2>
                <h3 lang="en" class="h5">{{ prev3.work }}</h3>
                <Arrow />
                </div>
            </nuxt-link>
            <hr>
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
    head() {
      return { 
        title: `${this.archive.client} | Takumi Isobe - Creative Space`,
        bodyAttrs: { class: 'Slug' },
        meta: [
        { hid: 'description', name: 'description', content: this.archive.body },
        { hid: 'og:type', property: 'og:type', content: 'Website' },
        { hid: 'og:title', property: 'og:title', content: this.archive.title },
        { hid: 'og:description', property: 'og:description', content: this.archive.body },
        { hid: 'og:url', property: 'og:url', content: 'https://takumiisobe.com/archives/'+this.$route.params.id+'/'},
      ],
     }
    },

    async asyncData({ $microcms, params }) {
      const archive = await $microcms.get({
        endpoint: `archives/${params.id}`,
      })
      const links = await $microcms.get({
        endpoint: `archives`,
        queries: { limit: 10, orders: 'date', fields: 'id,title,date,direction,work' },
      })
      const index = links.contents.findIndex((content) => content.id === params.id)
      const nextLink = links.contents[index - 1];
      const nextLink2 = links.contents[index - 2];
      const nextLink3 = links.contents[index - 3];
      const prevLink = links.contents[index + 1];
      const prevLink2 = links.contents[index + 2];
      const prevLink3 = links.contents[index + 3];
      
      return {
        archive: archive,
        prev: prevLink,
        prev2: prevLink2,
        prev3: prevLink3,
        next: nextLink,
        next2: nextLink2,
        next3: nextLink3,
      }    
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

.Slug main {position: relative;z-index: 3;}
.Slug section {padding-left: 21.5%;padding-right: 10%;}

.Slug img {width: 100%;}

#s1 .thumbnail {    
  width: 100vw;
  margin-left: -7.5vw;}
#s1 h1 {
  text-transform: capitalize;
  font-size: 2.6rem;
  margin-top: 14.5rem;
}

#s1 .wrapper {margin: 4rem 0 5.5rem;}
#s1 .wrapper dl {margin-bottom: 2.5rem;}
#s1 .wrapper dt {margin-bottom: .5rem;}
#s1 .wrapper dl:nth-of-type(2) dd {word-break: break-all;hyphens: auto;}


#s1 h2 {
  font-size: 1.5rem;
  margin: calc(var(--pX) * 1) 0 calc(var(--pX) * .75);}

#s1 h3 {font-size: 1.3rem;}






#s2 .body h4 {
  margin-top: 5rem;
  letter-spacing: .0125em;}
#s2 .body h1 {
  
  font-size: 2.2rem;
  width: fit-content;
  margin: .5rem 0 1.5rem;
  background: var(--textColor);
  color: var(--backgroundColor);
  line-height: 1.2;
  padding: .15rem 0.15rem 0;
  letter-spacing: .05em;
  font-size: 2.4rem;
  padding-top: 0.5rem;
}
#s2 .body h5 {
  font-size: 1.2rem;
  margin-top: -.5rem;
  letter-spacing: .0125em;
  opacity: 0.5;
}

#s2 .body img {
  will-change: animation;
  animation: body-img 7.5s infinite normal;}
#s2 .body p:nth-of-type(2n) img {animation: body-img 7.5s linear 2s infinite normal;}

@keyframes body-img-none {
  0% {background-color: var(--backgroundColor);}
  20% {background-color: #999;}
  40% {background-color: #fff;}
  60% {background-color: #480000;}
  70% {background-color: #ffffff;}
  80% {background-color: #ffffff;}
  100% {background-color: var(--backgroundColor);}
}

@keyframes body-img {
  0% {background-color: var(--backgroundColor);}
  50% {background-color: white;}
  100% {background-color: var(--backgroundColor);}
}
#s2 p {    
  text-align: justify;
  width: 100%;;
  word-break: break-all;
}

#s2 p a {border-bottom: .5px solid;}





#s3 {
  margin-top: 15rem;
  padding-bottom: calc(var(--pX) * 15);}

#s3 .wrapper {margin-top: 5rem;}

#s3 .wrapper .container {
  width: 100%;
  flex-direction: column;
  padding: 1.5rem 0 1.5rem .3rem; 
  padding: 2rem 0 2rem .3rem; 
}

#s3 .wrapper .container time {width: 17.5%;opacity: .5;}
#s3 .wrapper .container h2 {
  margin: 1rem 0 .3rem;
  width: 75%;}
#s3 .wrapper .container h3 {width: 75%;}

#s3 .wrapper hr {
  width: 100vw;
  border-top: 0.05px solid var(--textColor);
  border-bottom: 0;
  margin-left: -7.5vw;
  opacity: .25;
}

#s3 .wrapper .container {position: relative;}
#s3 .wrapper .container .Arrow {
    margin-left: auto;
    margin-right: 1rem;
    transform: scale(1.25);
    position: absolute;
    top: 50%;
    right: 2rem;
}





@media screen and (min-width: 720px) {

  #s1 h1 {
    font-size: 4.2rem;
    margin-top: 22.5rem;}
  #s1 h2 {font-size: 2.4rem;}

  #s1 .wrapper {
    display: flex;
    margin: 6rem 0 12rem;}
  #s1 .wrapper dl {margin-right: 6rem;}
  #s1 .wrapper dl:nth-of-type(2) {max-width: 35%;margin-right: 5rem;}
  #s1 .thumbnail {    
  width: 100%;
  margin-left: 0;}

  #s2 .body {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  #s2 .body h1 {font-size: 3.6rem;}
  #s2 .body h4 {
  margin-top: 7.5rem;}

  #s2 a.link {
    margin-left: 10%;
    margin-top: 3rem;
    text-decoration-line: underline;
  }


  #s3 .wrapper .container {
  width: 100%;
    display: flex;
    align-items: baseline;
    padding: 2.5rem 1rem;
}



}



</style>