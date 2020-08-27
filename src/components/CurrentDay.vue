<template>
  <div>
    <!-- {{location.name}} -->
    <div class="container">
      <!-- WeatherWrap is to load conditionally, v-if is saying if location.weather.main is undefined dont render whats below -->
      <div class="weatherWrap" v-if="typeof location.main != 'undefined'">
        <div class="location">
          <h1>{{location.name}}</h1>
        </div>
        <div class="icon">
          <img :src="`/icons/${location.weather[0].icon}.png`" alt="Weather Icon" />
        </div>
        <div class="Temp">
          <h1>Temperature: {{Math.round(location.main.temp)}}°F</h1>
          <div class="feelsLikeTemp">
            <h3>Feels Like:{{Math.round(location.main.feels_like)}}°F</h3>
          </div>
        </div>
        <div class="weatherDetails">
          <div class="weather">
            <p>Description: {{location.weather[0].description}}</p>
          </div>
          <div class="windspeed">
            <p>Wind Speed: {{location.wind.speed}}MPH</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watchEffect, ref } from "vue";
export default {
  props: ["location"],
};
</script>
<style scoped>
.container {
  width: 50vw;
}
.location h1 {
  font-size: 3rem;
  text-align: center;
}
.weatherWrap {
  border: 1px solid black;
  background-color: #c4e3ed;
  display: grid;
  grid-template-columns: 70% 30%;
}
.Temp {
  text-align: center;
}
.weatherDetails p {
  font-size: 1.1rem;
}
</style>