<template>
  <!--<div id="nav">
    <router-link to="/">Home</router-link>
  </div> -->
  <router-view  :eventsArray="eventsArray"/>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      eventsArray: []
    }
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
    this.$nextTick(() => {
      console.log("i was created")
      this.getEventDataArray()
    })
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
