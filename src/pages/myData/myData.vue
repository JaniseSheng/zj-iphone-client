<template>
  <div class="myDate" :class="$style.myDate">
    <Row>
       <Col span="16">
         <div class="avatar">
           <img src="../../assets/logo.jpg" alt="">
         </div>
         <span class="name">even_gui</span>
         <Icon type="locked" class="icon-lock"></Icon>
         <span class="leavel">lv 5</span>
       </Col>
       <Col span="8">
         <message :message="message" style="margin-left: 120px;"></message>
       </Col>
   </Row>
  </div>
</template>

<script>
import message from '@/components/message/message'
  export default {
    data() {
      return {
        message: [
          {
            bgColor: 'rgb(153, 0, 153)',
            text: '账户情况',
            num: '1231'
          }
        ]
      }
    },
    components: {
      message
    }
  }
</script>

<style lang="less" module>
.myDate {
  padding: 20px;
  background: rgba(142, 206, 142, 0.149019607843137);
  :global(.avatar) {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    img {
      width: 100%;
      height: 100%;
    }
  }
  :global(.name) {
    vertical-align: bottom;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    width: 100px;
    background-color: rgba(0, 0, 0, .4);
    padding: 4px 20px;
    border-radius: 4px;
  }
  :global(.icon-lock) {
    vertical-align: bottom;
    font-size: 28px;
    margin-left: 20px;
    color: deeppink;
  }
  :global(.leavel) {
    font-size: 24px;
    vertical-align: bottom;
    margin-left: 30px;
  }
}

</style>
