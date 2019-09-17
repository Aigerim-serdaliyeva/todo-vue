<template>
  <div id="app" class="container ">
    <app-header></app-header>
    <app-todo-list></app-todo-list>
  </div>
</template>

<script>
import Header from './Header'
import TodoList from './TodoList'
export default {
  components: {
    appHeader: Header,
    appTodoList: TodoList
  }
}
</script>

<style lang="scss">

</style>
