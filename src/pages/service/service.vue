<template>
  <div :class="$style.myDate">
    <Card v-for="item in 4">
      <p slot="title">
          INFO Checks 查询服务
      </p>
      <ul>
          <li v-for="item in 6" @click="submitOrder">
              <span>
                     #1001# GSX Carrier Checker 完全策略信息有锁无锁查运营商 快 -- 5.00RMB-- 1~3小时
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
:global(.ivu-card) {
  width: 90%;
  margin: 0 auto;
  &:first-child{
    margin-top: 20px;
  }
}
:global(.ivu-card-head) {
  padding: 0;
  height: 30px;
  padding-left: 10px;
  background-color: rgba(0, 102, 0, 0.349019607843137);
  p{
    line-height: 30px;
    height: 30px;
    color: #fff;
  }
}
:global(.ivu-card) {
  :global(.ivu-card-body) {
    background-color: rgba(0, 102, 0, 0.1);
    padding-left:80px;
    li {
      font-size: 13px;
      cursor: pointer;
      &:hover {
        color: rgba(0, 102, 0, 0.349019607843137);
      }
    }
  }
}
</style>
