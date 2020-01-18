import router from '@/router'
import store from '@/store'
import Cookies from 'js-cookie'
// import { getApiToken , getUserConfig } from '@/utils/index'
// 路由验证
router.beforeEach(async (to, from, next) => {
	next();
	return
	// 拦截 404
	if( to.path == "/nopre" ){
  		next();
  		return
	}
	// 拦截 非本页面内跳转
	if(to.matched.length==0){
		next("nopre")
		return
	}

	// 打包版本 控制
	let ev_userid = process.env.ENV_CONFIG == "prod" ? store.getters.userAdmin.userid != Cookies.get('ev_userid') ||  store.getters.userAdmin.manager_id != Cookies.get('ev_manager_id')  : false
	
	// 首次登录
	if(store.getters.token == "" || store.getters.token == null || store.getters.token == "undefined" || ev_userid){
		getApiToken().then(res=>{
			return getUserConfig(store.getters.token).then(res=>{
				if(isHaveath()){
					next(isHaveath());
					return
				}
				next();
			});		
		})
	}else{ 
		// 后台刷新更改数据
		if(!store.getters.userConfig){
			getUserConfig(store.getters.token).then(res=>{
				next(to.path);
			});
			return
		}
		// 拦截非权限非法跳转
		if( store.getters.userConfig.userPath.indexOf(to.meta.pre) > -1 ){
	  		next();
		}else{
			if(isHaveath()){
				next(isHaveath());
				return
			}
			// 毫无权限
			next("nopre")
			return
		}
	}  
}) 

function isHaveath() {
	let routers = router.options.routes;
	let path = '';
	if(store.getters.userConfig.userPath){
		for (var i = 0; i < routers.length; i++) {
			if(store.getters.userConfig.userPath.indexOf (routers[i].meta.pre) > - 1){
				path = routers[i].path;
				return path
			}
		}
	}
	return path
}
