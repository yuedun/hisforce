<style>
	
</style>
<template>
	<h3>获取一个列表</h3>
	<div id="app3">
	  <ul>
	    <li v-for="todo in todos">
	      <a v-link="{name:'topic',params:{id:todo.id}}">{{ todo.title }}</a>
	    </li>
	  </ul>
	</div>
</template>
<script>
	module.exports = {
		data: function(){
			return {
			    todos: []
			}
		},
		route:{
            data:function(transition){
            	//在激活阶段被调用，在 activate 被断定（ resolved ，指该函数返回的 //promise 被 resolve ）。用于加载和设置当前组件的数据。
            	this.getList();
            	transition.next();//传递到下一个路由
            }
        },
		methods: {
		    getList: function () {
                this.$http.get('https://cnodejs.org/api/v1/topics', function (data, status, request) {
                	//console.log(">>>>>>>>>>>>>success");
                	//console.log(">>>>>>>>>>>>>success"+JSON.stringify(data));
                	this.todos = data.data;
                }).error(function (data, status, request) {
                	console.log(">>>>>>>>>>err"+data);
			        // handle error
				});
		    }
		}
	}
</script>