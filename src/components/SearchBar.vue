<template>
<div>
    <img alt="Vue logo" src="icons/01d.png" />
      <h2>Weather Application</h2>
      <br />
      <input
        type="text"
        v-model="data.state.query"
        @keyup.enter="data.weatherSearch"
        class="field"
        placeholder="Search by city!"
      />
</div>
</template>

<script>
import { reactive, watchEffect } from "vue"
import { callWeather } from "../modules/weather"
export default {
    setup(){
        const data = callWeather();

    return {
      data,
    };
    }
}
</script>

<style>

</style>