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
      @keydown.enter="handleSubmit"
      class="field"
      placeholder="Search by city!"
    />
    <input class="submitButton" @click="handleSubmit" type="submit" value="Search" />
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
};
</script>

<style scoped>
img {
  width: 100%;
}
h2 {
  text-align: center;
}
.field {
  width: 70%;
  height: 40px;
  font-size: 1.25rem;
}
.submitButton {
  height: 46px;
  font-size: 1.25rem;
}
</style>