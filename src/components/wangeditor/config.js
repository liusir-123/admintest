import { getToken, setToken } from '@/utils/cookie'

export const config = function(editor, onchange) {
  editor.customConfig.debug = false
  editor.customConfig.onchange = onchange
  editor.customConfig.zIndex = 100
  // editor.customConfig.lang = 
  editor.customConfig.uploadImgServer = process.env.BASE_API + '/upload'
  editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024
  editor.customConfig.uploadImgMaxLength = 5
  editor.customConfig.uploadImgParams = {
    token: getToken()
  }
  editor.customConfig.uploadImgParamsWithUrl = false
  editor.customConfig.uploadFileName = 'yourFileName'
  editor.customConfig.uploadImgHeaders = {
    'Accept': 'text/x-json'
  }
  editor.customConfig.uploadImgHooks = {
    before: function(xhr, editor, files) {
      // 图片上传之前触发
      // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件

      // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
      // return {
      //     prevent: true,
      //     msg: '放弃上传'
      // }
    },
    success: function(xhr, editor, result) {
      // 图片上传并返回结果，图片插入成功之后触发
      // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
    },
    fail: function(xhr, editor, result) {
      // 图片上传并返回结果，但图片插入错误时触发
      // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
    },
    error: function(xhr, editor) {
      // 图片上传出错时触发
      // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
    },
    timeout: function(xhr, editor) {
      // 图片上传超时时触发
      // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
    },

    // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
    // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
    customInsert: function(insertImg, result, editor) {
      // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
      // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

      // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
      var url = result.url
      insertImg(url)

      // result 必须是一个 JSON 格式字符串！！！否则报错
    }
  }
}
