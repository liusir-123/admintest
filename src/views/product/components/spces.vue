<template>
  <div class="_space" style="width: 700px;">
    <div class="tabInfoTitle _border flex_rowBetwen">
      <span>
        <h6 style="display: inline;">规格名称</h6>
        <el-input style="width: 160px;" v-model="ruleForm.name"></el-input>
        <el-radio style="margin-left: 10px;" v-model="ruleForm.radio" label="2">添加规格图片</el-radio>
      </span>
      <span><i style="color: #909399;font-size: 19px;" class="el-icon-error"></i></span>
    </div>
    <div class="_box">
      <!-- 拖动盒子 -->
      <el-form ref="form">
        <el-form-item label="规格值">
          <draggable class="f_l" :options="{group:'people',animation:150,ghostClass:'sortable-ghost',chosenClass:'chosenClass',scroll:true,scrollSensitivity:200}" @change="change" @start="start" @end="end" :move="move" style="display: inline-block; max-width: 400px; overflow: hidden;">
            <div class="space_item" v-for="(item,index) in list2">
              <editorBtn :value.sync="item.name" :index="index"></editorBtn>
              <div class="imgBox">
                <el-upload class="avatar-uploader" action="#" :show-file-list="false" :on-success="handleAvatarSuccess" style="width: 60px;height: 60px;" :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </div>
          </draggable>
          <el-button class="f_l _btn" size="mini" icon="el-icon-plus">添加规格值</el-button>
          <el-tooltip class="tooltip" effect="dark" content="Top Left 提示文字" placement="top-start">
            <i class="el-icon-question c_primary"></i>
          </el-tooltip>
        </el-form-item>
        <p class="p_info">仅支持为第一组规格设置规格图片，买家选择不同规格会看到对应规格图片，建议尺寸：800 x 800像素 规格值可以拖动调整顺序</p>
      </el-form>
    </div>
    <div class="tabInfoTitle _border flex_rowBetwen">
      <span>
        <i style="color: #909399;font-size: 15px;" class="el-icon-plus"></i>
        <h6 style="display: inline;">新增规格</h6>
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <i class="el-icon-question c_primary"></i>
        </el-tooltip>
      </span>
    </div>
  </div>
</template>
<script>
import editorBtn from '@/components/editorBtn/index'
import draggable from 'vuedraggable'
export default {
  name: "space",
  components: {
    draggable,
    editorBtn
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
    	imageUrl:"",
      ruleForm: {},
      list2: [
        { name: "text1" },
        { name: "text2" }
      ]
    }
  },
  created() {

  },
  mounetd() {
    this.space = this.list
  },
  methods: {
	handleAvatarSuccess(){
		console.log()
	},
	beforeAvatarUpload(){
		console.log()
	},
    // 根据list生成SPace
    getSpace() {

    },
    addTemp() {
      let temp = {}
      this.space.push(temp)
    },
    //生成多规格表
    createList() {

    },
    // 外部拿取数据
    getList() {

    },
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
}

</script>
<style lang="scss">
._space {
  .el-upload {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }

  .el-upload--picture-card i {
    font-size: 14px;
  }

  .el-upload--picture-card {
    width: 60px;
    height: 60px;
    line-height: 60px;
    border: none;
  }

  .el-form-item {
    margin-bottom: 0px;
  }
}

</style>
<style lang="scss" scoped>
.p_info {
  padding-left: 50px;
  line-height: 20px;
}

._box {
  padding: 20px;
}

.tooltip {
  margin-left: 10px;
}

._btn {
  margin-top: 2px;
  margin-left: 10px;
}

.space_item {
  display: inline-block;
  text-align: center;
  margin-right: 10px;

  .imgBox {
    margin: 0 auto;
    position: relative;
    border: 1px solid #DCDFE6;
    border-radius: 3px;
    padding: 5px;
    width: 70px;
    height: 70px;

    &:after {
      content: " ";
      top: -3px;
      position: absolute;
      display: inline-block;
      border-top: 1px solid #DCDFE6;
      border-right: 1px solid #DCDFE6;
      height: 4px;
      width: 4px;
      border-radius: 3px;
      transform: rotate(-45deg);
      background-color: #fff;
    }
  }

  .fileImg {
    display: inline-block;
    background-color: #808080;
    width: 100%;
    height: 100%;
  }
}

</style>
