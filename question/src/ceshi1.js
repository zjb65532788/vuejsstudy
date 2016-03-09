import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
var App = Vue.extend({})
var router = new VueRouter()
router.map({
	'/async': {
		component: function(resolve) {
			require(['./components/MyComponent.vue'], resolve)
		}
	}
});

router.start(App, '#app')