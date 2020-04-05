export default {
  actions: {
    async fetchTodos(context) {
      console.log('BAG')
      const result = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      const todos = await result.json()
      context.commit('updateTodos', todos)
    }
  },
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos
    }
  },
  state: {
    todos: []
  },
  getters: {
    allTodos(state) {
      return state.todos
    }
  }
}
