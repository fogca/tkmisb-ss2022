import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  offset: -30 // 固定ヘッダーがある場合に、オフセットで調整する
})