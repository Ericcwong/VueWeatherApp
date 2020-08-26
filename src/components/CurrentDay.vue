<template>
  <div>
    <div class="container">
      <!-- WeatherWrap is to load conditionally, v-if is saying if currentDayData.weather.main is undefined dont render whats below -->
      <div class="weatherWrap" v-if="typeof currentDayData.main != 'undefined'">
          <div class="location">
            <h1>{{currentDayData.name}}</h1>
          </div>
          <div class="icon">
            <img :src="`/icons/${currentDayData.weather[0].icon}.png`" alt="Weather Icon" />
          </div>
          <div class="Temp">
            <h1>Temperature: {{Math.round(currentDayData.main.temp)}}°F</h1>
            <div class="feelsLikeTemp"><h3>Feels Like:{{Math.round(currentDayData.main.feels_like)}}°F</h3></div>
          </div>
         <div class="weatherDetails">
          <div class="weather"><p>Description: {{currentDayData.weather[0].description}}</p></div>
          <div class="windspeed"><p>Wind Speed: {{currentDayData.wind.speed}}MPH</p></div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from "vue"
export default {
  props: {
    currentDayData: Object,
  }, 
  setup(props) {
    watch(() => {
      console.log(props.currentDayData)
    })
  },
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
.Temp{
  text-align: center;
}
.weatherDetails p{
  font-size: 1.1rem;
}
</style>