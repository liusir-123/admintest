<template>
  <div :id="id"></div>
</template>
<script>
	var E = require('wangeditor')  
	import { config } from "./config"
  export default {
    name: 'wangeditor',
    props:{
    	id:{
    		type:String,
    		require:true
    	}
    },
    data(){
    	return {
    		editor:null
    	}
    },
    mounted(){
    	this.editor = new E(document.getElementById(this.id))
    	config(this.editor)
			this.editor.create()
    },
    methods:{
    	setEdata(html){
    		this.editor.txt.html(html)
    	},
    	getEdata(){
    		this.editor.txt.html()
    		this.editor.txt.text()
    		return {
    				html:this.editor.txt.html(),
    				text:this.editor.txt.text()
    		}
    	},
    }
  }
</script>
