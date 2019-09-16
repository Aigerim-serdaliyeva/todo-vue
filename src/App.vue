<template>
  <div id="app" class="container mt-10">
    <app-header></app-header>
    <app-search-panel></app-search-panel>
    <app-todo-list></app-todo-list>
  </div>
</template>

<script>
import Header from './Header'
import SearchPanel from './SearchPanel'
import TodoList from './TodoList'
export default {
  components: {
    appHeader: Header,
    appSearchPanel: SearchPanel,
    appTodoList: TodoList
  }
}
</script>

<style lang="scss">

</style>
