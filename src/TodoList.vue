<template>
  <div>

    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in items"
        :key="item.id"
      >{{ item.title }}
        <div class="grow"></div>
        <button @click="removeItem(index)" class="btn btn-sm btn-danger" type="button">Delete</button>
        <button @click="activeItem(index)" class="btn btn-sm btn-success" type="button">Active</button>
      </li>
    </ul>

    <div class="input-group">
      <input type="text" class="form-control" v-model="newItem" placeholder="What needs to be done?" @keyup.enter="addItem">
      <div class="input-group-append">
        <button class="btn btn-info">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: '',
      idItem: 3,
      items: [
        {
          'id': 1,
          'title': 'Learn Vue.js',
          'completed': false
        },
        {
          'id': 2,
          'title': 'Great Todo List App',
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
    },
    activeItem(index) {

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
      .btn-danger {
      }
    }
  }
</style>
