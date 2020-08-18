import {
    ref
} from "vue";

export default function useWeather() {
    const weather = ref(null);

    const load = async () => {
        try {
            const weatherResponse = await fetch("")
        } catch (error) {
            error.value = error;
        }
    }
}