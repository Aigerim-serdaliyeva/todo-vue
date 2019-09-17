import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import todoList from "./todo-list";

const store = () =>
    new Vuex.Store({
        modules: {
            todoList            
        }
    });

export default store;
