<template>
  <div id="nav">
    <div class="align-right">
    <router-link to="/">Home</router-link>
    <router-link to="/create-event">Create Event </router-link>
    </div>
  </div> 
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      eventsArray: []
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px 0 30px 0;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 1rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.align-right {
  text-align: right;
}


</style>
