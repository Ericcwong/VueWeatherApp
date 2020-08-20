// import {
//     reactive,
//     toRefs
// } from "vue";

// export default function useWeather() {

//     const state = reactive({
//         apiKey: "c0d97a019ea859a14447316fcc3b3bce",
//         urlBase: "https://api.openweathermap.org/data/2.5/weather?q=",
//         query: "",
//         weather: {},
//         loaded: false
//     });

//     const load = async () => {
//         if (!state.loaded) {
//             try {
//                 const weatherResponse = await fetch("https://api.openweathermap.org/data/2.5/weather?q=denver&appid=c0d97a019ea859a14447316fcc3b3bce")
//                 state.weather = await weatherResponse.json();
//             } catch (error) {
//                 state.error = error;
//             }
//         }
//     }

//     return {
//         ...toRefs(state),
//         load
//     }
// }