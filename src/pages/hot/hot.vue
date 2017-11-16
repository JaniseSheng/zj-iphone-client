<template>
  <div class="hot" :class="$style.hot">
      <Card v-for="(item, index) in 10" :key="'card' + index">
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
             <li>
                <h4 class="title">#1001# GSX Carrier Checker 完全策略信息有锁无锁 查运营商 快</h4>
             </li>
             <li>
                <p class="price"><span class="rmb">RMB 5.00</span> <span>预计时间：1~3小时</span></p>
             </li>
             <li>
               <p class="content">老外工作时间大致是我们这边下午1点到晚上11-12点，这段时间可以快出，基本1小时内，最多三小时，1-3小时是指老外上班时间</p>
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
    :global(.ivu-card) {
      margin-top: 20px;
      margin-right: 10px;
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
      background: rgba(0, 51, 51, 0.549019607843137);
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
    :global(.ivu-card-body) {
      padding: 5px 16px;
      :global(.title){
        font-weight: bold;
        font-size: 15px;
      }
      :global(.price) {
        color: #5151D5;
        font-size: 14px;
        :global(.rmb) {
          margin-right: 60px;
        }
      }
      :global(.content) {
        color: #626262;
        font-size: 13px;
      }
    }
  }
</style>
