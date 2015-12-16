var Vue = require('./vendor/vue');
var VueRouter = require('./vendor/vue-router.min');
Vue.use(VueRouter);
var VueResource = require('./vendor/vue-resource.min');
Vue.use(VueResource);
Vue.config.debug = true;//调试模式
// 定义组件
var Foo = Vue.extend({
	template: '<div class="foo">' + 
	'<h1>这是首页内容!</h1>' + 
	'<router-view></router-view>' + // <- 嵌套的外链，用于显示子页内容
	'</div>'
});

// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({});

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
	'/':{				//首页
        name:'login',
        component: require('./views/login.vue')
    },
	'/index': {
		name: "index",
		component: require('./views/index.vue'),
		// 在/foo下设置一个子路由
		subRoutes: {
			'/bar': {
				// 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
				// 一个Bar组件,可以是一个Vue.extend({})实例化组件，也可以是一个.vue后缀的文件组件
				name: "bar",
				component: require('./views/h1.vue')
			},
			'/list': {
				// /foo/baz
				name: "list",
				component: require('./views/list.vue')
			},
			'/topic/:id': {
				// /foo/topic
				name: "topic",
				component: require('./views/topic.vue')
			},
			'/doday_work': {
				name: "todayWork",
				component: require('./views/today_work.vue')
			},
			'/registered': {
				name: "registered",
				component: require('./views/registered.vue')
			},
			'/outpatient': {
				name: "outpatient",
				component: require('./views/outpatient.vue')
			},
			'/myReservation': {
				name: "myReservation",
				component: require('./views/myReservation.vue')
			}
		}
	}
});

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');