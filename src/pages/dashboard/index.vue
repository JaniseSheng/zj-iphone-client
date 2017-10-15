<template>
<div class="w-contaioner">
  <div :class="$style.header" class='w-wrapper'>
    <div data-item='logo'>
      <img src="../../assets/logo.jpg" alt="" style="height: 36px">
    </div>
    <p>
      <Button type='info' style='margin-right: 24px'>前去选择服务</Button>
      <Button type='warning'>注册</Button>
      <Button type='success'>登陆</Button>
    </p>
  </div>
  <div class="w-wrapper">
    <Row>
         <Col span="12" style="padding-right: 6px">
           <Card>
             <p slot="title">
               <Icon type="ios-film-outline"></Icon>
               商圈热点
             </p>
             <ul>
               <Tag style="height: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo</Tag>
               <Tag style="height: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo</Tag>
               <Tag style="height: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo</Tag>
             </ul>
           </Card>
         </Col>
         <Col span="12" style="padding-left: 6px">
           <Card>
             <p slot="title">
               <Icon type="ios-film-outline"></Icon>
               联系方式
             </p>
             <ul>
               <Tag style="height: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo</Tag>
               <Tag style="height: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo</Tag>
               <Tag style="height: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo</Tag>
             </ul>
           </Card>
         </Col>
     </Row>
    <Row style='margin-top: 12px'>
      <Col span="12" style="padding-right: 6px">
        <Card>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            洽谈合作
          </p>
          <ul>
            <Tag style="height: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo</Tag>
            <Tag style="height: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo</Tag>
            <Tag style="height: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo</Tag>
          </ul>
        </Card>
      </Col>
      <Col span="12" style="padding-left: 6px">
        <Card>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            微信公众号
          </p>
          <ul>
            <Tag style="height: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo</Tag>
            <Tag style="height: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo</Tag>
            <Tag style="height: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo</Tag>
          </ul>
        </Card>
      </Col>
     </Row>

  </div>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex'
export default {
  data() {
    return {}
  }
}
</script>

<style lang='less' module>
@import "../../base/styles/mythemes.less";
.header {
    position: relative;
    display: flex;
    justify-content: space-between;
    &:after {
        content: "";
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 0;
        height: 1px;
        background-color: @border-color;
    }
}
</style>
