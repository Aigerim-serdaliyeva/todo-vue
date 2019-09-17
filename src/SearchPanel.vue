<template>
  <div>


    <div class="input-group">
      <input class="form-control" type="text" placeholder="search">
      <div class="input-group-append">
        <button class="btn btn-secondary">All</button>
        <button class="btn btn-secondary">Active</button>
        <button class="btn btn-secondary">Done</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './TodoList'
export default {
  data() {
    return {
      searchText: 'Type hear to search'
    }
  }
}
</script>

<style lang="scss">
  input {
    font-size: 16px;
  }
</style>
