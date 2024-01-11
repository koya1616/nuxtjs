import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  nitro: {
    preset: 'vercel-edge',
  },
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  app: {
    head: {
      title: "Improve stretch",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { hid: 'description', name: 'description', content: "Improve stretch | 初回限定価格 | 寝屋川 | 香里園 | ストレッチ" },
        { name: 'keywords', content: '香里園,寝屋川,ストレッチ,インプルーブストレッチ,前屈,開脚,ゴルフ,スコアアップ,ストレッチ,柔軟,,腰痛,肩こり,痺れ,巻き肩,頭痛,むくみ,冷え性,体験,姿勢不良,姿勢改善' },
        { property: 'og:title', content: 'Improve stretch | 初回限定価格 | 寝屋川 | 香里園 | ストレッチ' },
        { property: 'og:description', content: '肩こり腰痛身体の硬さなどでお悩みの方に！初回ご来店だと全身ストレッチが特別価格に！揉みほぐしでは届かない深層の筋肉にアプローチし、筋肉の柔軟性アップ・関節可動域の拡大を経験豊富なプロのトレーナーが動かす。' },
        { property: 'og:site_name', content: 'Improve stretch | 初回限定価格 | 寝屋川 | 香里園 | ストレッチ' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://improve-stretch.vercel.app/' },
      ],
    }
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
  css: ['@/assets/main.scss'],
})
