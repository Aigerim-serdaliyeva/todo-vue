<template>
    <div class="input-group">
        <input type="text" class="form-control" v-model="newItemInput" placeholder="What needs to be done?" @keyup.enter="addItem">
        <div class="input-group-append">
          <button @click="addItem" class="btn btn-info">Add</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        newItemInput: {
            get() {
                return this.newItem
            },
            set(value) {
                this.updateInput(value)
            }
        },
        ...mapGetters({
            newItem: 'todoList/newItem'
        }),
    },
    methods: {
        ...mapActions({
            addItem: 'todoList/addItem',
            updateInput: 'todoList/updateInput'
        }),      
    }
}
</script>