<template>
  <div>
    <themPlane title="基本信息" ref="themPlane">
      <el-form :model="baseInfoForm" :rules="rules" ref="baseInfoForm" label-width="100px">
        <el-form-item label="商品名称" prop="name">
          <el-input class="width300" v-model="baseInfoForm.name"></el-input>
        </el-form-item>
        <el-form-item label="副标题" prop="name">
          <el-input class="width300" v-model="baseInfoForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品分类" prop="name">
          <el-cascader v-model="baseInfoForm.value" :options="shopTypes">
          </el-cascader>
          <el-button type="primary" plain>分类管理</el-button>
        </el-form-item>
        <el-form-item class="no_margin" label="产品编号" prop="name">
          <el-input class="width300" v-model="baseInfoForm.name"></el-input>
          <p class="m_info">如果您不输入商品货号，系统将自动生成一个唯一的货号。</p>
        </el-form-item>
      </el-form>
    </themPlane>
    <themPlane title="商品相册" ref="themPlane2">
      <div class="imgList">
        <div class="imgRow">
          <img src="@/assets/images/redClose.png" class="icon_close" alt="">
          <img class="_img" src="@/assets/images/product.png">
          <span class="row_text a_active">商品主图<!-- 设为主图 --></span>
        </div>
      </div>
      <el-upload 
        :show-file-list="false" 
        action="https://jsonplaceholder.typicode.com/posts/" 
        multiple
        :limit="3"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        >
        <el-button class="margin_t margin_b" type="primary">图片上传</el-button>
      </el-upload>
      <p class="m_info">按住ctrl可同时批量选择多张图片上传，最多可以上传5张图片，建议尺寸800*800px</p>
    </themPlane>
    <themPlane title="视频主图" ref="themPlane3">
      <div class="imgList">
        <div class="imgRow">
          <img class="_viode" src="@/assets/images/product.png">
          <span class="row_text ">删除视频</span>
        </div>
      </div>
      <el-upload :show-file-list="false" action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <el-button class="margin_t margin_b" type="primary">上传视频</el-button>
      </el-upload>
      <p class="m_info">上传大小不超过30M的产品介绍视频，推荐格式MP4</p>
    </themPlane>
    <themPlane title="价格库存" ref="themPlane4">
      <div class="_border _relative paddingAll">
        <h6 class="_absolute">商品名称</h6>
        <!-- 规格生成组件 -->
        <spces ref="spces"></spces>
      </div>
      <div class="_border _relative margin_t paddingAll">
        <h6 class="_absolute">规格明细</h6>
        <!-- 明细组件 -->
        <template>
          <el-table :data="spaceData" border style="width: 100%">
            <el-table-column prop="date" label="尺码">
            </el-table-column>
            <el-table-column prop="date" label="颜色">
            </el-table-column>
            <el-table-column prop="name" label="销售价格">
              <template slot-scope="scope">
                <el-input />
              </template>
            </el-table-column>
            <el-table-column prop="name" label=" 商品库存">
              <template slot-scope="scope">
                <el-input />
              </template>
            </el-table-column>
            <el-table-column prop="name" label="划线价">
              <template slot-scope="scope">
                <el-input />
              </template>
            </el-table-column>
            <el-table-column prop="name" label="SKU编号">
              <template slot-scope="scope">
                <el-input />
              </template>
            </el-table-column>
            <el-table-column align="center" prop="address" label="操作">
              <template slot-scope="scope">
                <el-button type="text">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <el-form :model="spcesForm" :rules="rules" ref="spcesForm" label-width="120px" class=" margin_t">
          <el-form-item label="商品售价" prop="name">
            <el-input class="width300" v-model="spcesForm.name"></el-input>
          </el-form-item>
          <el-form-item label="划线价" prop="name">
            <el-input class="width300" v-model="spcesForm.name"></el-input>
          </el-form-item>
          <el-form-item label="库存减扣方式" prop="name">
            <div class="no_margin">
              <el-radio v-model="spcesForm.radio" label="1">拍下减库存</el-radio>
              <p class="m_info " style="line-height:18px;">买家提交订单，扣减库存数量，可能存在恶意占用库存风险</p>
            </div>
            <div class="no_margin">
              <el-radio v-model="spcesForm.radio" label="2">付款减库存</el-radio>
              <p class="m_info " style="line-height:18px;">买家支付成功，扣减库存数量，可能存在超卖风险</p>
            </div>
          </el-form-item>
          <el-form-item label="库存" prop="name">
            <el-input class="width300" v-model="spcesForm.name"></el-input>
            <el-checkbox class="margin_l" v-model="spcesForm.bolen" >商品详情不显示剩余库存</el-checkbox>
          </el-form-item>
          <el-form-item label="库存预警" prop="name">
            <el-input class="width300" v-model="spcesForm.name"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </themPlane>
  </div>
</template>
<script >
  import themPlane from "../themPlane"
  import spces from "../spces"
	export default{
		name:"",
    components:{
      themPlane,
      spces
    },
		data(){
			return {
        // query
        baseInfoForm:{//基本信息表单
          name:"",
          title:"",
          type:"",
          productCode:"",
        },
        shopImgList:[],//商品图列表
        shopVideo:[],//商品主图
        spces:[],    // 商品规格生成
        spcesDetail:[],//规格明细
        spcesForm:{
          bolen:false
        },//规格明细表单
        // data
        spaceData:[1],  //商品多规格的列表
        rules: {  //表单验证规则
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          title: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          type: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
          ],
          code: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ]
        },
        //分类列表 模拟数组
        shopTypes: [{ 
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }]
        }]
			}
		},
		created(){

		},
		mounetd(){

		},
		methods:{
      handleAvatarSuccess(res,file){
        console.log(res,file)
      },
      beforeAvatarUpload(res,file){
        console.log(res,file)
      },
      showBolen(){
        console.log(111)
        this.spcesForm.bolen = !this.spcesForm.bolen
      }
		},
	}
</script>
<style lang="scss" scoped>
/*商品相册*/
.imgList{
  .imgRow{
    margin-right: 10px;
    display: inline-block;
    position: relative;
    .icon_close{
      position:absolute;
      top: 2px;
      right: 2px;
      width: 20px;
      height: 20px;
    }
  }
}
._img{
  width: 120px;
  height: 120px;
}
._viode{
  width: 180px;
  height: 180px;
}
.row_text{
  position:absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 32px;
  line-height: 32px;
  display:inline-block;
  color: #fff;
  text-align: center;
  font-size: 14px;
  background-color:rgba(0,0,0,.5);
  transition: .12s;
}
.a_active{
  transition: .12s;
  background:rgba(30,131,255,.5);
}
</style>