<template>
  <div class="container">
    <div class="SearchBox">
      <img alt="Vue logo" src="./assets/logo.png" />
      <br />
      <input type="text" v-model="data.state.query" @keyup.enter="data.weatherSearch" class="field" />
      <p>{{data.state.query}}</p>
    </div>
    <div class="currentDay">
      <CurrentDay :currentDayData="data.state.currentWeather" />
    </div>
    <div class="fiveDay"></div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { callWeather } from "./modules/weather";
import CurrentDay from "./components/CurrentDay.vue";
export default {
  name: "App",
  components: {
    CurrentDay,
  },
  setup() {
    // State variables that stores all the data
    const data = callWeather();
    return {
      data,
    };
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: grid;
  /* grid-template-columns: 50px 50px 50px 50px; */
  border: 1px solid black;
  grid-template-rows: auto;
  grid-template-areas:
    "SearchBox . . ."
    ". currentDay currentDay ."
    "fiveDay fiveDay fiveDay fiveDay";
}
.SearchBox {
  border: 1px solid red;
  place-self: center;
}
.currentDay {
  border: 1px solid blue;
  place-self: center;
}
</style>