<template>
  <div class="DragTable content-transparent paddingAll">
    <div  class="wplane paddingAll0 padding_b">
      <div class="tabInfoTitle flex_rowBetwen">
        <h6> 数据列表</h6>
        <span>
          <el-select size="mini" style="width: 120px;" v-model="formInline.region" placeholder="显示条数">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select size="mini" style="width: 120px;" v-model="formInline.region" placeholder="排序方式">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </span>
      </div>
      <div class="DragStarRow d_border">
        <span class="d_checkBox">
          <el-checkbox @change="selectAll" v-model="checkedAll"></el-checkbox>
        </span>
        <span class="d_content">
          分类名称
        </span>
        <span class="d_xspan">
          商品数量
        </span>
        <span class="d_xspan">
          导航栏
        </span>
        <span class="d_xspan">
          操作
        </span>
      </div>
  
<!--       @node-drag-start="handleDragStart" 
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      @node-drop="handleDrop" 
      :allow-drop="allowDrop"
      :allow-drag="allowDrag" -->

      <el-tree
        :data="data"
        node-key="id"
        :expand-on-click-node="false"
        ref="tree"
        draggable
        show-checkbox
        @check="checkChange"
        >
        <div slot-scope="{ node, data }"   :class="['DragStarRow d_border',data.showCheckbox ? 'd_border' : '' ]">
          <span class="d_checkBox">
            <el-checkbox v-if="data.showCheckbox" v-model="node.checkbox" ></el-checkbox>
          </span>
          <span class="d_content">
            {{ node.label }}
          </span>
          <span class="d_xspan">
            {{data.num}}
          </span>
          <span class="d_xspan">
            <el-switch v-model="data.switch"> </el-switch>
          </span>
          <span class="d_xspan">
            <i @click="outerVisible = true" class="el-icon-edit"></i>
            <i @click="append(data)" class="el-icon-plus"></i>
            <i @click="remove(node,data)" class="el-icon-minus"></i>
            <i class="el-icon-rank"></i>
          </span>
        </div>
      </el-tree>
      <div class="margin_l margin_t"  >
        <span>
          <el-checkbox @change="selectAll" v-model="checkedAll">全选</el-checkbox>
          <el-button @click="delAll" class="margin_l" >批量删除</el-button>
        </span>
      </div>
    </div>
    <el-dialog title="添加分类" :visible.sync="outerVisible">
      <el-form :model="ruleForm"  style="width:70%;" ref="ruleForm" label-width="180px" class="demo-ruleForm">
        <el-form-item label="分类名称：" prop="name">
          <el-input style="width:200px;" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="上级分类：" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择分类">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <p class="m_info">不选择分类默认为顶级分类</p>
        </el-form-item>
        <el-form-item label="是否显示在导航栏：" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="分类图标：" prop="desc">
<!--           <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">选择上传文件</el-button>
            <div slot="tip"style="line-height:20px;" class="el-upload__tip">图标尺寸为18*18比例，大小不能超过200KB，图片只能为jpg、 png、gif格式</div>
          </el-upload> -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">取消</el-button>
          <el-button @click="resetForm('ruleForm')">确定</el-button>
        </el-form-item>
      </el-form>        
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name:"productClassify",
    data() {
      return {
        outerVisible:false,
        checkedAll:false,
        formInline:{},
        ruleForm:{},
        data: [
          {
            id: 1,
            label: '箱包',
            num:100,
            switch:1,
            children: [{
              id: 101,
              label: '女包',
              num:100,
              switch:1,
              children: [{
                id: 9,
                switch:1,
                num:100,
                label: '手提包'
              }]
            }]
          },
          {
            id: 2,
            label: '1箱包',
            num:100,
            switch:1,
            children: [{
              id: 201,
              label: '1女包',
              num:100,
              switch:1,
              children: [{
                id:209,
                switch:1,
                num:100,
                label: '1手提包'
              }]
            }]
          },
        ],
      };
    },

    methods: {
      getList(){

      },
      setCheckedKeys(arr) {
        this.$refs.tree.setCheckedKeys(arr);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      checkChange(check,data){
        console.log(data)
        let arr = data.checkedKeys        
        if(arr.indexOf(data.id) > -1){ //选中
          if(this.data.length == arr.length){
            this.checkedAll = true
          }
        }else{ //取消
          this.checkedAll = false
        }
      },
      delAll(){
        console.log(this.$refs.tree.getCheckedKeys())
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.data = []
          this.checkedAll = false
        }) 
      },
      selectAll(bolen){
        let dragTableList = this.data
        let arr = []
        for (let i = 0; i < dragTableList.length; i++) {
          dragTableList[i].checkbox = bolen
          arr.push(dragTableList[i].id)
        }
        if(!bolen){
          this.resetChecked();
        }else{
          this.setCheckedKeys(arr);
        }
      },
      append(data) {
        this.outerVisible = true
        // const newChild = { id: id++, label: 'testtest', children: [] };
        // if (!data.children) {
        //   this.$set(data, 'children', []);
        // }
        // data.children.push(newChild);
      },
      remove(node, data) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const parent = node.parent;
          const children = parent.data.children || parent.data;
          const index = children.findIndex(d => d.id === data.id);
          children.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })          
      },
      // handleDragStart(node, ev) {
      //   console.log('drag start', node);
      // },
      // handleDragEnter(draggingNode, dropNode, ev) {
      //   console.log('tree drag enter: ', dropNode.label);
      // },
      // handleDragLeave(draggingNode, dropNode, ev) {
      //   console.log('tree drag leave: ', dropNode.label);
      // },
      // handleDragOver(draggingNode, dropNode, ev) {
      //   console.log('tree drag over: ', dropNode.label);
      // },
      // handleDragEnd(draggingNode, dropNode, dropType, ev) {
      //   console.log('tree drag end: ', dropNode && dropNode.label, dropType);
      // },
      // handleDrop(draggingNode, dropNode, dropType, ev) {
      //   console.log('tree drop: ', dropNode.label, dropType);
      // },
      // allowDrop(draggingNode, dropNode, type) {
      //   return true;
      // },
      // allowDrag(draggingNode) {
      //   return true
      // }
    }
  };
</script>
<style >
.DragTable{
  .el-tree-node__content>.el-tree-node__expand-icon{
    padding: 0px ;
  }
}
</style>
<style lang="scss" scoped>
    .d_border{
      border-bottom: 1px solid #f1f1f1;
    }
    .custom-tree-node{
      display: inline-block;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #f1f1f1;
    }
    .DragStarRow{
      width: 100%;
      display:flex;
      font-size:14px;
      padding-left:14px;
      height: 40px;
      line-height: 40px;
      .d_checkBox{
        width: 120px;
        min-width: 120px;
        max-width: 120px;
      }
      .d_content{
          flex: 1;
      }
      .d_xspan{
        min-width: 200px;
        max-width: 200px;
        text-align: center;
        i{
          margin:0px 4px;
        }
      }
    }
</style>