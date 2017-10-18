<template>
  <div class="hot" :class="$style.hot">
      <Card>
         <p slot="title">
             GSD
         </p>
         <div href="#" slot="extra">
             <span>
               价格 <Icon type="ios-arrow-thin-up"></Icon>
             </span>
             <span>
               需求 <Icon type="ios-arrow-thin-down" ></Icon>
             </span>
         </div>
         <ul>
             <li v-for="item in randomMovieList">
                 <a :href="item.url" target="_blank">{{ item.name }}</a>
                 <span>
                     <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
                     {{ item.rate }}
                 </span>
             </li>
         </ul>
     </Card>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" module>
  .hot {
    margin-top: 20px;
    :global(.ivu-card) {
      margin-left: 10px;
      width:390px;
      display:inline-block;
    }
    :global(.ivu-card:first-child) {
      margin-left: 0;
    }
    :global(.ivu-card-head) {
      padding-top: 0;
      padding-bottom: 0;
      height: 35px;
      p {
        line-height: 35px;
        height: 35px;
      }
    }
    :global(.ivu-card-extra) {
      height: 35px;
      font-size: 12px;
      top: 0;
      line-height: 35px;
      overflow: hidden;
    }
    :global(.ivu-card-extra span:first-child) {
      margin-right: 10px;
    }
    :global(.ivu-icon) {
      font-size:22px;
      font-weight:bold;
      vertical-align: middle;
    }
    :global(.ivu-icon-ios-arrow-thin-up) {
      color: red;
    }
    :global(.ivu-icon-ios-arrow-thin-down) {
      color: green;
    }
  }
</style>
