<template>
  <div>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="state.query" @keyup.enter="weatherSearch" class="field" />
    <!-- <p>{{state.query}}</p> -->
    <div class="currentDay">
      <!-- WeatherWrap is to load conditionally, v-if is saying if state.weather.main is undefined dont render whats below -->
      <div class="weatherWrap" v-if="typeof state.weather.main != 'undefined'">
        <div class="locationBox">
          <div class="location">{{state.weather.name}}</div>
          {{state.weather}}
          <div class="date">{{getDate()}}</div>
        </div>
        <div class="weatherBox">
          <div class="temp">{{Math.round(state.weather.main.temp)}}°F</div>
          <div class="weather">{{state.weather.weather.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    //State variables
    const state = reactive({
      apiKey: "c0d97a019ea859a14447316fcc3b3bce",
      urlBase: "https://api.openweathermap.org/data/2.5/weather?q=",
      query: "",
      weather: {},
    });
    // API call
    function weatherSearch(e) {
      // if (e.key == "Enter") {
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
      // }
    }

    function getDate() {
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
      getDate,
    };
  },
};
</script>
