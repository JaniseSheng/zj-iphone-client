<template>
  <div class="w-contaioner">
    <div :class="$style.header" class='w-wrapper'>
      <article data-item='logo'>
        <img src="../../assets/logo.jpg" alt="" style="height: 36px">
      </article>
      <article :class="$style.message">
        <message :message="message"></message>
      </article>
      <article :class="$style.user">
        <div class="avater">
          <img src="../../assets/logo.jpg" alt="">
          <span>这是谁</span>
          <Button type='success' @click="signOut">退出</Button>
        </div>
      </article>
    </div>
    <Menu mode="horizontal" :theme="theme1" :active-name="$route.name" :class="$style.menu" @on-select="selectMenu">
      <MenuItem name="2-1">
        Hot  最热推荐
      </MenuItem>
      <MenuItem name="2-2">
        Order  提交订单
      </MenuItem>
      <MenuItem name="2-3">
        History  历史订单
      </MenuItem>
      <MenuItem name="2-4">
        Account  交易记录
      </MenuItem>
      <MenuItem name="2-5">
        Data  我的资料
      </MenuItem>
      <MenuItem name="2-6">
        Service  产品服务
      </MenuItem>
    </Menu>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import message from '@/components/message/message'
  export default {
    data() {
      return {
        theme1: 'dark',
        message: [
          {
            bgColor: 'blue',
            text: '账户情况',
            num: '1231'
          },
          {
            bgColor: 'green',
            text: '等待',
            num: '1231'
          },
          {
            bgColor: 'pink',
            text: '进程中',
            num: '1231'
          }
        ]
      }
    },
    methods: {
      selectMenu(e) {
        const name = e
        this.$router.push({
          name
        })
      },
      signOut() {
        this.$router.push({
          name: '0'
        })
      }
    },
    components: {
      message
    }
  }
</script>

<style lang='less' module>
  @import "../../base/styles/mythemes.less";
  .header {
    height: 80px;
  }
  .header {
    position: relative;
    display: flex;
  }
  .message {
    margin-left: 50px;
  }
  .user {
    float: right;
    position: absolute;
    right: 20px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
    :global(.ivu-btn) {
      margin-left: 30px;
    }
  }
  .menu {
    height: 30px;
    line-height: 30px;
    :global(.ivu-menu-item) {
      width: 200px;
    }
    :global(.ivu-menu-item-active.ivu-menu-item-selected) {
      color: @body-background;
      background: @primary-color;
    }
  }
</style>
