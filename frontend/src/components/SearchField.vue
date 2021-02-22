<template>
  <section class="search-field">
      <input type="text" v-model="userEventInput" class="event-input-field">
      <input type="text" v-model="locationFilter" class="location-filter">
      
  </section>
</template>

<script>
export default {
  name: "search-field",
  data() {
    return {
      userEventInput: "",
      locationFilter: ""
    }
  }
}
</script>

<style>

</style>