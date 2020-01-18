<template>
  <div>
    <themPlane title="价格库存">
      <div class="_border _relative paddingAll">
        <h6 class="_absolute">商品参数</h6>
        <el-form ref="form">
          <el-form-item class="no_margin" label="规格值">
            <draggable class="f_l" :options="{group:'people',animation:150,ghostClass:'sortable-ghost',chosenClass:'chosenClass',scroll:true,scrollSensitivity:200}" @change="change" @start="start" @end="end" :move="move" style="display: inline-block; max-width: 400px; overflow: hidden;">
            <editorBtn  class="space_item" :key="index" v-for="(item,index) in list2" :value.sync="item.name" :index="index"></editorBtn>
            </draggable>
            <el-button class="f_l _btn" size="mini" icon="el-icon-plus">添加规格值</el-button>
            <el-tooltip class="tooltip" effect="dark" content="Top Left 提示文字" placement="top-start">
              <i class="el-icon-question c_primary"></i>
            </el-tooltip>
          </el-form-item>
          <p class="p_info">可以拖动调整参数顺序</p>
          <el-form-item label="参数明细">
            <template>
              <el-table :data="list2" border style="width: 100%">
                <el-table-column prop="date" width="180" label="参数名称"></el-table-column>
                <el-table-column prop="name" label="参数值">
                  <template slot-scope="scope">
                    <el-input />
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-form-item>
        </el-form>
      </div>
    </themPlane>
    <themPlane title="详情介绍" >
      <weditor id="weditor2" ref="weditor2"></weditor>
    </themPlane>
  </div>
</template>
<script>
  import weditor from "@/components/wangeditor/index"
  import themPlane from "../themPlane"
  import spces from "../spces"
  import editorBtn from '@/components/editorBtn/index'
  import draggable from 'vuedraggable'
  export default{
    name:"",
    components:{
      themPlane,
      spces,
      draggable,
      editorBtn,
      weditor
    },
    data() {
      return {
         list2: [
          { name: "text1" },
          { name: "text2" }
        ]
      }
    },
    methods: {
      /* 拖动事件  基本没啥 */
      // evt里面有两个值，一个evt.added 和evt.removed  可以分别知道移动元素的ID和删除元素的ID
      change: function(evt) {
        console.log(this.list2)
      },
      // start ,end ,add,update, sort, remove 得到的都差不多
      start: function(evt) {},
      end: function(evt) {
        evt.item // 可以知道拖动的本身
        evt.to // 可以知道拖动的目标列表
        evt.from // 可以知道之前的列表
        evt.oldIndex // 可以知道拖动前的位置
        evt.newIndex // 可以知道拖动后的位置
      },
      move: function(evt, originalEvent) {
        console.log(originalEvent) //鼠标位置
      },
    }
  };
</script>
<style lang="scss" scoped>
  .p_info {
    padding-left: 50px;
    line-height: 20px;
    margin:0px;
  }
  .tooltip {
    margin-left: 10px;
  }
</style>