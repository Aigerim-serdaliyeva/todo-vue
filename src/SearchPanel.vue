<template>
  <div>
    <input type="text" v-model="searchText">
  </div>
</template>

<script>
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
