<template>
  <div class="message">
    <div class="info" v-for="item in message">
      <p class="title" :style="{background: item.bgColor}">{{item.text}}</p>
      <p class="num" :style="{color: item.bgColor}">{{item.num}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../base/styles/mythemes.less";
  .message {
    .info {
      display: inline-block;
      width:120px;
      height: 60px;
      background: #ddd;
      margin-left: 20px;
      &:first-child {
        margin-left: 0;
      }
      .title {
        width: 90%;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        text-align: center;
        margin: 0 auto;
        margin-top: 8px;
        color: @tooltip-color;
      }
      .num {
        font-size: 20px;
        text-align: center;
      }
    }
  }
</style>
