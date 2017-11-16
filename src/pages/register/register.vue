<template>
<div class="register w-contaioner">
  <div :class="$style.header" class='w-wrapper'>
    <div data-item='logo'>
      <img src="../../assets/logo.jpg" alt="" style="height: 36px">
    </div>
    <p>
      <Button type='success' @click="exit">退出</Button>
    </p>
  </div>
  <div class="form" style="width: 500px;margin: 0 auto;padding: 40px 0;">
    <Form :class="$style.formData" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="180">
      <FormItem label="用户名 UserName" prop="userName">
        <Input v-model="formValidate.userName" placeholder="不能包含特殊符合：！@#￥……%&*？"></Input>
      </FormItem>
      <FormItem label="登录密码 PassWord" prop="require">
        <Input v-model="formValidate.loginPwd_0" type='password' placeholder="密码长度至少 8 位，至少包含1位大写字母与1位数字"></Input>
      </FormItem>
      <FormItem label="确认密码 Confirm PW" prop="require">
        <Input v-model="formValidate.loginPwd" type='password' placeholder="请再次输入密码"></Input>
      </FormItem>
      <FormItem label="用户姓名 name" prop="require">
        <Input v-model="formValidate.fullName" placeholder="请输入用户姓名"></Input>
      </FormItem>
      <FormItem label="联系电话 Cellphone" prop="require">
        <Input v-model="formValidate.iphone" placeholder="请输入联系电话"></Input>
      </FormItem>
      <FormItem label="详细地址 address" prop="require">
        <Input v-model="formValidate.address" placeholder="请输入详细地址"></Input>
      </FormItem>
      <FormItem>
        <Checkbox v-model="fruit">我已仔细阅读并同意</Checkbox><span @click="showClause" style="cursor:pointer;color:#2891e2;margin-left:-5px;"><相关条款></span>
      </FormItem>
    </Form>
    <Button type="success" style="width: 80%;margin-top: 30px;margin-left:60px;" @click='handleSubMit'>确认提交</Button>
    <Modal v-model="clause" width="550" :closable="false" :class="$style.model">
      <p class="header" slot="header">
        <span>注册条款</span>
      </p>
      <div class="content" style="text-align:left;font-size: 13px;">
        <p>退款政策</p>
        <p>100％退款保证：</p>
        <p>全球IPhone解锁平台上的服务均能享受100％退款保证。退款保证服务是为了让用户有更好的购物体验，信任我们的服务。快和稳定是我们提供服务的宗旨，在其他家服务暂停的时候我们还能按时完成订单的解锁申请。</p>
        <p>为了保护客户及全球IPhone解锁平台的共同合法权益，退款政策并不适用于以下情况:</p>
        <ol>
          <li>1.如果服务器显示iPhone已经解锁（可通过GSX查询服务查知是否已经解锁成功）</li>
          <li>2.客户提供错误IMEI或错误的运营商导致无法解锁</li>
          <li>3.手机本身质量问题【如组装机（俗称板机）、换过套件、cpu等机子本身质量问题等等】导致解锁后无法激活手机的问题，不在我们的服务范围</li>
        </ol>
        <p>受运营商政策、服务器状态、国外节假日、订单数量等因素影响，各运营商不同时期需要的解锁时间可能不同，解锁时间延迟常有发生，且无法控制。全球IPhone解锁平台提供的解锁时间为正常状况下的参考时间，一旦提交解锁申请后，便不能中途取消或者退款，请务必看清楚条例再提交订单</p>
      </div>
      <div slot="footer">
        <Button size="large" long @click="agree">同意</Button>
      </div>
    </Modal>
  </div>
</div>
</template>

<script>
import {api_register} from '@/api'
import {empty} from '@/lib/validator'
export default {
  data() {
    return {
      clause: false, // 条款
      fruit: false, // 是否同意条款
      formValidate: {
        fullName: 'janisesheng',
        sex: '2',
        province: '中国',
        address: 'baoshan shanghai',
        loginPwd_0: '123456',
        loginPwd: '123456',
        userName: 'janise001',
        iphone: '189123'
      },
      ruleValidate: {
        fullName: empty(),
        sex: empty(),
        province: empty(),
        address: empty(),
        loginPwd_0: empty(),
        loginPwd: empty(),
        userName: empty(),
        iphone: empty()
      }
    }
  },
  methods: {
    exit() {
      this.$router.push({
        name: '0'
      })
    },
    showClause() {
      this.clause = true
    },
    agree() {
      this.fruit = true
      this.clause = false
    },
    // 提交注册
    handleSubMit(){
      if (this.formValidate.loginPwd_0 != this.formValidate.loginPwd) {
        this.$Message.error('两次密码输入不一致')
        return
      }
      api_register(this.formValidate).then(res=> {
        console.log(res);
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
.formData {
    :global(.imgCode) {
        width: 80%;
        height: 30px;
        vertical-align: middle;
    }
    :global(.checkCode:hover) {
        cursor: pointer;
        color: @primary-color;
    }
}
.model {
    :global(.ivu-modal-header) {
        border-bottom: none;
        padding: 8px 10px;
        background-color: rgba(51, 204, 255, 1);
        p {
            color: #fff;
            text-align: center;
            font-size: 18px;
            font-weight: 800;
        }
    }
    :global(.ivu-modal-content) {
        background: #ccc;
    }
    :global(.content) {
        p {
            margin-top: 12px;
        }
    }
    :global(.ivu-modal-footer) {
        border-top: none;
    }
    :global(.ivu-modal-footer) {
        text-align: center;
        padding-bottom: 20px;
        margin-top: 20px;
    }
    :global(.ivu-btn) {
        background: rgba(51, 204, 255, 1);
        color: #fff;
        font-size: 20px;
        width: 40%;
        margin: 0 auto;
    }
}
</style>
