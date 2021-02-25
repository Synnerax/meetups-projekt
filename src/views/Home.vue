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
  data() {
    return {
      eventsArray: []
    }
  },
  components: {
    SearchField,
    EventCard
  },
  methods: {
    async getEventDataArray() {
      let settings = {
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2b$10$IQutUOnIDU5m1VTI.4PzQ.M1ZzdQ4Q/XZzMz/MT7RKqX8oHx3k0pu',
            'X-Bin-Versioning': 'false'
        }
      }
      try{
      let resp = await fetch(`https://api.jsonbin.io/v3/b/60355a8d0866664b10820263/latest`, settings)
      let data = await resp.json()

      this.eventsArray = await data.record.Events
      console.log(data)
      }
      catch(err){
        console.error(err)
      }
    }
  },
  mounted() {
    //this.$nextTick(() => {
      console.log("i was created")
      this.getEventDataArray()
    //})
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