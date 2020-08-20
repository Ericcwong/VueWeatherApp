<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <input type="text" v-model="state.query" @keyup.enter="weatherSearch" class="field" />
  <p>{{state.query}}</p>
  <CurrentDay :currentDayData="state.weather" />
</template>

<script>
import CurrentDay from "./components/CurrentDay.vue";
import { reactive } from "vue";
export default {
  name: "App",
  components: {
    CurrentDay,
  },
  setup() {
    // State variables that stores all the data
    const state = reactive({
      apiKey: "c0d97a019ea859a14447316fcc3b3bce",
      urlBase: "https://api.openweathermap.org/data/2.5/weather?q=",
      query: "",
      weather: {},
    });
    // API call
    function weatherSearch(e) {
      if (e.key == "Enter") {
        fetch(
          `${state.urlBase}${state.query}&units=imperial&appid=${state.apiKey}`
        )
          .then((res) => {
            console.log(res);
            return res.json();
          })
          .then((results) => {
            state.weather = results;
            console.log(state.weather);
          });
      }
    }
    //Setting current dates to each day
    function getCurrentDate() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day}, ${month}, ${date}, ${year}`;
    }

    return {
      state,
      weatherSearch,
      getCurrentDate,
    };
  },
};
</script>

<style scoped>
.weatherWrap {
  border: 1px solid black;
}
</style>