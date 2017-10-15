<template>
	<div class="tableCheck">
		<Tabs :animated="false"  style="width:1000px;margin: 0 auto; " >
	        <Tab-pane label="客服跟进记录">
	        	<Table highlight-row :columns="table.columns1" :data="data1"  border ></Table>
            <Page show-total :total="count1" :pageSize=5 show-elevator style="text-align: center;margin-top: 20px;" @on-change="change1"></Page>
	        </Tab-pane>
	        <Tab-pane label="客户参加活动记录">
	        	<Table highlight-row :columns="table.columns2" :data="data2" ></Table>
            <Page show-total :total="count2" :pageSize=5 show-elevator style="text-align: center; margin-top: 20px;" @on-change="change2"></Page>
	        </Tab-pane>
	        <Tab-pane label="签约单记录">
	        	<Table highlight-row :columns="table.columns3" :data="data3"></Table>
            <Page show-total :total="count3" :pageSize=5 show-elevator style="text-align: center;margin-top: 20px;" @on-change="change3"></Page>
	        </Tab-pane>
	        <Tab-pane label="会员充值记录">
	        	<Table highlight-row :columns="table.columns4" :data="data4"></Table>
            <Page show-total :total="count4" :pageSize=5 show-elevator style="text-align: center;margin-top: 20px;" @on-change="change4"></Page>
	        </Tab-pane>
    	</Tabs>
	</div>
</template>

<script>
  import { queryFollowRecord } from '@/api/memberManage/insertCusFollow'
  import { querySingleRecharge } from '@/api/memberManage/queryHistory'
  import { getCustomerActivity } from '@/api/memberManage/getCustomerActivity'
  import { activityState, contactWay } from '@/api/memberManage/state'
export default {
  props: {
    cardId: {
      type: String,
      default: ''
    },
    customerId: {
      type: String,
      default: ''
    }
  },
  created() {
    this.activityState = activityState
    this.contactWay = contactWay
  },
  data() {
  	return {
  	  table: { //table参数配置
	  	columns1: [ //客户跟进记录
	  		{
	        type: 'index',
	        width: 60,
	        align: 'center',
	        title: '序号'
	      },
	  		{
	        title: '跟进时间',
	        key: 'followTime',
	        align: 'center',
	        width: 235
	      },
	  		{
	        title: '本次跟进内容',
	        key: 'followContent',
	        align: 'center',
	        width: 235
	      },
	   	  {
	        title: '本次获取有价值的内容',
	        key: 'valuableContent',
	        align: 'center',
	        width: 235
	      },
	      {
	        title: '联系方式',
	        align: 'center',
	        width: 235,
          render: (h, params) => {
	          let that = this
	          return h('div', [
	            h('span', {
              }, that.contactWay[params.row.contactWay])
            ])
          }
	      }
	  	],
	  	columns2: [ //客户参加活动记录
	  		{
	        type: 'index',
	        width: 60,
	        align: 'center',
	        title: '序号'
	      },
	  		{
	        title: '活动时间',
	        key: 'starttime',
	        align: 'center',
	        width: 200
	      },
	  		{
	        title: '活动内容',
	        key: 'activityname',
	        align: 'center',
	        width: 185
	      },
	   	  {
	        title: '活动类型',
	        key: 'type',
	        align: 'center',
	        width: 185
	      },
	      {
	        title: '活动状态',
	        align: 'center',
	        width: 185,
          render: (h, params) => {
	          let that = this
            return h('div', [
              h('span', {
              }, that.activityState[params.row.type])
            ])
          }
	      },
	      {
	        title: '出席情况',
	        key: 'tel',
	        align: 'center',
	        width: 185
	      }
	  	],
	  	columns3: [ //客户参加活动记录
	  		{
	        type: 'index',
	        width: 60,
	        align: 'center',
	        title: '序号'
	      },
	  		{
	        title: '签约开始时间',
	        key: 'time',
	        align: 'center',
	        width: 200
	      },
	  		{
	        title: '签约单类别',
	        key: 'content',
	        align: 'center',
	        width: 185
	      },
	   	  {
	        title: '签约金额（元）',
	        key: 'priceContent',
	        align: 'center',
	        width: 185
	      },
	      {
	        title: '签约单状态',
	        key: 'tel',
	        align: 'center',
	        width: 185
	      },
	      {
	        title: '备注',
	        key: 'tel',
	        align: 'center',
	        width: 185
	      }
	  	],
	  	columns4: [ //客户充值记录
	  		{
	        type: 'index',
	        width: 100,
	        align: 'center',
	        title: '序号'
	      },
	  		{
	        title: '充值单号',
	        key: 'operationNo',
	        align: 'center',
	        width: 236
	      },
	  		{
	        title: '充值时间',
	        key: 'operationTime',
	        align: 'center',
	        width: 220
	      },
	   	  {
	        title: '充值金额',
	        key: 'operationNumber',
	        align: 'center',
	        width: 220
	      },
	      {
	        title: '操作人员',
	        key: 'operatorName',
	        align: 'center',
	        width: 220
	      }
	  	]
  	  },
  	  data1: [],
      data2: [],
      data3: [],
      data4: [],
      count1: null,
      count2: null,
      count3: null,
      count4: null,
      tab1: { // 客户跟进记录
  	    page: 1,
        pageSize: 10
      },
      tab2: { // 客户参加活动记录
        page: 1,
        pageSize: 10
      },
      tab3: { // 签约单记录
        page: 1,
        pageSize: 10
      },
      tab4: { // 会员充值记录
        page: 1,
        pageSize: 10
      }
  	}
  },
  methods: {
    change1(e) {
      this.tab1.page = e
      this._getFollowList()
    },
    change2(e) {
      this.tab2.page = e
    },
    change3(e) {
      this.tab3.page = e
    },
    change4(e) {
      this.tab4.page = e
    },
    _getMessage() {
      this._getFollowList()
      this._getSingleList()
      this._getCustomerActivity()
    },
    _getFollowList() {
      let query = {...this.tab1, cardId: this.customerId, customerId: this.cardId}
      queryFollowRecord(query).then(res => {
        this.data1 = res.data
        this.count1 = res.count
      })
    },
    _getSingleList() {
      let obj = {cardId: this.customerId, ...this.tab4}
      querySingleRecharge(obj).then(res => {
        this.data4 = res.data
        this.count4 = res.count
      })
    },
    _getCustomerActivity() {
      let obj = {customerid: this.cardId, ...this.tab2}
      getCustomerActivity(obj).then(res => {
        this.data2 = res.data
        this.count2 = res.count
      })
    }
  }
}
</script>

<style lang='less' scpoed>
.tableCheck {
	margin-top: 20px;
	padding-bottom: 20px;
	border: 1px dotted #ccc;
}
</style>
