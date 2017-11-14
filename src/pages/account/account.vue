<template>
  <div class="account">
    <div class="search">
      <Row>
       <Col span="8" style="text-align:center;">
            <span>订单开始时间：</span>
           <DatePicker v-model="searchParams.startTime" ref="startTime" type="date" placeholder="请选择订单开始时间" style="width: 200px" clearable @on-change="startTime" ></DatePicker>
       </Col>
        <Col span="8"  style="text-align:center;">
             <span>订单结束时间：</span>
            <DatePicker  v-model="searchParams.endTime" ref="endTime" type="date" placeholder="请选择订单结束时间" style="width: 200px" clearable  @on-change="endTime"></DatePicker>
        </Col>
   </Row>
   <div class="searchBtn">
      <Button type="primary" icon="ios-search" @click="search">查询</Button>
      <Button icon="refresh" style="margin-left: 20px;" @click="refresh">重置</Button>
   </div>
    </div>
    <div class="table">
      <div class="export">
          <Button type="success" large>导出</Button>
      </div>
      <Table ref="selection" :columns="columns4" :data="data1"></Table>
      <Page show-total show-elevator :total="100" style="text-align:center;margin-top:30px;"></Page>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchParams: {
          startTime: '',
          endTime: ''
        },
        columns4: [
                   {
                       type: 'selection',
                       width: 60,
                       align: 'center'
                   },
                   {
                       title: '下单日期',
                       key: 'time',
                       width: 100,
                       align: 'center'
                   },
                   {
                       title: 'IMEI',
                       key: 'IMEI',
                       width: 180,
                       align: 'center'
                   },
                   {
                       title: '订单状态',
                       key: 'status',
                       width: 100,
                       align: 'center'
                   },
                   {
                       title: '订单金额',
                       key: 'price',
                       width: 120,
                       align: 'center'
                   },
                   {
                       title: '是否扣点',
                       key: 'buckle',
                       width: 120,
                       align: 'center'
                   },
                   {
                       title: '返回扣点',
                       key: 'returnBuckle',
                       width: 120,
                       align: 'center'
                   },
                   {
                       title: '返还到账时间',
                       key: 'priceTime',
                       width: 140,
                       align: 'center'
                   },
                   {
                       title: '实际返还金额',
                       key: 'price',
                       width: 140,
                       align: 'center'
                   },
                   {
                       title: '备注信息',
                       key: 'note',
                       align: 'center',
                       ellipsis: true
                   }
               ],
               data1: [
                   {
                       time: '2017-2-05',
                       IMEI: 359214071815785,
                       status: '完成',
                       price: '8000.00',
                       buckle: '是',
                       returnBuckle: '否',
                       priceTime: '2017-3-25 14:24:47',
                       note: '你哈啊按时发生的放松放松发送'
                   },

                       {
                           time: '2017-2-05',
                           IMEI: 359214071815785,
                           status: '完成',
                           price: '8000.00',
                           buckle: '是',
                           returnBuckle: '否',
                           priceTime: '2017-3-25 14:24:47',
                           note: '你哈啊按时发生的放松放松发送'
                       },
                           {
                               time: '2017-2-05',
                               IMEI: 359214071815785,
                               status: '完成',
                               price: '8000.00',
                               buckle: '是',
                               returnBuckle: '否',
                               priceTime: '2017-3-25 14:24:47',
                               note: '你哈啊按时发生的放松放松发送'
                           },
                               {
                                   time: '2017-2-05',
                                   IMEI: 359214071815785,
                                   status: '完成',
                                   price: '8000.00',
                                   buckle: '是',
                                   returnBuckle: '否',
                                   priceTime: '2017-3-25 14:24:47',
                                   note: '你哈啊按时发生的放松放松发送'
                               }
               ]
      }
    },
    methods: {
      startTime(e) {
        this.searchParams.startTime = e
      },
      endTime(e) {
        this.searchParams.endTime = e
      },
      search() {
        console.log(`search`)
      },
      refresh() {
        this.searchParams.startTime = ''
        this.searchParams.endTime = ''
      }
    }
  }
</script>

<style style="less" scoped="">
.search {
  padding: 30px 0;
}
.searchBtn {
  text-align: center;
  margin-top: 20px;
}
.export {
  margin-bottom: 10px;
}
</style>
