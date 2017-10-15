<template>
   <Modal
    title="提示"
    v-model="show"
    width="420"
    height="250"
    class-name="vertical-center-modal"
    class="vertical-center">
    <div :class="[{'iconFont': !isError},{'icon-Error': isError},(icon)]" ></div>
    <div class="content-mask">
      <h1 :class="[{'isError': isError}, {'success': isSuccess}]">{{title}}</h1>
      <p v-for="item in message">{{item.title}} : {{item.value}}</p>
      <h1 v-if="sureMess" class="sure">{{sureMess}}</h1>
    </div>
    <div slot="footer">
      <slot></slot>
    </div>
  </Modal>
</template>

<script>
export default {
  props: {
    message: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    isError: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    },
    sureMess: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    showBox() {
      this.show = true
    },
    hideBox() {
      this.show = false
    }
  }
}
</script>

<style lang="less">
.ivu-btn {
  border: 1px solid #2891e2;
}
.ivu-modal-body {
  padding: 20px 28px;
}
.ivu-modal-header-inner {
  font-size: 18px;
}
.iconFont {
  font-size: 35px;
  float: left;
  color: #2891e2;
}
.content-mask {
  display: inline-block;
  padding-left: 20px;
  &> p:nth-child(2) {
    margin-top: 10px;
  }
  h1 {
    font-size: 16px;
  }
  p{
    font-size: 14px;
  }
}
.vertical-center {
  .ivu-modal-header-inner {
        width: 25%;
    }
}
.isError {
  color: #f75f2a;
}
.success {
  color: #2891e2;
}
.icon-Error {
  color: #f75f2a;
  font-size: 35px;
  float: left;
}
.sure {
  font-size: 16px;
}
</style>
