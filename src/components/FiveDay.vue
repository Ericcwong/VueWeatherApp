<template>
  <div class="container">
    <div class="cards" v-for="location in locations.list" :key="location">
      <div class="information">
        <p>{{location.dt_txt}}</p>
        <p>Temperature: {{Math.round(location.main.temp)}}°F</p>
        <p>Feels like: {{Math.round(location.main.feels_like)}}°F</p>
      </div>
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
.container {
  width: 50vw;
}
.cards {
  height: 30%;
}
</style>