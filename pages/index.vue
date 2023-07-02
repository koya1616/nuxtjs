<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Improve stretch</v-app-bar-title>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <VIcon :icon="mdiPost" />
      </v-app-bar-nav-icon> -->
    </v-app-bar>
    <!-- <v-navigation-drawer
      v-model="drawer"
      location="bottom"
      temporary
    >
      <v-list
        :items="items"
      ></v-list>
    </v-navigation-drawer> -->
    <div class="content">
      <div class="img-log-wrapper">
        <img src="~/assets/logo.jpg" />
      </div>
      <div class="img-wrapper">
        <img src="~/assets/room1.jpg" />
      </div>
      <div class="access">
        <h1>アクセス</h1>
        <div class="address">
          <div class="detail">
            <p>〒572-0084<br>
               大阪府寝屋川市香里南之町32-5 YNレジデンス香里607
            </p>
            <p>TEL： 080-9399-5228</p>
            <p>営業時間： 10:00〜21:00<br>
               不定休（時間外相談可）
            </p>
            <p>
              香里園駅西口→線路沿いに歩くと左手に踏切、右手に〈金券ショップ〉がある場所を右折。<br>
              踏切を背に〈香里ダイエー本通り商店街〉を直進。<br>
              左手１Fの薬局〈サンドラッグ〉があるマンションに当店舗があります。<br>
              入口はサンドラッグを通過し、左手に居酒屋〈ハコ〉と黄色の看板〈買取センタ－キングラム〉の間の路地を入り、左側〈YNレジデンス〉マンション6階です。<br>
              インターホンで【607】を押して下さい。<br>
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.907825669238!2d135.62620417571145!3d34.78309567878738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60011dda0641e4cb%3A0x34cbbc5133539095!2zWU7jg6zjgrjjg4fjg7Pjgrnpppnph4w!5e0!3m2!1sja!2sjp!4v1685157906788!5m2!1sja!2sjp"
              width="95%"
              height="500"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
      <div class="profile">
        <h1>経歴</h1>
        <div>
          <p>名古屋リゾート&スポーツ専門学校卒業</p>
          <p>卒業後　業界No. 1王手ストレッチ専門店入社</p>
          <p>在職中に　関西→関東、初駅中新店舗立ち上げ→関西</p>
          <p>退職後、関西初出店新店舗立ち上げメンバーとしてストレッチ専門店入社</p>
          <p>
            立ち上げ後、新店舗の立て直しとして店長に就任。新人育成、店舗運営を経験し売上大幅アップに貢献。<br>
            在職中、関西個人売上No.１、指名数No.1、総施術数No.１、新規&指名リピート率No.１、経験あり。
          </p>
          <p>2023年5月〜improve stretch 開業</p>
        </div>
      </div>
      <div class="img-wrapper">
        <img src="~/assets/room2.jpg" />
      </div>
      <div class="license">
        <h1>license</h1>
        <div class="detail">
          <p>健康運動実践指導者</p>
          <p>JATI-ATI</p>
          <p>日本ストレッチングパートーナー（JSA-CSTP）</p>
          <p>phi pilates</p>
        </div>
      </div>
      <div class="img-wrapper room3">
        <img src="~/assets/room3.jpg" />
      </div>
      <div class="LINE">
        <h1>LINE登録</h1>
        <div class="detail">
          <img src="~/assets/qrcode.jpg" @click="handleClick" />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mdiPost } from '@mdi/js'

export default {
  components: {
    mdiPost
  },
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'yahoo.co.jp',
      },
    ],
  }),

  methods: {
    handleClick() {
      window.location.href = 'https://page.line.me/639ockqx';
    },
  },

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style lang="scss">
.content {
  font-family: serif;
  background-color: #F0FFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 0 0 30px;
  }
  .access {
    text-align: center;
    margin-top: 80px;
    .detail {
      margin: 0 auto;
      width: 90%;
      text-align: left;
      p {
        margin-bottom: 20px;
      }
    }
  }

  .profile {
    width: 90%;
    text-align: center;
    margin-top: 80px;
    div {
      margin: 0 auto;
      width: 90%;
      text-align: left;
      p {
        margin-bottom: 20px;
      }
    }
  }

  .license {
    width: 90%;
    text-align: center;
    margin-top: 80px;
    div {
      margin: 0 auto;
      width: 90%;
      text-align: left;
      p {
        margin-bottom: 20px;
      }
    }
  }

  .LINE {
    width: 90%;
    text-align: center;
    margin: 80px 0 ;
    div {
      margin: 0 auto;
      img {
        width: 80%;
      }
    }
  }
}
.img-log-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;

  img {
    width: 100%;
    aspect-ratio: 16/9;
  }
}
.img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  img {
    width: 80%;
    aspect-ratio: 16/9;
  }
}
</style>