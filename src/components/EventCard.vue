<template>
  <article class="event-card">
      <img :src="eventInfo.img" class="card-img" alt="">
      <div class="date-time-container">
        <span class="card-date">{{eventInfo.date}}</span>
        <span class="card-time">{{eventInfo.time}}</span>
      </div>
      <h3 class="card-title">{{eventInfo.title}}</h3>
      <p class="card-organizer">{{eventInfo.organizer}}</p>
  </article>
</template>

<script>
export default {
    name: "event-card",
    props: {
        eventInfo: Object
    }
}
</script>

<style>

</style>