define(["avalon","text!./aaa.html"],function(avalon,aaa){
	
	avalon.templateCache.aaa = aaa
	avalon.define({
		$id:"aaa",
		username:"雪地伤孤"
	})
	avalon.vmodels.root.page = "aaa"
	
})
