import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

/**
 * 解决重复导航问题
 * 重写push、replace方法
 */

// 缓存原本的push方法
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// 指定新的push方法
VueRouter.prototype.push = function push(location, onResolve, onReject) {
	// 如果指定了成功或失败的回调
	if (onResolve || onReject) {
		return originalPush.call(this, location, onResolve, onReject)
	}
	// 没指定成功或失败的回调
	return originalPush.call(this, location).catch(err => {
		// 如果是重复导航产生的错误
		if (VueRouter.isNavigationFailure(err)) {
			return err
		}
		return Promise.reject(err)
	})
}

VueRouter.prototype.replace = function(location, onResolve, onReject) {
	// 如果指定了成功或失败的回调
	if (onResolve || onReject) {
		return originalReplace.call(this, location, onResolve, onReject)
	}
	// 没指定成功或失败的回调
	return originalReplace.call(this, location).catch(err => {
		// 如果是重复导航产生的错误
		if (VueRouter.isNavigationFailure(err)) {
			return err
		}
		return Promise.reject(err)
	})
}

export default new VueRouter({
	mode: 'history',
	routes
})
