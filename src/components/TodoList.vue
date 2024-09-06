<template>
    <div>
      <div v-if="tasks.length" class="mt-5">
        <div class="">
          <div v-if="filter === 'All'">
            <div v-for="(item,index) in tasks" :key="index+'All'" class="">
              <div class="flex justify-between items-center border-2 bg-white border-gray-200 py-3 px-2 mt-2 rounded ">
                <div class="flex gap-x-8 items-center text-gray-700 bg-white" :class="item.completed ? 'line-through': ''">
                  <input v-model="item.completed" type="checkbox" class="w-5 h-5" @click.stop="changeStatus(index)">
                      {{ item.title }}
                </div>
                <div >
                  <button class="bg-red-50 text-red-600 border-2 border-red-500 text-xs px-3 py-2 font-bold rounded"
                    @click.stop="deleteTask(index)">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="filter === 'Completed'">
            <div v-for="(item,index) in tasks" :key="index+'Completed'">
              <div v-if="item.completed">
                <div class="flex justify-between items-center  bg-white border-2 border-gray-200 py-3 px-2 rounded mt-2">
                  <div class=" bg-white  text-gray-700" :class="item.completed ? 'line-through': ''">
                        {{ item.title }}
                    </div>
                    <div class="flex gap-x-4">
                      <button class="bg-red-50 text-red-600 border-2 border-red-500 text-xs px-3 py-2 font-bold rounded"
                        @click.stop="deleteTask(index)">
                        Delete
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="filter === 'Pending'">
            <div v-for="(item,index) in tasks" :key="index+'Pending'">
              <div v-if="!item.completed">
                <div class="flex justify-between items-center  bg-white border-2 border-gray-200 py-3 px-2 rounded mt-2">
                  <div class=" bg-white text-gray-700" :class="item.completed ? 'line-through': ''">
                        {{ item.title }}
                    </div>
                    <div class="flex gap-x-4">
                      <button class="bg-red-50 text-red-600 border-2 border-red-500 text-xs px-3 py-2 font-bold rounded"
                        @click.stop="deleteTask(index)">
                        Delete
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
      props: {
        filter: {
          type: String,
          default: 'All'
        }
      },
      data() {
        return {
          tasks: [],
        }
      },
      mounted() {
        this.fetchTasks()
      },
      computed: {
        tasks_comp() {
          return this.$store.getters['taskList/getTasks']
        }
      },
      watch: {
        tasks_comp: {
          handler(newVal) {
            this.tasks = [...newVal]
          },
          deep:true,
          immediate: true
        },
      },
      methods: {
        fetchTasks() {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(json => {
              json = JSON.parse(JSON.stringify(json))
              if(window.localStorage.getItem('localTasks')) {
                let temp = JSON.parse(window.localStorage.getItem('localTasks'))
                json.push(...temp)
              }
              this.$store.commit('taskList/addTask',json)
            })
            .then(()=> {
                this.tasks = JSON.parse(JSON.stringify(this.$store.getters['taskList/getTasks']))
            })
            .then(()=> {
              this.tasks = JSON.parse(JSON.stringify(this.$store.getters['taskList/getTasks']))
              })
            .catch((err)=> {
              console.log('err',err)
            })
        },
        deleteTask(index) {
          this.tasks.splice(index,1)
          this.$store.commit('taskList/deleteTask',index)
        },
        changeStatus(index) {
          this.$store.commit('taskList/changeStatus',index)
        }
      },
    }
</script>

<style lang="scss" scoped>

</style>