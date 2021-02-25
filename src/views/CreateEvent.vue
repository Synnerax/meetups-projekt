<template>
  <section>
      <form action="">
          <input type="text" class="event-input-title" placeholder="Name of event and a short description..">
          
          <section class="first-middle-section">
          <input type="text" class="event-input-location" placeholder="Location..">
          <input type="text" class="event-input-seats" placeholder="Open Seats..">
          </section>
          
          <section class="second-middle-section">
            <input type="text" class="event-input-date" placeholder="Date..">
            <input type="text" class="event-input-time" placeholder="Date..">
            <!-- should be a option to choose from am and pm
            <input type="text" class="am-pm">
            -->
            <input type="text" class="event-input-tag" placeholder="choose a tag">
          </section>

        <section class="description-section">
            <label for="w3review">Event Description:</label>
            <textarea class="event-input-description" name="description" rows="18" cols="90">
            </textarea>
        </section>

        <button>Submit Event</button>
      </form>
  </section>
</template>

<script>
export default {
    name: "Create-Event",
    
}
</script>

<style>

form  * {
    margin-top: 1rem;
    border-radius: 5px;
    border: none;

}
form {
    background: rgb(203, 212, 207);
    border-radius: 8px;
    min-width: 200px;
    max-width: 915px;
    margin: auto;
    padding: 2rem 4rem;
    
}
.event-input-title {
    width: 99%;
    height: 42px;
}

.first-middle-section {
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: space-between;
}
.event-input-location {
    width: 40%;
}

.event-input-seats {
    width: 40%;
}

.second-middle-section {
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: space-between;
}

.description-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

textarea {
    resize: none;
}

button {
    margin-top: 3rem;
    height: 42px;
    width: 98px;


}
/*
.event-input-description {
    width: 450px;
    height: 200px;
}

*/
</style>