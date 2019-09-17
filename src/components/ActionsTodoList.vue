<template>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item) in items"
        :key="item.id"
      >{{ item.title }}
        <div class="grow"></div>
        <button @click="removeItem(item.id)" class="btn btn-sm btn-danger" type="button">Delete</button>
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
          removeItem: 'todoList/removeItem'
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