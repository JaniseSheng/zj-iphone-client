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
       <FormItem label="用户名 UserName" prop="name">
         <Input v-model="formValidate.name" placeholder="不能包含特殊符合：！@#￥……%&*？"></Input>
       </FormItem>
       <FormItem label="登录密码 PassWord" prop="name">
         <Input v-model="formValidate.name" placeholder="密码长度至少 8 位，至少包含1位大写字母与1位数字"></Input>
       </FormItem>
       <FormItem label="确认密码 Confirm PW" prop="name">
         <Input v-model="formValidate.name" placeholder="请再次输入密码"></Input>
       </FormItem>
       <FormItem label="用户姓名 name" prop="name">
         <Input v-model="formValidate.name" placeholder="请输入用户姓名"></Input>
       </FormItem>
       <FormItem label="联系电话 Cellphone" prop="name">
         <Input v-model="formValidate.name" placeholder="请输入联系电话"></Input>
       </FormItem>
       <FormItem label="邮箱地址 E-mail" prop="name">
         <Input v-model="formValidate.name" placeholder="请输入邮箱地址"></Input>
       </FormItem>
       <FormItem label="联系地址 Address" prop="name">
         <Select v-model="model6" style="display: inline-block;width:80px;">
           <Option value="beijing">北京市</Option>
           <Option value="shanghai" disabled>上海市</Option>
           <Option value="shenzhen">深圳市</Option>
         </Select>
         <Input v-model="formValidate.name" placeholder="请输入联系地址" style="display:inline-block;width:230px;margin-left: 5px;"></Input>
       </FormItem>
       <FormItem label="结算币种 E-Currency" prop="name">
         <Select v-model="model6">
           <Option value="beijing">北京市</Option>
           <Option value="shanghai" disabled>上海市</Option>
           <Option value="shenzhen">深圳市</Option>
         </Select>
       </FormItem>
       <FormItem label="验证码 Code" prop="name">
         <Row>
           <Col span="12"><Input v-model="formValidate.name" placeholder="请输入联系地址" style="width:80%;"></Input></Col>
           <Col span="6">
            <img src="../../assets/logo.jpg" class="imgCode">
           </Col>
           <Col span="6" >
            <span class="checkCode">看不清</span>
           </Col>
         </Row>
       </FormItem>
       <CheckboxGroup v-model="fruit" style="text-align: center">
         <Checkbox label="我已仔细阅读并同意”相关条款"></Checkbox>
       </CheckboxGroup>
     </Form>
     <Button type="success" style="width: 80%;margin-top: 30px;margin-left:60px;">确认提交</Button>
 </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      formValidate: {
        name: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    exit() {
      this.$router.push({
        name: '0'
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
      height:30px;
      vertical-align: middle;
    }
    :global(.checkCode:hover) {
      cursor: pointer;
      color: @primary-color;
    }
  }
</style>
