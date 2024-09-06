<template>
  <div class="flex justify-center mt-20 mb-10">
    <div class="w-[800px] mx-8">
      <div class="text-xl font-bold mb-4 flex justify-between">
        <div>
          <span :class="filter === 'All' ? 'text-blue-600' : filter === 'Completed' ? 'text-lime-600' : 'text-amber-500'"> {{ filter }}</span> Tasks
        </div>
        <div class="flex gap-x-2">
            <button class=" bg-blue-50 text-blue-600 border border-blue-700  px-2 py-1  text-sm rounded disabled:bg-gray-400"
            @click="filter = 'All'"
            >
              All
            </button>
            <button class=" bg-lime-50 text-lime-600 border border-lime-700 px-2 py-1  text-sm rounded disabled:bg-gray-400"
             @click="filter = 'Completed'"
            >
              Completed
            </button>
            <button class=" bg-yellow-50 text-amber-500 border border-amber-700 px-2 py-1  text-sm rounded disabled:bg-gray-400"
             @click="filter = 'Pending'"
            >
              Pending
            </button>
        </div>
      </div>
      <TodoItem />
      <TodoList :filter="filter"/>
  </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'
export default {
  name: 'App',
  components: {
    TodoList,
    TodoItem
  },
  data() {
    return {
      filter:'All',
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

