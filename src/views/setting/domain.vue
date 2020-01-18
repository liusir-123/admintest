<template>
  <div class="content-transparent paddingAll" style="height: 100%;">
    <div style="margin:0px; height: 100%;" class="wplane  paddingAll ">
      <div @click="dialogVisible = true" class="flex_center domain_load">
        <div>
          <i class="el-icon-link"></i>
          <p>绑定独立域名</p>
        </div>
      </div>
      <h6 class="domain_title">域名列表</h6>
      <el-table :data="tableData" border style="width: 700px;">
        <el-table-column align="center" prop="date" label="域名" width="400">
          <template slot-scope="scope">
            https://www.ev123.net/ [<el-button type="text">主域名</el-button>]
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="状态" width="150">
        </el-table-column>
        <el-table-column align="center" prop="address" label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text">取消绑定</el-button>
          </template>
        </el-table-column> 
      </el-table> 
    </div>
    <el-dialog title="信息提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div class=" _log">
          <p ><img src="@/assets/images/menue/i.png" >免费版本不支持绑定独立域名</p>
          <p class="p_info">请升级网站版本绑定独立域名</p>
      </div>
      <div slot="footer" class="dialog-footer t_c">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "domain",
  data() {
    return {
      tableData: [1],
      dialogVisible:false ,
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
.domain_title {
  font-size: 12px;
  color: #333;
  height: 25px;
  line-height: 25px;
}

.domain_load {
  width: 180px;
  height: 180px;
  border: 2px dashed #f1f1f1;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
  i {
    font-size: 40px;
    color: #999;
    font-weight: 500;
  }
  p {
    color: #333;
    font-size: 12px;
  }
}
._log{
  p{
    font-size: 14px;
    color: #333;
    text-align: center;
    img{
      width: 20px;
      vertical-align: middle;
      margin-top: -2px;
      margin-right: 10px;
    }
  }
  .p_info{
    display: block;
    font-size: 12px;
    color: #C0C4CC;
  }
}

</style>
