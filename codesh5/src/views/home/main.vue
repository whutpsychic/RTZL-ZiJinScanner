<template>
  <main>
    <van-nav-bar
      title="主菜单"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="btns">
      <van-button type="primary" to="/chukudanQuery">拣配</van-button>
      <van-button type="primary" to="/jianpeidantouQuery">
        查询拣配单
      </van-button>
    </div>
  </main>
</template>

<script>
  export default {
    setup() {
      const onClickLeft = () => history.back()

      return {
        onClickLeft,
      }
    },
  }
</script>

<style scoped>
  .btns {
    height: calc(100vh - var(--van-nav-bar-height));
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .van-button {
    width: 80%;
    height: 20%;
    border-radius: 25px;
    font-size: 30px;
    cursor: pointer;
  }
  .van-button:nth-child(1) {
    margin-top: 17%;
    background-color: var(--btn-color1);
  }
  .van-button:nth-child(2) {
    margin-top: 17%;
    background-color: var(--btn-color2);
  }
</style>
