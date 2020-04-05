<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, i) in todos" :key="todo.id"
        :index="i"
        :todo="todo"
        @removeTodo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
  import TodoItem from '@/components/TodoItem'

  export default {
    props: ['todos'],
    components: {
      TodoItem
    },
    methods: {
      removeTodo(id) {
        console.log('ID', id)
        this.$emit('removeTodo', id)
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
