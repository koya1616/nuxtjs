<template>
  <header>
    <div>
      <h1>IMPROVE STRETCH</h1>
      <p>〒572-0084 大阪府寝屋川市香里南之32-5<br>YNレジデンス 607号室</p>
    </div>
  </header>
  <div class="content">
    <div class="top-message">
      幸福感を決める最も重要な項目は身体が健康であること。
    </div>
    <div class="scrolling-container">
      <!-- <img src="~/assets/logo.jpg" /> -->
      <img src="~/assets/top-image-1.jpg" />
      <img src="~/assets/top-image-2.jpg" />
      <img src="~/assets/top-image-3.jpg" />
      <img src="~/assets/top-image-4.jpg" />
    </div>
    <div class="main-message">
      かがむと腰が痛い・肩が痛くて腕が上がらない・歩くと股関節が痛いなど、<br>
      Improve Stretchでは、そんな人の人生の幸福度を高めるサポートをさせていただきます。<br>
      Improveとは「向上」<br>
      その場しのぎではなく、その後の身体機能をImprove（向上）し<br>
      本来の動きを取り戻して年齢関係なく人生でできる幅を広げて欲しい！<br>
      そんな想いが込められています。<br>
      ストレッチで身体が動く楽しさを知って欲しい<br>
      Improve Stretchではお客様の「こうなりたい！」に全力でサポート致します。<br>
    </div>
    <div class="profile">
      <div class="kodai-img">
        <h1>KODAI</h1>
        <img src="~/assets/koudai.jpg"/>
      </div>
      <div class="career">
        <h2>経歴</h2>
        <p>名古屋リゾート&スポーツ専門学校卒業</p>
        <p>卒業後　業界No. 1大手ストレッチ専門店入社</p>
        <p>在職中に　関西→関東、初駅中新店舗立ち上げ→関西</p>
        <p>退職後、関西初出店新店舗立ち上げメンバーとして</p>
        <p>ストレッチ専門店入社</p>
        <p>立ち上げ後、新店舗の立て直しとして店長に就任。</p>
        <p>新人育成、店舗運営を経験し売上大幅アップに貢献。</p>
        <p>在職中、関西個人売上No.１、指名数No.1、</p>
        <p>総施術数No.１、新規&指名リピート率No.１、経験あり。</p>
        <p>2023年5月〜Improve Stretch 開業</p>
      </div>
    </div>
    <div class="license">
      <h1>LICENSE</h1>
      <div class="license-list">
        <ul>
          <li>健康運動実践指導者</li>
          <li>JATI-ATI</li>
          <li>日本ストレッチングパートーナー（JSA-CSTP）</li>
          <li>Phi pilates</li>
        </ul>
      </div>
    </div>
    <div class="price">
      <h1>料金表</h1>
      <div class="message">
        ストレッチで身体の本来の動きを引き出し、<br>
        お客様一人一人に合わせたプランでサポート致します。<br>
        Ex. 肩こり・腰痛・姿勢改善・ゴルフパフォーマンスアップなど<br>
      </div>
    </div>
    <div class="price-cards">
      <div class="time-card">
        <div class="forty-minutes">
          <br>
          <h3>40分</h3>
          <br><br>
          <h3>¥ 5,500</h3>
          <br>
          <p>上半身もしくは</p>
          <p>下半身のみの施術</p>
          <br>
        </div>
        <div class="six-minutes">
          <br>
          <h3>60分</h3>
          <br><br>
          <h3>¥ 7,700</h3>
          <br>
          <p>全身スッキリプラン</p>
          <br>
        </div>
        <div class="eighty-minutes">
          <br>
          <h3>80分</h3>
          <p class="recommendation">おすすめ</p>
          <br>
          <h3>¥ 9,900</h3>
          <br>
          <p>全身</p>
          <p>＋</p>
          <p>体の気になる箇所</p>
          <br>
        </div>
        <div class="hundred-minutes">
          <br>
          <h3>100分</h3>
          <br><br>
          <h3>¥ 12,100</h3>
          <br>
          <p>全身</p>
          <p>＋</p>
          <p>コアを鍛え</p>
          <p>悩みを繰り返さない体づくり</p>
          <br>
        </div>
      </div>
      <div class="option-card">
        <h3>オプション</h3>
        トレーニング　　10分　　　¥ 1,000
      </div>
    </div>
    <div class="qr-and-access">
      <div class="line-qr">
        <h2>お問い合わせ先</h2>
        <img src="~/assets/qrcode.jpg" @click="handleClick" />
      </div>
      <div class="access">
        <h2>アクセス</h2>
        〒572-0084<br>
        大阪府寝屋川市香里南之町32-5 YNレジデンス香里607<br>
        TEL： 080-9399-5228<br>
        営業時間： 10:00〜21:00<br>
        不定休（時間外相談可）<br>
        香里園駅西口→線路沿いに歩くと左手に踏切、<br>
        右手に〈金券ショップ〉がある場所を右折。<br>
        踏切を背に〈香里ダイエー本通り商店街〉を直進。<br>
        左手１Fの薬局〈サンドラッグ〉があるマンションに<br>
        当店舗があります。<br>
        入口はサンドラッグを通過し、左手に居酒屋〈ハコ〉と<br>
        黄色の看板〈買取センタ－キングラム〉の間の路地を入り、<br>
        左側〈YNレジデンス〉マンション6階です。<br>
        インターホンで【607】を押して下さい。<br>
      </div>
    </div>
  </div>
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
header {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px;
  div {
    margin: 0 auto;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }
  h1 {
    font-size: 16px;
  }
  p {
    font-size: 8px;
  }
}
.content {
  font-family: serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top-message {
    font-family: "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "MS P明朝", "MS PMincho", serif;
    font-size: 14px;
    margin-top: 30px;
  }

  .scrolling-container {
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;
    width: 100%;

    img {
      width: 85%;
      aspect-ratio: 16/9;
      margin: 30px;
    }
  }

  .main-message {
    text-align: center;
    width: 95%;
    margin: 20px auto 0;
    font-size: 8px;
  }

  .profile {
    display: flex;
    align-items: center;
    margin: 40px auto 0;
    .kodai-img {
      text-align: center;
      flex: 1;
      h1 {
        margin: 0;
      }
      img {
        width: 80%;
        border-radius: 50%;
      }
    }

    .career {
      flex: 1;
      text-align: center;
      h2 {
        font-family: "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "MS P明朝", "MS PMincho", serif;
        margin: 0 0 20px;
      }
      p {
        font-size: 7px;
      }
    }
  }

  .license {
    text-align: center;
    width: 80%;
    margin: 20px auto 0;
    .license-list {
      text-align: left;
      font-size: 12px;
      margin: 10px auto 0;
    }
  }

  .price {
    text-align: center;
    margin-top: 30px;
    .message {
      font-size: 12px;
    }
  }

  .price-cards {
    width: 95%;
    margin-top: 20px;

    .time-card {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;

      div {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        width: 100%;
        text-align: center;
        border-radius: 10px;

        p {
          font-size: 12px;
        }

        .recommendation {
          color: red;
          text-decoration: underline;
        }
      }
    }

    .option-card {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      width: 100%;
      text-align: center;
      border-radius: 10px;
      margin-top: 20px;
      padding: 10px 0;
    }
  }

  .qr-and-access {
    display: flex;
    align-items: center;
    margin: 50px auto;

    .line-qr {
      flex: 1;
      text-align: center;

      img {
        width: 80%;
      }
    }

    .access {
      flex: 1;
      font-size: 7px;

      h2 {
        text-align: center;
        font-size: 24px;
      }
    }
  }
}
</style>