import { createStore } from 'vuex'
import taskList from './modules/taskList'

const store = createStore({
    modules: {
        taskList,
    },
    // state:{},
    // getters:{},
    // mutations:{},
    // actions:{},
})

export default store;