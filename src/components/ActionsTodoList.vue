<template>
    <ul class="list-group">
      <li
        class="list-group-item"
        :class="{ active: item.isActive }"
        v-for="(item) in items"
        :key="item.id"
      >{{ item.title }}
        <div class="grow"></div>
        <button @click="removeItem(item.id)" class="btn btn-sm btn-danger" type="button">Delete</button>
        <button @click="setItemActive(item.id)" class="btn btn-sm btn-success" type="button">{{ item.isActive ? 'Unselect' : 'Select' }}</button>
      </li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {    
      ...mapGetters({
          items: 'todoList/items'
      }),
  },
  methods: {
      ...mapActions({
          removeItem: 'todoList/removeItem',
          setItemActive: 'todoList/setItemActive'
      }),      
    //   _removeItem() {
    //       const payload = {
    //         id: this.id  
    //         price: this.price
    //       }

    //       this.removeItem(payload)
    //   }
  }
}
</script>