import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [
      { id: 1, text: 'Learn Vue 3', isFinished: false },
      { id: 2, text: 'Learn Pinia', isFinished: false },
      { id: 3, text: 'Build something awesome', isFinished: false },
    ],
    filter: "all",
  }),
  getters: {
    filteredTodos(){
      if(this.filter === "finished"){
        return this.todos.filter(t => t.isFinished)
      }else if(this.filter === "unfinished"){
        return this.todos.filter(t => !t.isFinished)
      }
      return this.todos;
    }
  },
  actions: {
    addTodo (text) {
      if(!text) return;
      this.todos.push({
        id: Math.floor(Math.random() * 10000000),
        text,
        isFinished: false,
      })
    },
    toggleTodo(id){
      const index = this.todos.findIndex(t => t.id === id)
      this.todo[index].isFinished = !this.todo[index].isFinished
    },
    updateFilter(value){
      this.filter = value;
    }
  }
})
