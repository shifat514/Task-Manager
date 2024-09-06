<template>
    <div>
        <div class="flex gap-x-2">
            <div class="w-full">
                <input v-model="title" type="text" 
                    class="appearance-none outline-none border-2 border-slate-200 focus:border-gray-200  py-2 px-3 w-full
                    focus:bg-white rounded"
                    placeholder="Enter task"
                >
            </div>
            <button class="bg-green-50 text-green-600 border border-green-700 px-4 py-1 font-bold rounded disabled:bg-white disabled:text-gray-200 disabled:border-gray-300"
                :disabled="!title"
                @click="addTask"
            >
                Add
            </button>
        </div>
    </div>
</template>

<script>
   export default {
    data() {
        return {
            title: '',
        }
    },
    methods: {
        addTask() {
            let task = {
                title: this.title,
                completed: false,
            }
            this.$store.commit('taskList/addTask',task)
            this.title = ""
        }
    }
   }
</script>
