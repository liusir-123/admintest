<template>
  <div class="content-transparent ">
    <div  class="navbar_fixed">
      <span>
        <el-button size="mini" type="primary" plain>全部产品(1000)</el-button>
        <el-button size="mini" plain>已上架(1000)</el-button>
        <el-button size="mini" plain>未上架(1000)</el-button>
        <el-button size="mini" plain>已售罄(1000)</el-button>
      </span>
      <span>
        <el-button size="mini" icon="el-icon-plus" type="primary" plain>添加产品</el-button>
      </span>
    </div>
    <div class="fiexd_content">
      <!-- search -->
      <div class="wplane">
        <el-collapse value="1">
          <el-collapse-item name="1">
            <h6 slot="title">筛选查询</h6>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="输入搜索">
                <el-input v-model="formInline.user" placeholder="商品名称/商品货号"></el-input>
              </el-form-item>
              <el-form-item label="商品分类">
                <el-select v-model="formInline.region" placeholder="请选择运费模板">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品品牌">
                <el-select v-model="formInline.region" placeholder="请选择品牌">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit" plain>查询结果</el-button>
                <!-- 高级搜索 -->
                <span class="HeightClass">
                  <transition name="fade-transform">
                    <div v-if="showDownMenue" class="paddingAll down_form down_copy_box" >
                      <div class="form_row flex_rowBetwen margin_b">
                        <span>
                          <h6 class="margin_b">商品分类</h6>
                          <el-select size="mini" v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                          </el-select>
                        </span>
                        <span>
                          <h6 class="margin_b">商品分类</h6>
                          <el-select size="mini" v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                          </el-select>
                        </span>
                      </div>
                      <div class="form_row flex_rowBetwen margin_b">
                        <span>
                          <h6 class="margin_b">商品分类</h6>
                          <el-select size="mini" v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                          </el-select>
                        </span>
                        <span>
                          <h6 class="margin_b">商品分类</h6>
                          <el-select size="mini" v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                          </el-select>
                        </span>
                      </div>
                      <div class="form_row flex_rowBetwen margin_b">
                        <span>
                          <h6 class="margin_b">商品分类</h6>
                          <el-input />
                        </span>
                      </div>
                      <div class="t_c margin_t">
                        <el-button >重置</el-button>
                        <el-button @click="showDownMenue = false" type="primary" > 开始搜索</el-button>
                      </div>
                    </div>
                  </transition>
                  <el-button @click="showDownMenue = true" >
                    高级搜索
                  </el-button>
                </span>
              </el-form-item>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </div>
      <!-- 数据列表 -->
      <div class="wplane paddingAll0">
        <div class="tabInfoTitle flex_rowBetwen">
          <h6> 数据列表</h6>
          <span>
            <el-select size="mini" style="width: 120px;" v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select size="mini" style="width: 120px;" v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </span>
        </div>
        <div class="padding_left padding_right padding_b padding_t">
          <template>
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column label="编号" width="100">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" label="产品图片">
                <template slot-scope="scope">
                  <img class="productImg" alt="">
                </template>
              </el-table-column>
              <el-table-column prop="name" label="产品名称">
              </el-table-column>
              <el-table-column prop="name" label="价格/货号">
                <template slot-scope="scope">
                  <p class="productInfo">价格：¥100.00 </p>
                  <p class="productInfo">货号：No86577</p>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="销量">
              </el-table-column>
              <el-table-column prop="name" label="排序">
              </el-table-column>
              <el-table-column  label="SKU库存">
                <template slot-scope="scope">
                  <!-- <p class="productInfo">价格：¥100.00 </p> -->
                  <el-button @click="editorVisible = true" type="text" icon="el-icon-edit"> </el-button>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="浏览量">
              </el-table-column>
              <el-table-column align="center" prop="name" label="操作" width="145">
                <template slot-scope="scope">
                  <el-button type="text">查看</el-button>
                  <el-button type="text">编辑</el-button>
                  <el-button type="text">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin: 20px 0px " class="flex_rowBetwen">
              <span>
                <el-button @click="toggleSelection([tableData[1], tableData[2]])">全选</el-button>
                <el-select style="width: 120px;" v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-button @click="toggleSelection()">确定</el-button>
              </span>
              <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" @pagination="getList" />
            </div>
          </template>
        </div>
      </div>
    </div>
    <el-dialog title="快速编辑" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="浏览权限：" prop="resource">
          <el-input style="width:300px;" type="text" placeholder="请输入内容" v-model="ruleForm.resource" maxlength="10" show-word-limit />
        </el-form-item>
        <el-form-item label="文章分类" prop="resource">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章标签" prop="resource">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期" prop="resource">
          <el-date-picker
            v-model="ruleForm.resource"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="请选择文章发布的日期和时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="虚拟阅读量" prop="resource">
          <el-input style="width:300px;" type="text" placeholder="请输入内容" v-model="ruleForm.resource" maxlength="10" show-word-limit />
        </el-form-item>
        <el-form-item label="虚拟点赞量" prop="resource">
          <el-input style="width:300px;" type="text" placeholder="请输入内容" v-model="ruleForm.resource" maxlength="10" show-word-limit />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer t_r">
        <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="dialogVisible = false">更新</el-button>
      </span>
    </el-dialog>
    <el-dialog title="快速编辑" :visible.sync="editorVisible" width="50%" :before-close="handleClose">
      <div class="margin_b">
        <span class="margin_r">商品货号：No86577</span> 
        <el-input class="width300" placeholder="按SKU编号搜索">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <template>
        <el-table class="margin_t" ref="multipleTable" :data="tableData" border tooltip-effect="dark" @selection-change="handleSelectionChange">
          <el-table-column prop="name" label="SKU编号">
            <template slot-scope="scope">
              <el-input  />
            </template>
          </el-table-column>
          <el-table-column prop="name" label="尺码"></el-table-column>
          <el-table-column prop="name" label="颜色"></el-table-column>
          <el-table-column >
            <template slot="header" slot-scope="scope">
              <span style="color: red;">* </span> 销售价格
            </template>
            <template slot-scope="scope">
                <el-input  />
              </template>
          </el-table-column>
          <el-table-column >
            <template slot="header" slot-scope="scope">
              <span style="color: red;">* </span> 商品库存
            </template>
            <template slot-scope="scope">
                <el-input  />
              </template>
          </el-table-column>
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <span style="color: red;">* </span> 库存预警值
            </template>
            <template slot-scope="scope">
              <el-input  />
            </template>
          </el-table-column>
        </el-table>
      </template>
      <div slot="footer" class="t_c dialog-footer ">
        <el-button  @click="editorVisible = false">取 消</el-button>
        <el-button  type="primary" @click="editorVisible = false">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination'
export default {
  name: 'productManage',
  components: {
    Pagination
  },
  data() {
    return {
      showDownMenue:false,
      total: 100,
      editorVisible:false,
      dialogVisible: false,
      listQuery: {
        page: 1
      },
      formInline: {},
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      multipleSelection: [],
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {

  },
  methods: {
    showDialog(scope){
      this.dialogVisible = true
      console.log(scope.row)
    },
    getList() {

    },
    toggleSelection(rows) { 
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};

</script>
<style lang="scss" scoped>
  .maxheight{
    height:100%;
    position: relative;
  }
  .productImg{
    display:inline-block;
    width:60px;
    height:60px;
    background-color:#f1f1f1;
  }
  .productInfo{
    color:#808080;
    font-size:12px;
    margin:0px;
  }
  .down_form{
    width: 400px;
    position: absolute;
    top:40px;
    right: 0px;
    z-index: 10;
    background: #fff;
    text-align: left;
  }
  .HeightClass{
    position: relative;
  }
  .form_row{
    span{
      width: 45%;
    }
  }
</style>
