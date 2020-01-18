const appData = {
  formRules:[
    {name:"phone",rule:/^1[345789]\d{9}$/,msg:'电话号码格式错误'},
    {name:"nickname",rule:/^[\u4e00-\u9fa5a-zA-Z0-9]{3,16}$/,msg:'请输入3~16个非特殊字符的昵称'},
    {name:"smsCode",rule:/^\d{6}$/,msg:'请填写6位的验证码'},
    {name:"newPassword",rule:/^(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*\d{1,})\S{8,16}$/,msg:'密码由数字,大写字母,小写字母组成，且长度不小于8'},
    {name:"oldPassword",rule:/^(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*\d{1,})\S{8,16}$/,msg:'密码由数字,大写字母,小写字母组成，且长度不小于8'},
    {name:"mail",rule:/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,msg:'邮箱地址不正确'},
  ],
}
/**
 * 表单验证
 * @param  {[type]} form [description]
 * @return {[type]}      [description]
 */
const formSubmit = function(form){
  let res = { code:0, msg:"success"}
  let rules = appData.formRules
  for ( var variable in form) {
    for (var i = 0; i < rules.length; i++) {
      if(rules[i].name == variable ){ 
        if(!rules[i].rule.test(form[''+variable])){
          res.code = 1 
          res.msg = rules[i].msg
          return res
        }
      }
    }
  }
  return res
}
/**
 * 数组去重
 * @return {[type]} [description]
 */
const identicalArr = function () { 
  let result = []
  let str = ''
  let strend = ''
  let attribute = arguments.length > 2 ? arguments[arguments.length - 1] : '' ;  
  for (let i = 0; i < arguments[0].length; i++) {
    for (let j = 0; j < arguments[1].length; j++) {
      if(attribute==''){
        if (arguments[0][i] === arguments[1][j]) {
          result.push(arguments[0][i])
          str += arguments[0][i]+ ',' 
        }
      }else{
        if (arguments[0][i]['' + attribute] === arguments[1][j]['' + attribute]) {
          result.push(arguments[0][i]['' + attribute])
          str += arguments[0][i]['' + attribute] + ','
        }
      }
    }
  }
  let string = str + strend
  return {result, string}
}

const calSize = function (size) {
  let clientWidth = window.innerWidth || document.documentElement.clientWidth
  let Htmlsize = clientWidth / (375 / size)
  document.documentElement.style.fontSize = Htmlsize + 'px'
}
const setRem = function (size) {
  calSize(size)
  window.addEventListener('resize', calSize)
}
/**
 * 四舍五如浮点
 * @param  {[type]} num   [description]
 * @param  {[type]} float [description]
 * @param  {[type]} bolen [description]
 * @return {[type]}       [description]
 */
const roundToFixed = function(num, float, bolen) {
  let text = 1
  for (let i = 0; i < float; i++) {
    text += '0'
  }
  Number(text)
  if (bolen) {
    return Number(Math.round(num * text) / text).toFixed(float)
  }
  return Number(Number(Math.round(num * text) / text).toFixed(float))
}
/**
 * 获取当前时间的多种格式表达
 * @param  {[type]} some        [description]
 * @param  {[type]} sun         [description]
 * @param  {[type]} Hexadecimal [description]
 * @param  {[type]} split       [description]
 * @return {[type]}             [description]
 */
const getNowDate = function(some,sun,Hexadecimal,split){
  let sundate = ["星期天","星期一","星期二", "星期三","星期四","星期五", "星期六"]
  let splitArr = ["年","月","日"]
  let temp = ["凌晨","早上","下午","晚上"]
  var date =''
  let myDate = new Date();
  let hours = myDate.getHours()
  let minues = myDate.getMinutes()
  let seconds = myDate.getSeconds()
  minues = minues >= 10 ? minues : "0" + minues
  seconds = seconds >= 10 ? seconds : "0" + seconds
  if(split!==false){ 
    splitArr[0]=splitArr[1]=split;
    splitArr[2]=''
  }
  if(Hexadecimal==1){
    let index = Math.floor(hours/6)
    hours = temp[index] + (hours - 12 > 0 ? hours - 12 : hours) 
  }
  switch (some) {
    case 0:
        date = myDate.getFullYear()+splitArr[0]
             + myDate.getMonth()+1+splitArr[1]
             + myDate.getDate()+splitArr[2]
             + " " 
             + hours+':'+ minues+':'+ seconds;
      break;
    default:
      // statements_def
      break;   
  }
  if(sun){date+=" "+sundate[myDate.getDay()]}
  return date
}
/**
 * 倒计时
 * @param  {[type]} that [description]
 * @param  {[type]} num  [description]
 * @param  {[type]} end  [description]
 * @return {[type]}      [description]
 */
const toTime = function(that,num,end) {
  var checkCode ={}
  var num = num  
  var t1 = setTimeout(function () {
    num--
    checkCode.name = "请稍等("+num+")";
    checkCode.getcode = false;
    if(end === 's'){
      that.setData({
        checkCode:checkCode
      })
    }else{
      that.checkCode = checkCode
    }
    toTime(that,num,end);
  },1000);   
  if(num == 0){
    checkCode.name = "获取验证码";
    checkCode.getcode = true;
    if(end === 's'){
      that.setData({
        checkCode:checkCode
      })
    }else{
      that.checkCode = checkCode
    }
    clearTimeout(t1);
  }
}
Date.prototype.format = function (format) {
   var args = {
       "M+": this.getMonth() + 1,
       "d+": this.getDate(),
       "h+": this.getHours(),
       "m+": this.getMinutes(),
       "s+": this.getSeconds(),
       "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
       "S": this.getMilliseconds()
   };
   if (/(y+)/.test(format))
       format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
   for (var i in args) {
       var n = args[i];
       if (new RegExp("(" + i + ")").test(format))
           format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
   }
   return format;
};
/**
 * element ui 图片转化方法 
 * @param  {[type]} string [description]
 * @return {[type]}        [description]
 */
const stringToresObjs = function(string){
  let arr = []
  let arrs = string.split(',')
  for (var i = 0; i < arrs.length; i++) {
    arr.push({
      name:arrs[i].split('?~?')[1],
      response:{
        data:arrs[i].split('?~?')[0],
      }
    })
  }
  return arr
}
const resObjTostring = function(arr){
  let arrString=''
  for (var i = 0; i < arr.length; i++) {
    if(i === arr.length-1){
      arrString += arr[i].response.data+'?~?'+arr[i].name+""
    }else{
      arrString += arr[i].response.data+'?~?'+arr[i].name+","
    }
  }
  return arrString
}
/**
 * [去除对象基本空值]
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
const deleteRA = function(obj) {
  for (const variable in obj) {
    if (obj['' + variable] === '' ||  obj[''+variable] === undefined || obj[''+variable] === null  ) {
      delete obj['' + variable]
    }
  }
  return obj
}
/**
 * [转化参数信息未formdata格式]
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
const formatData = function(obj){
  const params = new URLSearchParams()
  for (const variable in obj) {
    if( obj[''+variable] !== '' && obj[''+variable] !== undefined && obj[''+variable] !== null ){
      params.append(''+variable, obj[''+variable])
    }
  }
  return params
}

exports.install = function(Vue, options) {
  Vue.prototype.getNowDate = getNowDate
  Vue.prototype.identicalArr = identicalArr
  Vue.prototype.roundToFixed = roundToFixed
  Vue.prototype.toTime = toTime 
  Vue.prototype.setRem = setRem 
  Vue.prototype.stringToresObjs = stringToresObjs
  Vue.prototype.resObjTostring = resObjTostring
  Vue.prototype.deleteRA = deleteRA
  Vue.prototype.formatData = formatData
  Vue.prototype.formSubmit = formSubmit
}

