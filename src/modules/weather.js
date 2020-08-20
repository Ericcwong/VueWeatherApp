import {
    reactive,
} from "vue";

export const useWeather = () => {
    const state = reactive({
        apiKey: "c0d97a019ea859a14447316fcc3b3bce",
        currentDayUrlBase: "https://api.openweathermap.org/data/2.5/weather?q=",
        fiveDayUrlBase: "https://api.openweathermap.org/data/2.5/forecast?q=",
        query: "",
        currentWeather: {},
        fiveDayWeather: {},
    });
    // API call
    function weatherSearch(e) {
        if (e.key == "Enter") {
            fetch(
                    `${state.currentDayUrlBase}${state.query}&units=imperial&appid=${state.apiKey}`
                )
                .then((res) => {
                    console.log(res);
                    return res.json();
                })
                .then((results) => {
                    state.currentWeather = results;
                    console.log(state.currentWeather);
                });
            fetch(`${state.fiveDayUrlBase}${state.query}&appid=${state.apiKey}`)
                .then((res) => {
                    console.log(res);
                    return res.json();
                })
                .then((results) => {
                    state.fiveDayWeather = results;
                    console.log(state.fiveDayWeather);
                });
        }
    }
    //Setting current dates to each day
    function getCurrentDate() {
        let d = new Date();
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day}, ${month}, ${date}, ${year}`;
    }

    return {
        state,
        weatherSearch,
        getCurrentDate,
    };
}