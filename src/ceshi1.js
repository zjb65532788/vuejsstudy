import Vue from 'vue'
/*import VueRouter from 'vue-router'


Vue.use(VueRouter);
var App = Vue.extend({})
var router = new VueRouter()
router.map({
	'/async': {
		component: function(resolve) {
			require(['./components/MyComponent.vue'], resolve)
		},
		subRoutes: {
	      '/bar': {
	        // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
	        // 一个Bar组件
	        component: Bar
	      },
	      '/baz': {
	        // Baz也是一样，不同之处是匹配的路由会是/foo/baz
	        component: Baz
	      }
	    }
	}
});

router.start(App, '#app')*/
/*if (pd) {
	require.ensure([], function(require) {
	    var App = require('./components/MyComponent1');
	    new Vue({
		  el: '#app',
		  components: { App }
		})
	});
}else{
	require.ensure([], function(require) {
	    var App = require('./components/MyComponent');
	    // todo ...
	    new Vue({
		  el: '#app',
		  components: { App }
		})
	});
}*/


/*var App= Vue.extend({
  	template: '',
	components: {
	    // <my-component> 只能用在父组件模板内
	    'my-component': Child
	}
});*/

/*var Ceshi1=Vue.component('async-example', function (resolve) {
  // 这个特殊的 require 语法告诉 webpack
  // 自动将编译后的代码分割成不同的块，
  // 这些块将通过 ajax 请求自动下载。
  require(['./components/MyComponent'], resolve)
})
Vue.component('async-example1', function (resolve) {
  // 这个特殊的 require 语法告诉 webpack
  // 自动将编译后的代码分割成不同的块，
  // 这些块将通过 ajax 请求自动下载。
  require(['./components/MyComponent1'], resolve)
})*/
var allmodule=['rich_text','record','certificate','cusfieldimport','album'],
	this_components={};
/*for(var i=0,length=allmodule.length;i<length;i++){
	(function(i){
		this_components[allmodule[i]]=Vue.component(allmodule[i], function (resolve) {
	  	// 这个特殊的 require 语法告诉 webpack
	  	// 自动将编译后的代码分割成不同的块，
	  	// 这些块将通过 ajax 请求自动下载。
	  		require(['./components/'+allmodule[i]], resolve)
		});
	}(i));
}*/
var rich_text=Vue.component('rich_text', function (resolve) {
  	// 这个特殊的 require 语法告诉 webpack
  	// 自动将编译后的代码分割成不同的块，
  	// 这些块将通过 ajax 请求自动下载。
  	require(['./components/rich_text'], resolve)
});

var record=Vue.component('record',function(resolve){
	require(['./components/record'], resolve)
});
var album=Vue.component('album',function(resolve){
	require(['./components/album'], resolve)
});
var cusfieldimport=Vue.component('cusfieldimport',function(resolve){
	require(['./components/cusfieldimport'], resolve)
});
var certificate=Vue.component('certificate',function(resolve){
	require(['./components/certificate'], resolve)
});
/*var Ceshi=Vue.component('Ceshi',{
		props: ['msg1'],
		data:function(){
			return {
		      	message1: 'hohohohoho'
		    }
		},
		computed: {
		    message: function() {
		      	return "hehehe";
		    }
		},
  		template: '<span>{{msg1}}<async-example1 :msg2="message1"></async-example1></span>'
	}
)*/
var App= Vue.extend({
	'props':['list'],
	'data':function(){
		return this.list;
	},
	methods: {
	    test: function(type,typename) {
	    	console.log(type,typename);
	        if (type==typename) {
	       	 	return true;
	        }else{
	        	return false;
	        }
	        // ...
	    }
	}, 
  	template: '<div v-for="item in list.tree_list">\
  					<component :is="item.module" :list="item"></component>\
  				</div>',
  	components:{
  		'rich_text':rich_text,
  		record:record,
  		'cusfieldimport':cusfieldimport,
  		'album':album,
  		certificate:certificate
  	}
});
new Vue({
	el: '#app',
	data: function() {
		return {
			list: {"qrcode_img": "http://qr.api.cli.im/qr?data=http%3A%2F%2Fpro.cli.im%2FRbsIJL%2F%28W1%29zqq111%2Fd76536&level=H&transparent=&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=220&kid=bizcliim&time=1457787647&key=8f073e269689e53dbd44d94d017e7dc8",
				"is_valid": 1,
				"module_prodcut": {
					"qrcode_img": "http://qr.api.cli.im/qr?data=http%3A%2F%2Fpro.cli.im%2FRbsIJL%2F%28W1%29zqq111%2Fd76536&level=H&transparent=&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=220&kid=bizcliim&time=1457787647&key=8f073e269689e53dbd44d94d017e7dc8",
					"module": "product",
					"module_icon": "",
					"is_unfold": "1",
					"is_stop": "0",
					"anchor": "product_form:item",
					"item": {
						"list": [],
						"title": "测试"
					},
					"is_show": "1"
				},
				"header_sucai_id": "0",
				"footer_sucai_id": "117150",
				"user_id": "380769",
				"product_id": "59615",
				"has_message": "0",
				"title": "测试",
				"wu_id": "zqq111",
				"certificate": {
					"uni_id": "zqq111"
				},
				"cusfieldimport": {
					"uni_id": "zqq111"
				},
				"record": {
					"uni_id": "zqq111"
				},
				"tree_list": [{
					"coding": "QS226859",
					"module_icon": "",
					"module": "rich_text",
					"module_fun": "Ceshi",
					"anchor": "rich_text:266246",
					"soncode_link": "/s/QS226859?is_procoding=RbsIJL&&is_proid=59615&&biz=1",
					"unfold": "1",
					"index": 1,
					"item": {
						"title": "示范单位",
						"content": "<div class=\"rich_text\"><p>而无法为</p></div>",
						"imgPath": "http://bizimg.clewm.net/760/092/092760/50004393af93d6d559305d465d3a8650.png",
						"imgPath_view_link": ""
					}
				}, {
					"coding": "OW226866",
					"module_icon": "",
					"module": "certificate",
					"anchor": "certificate:124",
					"soncode_link": "/s/OW226866?is_procoding=RbsIJL&&is_proid=59615&&biz=1",
					"unfold": "1",
					"index": 2,
					"item": {
						"title": "",
						"img_url": "http://biz.cli.im/Certi?product_id=59615&uni_id=zqq111&user_id=380769&key=200158ef89d4d44caff1d0fb8fd41dcd"
					}
				}, {
					"coding": "AB226868",
					"module_icon": "",
					"module": "record",
					"anchor": "record:4982",
					"soncode_link": "/s/AB226868?is_procoding=RbsIJL&&is_proid=59615&&biz=1",
					"unfold": "1",
					"index": 3,
					"item": {
						"title": "合格",
						"apply": "1",
						"apply_title": "看看",
						"apply_note": "1",
						"no_addrecord": 1,
						"list": null,
						"hasmore": false,
						"startnum": 5
					}
				}, {
					"coding": "FJ226876",
					"module_icon": "",
					"module": "cusfieldimport",
					"anchor": "cusfieldimport:59615",
					"soncode_link": "/s/FJ226876?is_procoding=RbsIJL&&is_proid=59615&&biz=1",
					"unfold": "1",
					"index": 4,
					"item": {
						"title": "sdfwef",
						"list": [{
							"id": "45",
							"name": "",
							"type": "group",
							"sort": "0",
							"is_del": "0",
							"product_id": "59615",
							"is_show_name": "0",
							"value": false
						}, {
							"id": "46",
							"name": "wefwe",
							"type": "input",
							"sort": "1",
							"is_del": "0",
							"product_id": "59615",
							"is_show_name": "1",
							"value": "上的发文"
						}]
					}
				}],
				"is_product": 1,
				"weixin": {
					"img_url": "http://qr.api.cli.im/qr?data=http%3A%2F%2Fpro.cli.im%2FRbsIJL%2F%28W1%29zqq111%2Fd76536&level=H&transparent=&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=220&kid=bizcliim&time=1457787647&key=8f073e269689e53dbd44d94d017e7dc8"
				}
			}
		}
	},
	components: {
		App
	}
})