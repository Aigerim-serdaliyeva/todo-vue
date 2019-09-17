<template>
  <div>

    <div class="input-group">
      <input type="text" class="form-control" v-model="newItem" placeholder="What needs to be done?" @keyup.enter="addItem">
      <div class="input-group-append">
        <button @click="addItem" class="btn btn-info">Add</button>
      </div>
    </div>

    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in items"
        :key="item.id"
      >{{ item.title }}
        <div class="grow"></div>
        <button @click="removeItem(index)" class="btn btn-sm btn-danger" type="button">Delete</button>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: '',
      idItem: '',
      items: [
        {
          'id': 1,
          'title': 'Learn Vue.js',
          'completed': false
        },
        {
          'id': 2,
          'title': 'Create Todo List App',
          'completed': false
        }
      ]
    }
  },
  methods: {
    addItem() {
      if(this.newItem.trim().length === 0) {
        return
      }

      this.items.push({
        id: this.idItem,
        title: this.newItem,
        completed: false
      })
      this.newItem = ''
      this.idItem++
    },
    removeItem(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>


<style lang='scss'>
  .grow {
    flex-grow: 1;
  }
  .list-group {
    margin: 20px 0;
    &-item {
      display: flex;
    }
  }
</style>
