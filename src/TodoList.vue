<template>
  <div>
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Learn Vue', 'Build Awesome App', 'My todo list']
    }
  }
}
</script>
