<template>
  <div class="content-transparent paddingAll">
    <div class="wplane  paddingAll ">
      <el-table :data="tableData">
        <el-table-column prop="name" align="center" label="语言" >
        </el-table-column>
        <el-table-column prop="address" align="center" label="启用">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.switch"></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="address" align="center" label="面板语言">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.lang"></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="address" align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="text">查看</el-button>
            <el-button type="text">复制到</el-button>
            <el-button v-if="scope.row.bolen" type="text" disabled>默认</el-button>
            <el-button v-else type="text" >设置默认</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>

export default {
  name: "LangVersion",
  data() {
    return {
      tableData:[
        {name:"中文",switch:true,lang:true,bolen:true},
        {name:"中文(繁体)",switch:true,lang:false,bolen:false},
      ]
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
