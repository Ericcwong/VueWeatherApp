<template>
  <div>
    <img alt="Vue logo" src="icons/01d.png" />
    <h2>Weather Application</h2>
    <br />
    <!--       @keyup.enter="data.weatherSearch" -->
    <input
      type="text"
      :value="location"
      @keyup="handleChange"
      class="field"
      placeholder="Search by city!"
    />
    <input @click="handleSubmit" type="submit" value="Search" />
  </div>
</template>

<script>
import { ref } from "vue";
import { callWeather } from "../modules/weather";
export default {
  name: "SearchBar",
  props: ["search"],
  setup({ search }, { emit }) {
    const location = ref(search);

    return {
      location,
      handleSubmit(event) {
        event.preventDefault();
        emit("search", location.value);
      },
      handleChange(event) {
        location.value = event.target.value;
      },
    };
  },
  // setup() {
  //   const data = callWeather();
  //   watchEffect(() => {
  //     console.log(data.state.query);
  //   });
  //   return {
  //     data,
  //   };
  // },
};
</script>

<style>
</style>