<template>
  <div class="organization_ui">
    <Breadcrumb class="title-nav" separator=">">
      <Breadcrumb-item v-for="(item, index) in navs" :key='index'><span style="cursor: pointer" @click="handleClickNav(item.id, index)">{{item.label}}</span></Breadcrumb-item>
    </Breadcrumb>
    <ul class="container-wrapper">
      <li class='org-item' type="dashed" v-for='item in orgLists' @click="handleClickOrg(item)">{{item.name}}</li>
      <li class='user-item' type="dashed" v-for='item in userLists' @click="handleClickUser(item)">
        <div class="img-box">
          <img :src="item.avatar" alt="">
        </div>
        <label style="font-size: 12px; display: inline-block;">
          <p style="margin-bottom: 4px">{{item.name}}</p>
          <p>{{item.position}}</p>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  getDepartmentById
} from '@/api/systemManage'
export default {
  data() {
    return {
      navs: [{
        id: '1',
        label: '华晚投资管理（北京）有限公司'
      }],
      orgLists: [], //组织列表
      userLists: [] //用户列表
    }
  },
  created() {
    this.getOrganizations(1)
  },
  methods: {
    getOrganizations(id) {
      return getDepartmentById({
        id: id
      }).then(res => {
        this.orgLists = res.org
        this.userLists = res.user
        return res
      })
    },
    //选择面包屑导航
    handleClickNav(id, index) {
      this.getOrganizations(id).then(res => {
        this.navs.splice(index + 1)
      })
    },
    //选择组织
    handleClickOrg(data) {
      this.getOrganizations(data.dingId).then(res => {
        this.navs.push({
          id: data.dingId,
          label: data.name
        });
      })
    },
    //选择用户（发送时间委托）
    handleClickUser(item) {
      this.$emit('userClick', item)
    }
  }
}
</script>

<style lang='less' scoped>
@import "../../base/styles/mythemes.less";
@import "../../base/styles/myfun.less";
.title-nav {
    margin-bottom: 6px;
    font-size: 14px;
    > span:nth-last-of-type(n+2) {
      color: fade(@primary-color, 80%);
      transition: color 0.2s linear,border 0.2s linear;
      &:hover {
        color: @primary-color;
      }
    }
    > span:last-of-type {
      color: fade(@text-color, 80%);;
    }
}
.org-item,
.user-item {
    cursor: pointer;
    padding: 6px 12px;
    margin-bottom: 6px;
    background-color: transparent;
    border: 1px dashed transparent;
    transition: background-color 0.2s linear,border 0.2s linear;
    &:hover {
        background-color: fade(@primary-color, 20%);
        border: 1px dashed fade(@primary-color, 80%);
    }
}
.img-box {
    flex-shrink: 0;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    float: left;
    margin-right: 6px;
    overflow: hidden;
    img {
        width: 100%;
    }
}
</style>
