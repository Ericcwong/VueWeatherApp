<template>
  <div>
    {{currentDayData.main}}
    <!-- <div class="currentDay">
      WeatherWrap is to load conditionally, v-if is saying if currentDayData.weather.main is undefined dont render whats below
      <div class="weatherWrap" v-if="typeof currentDayData.weather.main != 'undefined'">
        <h1>{{currentDayData}}</h1>
        <div class="locationBox">
          <div class="location" v-bind="currentDayData.weather.name">{{currentDayData.weather.name}}</div>
          {{ currentDayData.weather}}
          <div class="date">{{getDate()}}</div>
        </div>
        <div class="weatherBox">
          <div class="temp">{{Math.round(currentDayData.weather.main.temp)}}°F</div>
          <div class="weather">{{currentDayData.weather.weather.description}}</div>
        </div>
      </div>
    </div>-->
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
