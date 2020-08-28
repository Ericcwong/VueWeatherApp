<template>
  <div class="weatherWrap">
    <div class="cards">
      <ul class="information" v-for="location in locations.list" :key="location">
        <li>{{location.dt_txt}}</li>
        <li>Temperature: {{Math.round(location.main.temp)}}°F</li>
        <li>Feels like:{{Math.round(location.main.feels_like)}}°F</li>
      </ul>
      <!-- <p>{{location.dt_txt}}</p>
        <p>Temperature: {{Math.round(location.main.temp)}}°F</p>
      <p>Feels like: {{Math.round(location.main.feels_like)}}°F</p>-->
    </div>
  </div>
</template>

<script>
import { computed, watch } from "vue";
export default {
  name: "FiveDay",
  props: ["locations"],
  setup(locations) {
    console.log(locations.locations.city);
    const filtedArray = computed(() => {
      return locations.filter((number) => number % 2 === 0);
    });
    // watch(locations.list, (newval, oldval) => {
    //   console.log(newval, oldval);
    // });
    return {
      filtedArray,
    };
  },
};
</script>

<style scoped>
.weatherWrap {
  width: 90vw;
}
.cards {
  width: 90vw;
  height: 30%;
  border: 1px solid black;
  background-color: #c4e3ed;
  display: grid;
  grid-template-columns: 13% 13% 13% 13% 13% 13% 13% 13%;
  padding-right: 40px;
}
li {
  list-style: none;
}
</style>