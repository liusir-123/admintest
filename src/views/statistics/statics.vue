<template>
  <div class="content-transparent ">
    <div class="navbar_fixed">
      <fixedBar @change="watch_dataChange"></fixedBar>
    </div>
    <div class="fiexd_content">
      <div class="wplane  paddingAll">
        <lineChart ref="lineChart"></lineChart>
      </div>
      <div class="wplane  paddingAll">
        <div class="flex_rowBetwen">
          <el-input
            style="width:250px;"
            size="mini"
            @keyup.enter="search" 
            placeholder="请输入搜索内容"
            v-model="tableSearch">
            <i slot="suffix" @click="search" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <el-table :data="tableData">
          <el-table-column prop="name" width="300px"  :label="tableTile[route]"></el-table-column>
          <el-table-column prop="address" label="PV"></el-table-column>
          <el-table-column prop="address" label="UV"></el-table-column>
          <el-table-column prop="address" label="IP"></el-table-column>
          <el-table-column prop="address" label="平均停留时长"></el-table-column>
          <el-table-column prop="address" label="百度爬虫"></el-table-column>
          <el-table-column prop="address" label="谷歌爬虫"></el-table-column>
          <el-table-column prop="address" label="其他爬虫"></el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="scope">
              <el-button @click="toDetail" type="text">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="t_c margin_t">
          <pagination style="margin:0 auto;" v-show="total>0" :total="total" :page.sync="dataQuery.page" @pagination="getList" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import fixedBar from './components/fixedBar'
import Pagination from '@/components/Pagination'
import lineChart from '@/components/charts/lineChart'
export default {
  components: {
    fixedBar,
    Pagination,
    lineChart
  },
  data() {
    return {
      route:"webStatics",
      total:100,  
      dataQuery:{},  //获取数据参数
      tableSearch:'',//列表搜索参数
      tableData:[],  //表格数据
      tableTile:{
        'webStatics':"页面标题",
        'productStatics':'产品名称',
        'articleStatics':'文章标题'
      },
      details:{
        'webStatics':"页面标题",
        'productStatics':'产品名称',
        'articleStatics':'文章标题'
      },
    }
  },
  mounted() {
    let routerName =this.$route.name
    switch(routerName){ //这样写是为了能在后面添加参数的时候好加
      case 'webStatics' :
        this.route = routerName
        break ;
      case 'productStatics' :
        this.route = routerName
        break ;
      case 'articleStatics' :
        this.route = routerName
        break ;
    }
    this.getData();
  },
  methods: {
    // 监听顶部data改变
    watch_dataChange(data) {
      console.log(data)
    },
    // 跳转对应的详情页
    toDetail(){
      this.$router.push({
        path:this.details[this.route]
      })
    },
    //获取列表数据
    getData(){
      let params = this.formatData(this.dataQuery)
      // dosome
    },
    search(){
      let params = this.formatData({tableSearch:this.tableSearch})
    },
    getList(){

    }    
  }
};

</script>
<style scoped>
._title {
  line-height: 30px;
}

</style>
