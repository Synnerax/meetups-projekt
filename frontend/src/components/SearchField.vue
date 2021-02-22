<template>
  <section class="search-field">
      <input type="text" v-model="userEventInput" class="event-input-field">
      <input type="text" class="location-filter">
      
  </section>
</template>

<script>
export default {
  name: "search-field",
  data() {
    return {
      userEventInput: ""
    }
  }
}
</script>

<style>

</style>