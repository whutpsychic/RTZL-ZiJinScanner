<template>
  <main>
    <van-nav-bar title="主菜单" class="page-nav-bar" />

    <div class="btn">
      <van-button type="primary" to="/chukudanQuery">拣配</van-button>
      <van-button type="primary" to="/jianpeidantouQuery">
        查询拣配单
      </van-button>
    </div>
  </main>
</template>

<script></script>

<style scoped>
  .btn {
    height: calc(100vh - var(--van-nav-bar-height));
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .van-button {
    width: 80%;
    height: 15%;
    border-radius: 25px;
    font-size: 35px;
    cursor: pointer;
  }
  .van-button:nth-child(1) {
    margin-top: 17%;
    background-color: #003363;
  }
  .van-button:nth-child(2) {
    margin-top: 17%;
    background-color: #d77100;
  }
</style>
