<template>
  <div class="notice">{{msg}}</div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Free Shipping For Orders Over $50'
    }
  }
}
</script>
<style lang="less" scoped>
  .notice {
    font-size: 1.4em;
    font-family: optima;
    color: #151515;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
  }
</style>



