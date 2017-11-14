<template>
  <div class="order" :class="$style.order">
    <header class="header">
      <span>快捷搜索关键字：</span>
      <Button>GSX</Button>
      <Button>AT&T</Button>
      <Button>ID</Button>
      <Button>SN</Button>
      <Button>白名单</Button>
    </header>
    <div class="body">
      <div class="search">
        <span>关键字:</span>
        <Input v-model="value" placeholder="请输入服务关键字、服务代码" style="width: 300px;margin-left: 20px;"></Input>
      </div>
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      submitOrder() {
        this.$router.push({
          name: '2-7'
        })
      }
    }
  }
</script>

<style lang="less" module>
  .order {
    :global(.header) {
      margin-top: 20px;
    }
    :global(.ivu-btn) {
      width: 100px;
      margin-right: 10px;
      background: rgba(153, 0, 153, 1);
      color: #fff;
      span {
        font-weight: bold;
      }
    }
    :global(.body) {
      margin-top: 20px;
      margin-bottom: 20px;
      :global(.search) {
        margin-bottom: 20px;
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
    }
  }
</style>
