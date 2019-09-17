const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_INPUT = 'UPDATE_INPUT'

export default {
    namespaced: true,
    state: {
        newItem: '',
        items: []
    },
    getters: {
        items: state => state.items,
        newItem: state => state.newItem
    },
    mutations: {        
        [ADD_ITEM](state) {
            if(state.newItem.trim().length === 0) {
                return
            }

            state.items.push({
                id: Date.now(),
                title: state.newItem        
            })

            state.newItem = ''
        },
        [REMOVE_ITEM](state, payload) {
            const id = payload                        
            const currentIndex = state.items.findIndex(item => item.id === id)

            state.items.splice(currentIndex, 1)
        },
        [UPDATE_INPUT](state, payload) {
            state.newItem = payload
        }
    },
    actions: {        
        addItem({ commit }) {
            commit(ADD_ITEM)
        },
        removeItem({ commit }, payload) {
            commit(REMOVE_ITEM, payload)
        },        
        updateInput({ commit }, payload) {
            commit(UPDATE_INPUT, payload)
        }
    }
};
