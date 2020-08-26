<template>
  <div class="container">
    <div class="SearchBox">
      <SearchBar/>
    </div>
    <div class="currentDay">
      <CurrentDay :currentDayData="data.state.currentWeather" />
    </div>
    <div class="fiveDay"></div>
  </div>
</template>

<script>
import { reactive, watchEffect } from "vue";
import { callWeather } from "./modules/weather";
import SearchBar from "./components/SearchBar.vue"
import CurrentDay from "./components/CurrentDay.vue";
export default {
  name: "App",
  components: {
    CurrentDay,
    SearchBar
  },
  setup() {
    const data = callWeather();
    //Data is assigned all the information from callWeather function. Which holds all the data.
    watchEffect(() => {
      data
    });
    return {
      data,
    };
  },
};
</script>

<style scoped>
.container {
  background-color: lightblue;
  height: 100vh;
  display: grid;
  border: 1px solid black;
  grid-template-rows: auto;
  grid-template-areas:
    "SearchBox . . ."
    ". currentDay currentDay ."
    "fiveDay fiveDay fiveDay fiveDay";
}
.SearchBox {
  place-self: center;
}
.SearchBox img {
  width: 100%;
}
.SearchBox h2 {
  text-align: center;
}
.SearchBox input {
  width: 100%;
  height: 40px;
  font-size: 1.25rem;
}
.currentDay {
  place-self: center;
}
</style>