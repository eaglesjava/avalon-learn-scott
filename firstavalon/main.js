require.config({//第一块：配置
	baseUrl:'',
	paths:{
		jquery:'vendor/jquery/jquery-2.1.3.js',
		avalon:'vendor/avalon/avalon',//必须修改源码，修改自带加载器，或者直接删掉
		text:'vendor/require/text',
		domReady:'vendor/require/domReady',
		css:'vendor/require/css.js'
	},
	priority:['text','css'],
	shim:{
		jquery:{
			exports:"jquery"
		},
		avalon:{
			exports:"avalon"
		}
	}
});


require(['avalon',"domReady!"],function(){//第二块：添加跟vm(处理公用部分)
	avalon.log("加载avalon完毕，开始构建根vm与加载其他不模块")
	avalon.templateCache.empty = "$nbsp;"
	
	avalon.define({
		$id: "root",
		header: "这是根模块，用于放置其他模块都共用的东西，比如<b>用户名</b>什么"
		footer: "页脚消息",
		page: "empty"
	})
	
	avalon.scan(document.body)
	
	require(['./modules/aaa/aaa'],function(){//第三块，加载其他模块
		avalon.log("加载其他完毕")
	});
	
})
