export default {
  actions: {
    addTodo({commit}, todo) {
      commit('addTodo', todo)
    },
    async fetchTodos({commit}) {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      const todos = await result.json()
      commit('updateTodos', todos)
    },
    removeTodo({state, commit}, id) {
      commit('removeTodo', state.todos.filter(t => t.id !== id))
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.unshift(todo)
    },
    updateTodos(state, todos) {
      state.todos = todos
    },
    removeTodo(state, todos) {
      state.todos = todos
    }
  },
  state: {
    todos: []
  },
  getters: {
    allTodos(state) {
      return state.todos
    },
    todosCount(state) {
      return state.todos.length
    },
  }
}
