<template>
<div id="Header">
  <header 
  :class="{
    'is-active': isActiveMenu, 
    'scrolled': headerHiddenFlag,
    'is-top': headerTopFlag,
    'scroll-up': headerScrollUp}" 
  >

  <div class="sp-top">
    <div class="circles" id="circle-color">
      <div class="circle"></div><div class="circle"></div>
      <div class="circle"></div><div class="circle"></div>
      <div class="circle"></div><div class="circle"></div>
    </div>
    <a href="/" aria-label="Home"><Logo /></a>
  </div>
    
    <ul>
      <li><a lang="en" href="/#index-projects">Projects</a></li>
      <li><a lang="en" href="/#index-about">About me</a></li>
      <li><a lang="en" href="/#index-laboratory">Laboratory</a></li>
      <li class="pc"><a lang="en" href="/#index-contact" class="pc">Contact</a></li>
      <li><a lang="en" href="https://www.instagram.com/takumiisobe_/" target="blank_">Instagram</a></li>
    </ul>
    <!--
    <button
      type="button"
      class="button-menu"
      aria-label="Menu Swith Button"
      v-on:click="isActiveMenu = !isActiveMenu; menuJs()"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="46.681" height="14.229" viewBox="0 0 46.681 14.229" class="open_button" aria-label="Menu Navigation Open"><path id="Path_1608" data-name="Path 1608" d="M14.648-14.062,8.4-6.865l-6.328-7.2H1.748V0H3.223V-10.391L8.369-4.648l5.117-5.762V0H14.98V-14.062ZM26.452-5.1c0-2.812-1.592-4.687-4.111-4.687-2.7,0-4.5,2.178-4.5,5,0,2.5,1.416,4.941,4.619,4.941a5.7,5.7,0,0,0,3.5-1.1V-2.314a5.581,5.581,0,0,1-3.34,1.152,3.277,3.277,0,0,1-3.369-3.506h7.2C26.443-4.766,26.452-4.873,26.452-5.1Zm-4.1-3.437a2.66,2.66,0,0,1,2.686,2.666H19.353A3.072,3.072,0,0,1,22.351-8.535Zm11.638-1.25A3.829,3.829,0,0,0,30.7-8.105V-9.629H29.135V0H30.7V-5.283A3.061,3.061,0,0,1,33.588-8.5c1.8,0,2,1.641,2,2.549V0h1.543V-6.338C37.133-8.33,36.205-9.785,33.989-9.785Zm12.878.166v5.283a3.061,3.061,0,0,1-2.891,3.213c-1.8,0-2-1.641-2-2.549V-9.619H40.431v6.338c0,1.992.928,3.447,3.145,3.447a3.829,3.829,0,0,0,3.291-1.68V.01h1.563V-9.619Z" transform="translate(-1.748 14.063)"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="47.411" height="14.844" viewBox="0 0 47.411 14.844" class="close_button" aria-label="Menu Navigation Close"><path id="Path_1613" data-name="Path 1613" d="M8.408-14.219A7.124,7.124,0,0,0,1.035-6.807C1.035-2.549,4.072.156,8.154.156a6.789,6.789,0,0,0,4.131-1.191v-1.65A6.126,6.126,0,0,1,8.3-1.357,5.311,5.311,0,0,1,2.686-6.875a5.647,5.647,0,0,1,5.781-5.869,6.039,6.039,0,0,1,3.809,1.27v-1.709A6.836,6.836,0,0,0,8.408-14.219ZM15.5,0h1.562V-14.687H15.5ZM24.36.156a4.673,4.673,0,0,0,4.678-4.951,4.673,4.673,0,0,0-4.59-4.98,4.768,4.768,0,0,0-4.707,5.01A4.638,4.638,0,0,0,24.36.156Zm.02-1.357C22.416-1.2,21.2-2.725,21.2-4.756c0-2.129,1.357-3.682,3.223-3.682,1.885,0,3.135,1.563,3.135,3.633C27.553-2.812,26.4-1.2,24.379-1.2ZM34.484.156c2.012,0,3.447-1.006,3.447-2.715,0-3.193-5-2.734-5-4.648,0-.762.8-1.309,1.875-1.309A4.234,4.234,0,0,1,37.4-7.49V-8.945a4.358,4.358,0,0,0-2.637-.84c-2.051,0-3.311,1.182-3.311,2.7,0,3.008,5.02,2.383,5.02,4.482,0,.791-.713,1.387-1.953,1.387a4.869,4.869,0,0,1-3.2-1.289l-.01,1.65A5.419,5.419,0,0,0,34.484.156ZM48.446-5.1c0-2.812-1.592-4.687-4.111-4.687-2.7,0-4.5,2.178-4.5,5,0,2.5,1.416,4.941,4.619,4.941a5.7,5.7,0,0,0,3.5-1.1V-2.314a5.581,5.581,0,0,1-3.34,1.152,3.277,3.277,0,0,1-3.369-3.506h7.2C48.436-4.766,48.446-4.873,48.446-5.1Zm-4.1-3.437A2.66,2.66,0,0,1,47.03-5.869H41.346A3.072,3.072,0,0,1,44.345-8.535Z" transform="translate(-1.035 14.688)"/></svg>
    </button>
    -->
  </header>

  <nav :class="{'is-active': isActiveMenu}" class="nav">
    <Menu v-on:click.native="isActiveMenu = false" />
  </nav>

</div>
</template>

<script>
export default {
  data() {
    return {
      isActiveMenu: false,
      headerHiddenFlag: false,
      headerTopFlag: true,
      colorActive: true
    }
  },
  mounted() {
    //Add class;scrolled to header when it is scrolled down
    let startPos = 0
    window.addEventListener('scroll', () => {
      const currentPos = window.pageYOffset && document.documentElement.scrollTop 
      this.headerHiddenFlag = currentPos > startPos && currentPos > 15
      this.headerScrollUp = currentPos < startPos && currentPos
      startPos = currentPos
    })
    //Remove class;is-top from header when it is scolled from top
    let topLocation = 0
    window.addEventListener('scroll', () => {
      const currentPos = window.pageYOffset && document.documentElement.scrollTop 
      this.headerTopFlag = topLocation==currentPos
    })
  },
  /*
  methods: {
    menuJs() {
      scrollpos = window.pageYOffset// 現在のスクロール位置を取得する
      html.classList.add('is-menuOpen')// メニューが開いたことを示すクラスをhtmlに付与する
      document.body.style.top = scrollpos * -1 + 'px'// bodyのtopにスクロール位置を付与する
      bodyHeight = window.innerHeight// ウィンドウの高さを取得
      menu.style.height = bodyHeight - headerHeight + 'px'// 取得した高さを、メニューに付与する（ヘッダーの高さを引いた数）
    }
  }
  */
}
</script>

<style>

#Header, header {mix-blend-mode: normal;}
#Header {
  position: relative;
  z-index: 99;
}

header.is-top {padding-top: 3rem;background-color: transparent;}

header .circles {display: flex;}
header .circles .circle {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-left: -.5rem;
  position: relative;
}
header .circles .circle:nth-of-type(2n+1) {
  border: 1px solid var(--textColor);
  background: var(--backgroundColor);
}
header .circles .circle:nth-of-type(2n) {
  border: 1px solid var(--textColor);
  background: var(--textColor);
}
header .circles .circle:nth-of-type(1) {z-index: 10;}
header .circles .circle:nth-of-type(2) {z-index: 9;}
header .circles .circle:nth-of-type(3) {z-index: 8;}
header .circles .circle:nth-of-type(4) {z-index: 7;}
header .circles .circle:nth-of-type(5) {z-index: 6;}
header .circles .circle:nth-of-type(6) {z-index: 5;}


header {
  width: 100%;
  position: fixed;
  top: 0;
  transition: 1s transform ease-in-out;
  z-index: 99;
  padding: 2rem 8.25vw .5rem;
  background: var(--backgroundColor);
}
header .sp-top {      
  display: flex;
  justify-content: space-between;
  align-items: flex-start;}

header ul {
  margin-top: 1.2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: 1s ease-in-out;
}
header.is-top ul {opacity: 0;}
header.scrolled {
  transform: translateY(-42.5px);
  padding-bottom: 1rem;
}
header.scroll-up {transform: translateY(-42.5px);}
header ul li a {
  font-size: 1.6rem;
  -webkit-font-smoothing: subpixel-antialiased;}
header ul li div {opacity: .5;font-size: 1.2rem;}



header .Logo {
  font-size: 2rem;
  transition: .5s;
}

.button-menu {
    width: 5rem;
    display: block;
    background: none;
    border: none;
    position: relative;
}
.button-menu svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 1.5s ease-in-out;
}
.button-menu svg:nth-of-type(1) {transition: .25s ease-in-out;}
.button-menu svg:nth-of-type(1) {opacity: 1;}
.button-menu svg:nth-of-type(2) {opacity: 0;}
header.is-active .button-menu svg:nth-of-type(1) {opacity: 0;}
header.is-active .button-menu svg:nth-of-type(2) {opacity: 1;}
header a {transition: 0s;}
/*header.is-active * {fill: var(--textColor);}*/

.nav {
  width: 100vw;
  height: 100vh;
  color: var(--textColor);
  fill: var(--textColor);
  position: fixed;
  z-index: 998;
  background-color: #150404;
  opacity: 0;
  transition: 1s ease-in-out;
  visibility: hidden;
}




.nav.is-active {
  opacity: 1;
  visibility: visible;
}

.nav, .nav * {
  color: var(--backgroundColor);
  fill: var(--backgroundColor);
}
.Menu h4 {opacity: .5;}




.nav .box {display: none;}


@media screen and (max-width: 480px) {


}


@media screen and (min-width: 720px) {

  header .Logo {width: 12rem;}
  header {
    width: 21.5vw;
    height: 100vh;
    padding-top: 7.5rem;
    padding-left: 5vw;
  }
  header, header.is-top, header.scrolled {
    background: transparent;
    padding-top: 5rem;
  }
  header.scrolled {transform: translateY(-15px);}

  header ul {
    display: flex;
    flex-direction: column;
    margin-top: 16.5vh;
  }
  header.is-top ul {opacity: 1;}

  header ul li a {
    font-size: 2.2rem;
    margin-bottom: 3.25rem;
  }
  header ul li a::after {
    display: block;
    font-size: 1.4rem;
    margin-top: .15rem;
  }
  header ul li:nth-of-type(1) a::after {content: "手掛けたプロジェクト";}
  header ul li:nth-of-type(2) a::after {content: "磯部たくみについて";}
  header ul li:nth-of-type(3) a::after {content: "発酵と熟成と蒸留";}
  header ul li:nth-of-type(4) a::after {content: "お問い合わせ";}
  header ul li:nth-of-type(5) a::after {content: "日々のコト";}

  header .circles .circle {
    width: 2.5rem;
    height: 2.5rem;
  }

}

@media screen and (min-width: 1640px) {
  header {
    margin: auto;
    max-width: 1800px;
  }
  header.scrolled {
    transform: translate(0);
  }
}
</style>