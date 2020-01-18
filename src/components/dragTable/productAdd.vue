<template>
  <div class="content-transparent paddingAll">
    <div style="min-height:100%;" class="wplane paddingAll0">
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
      <el-tree
        :data="data"
        node-key="id"
        icon-class="s"
        @node-drag-start="handleDragStart" 
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag">
        <span class="custom-tree-node" slot-scope="{ node, data }">
         <el-checkbox v-if="data.showCheckbox" v-model="node.checkbox" ></el-checkbox>
         <span>{{ node.label }}</span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline:{},
        data: [
          {
            id: 1,
            label: '一级 1',
            showCheckbox:true,
            checkbox:false,
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }
        ]
      };
    },
    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },
      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      handleDragStart(node, ev) {
        console.log('drag start', node);
      },
      handleDragEnter(draggingNode, dropNode, ev) {
        console.log('tree drag enter: ', dropNode.label);
      },
      handleDragLeave(draggingNode, dropNode, ev) {
        console.log('tree drag leave: ', dropNode.label);
      },
      handleDragOver(draggingNode, dropNode, ev) {
        console.log('tree drag over: ', dropNode.label);
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {
        console.log('tree drag end: ', dropNode && dropNode.label, dropType);
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        console.log('tree drop: ', dropNode.label, dropType);
      },
      allowDrop(draggingNode, dropNode, type) {
        return true;
      },
      allowDrag(draggingNode) {
        return true
      }
    }
  };
</script>