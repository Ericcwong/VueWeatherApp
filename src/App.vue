<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <CurrentDay />
</template>

<script>
import CurrentDay from "./components/CurrentDay.vue";

export default {
  name: "App",
  components: {
    CurrentDay,
  },
};
</script>
