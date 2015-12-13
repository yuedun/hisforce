<style>
	
</style>
<template>
	<h3>topic详情</h3>
	<div>
		{{{ topic.content }}}
	</div>
</template>
<script>
	module.exports = {
		data: function(){
			return {
				topicId: '',
				topic: ""
			}
		},
		route:{
            data:function(transition){
                //获取url传的params参数
                this.topicId = transition.to.params.id;
                //加载主题数据
                this.$http.get('https://cnodejs.org/api/v1/topic/'+this.topicId,function(d){
                    if(d && d.data){
                        this.topic = d.data;
                    }
                });
            }
        },
		methods: {
		    
		}
	}
</script>