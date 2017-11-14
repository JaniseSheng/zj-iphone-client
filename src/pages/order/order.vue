<template>
  <div class="order" :class="$style.order">
    <Select v-model="model1" style="margin-top: 20px;">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <div class="message" style="margin-top:20px;">
      <Row >
        <Col span="11" style="margin-right: 50px;">
          <Card>
             <p slot="title">
                 ！重要提醒：请输入1个或N个<span style="color: red">"正确IMEI"</span>，IMEI为15位数字
             </p>
             <ul>
                <li class="info">
                  <span>！格式要求：多个IMEI，请以统一符号分隔，仅可使用“空格”“ ,”“;”</span>
                  <Button type="primary " style="margin-left: 60px;height: 25px;padding: 0 15px;" class="btn-ex">输入格式范例</Button>
                </li>
                 <li>
                  <Input v-model="queryItem.imei" type="textarea"  placeholder="请输入正确的IMEI..."></Input>
                 </li>
                 <li style="margin-top: 20px;padding: 0 10px;">
                   <Input v-model="value" placeholder="订单备注内容，以便查询" ></Input>
                 </li>
                 <li style="margin-top: 20px;padding: 0 10px;">
                   <Input v-model="value" placeholder="订单备注内容，以便查询" ></Input>
                 </li>
                 <li style="margin-top: 20px;padding: 0 10px;">
                   <Input v-model="value" placeholder="请输入验证码" style="width: 120px;"></Input>
                   <img src="../../assets/logo.jpg" alt="" style="width:80px;height:30px;vertical-align:middle;">
                   <a href="#" style="font-size:14px;">换一张</a>
                 </li>
                 <li style="text-align:center;margin-top: 20px;">
                   <Button type="primary" style="width: 60%; text-al">确认提交</Button>
                 </li>
                 </ul>
         </Card>
        </Col>
        <Col span="12">
          <Card>
             <p slot="title">
                    #提交服务确认#
             </p>
             <ul>
                <li class="info">
                  <p style="font-size: 16px;"><span class="headline">服务:</span><span style="color:#fff;font-weight:bold;">提交服务：#1001# GSX Carrier Checker 完全策略信息有锁无锁查运营商 快</span></p>
                </li>
                   <li class="info">
                     <span style="font-size: 16px;margin-right: 90px;"><span  class="headline">价格:</span><span style="color: red;font-weight:bold;">5.00RMB</span></span>
                    <span style="font-size: 16px;"><span  class="headlineTime">预约时间:</span><span  style="color: red;font-weight:bold;">1-3小时</span></span>
                   </li>
                   <ul class="list">
                     <li>Model : IPHONE 6,MM,64GB,GRAY</li>
                     <li>IMEI : XXXXXXXXXXXXXXX</li>
                     <li>Serial : F73PT1HXXXX</li>
                     <li>Wireless MAC Address : D81D72EXXXX</li>
                     <li>Find My iPhone : Off  IOS Version : 9.3.5</li>
                     <li>Warranty Status : Out Of Warranty (No Coverage)</li>
                     <li>Warranty Days : 0 remaining</li>
                     <li>FirstUnbrickDate : 07/24/15</li>
                     <li>Unbricked : false</li>
                     <li>Unlocked : tru</li>
                     <li>Registration Date : 07/23/15  Purchase Date : 06/22/15</li>
                     <li>Purchase Country : United States  Sold By : BEST BUY</li>
                     <li>InitialActivationPolicyDetails : US GSM/VZW N61/N56 Service Policy</li>
                     <li>AppliedActivationDetails : US GSM/VZW N61/N56 Service Policy</li>
                     <li>NextTetherPolicyDetails : US GSM/VZW N61/N56 Service Policy</li>
                     <li>UnlockDate : 04/18/16 Sim-Lock Status : Locked</li>
                   </ul>
                 </ul>
         </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryItem: {
        imei: ''
      },
      cityList:[
        {
        label: ' #1001# GSX Carrier Checker 完全策略信息有锁无锁查运营商 快 -- 5.00RMB-- 1~3小时',
        value: '1'
        },
        {
        label: ' #1001# GSX Carrier Checker 完全策略信息有锁无锁查运营商 快 -- 5.00RMB-- 1~3小时',
        value: '1'
        }
      ]
    }
  }
}
</script>

<style lang="less" module>
.order {
  :global(.message) {
    margin-top: 30px;
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
  :global(.ivu-card-body) {
    padding: 0;
    :global(.info) {
      font-size: 12px;
    }
    :global(.ivu-input-type) {
      :global(textarea) {
        min-height: 200px !important;
        max-height: 500px !important;
      }
    }
    :global(.info) {
      background: rgba(0, 102, 0, 0.349019607843137);
      padding: 8px 10px 8px 20px;
    }
    :global(.headline) {
      font-weight: bold;
      display: inline-block;
      width: 60px;
      text-align: left;
    }
    :global(.headlineTime) {
      width: 12px;
      text-align: left;
    }
    :global(.list) {
      padding-top: 10px;
      background: rgba(0, 102, 0, 0.1);
      li {
        font-size: 14px;
        color: rgb(107, 107, 107);
        padding-left: 20px;
      }
    }
  }
}
</style>
