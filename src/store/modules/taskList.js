

const taskList = {
    namespaced: true,
    state: {
        tasks: [],
    },
    getters: {
        getTasks: state => state.tasks,
    },
    mutations: {
        addTask(state, payload) {
            if (payload.length) {
                state.tasks.push(...payload)
            } else {
                if (window.localStorage.getItem('localTasks')) {
                    let temp = window.localStorage.getItem('localTasks')
                    temp = JSON.parse(temp)
                    temp.push(payload)
                    window.localStorage.setItem('localTasks', JSON.stringify(temp))
                } else {
                    window.localStorage.setItem('localTasks', JSON.stringify([payload]))
                }
                state.tasks.push(payload)
            }
        },
        changeStatus(state, payload) {
            state.tasks[payload].completed = !state.tasks[payload].completed
            if (window.localStorage.getItem('localTasks')) {
                let temp = window.localStorage.getItem('localTasks')
                temp = JSON.parse(temp)
                let found = temp.findIndex((el) => {
                    return el.title === state.tasks[payload].title
                })
                let arr = JSON.parse(JSON.stringify(temp))
                if (found > -1) {
                    arr[found].completed = !arr[found].completed
                }
                window.localStorage.setItem('localTasks', JSON.stringify(arr))
            }
        },
        deleteTask(state, payload) {
            console.log(payload)
            if (window.localStorage.getItem('localTasks')) {
                let temp = window.localStorage.getItem('localTasks')
                temp = JSON.parse(temp)
                let found = temp.findIndex((el) => {
                    return el.title === state.tasks[payload].title
                })
                let arr = JSON.parse(JSON.stringify(temp))
                if (found > -1) {
                    arr.splice(found, 1)
                }
                window.localStorage.setItem('localTasks', JSON.stringify(arr))
            }
            state.tasks.splice(payload, 1)
        }
    },
    actions: {
    }
}
export default taskList


