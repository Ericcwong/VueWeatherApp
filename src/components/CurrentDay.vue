<template>
  <div>
    <div class="container">
      <!-- WeatherWrap is to load conditionally, v-if is saying if currentDayData.weather.main is undefined dont render whats below -->
      <div class="weatherWrap" v-if="typeof currentDayData.main != 'undefined'">
        <div class="locationBox">
          <div class="location">
            <h1>{{currentDayData.name}}</h1>
          </div>
          <!-- {{ currentDayData.weather}} -->
          <!-- <div class="date">{{getDate()}}</div> -->
        </div>
        <div class="weatherBox">
          <div class="actualTemp">
            <h1>{{Math.round(currentDayData.main.temp)}}°F</h1>
          </div>
          <div class="icon">
            <img :src="`/icons/${currentDayData.weather[0].icon}.png`" alt="Weather Icon" />
          </div>
          <div class="weather">Description: {{currentDayData.weather[0].description}}</div>
          <div class="feelsLikeTemp">Feels Like:{{Math.round(currentDayData.main.feels_like)}}°F</div>
          <div class="windspeed">Wind Speed: {{currentDayData.wind.speed}}MPH</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentDayData: Object,
  },
  setup() {},
};
</script>
<style scoped>
/* .location {
  grid-area: location;
}
.actualTemp {
  grid-area: actualTemp;
}
.icon {
  grid-area: icon;
}
.weather {
  grid-area: weather;
}
.feelsLikeTemp {
  grid-area: feelsLikeTemp;
}
.windSpeed {
  grid-area: windSpeed;
} */
.container {
  width: 50vw;
  /* display: grid; */
  /* grid-template:
    [row1-start] "location icon" [row1-end]
    [row2-start] "actualTemp feelsLikeTemp" [row2-end]
    [row3-start] "weather windSpeed" [row3-end]; */
}
</style>