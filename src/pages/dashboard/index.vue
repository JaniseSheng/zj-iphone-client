<template>
  <div class="w-contaioner">
    <div :class="$style.header" class='w-wrapper'>
      <div data-item='logo'>
        <img src="../../assets/logo.jpg" alt="" style="height: 36px">
      </div>
      <p>
        <Button type='info' style='margin-right: 24px'>前去选择服务</Button>
        <Button type='warning' @click="register">注册</Button>
        <Button type='success' @click="login">登陆</Button>
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
            <Tag style="height: auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
            </Tag>
            <Tag style="height: auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
            </Tag>
            <Tag style="height: auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
            </Tag>
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
            <Tag style="height: auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
            </Tag>
            <Tag style="height: auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
            </Tag>
            <Tag style="height: auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
            </Tag>
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
            <Tag style="height: auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
            </Tag>
            <Tag style="height: auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
            </Tag>
            <Tag style="height: auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
            </Tag>
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
            <Tag style="height: auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
            </Tag>
            <Tag style="height: auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
            </Tag>
            <Tag style="height: auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
            </Tag>
          </ul>
        </Card>
        </Col>
      </Row>

    </div>
    <div class="login-wrapper">
      <Modal :class="$style.login" v-model="loginModel" width="480" >
        <p slot="header" style="text-align:center">
          <span>用户登录</span>
        </p>
        <div style="text-align:center">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user" style="width:400px;">
              <Input type="text" v-model="formInline.user" placeholder="Username" >
              <span slot="prepend">用户名</span>
              </Input>
            </FormItem>
            <FormItem prop="password" style="width:400px;">
              <Input type="password" v-model="formInline.password" placeholder="Password">
              <span slot="prepend">密码</span>
              </Input>
            </FormItem>
            <FormItem prop="password" style="width:400px;">
              <Row>
                <Col span="12">
                <Input v-model="formInline.input" placeholder="请输入右侧验证码"></Input>
                </Col>
                <Col span="8">
                  <img src="../../assets/logo.jpg" class="imgCode">
                </Col>
                <Col span="4">
                  <span class="checkCode" @click="checkCode">换一张</span>
                </Col>
              </Row>
            </FormItem>
          </Form>
          <Row style="line-height: 20px;height: 20px;">
            <Col span="12">
            <CheckboxGroup v-model="formInline.fruit" style="text-align: left;padding-left: 20px;vertical-align: middle;">
              <Checkbox label="下次登录免输密码"></Checkbox>
            </CheckboxGroup>
            </Col>
            <Col span="10" style="text-align: right">
              <span class="register" @click="register">免费注册</span>
            </Col>
          </Row>
          <Button type="success" long @click="enter">登录</Button>
        </div>
        <div slot="footer">
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
  import {
    mapActions
  } from 'vuex'

  export default {
    data() {
      return {
        loginModel: false,
        formInline: {
          user: '',
          password: '',
          input: '',
          fruit: []
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      register() {
        this.$router.push({
          name: '1'
        })
      }, //注册
      login() { // 登录模态框
        this.loginModel = true
      },
      checkCode() { // 换验证码图片
      },
      enter() {
        this.$router.push({
          name: '2-2'
        })
      }
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
  .login {
    :global(.ivu-input-group-prepend) {
      width: 80px;
      background: @tooltip-color;
    }
    :global(.ivu-input) {
      height:40px;
    }
    :global(.imgCode) {
      width: 80%;
      height:40px;
      vertical-align: middle;
    }
    :global(.ivu-btn) {
      width: 90%;
      margin-top:20px;
      height: 40px;
      font-size: 20px;
      line-height:4px;
    }
    :global(.checkCode) {
      display: inline-block;
      padding: 5px;
    }
    :global(.checkCode:hover) {
      cursor: pointer;
      color: @primary-color;
    }
    :global(.register) {
      font-size: 14px;
      text-align: right;
    }
    :global(.register) {
      cursor: pointer;
      color: @primary-color;
    }
  }
</style>
