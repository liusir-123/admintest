import Vue from 'vue';

Vue.directive('focus', {
  bind () {

  },	
  // 插入父节点
  inserted: function (el,binding,vnode) {
    // 聚焦元素
    el.focus()
  },
  // 插入父节点
  update(){

  },
  componentUpdated(){

  },
  unbind(){

  }
}) 


Vue.directive('fixed', {
  bind (el) {
    $(el).css({
      "width":"calc(100% - "+ $(".app-slideBar").width() +"px)",
      "display":"flex"
    })
  },
  update(el){
    console.log(el)
    $(el).css({
      "width":"calc(100% - "+ $(".app-slideBar").width() +"px)",
      "display":"flex"
    })
  },
  componentUpdated(){

  },
  unbind(){

  }
}) 
