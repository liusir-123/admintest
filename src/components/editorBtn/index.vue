<template>
  <div  @dblclick="ddclick" class="cm_tab pointer">
    <span v-if="!bolen" @click.stop="fun" class="f_r"> {{value2}} <i @click.stop="del" class="el-icon-close"></i></span>
    <input v-else class="cm_input f_l" v-focus @blur="onBlur" style="color: #333;width:100px; display:inline-block;" v-model="value2" />
  </div>
</template>
<script>
export default {
  name: "editorBtn",
  props: {
    value: {
      type: String,
      default:"",
    }
  },
  data() {
    return {
      bolen: false,
      value2:this.value
    }
  },
  methods: {
    onBlur() {
      this.bolen = false
      this.$emit("update:value", this.value2)
    },
    fun() {

    },
    ddclick() {
      this.bolen = true
    },
    del() {
      this.$emit("del", this.index)
    }
  }
}

</script>
