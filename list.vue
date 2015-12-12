<style>
	
</style>
<template>
	<h1>获取一个列表</h1>
	<div id="app3">
	  <button v-on:click="getList">获取</button>
	  <ul>
	    <li v-for="todo in todos">
	      <span>{{{ todo.title }}}</span>
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
		methods: {
		    getList: function () {
                this.$http.get('https://cnodejs.org/api/v1/topics', function (data, status, request) {
                	console.log(">>>>>>>>>>>>>success");
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