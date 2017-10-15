<template>
  <div class="message">

    <div class="vipInfo" v-if="cardInfo && cardInfo.cardId">
      <h2>会员卡基本信息</h2>
      <Row class="row">
        <Col span="8">
          <div class="line">
            <span class="text">会员卡号 : </span>
            <span>{{cardInfo.cardId}}</span>
          </div>
          <div class="line">
            <span class="text">卡有效期 : </span>
            <span>{{cardInfo.validEnd}}</span>
          </div>
          <div class="line">
            <span class="text">消费金额 : </span>
            <span>{{cardInfo.consumeSum}}</span>
          </div>
          <div class="line">
            <span class="text">客服中心 : </span>
            <span>{{cardInfo.orgName}}</span>
          </div>
        </Col>
        <Col span="8">
          <div class="line">
            <span class="text">卡类型 : </span>
            <span>{{cardType[cardInfo.type]}}</span>
          </div>
          <div class="line">
            <span class="text">现金余额 : </span>
            <span>{{cardInfo.rechargeSum}}</span>
          </div>
          <div class="line">
            <span class="text">消费金额 : </span>
            <span>{{cardInfo.consumeSum}}</span>
          </div>
          <div class="line">
            <span class="text">备注 : </span>
            <span></span>
          </div>
        </Col>
        <Col span="8">
          <div class="line">
            <span class="text">卡状态 : </span>
            <span>{{state[cardInfo.state]}}</span>
          </div>
          <div class="line">
            <span class="text">充值总金额 : </span>
            <span>{{cardInfo.rechargeSum}}</span>
          </div>
          <div class="line">
            <span class="text">充值次数 : </span>
            <span>{{cardInfo.rechargeCount}}</span>
          </div>
        </Col>
      </Row>
    </div>
    <div class="vipInfo" v-if="baseMessage">
      <h2>会员基本信息</h2>
      <Row class="row">
        <Col span="8">
          <div class="line">
            <span class="text">姓名 : </span>
            <span>{{cusInfo.customerName}}</span>
          </div>
          <div class="line">
            <span class="text">email : </span>
            <span>{{cusInfo.email}}</span>
          </div>
          <div class="line">
            <span class="text">备注 : </span>
            <span>{{cusInfo.note}}</span>
          </div>
        </Col>
        <Col span="8">
          <div class="line">
            <span class="text">短信电话 : </span>
            <span>{{cusInfo.mobile}}</span>
          </div>
          <div class="line">
            <span class="text">其他电话 : </span>
            <span>{{cusInfo.tel}}</span>
          </div>
        </Col>
        <Col span="8">
          <div class="line">
            <span class="text">出生年月 : </span>
            <span>{{cusInfo.birthday}}</span>
          </div>
          <div class="line">
            <span class="text">联系地址 : </span>
            <span>{{cusInfo.address}}</span>
          </div>
        </Col>
      </Row>
    </div>
    <div class="vipInfo" v-if="isProperty">
      <h2>会员属性</h2>
      <Row class="row">
        <Col span="8">
        <div class="line">
          <span class="text1">特价会员细化 : </span>
          <span>{{property.customerAttribute}}</span>
        </div>
        <div class="line">
        </div>
        <div class="line">
          <span class="text1">本月重点跟进客户 : </span>
          <span>{{['否', '是'][property.focusOn]}}</span>
        </div>
        </Col>
        <Col span="8">
          <div class="line">
            <span class="text1">会员直接联系人 : </span>
            <span>{{property.directContact}}</span>
          </div>
          <div class="line">
            <span class="text1">直接联系人电话 : </span>
            <span>{{property.directContactPhone}}</span>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  import {state, cardType} from '@/api/memberManage/state'
  export default {
    props: {
      baseMessage: {
        type: Boolean,
        default: true
      },
      cardInfo: {
        type: Object,
        default() {
          return {}
        }
      },
      cusInfo: {
        type: Object,
        default() {
          return {}
        }
      },
      isProperty: {
        type: Boolean,
        default: false
      },
      property: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    created() {
      this.state = state
      this.cardType = cardType
    }
  }
</script>

<style lang='less' scoped>
  .line {
    margin-bottom: 20px;
    .text {
      display: inline-block;
      width: 120px;
      text-align: right;
    }
    .text1 {
      display: inline-block;
      width: 120px;
      text-align: right;
    }
  }
  .title {
    padding: 25px 23px;
    border-bottom: 1px solid #ddd;
  }

  .vipInfo {
    padding: 23px 44px 0 23px;
  }

  .infoMessage {
    padding: 23px 44px;
    h2 {
      font-size: 16px;
    }
  }
  .from {
    margin-top: 20px;
  }
</style>

<style lang='less'>
  .ivu-breadcrumb > span {
    font-size: 16px;
  }

  .row {
    margin-top: 20px;
    border-bottom: 1px dotted #ccc;
  }

  .ivu-form .ivu-form-item-label {
    font-size: 14px;
    text-align: right;
  }

  .ivu-btn {
    width: 100px;
  }
</style>
