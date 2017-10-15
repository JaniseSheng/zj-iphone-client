<template>
<div class="menu-wrapper">
  <div class="menu-block" data-theme='primary'>
    <div class="crm-logo">
      <img src="../assets/logo.png" alt="">
      <p>信息管理系统</p>
    </div>
    <div class='crm-menu'>
      <div class="user-info">
        <img :src="userInfo.avatar" alt="">
        <p class='name'>{{userInfo.nikename}}，欢迎你<Button type="text" size='large' icon="power" @click="$router.push({name: 'login'})"></Button></p>
      </div>
      <Menu mode="horizontal" theme='primary' :active-name="$route.name" @on-select='handleSelectRoute'>
        <Menu-item name="0">
          <Icon :type="routes[0].icon"></Icon>
          {{routes[0].text}}
        </Menu-item>
        <Submenu v-for='(item, index) in 7' :name="'menu-' + item" :key='index'>
          <template slot="title">
                  <Icon :type="routes[item].icon"></Icon>
                  {{routes[item].text}}
              </template>
          <Menu-item :name="item + '-' + key" v-for="(value, key) in routes[item]" :key='value.text' v-if='value.menu'>{{value.text}}</Menu-item>
        </Submenu>
      </Menu>
    </div>
  </div>
</div>
</template>

<script>
import {routes} from '@/lib/jsfactory'
import storage from '@/lib/storagejs'
export default {
  data() {
    return {
      routes,
      userInfo: null
    }
  },
  created() {
    this.userInfo = storage.get('userInfo')
  },
  methods: {
    handleSelectRoute(name) {
      console.log(name)
      this.$router.push({
        name: name
      })
    }
  }
}
</script>

<style lang="less">
@import "../base/styles/mythemes.less";

.menu-wrapper {
    background-color: @primary-color;

}
.crm-logo {
    text-align: center;
    font-size: 18px;
    padding-bottom: 12px;
}
.menu-block {
    //background-color: transparent;
    min-width: 1200px;
    max-width: 1366px;
    margin: 0 auto;
    padding: 12px 24px 0;
    border-bottom: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    &:after {
        display: none !important;
        height: 0;
    }
    &[data-theme='primary'] {
        color: #fff;
    }
}
.crm-menu {
    .ivu-menu > li {
        padding: 0 10px !important;
        &:last-of-type {
            padding-right: 0 !important;
        }
    }
}
.user-info {
    text-align: right;
    margin-bottom: 6px;
    display: flex;
    justify-content: flex-end;
    .name {
        margin-left: 12px;
        display: inline-block;
        line-height: 36px;
        > span {
            padding: 0 6px;
        }
    }
    > img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
    button {
      color: @tooltip-color;
    }
}
</style>
