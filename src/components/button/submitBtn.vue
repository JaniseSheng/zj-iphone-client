<template>
  <div class="btnsure">
    <Button @click="submit" type="primary" class="btn-resign" icon="ios-search">提交</Button>
    <Button type="ghost" @click="handleReset" class="btn-resign2 btn-resign" icon="ivu-icon ivu-icon-refresh">返回</Button>
  </div>
</template>

<script>
  export default {
    methods: {
      submit() {
        this.$emit('submit')
      },
      handleReset() {
        this.$emit('reset')
      }
    }
  }
</script>

<style lang='less' scoped rel="stylesheet/less">
  @import '../../base/styles/mythemes';
  .btnsure {
    width: 270px;
    margin: 20px auto;
    .btn-resign2 {
      background-color: #fff;
      color: @primary-color;
      border-color: @primary-color;
    }
    .btn-resign {
      width: 100px;
      height: 32px;
      font-size: 14px;
      margin-left: 20px;
      border-color: @primary-color;
      display: inline-block;
    }
  }
</style>
