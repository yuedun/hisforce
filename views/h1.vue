<style>
	
</style>
<template>
	<h3>这是一个标题组件</h3>
	<div id="app3">
	  <input v-model="newTodo" v-on:keyup.enter="addTodo" placeholder="输入内容回车">
	  <ul>
	    <li v-for="todo in todos">
	      <span>{{ todo.text }}</span>
	      <button v-on:click="removeTodo($index)">X</button>
	    </li>
	  </ul>
	</div>
</template>
<script>
	module.exports = {
		data: function(){
			return {
				newTodo: '',
			    todos: [
			      { text: 'Add some todos' }
			    ]
			}
		},
		methods: {
		    addTodo: function () {
		      var text = this.newTodo.trim()
		      if (text) {
		        this.todos.push({ text: text })
		        this.newTodo = ''
		      }
		    },
		    removeTodo: function (index) {
		      this.todos.splice(index, 1)
		    }
		  }
	}
</script>