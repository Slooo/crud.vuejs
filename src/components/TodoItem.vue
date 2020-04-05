<template>
  <li v-bind:class="{done: todo.completed}">
    <span>
      <input type="checkbox" v-on:change="todo.completed=!todo.completed"/>
      <strong>{{index + 1}}</strong>
      {{todo.title | toUpperCase}}
    </span>
    <button class="rm" v-on:click="$emit('removeTodo', todo.id)">&times;</button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      },
      index: Number
    },
    filters: {
      toUpperCase(value) {
        return value.toUpperCase()
      }
    }
  }
</script>

<style scoped>
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }

  .rm {
    background: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
  }

  input {
    margin-right: 1rem;
  }

  .done {
    text-decoration: line-through;
  }
</style>
