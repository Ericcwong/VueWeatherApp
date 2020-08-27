<template>
  <div class="container">
    <div class="cards" v-for="location in locations" :key="location">
      <div class="information">
        <p>{{location.dt_txt}}</p>
        <p>Temperature: {{Math.round(location.main.temp)}}°F</p>
        <p>Feels like: {{Math.round(location.main.feels_like)}}°F</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FiveDay",
  props: ["locations"],
  setup(locations) {
    console.log(locations);
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