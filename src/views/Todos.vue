<template>
  <div>
    <h2>TODO in VueJS</h2>
    <router-link to="/">Home</router-link>
    <AddTodo @addTodo="addTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="notCompleted">Not completed</option>
    </select>
    <Loader v-if="loading"/>
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @removeTodo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
  import TodoList from '@/components/TodoList'
  import AddTodo from '@/components/AddTodo'
  import Loader from '@/components/Loader'

  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'App',
    data() {
      return {
        todos: [],
        filter: [],
        loading: true
      }
    },
    mounted() {
      console.log('THE', this.fetchTodos, mapActions(['fetchTodos']))
      this.fetchTodos()
    },
    components: {
      TodoList, AddTodo, Loader
    },
    // watch: {
    //   filterTodo (value) {
    //     console.log('value', value)
    //   }
    // },
    computed: {
      filteredTodos() {
        if (this.filter === 'all') {
          return mapGetters(['allTodos'])
        }

        if (this.filter === 'completed') {
          return mapGetters(['allTodos']).filter(t => t.completed)
        }

        if (this.filter === 'notCompleted') {
          return mapGetters(['allTodos']).filter(t => !t.completed)
        }

        return mapGetters(['allTodos'])
      }
    },
    methods: {
      fetchTodos() {
        return mapActions(['fetchTodos'])
      },
      removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id)
      },
      addTodo(todo) {
        this.todos.push(todo)
      }
    }
  }
</script>
