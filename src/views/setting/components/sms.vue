 <template>
  <div  class="sms">
    <el-row  :gutter="25">
      <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="8">
        <div class="wplane paddingAll sms_info">
          <div class="sms_row">
            <span class="flex_columnBetwen">
              <p class="p_info">剩余短信条数</p>
              <p class="num">3486</p>
            </span>
            <span class="flex_columnBetwen right_border minW">
              <p class="p_info">剩余短信条数</p>
              <p class="num"><span class="dor">￥</span>3486</p>
            </span>
            <span class="flex_columnBetwen btns">
              <el-button type="primary">充值</el-button>
              <div></div>
              <el-button >充值</el-button>
            </span>
          </div>
        </div>
      </el-col>
      <el-col  :xs="24" :sm="24" :md="14" :lg="14" :xl="16">
        <div class="wplane sms_info flex_rowBetwen paddingAll">
          <div >
            <p class="sms_title">短信测试</p>
            <div class="sms_box">
              尊敬的用户您好，您的验证码  是:876127，5分钟内有效，请勿泄露。
            </div>
          </div>
          <div >
            <p class="flex_rowBetwen ">
              <el-input  placeholder="请输入手机号"></el-input>
              <el-button class="margin_l" type="primary">立即测试</el-button>
            </p>
            <span class="margin_t sms_title flex_rowBetwen">输入手机号码，点击立即测试获取短信</span>
          </div>            
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="wplane paddingAll">
          <p class="sms_title">短信测试</p>
          <div class="margin_t">
            <span class="m_info">手机短信验证：</span><el-switch v-model="value1"></el-switch>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="wplane paddingAll">
          <div class="flex_rowBetwen">
            <p class="sms_title">发送统计</p>
            <el-button>详细记录</el-button>
          </div>
          <lineChart class="lineChart"></lineChart>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import lineChart from '@/components/charts/lineChartSms'
export default {
  name: "sms",
  components:{
    lineChart
  },
  data() {
    return {
      value1:0,
    }
  },
  created() {

  },
  mounetd() {

  },
  methods: {

  }
}

</script>
<style lang="scss" scoped>

  .sms_row{
    display:flex;
    justify-content: space-around;
    span{
      min-width:25%;
      height:52px;
      margin-top: 14px;
      .num{
        font-weight: 600;
        color: #333;
        font-size: 22px;
      }
      .dor{
        font-size: 14px;
      }
    }
    .minW{
      min-width: 30%;
    }
    .btns{
      height: 80px;
      margin-top: 0px;
    }
  }
  p{
    margin:0px !important;
  }
  .right_border{
    border-right: 1px solid #EDEDED;
  }
  .sms_info{
    height: 130px;
  }
  
  .sms_title{
    font-size: 14px;
    color: #333;
  }

  .sms_box{
    margin-top: 10px;
    max-width: 300px;
    padding:12px;
    color: #909399;
    font-size: 12px;
    line-height: 20px;
  }
</style>
