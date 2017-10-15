<template>
<div class="fotoplace">
<ul>
  <li v-for="item in data" class="list">{{item}}<span>></span></li>
</ul>
<div class="option">
  <slot></slot>
</div>
</div>
</template>
<script type="text/ecmascript-6">
export default{
  props:{
    data: {
      type: Array,
      default: ['卖家中心']
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" >
  @import '../../base/styles/color';
  .fotoplace{
    width: 100%;
    height: 47px;
    background:#fff;
    display: inline-block;
    border:1px solid #ccc;
    & ul {
      float: left;
    }
      .list:first-child{
        margin-left: 14px;
      }
      .list{
        display: inline-block;
        font-size: 14px;
        padding-right:10px;
        line-height: 47px;
        color:#ccc;
        span{
          padding-left: 3px;
        }
      }
      .list:last-child{
        color:red;
        span{
          display: none;

        }
    }
  }
  .option {
    float: right;
    height: 47px;
    padding-right: 14px;
  }
</style>
