<template>
  <div>

    <AddTodoList />
    <ActionsTodoList />  

  </div>
</template>

<script>
import AddTodoList from './components/AddTodoList'
import ActionsTodoList from './components/ActionsTodoList'

export default {
  components: {
      AddTodoList, ActionsTodoList
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
