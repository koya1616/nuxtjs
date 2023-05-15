<template>
  <div>
    <header>
      <a href="/">Improve stretch</a>
      <div class="menu-wrapper">
        <a href="/">青山煌矢</a>
        <a href="/">金澤航大</a>
        <!-- <a href="/">予約状況</a> -->
      </div>
    </header>
    <div class="img-wrapper">
      <img src="~/assets/room1.jpg" />
    </div>
  </div>
</template>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 20px;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  margin-bottom: 40px;

  .menu-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
  }

  a {
    color: #000;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
  }
}
.img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    aspect-ratio: 16/9;
  }
}
</style>