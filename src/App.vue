<template>
  <div class="container">
    <div class="SearchBox">
      <SearchBar :search="state.search" @search="handleSearch" />
    </div>
    <div class="currentDay">
      <CurrentDay :location="state.currentWeather" />
    </div>
    <div class="fiveDay"></div>
  </div>
</template>

<script>
import { reactive, watchEffect } from "vue";
// import { callWeather } from "./modules/weather";
import SearchBar from "./components/SearchBar.vue";
import CurrentDay from "./components/CurrentDay.vue";
export default {
  name: "App",
  components: {
    CurrentDay,
    SearchBar,
  },
  setup() {
    const state = reactive({
      apiKey: "c0d97a019ea859a14447316fcc3b3bce",
      currentDayUrlBase: "https://api.openweathermap.org/data/2.5/weather?q=",
      fiveDayUrlBase: "https://api.openweathermap.org/data/2.5/forecast?q=",
      search: "west jordan",
      savedQuery: [],
      currentWeather: {},
      fiveDayWeather: {},
    });

    watchEffect(() => {
      const currentWeatherAPIURL = `${state.currentDayUrlBase}${state.search}&units=imperial&appid=${state.apiKey}`;
      const fiveDayWeatherAPIURL = `${state.fiveDayUrlBase}${state.search}&appid=${state.apiKey}`;
      fetch(currentWeatherAPIURL)
        .then((response) => {
          return response.json();
          // console.log(response);
        })
        .then((results) => {
          // console.log(jsonResponse);
          state.currentWeather = results;
        });
      fetch(fiveDayWeatherAPIURL)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((results) => {
          state.fiveDayWeather = results;
          console.log(state.fiveDayWeather);
        });
    });
    //Data is assigned all the information from callWeather function. Which holds all the data.

    return {
      state,
      handleSearch(searchTerm) {
        state.search = searchTerm;
      },
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
.currentDay {
  place-self: center;
}
</style>