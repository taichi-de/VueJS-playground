<script setup>
import {ref} from "vue"
import {useTodosStore} from  "./stores/todo";
import { storeToRefs } from "pinia";

const newTodo = ref("")

const {todosStore} = useTodosStore();

const {filteredTodos} = storeToRefs(todosStore);
const {addTodo, toggleTodo, updateFilter} = todosStore();

const addNewTodo = (text) => {
  addTodo(text)
  newTodo.value = ""
}
</script>

<template>
  <main>
    <div>
        <button @click="()=>updateFilter('all')">all</button>
        <button @click="()=>updateFilter('finished')">finished</button>
        <button @click="()=>updateFilter('unfinished')">unfinished</button>
    </div>
    <input v-model="newTodo" type="text" />
    <button @click="() => addNewTodo(newTodo)">Add</button>

    <div v-for="todo in filteredTodos" style="display: flex" :key="todo.id">
      <p :style="todo.isFinished && {textD
    : 'line-through'}">{{ todo.text }}</p>
      <button @click="()=>toggleTodo(todo.id)">toggle</button>
    </div>
  </main>
</template>

<style scoped>
</style>
