<template>
  <div class="home">
    <SearchField></SearchField>
    <section class="event-section">
      <h1 class="section-header">Events</h1>
      <section class="event-list">

      <EventCard v-for="eventInfo in eventsArray" :key="eventInfo.id" :eventInfo="eventInfo"></EventCard>
      </section>
    </section>
  </div>
</template>

<script>
import SearchField from '@/components/SearchField.vue'
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'Home',
  components: {
    SearchField,
    EventCard
  },
  props: {
    eventsArray: Array
  },
  methods:{
/*
    async getEventDataArray() {
        let settings = {
        method: 'GET',
        //body: JSON.stringify(cart),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Master-Key': '$2b$10$IQutUOnIDU5m1VTI.4PzQ.M1ZzdQ4Q/XZzMz/MT7RKqX8oHx3k0pu'
        }
      }

      const response = await fetch("https://api.jsonbin.io/b/60355a8d0866664b10820263", settings)
      
      const data = await response.json()
      console.log(data)

      return data
    }*/
  }
}
</script>

<style >

.event-section {
  margin-top: 5rem;
  margin-left: 4rem;
  width: 100%;
  
}

.section-header {
  text-align: left;
}
.event-list {
  display: flex;
}
</style>