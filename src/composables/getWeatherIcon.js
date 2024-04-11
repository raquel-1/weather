import IconClearSky from '@/components/icons/iconsWeather/IconClearSky.vue';
import IconPardyClody from '@/components/icons/iconsWeather/IconPardyClody.vue';
import IconFog from '@/components/icons/iconsWeather/IconFog.vue';
import IconDrizzle from '@/components/icons/iconsWeather/IconDrizzle.vue';
import IconFreezingDrizzle from '@/components/icons/iconsWeather/IconFreezingDrizzle.vue';
import IconRain from '@/components/icons/iconsWeather/IconRain.vue';
import IconFreezingRain from '@/components/icons/iconsWeather/IconFreezingRain.vue';
import IconSnowfall from '@/components/icons/iconsWeather/IconSnowfall.vue';
import IconSnowGrains from '@/components/icons/iconsWeather/IconSnowGrains.vue';
import IconThunderstorm from '@/components/icons/iconsWeather/IconThunderstorm.vue';
import IconThunderstormHail from '@/components/icons/iconsWeather/IconThunderstormHail.vue';

const weatherIcons = {
    "0": IconClearSky,
    "1": IconPardyClody,
    "2": IconPardyClody,
    "3": IconPardyClody,
    "45": IconFog,
    "48": IconFog,
    "51": IconDrizzle,
    "53": IconDrizzle,
    "55": IconDrizzle,
    "56": IconFreezingDrizzle,
    "57": IconFreezingDrizzle,
    "61": IconRain,
    "63": IconRain,
    "65": IconRain,
    "80": IconRain,
    "81": IconRain,
    "82": IconRain,
    "66": IconFreezingRain,
    "67": IconFreezingRain,
    "71": IconSnowfall,
    "73": IconSnowfall,
    "75": IconSnowfall,
    "85": IconSnowfall,
    "86": IconSnowfall,
    "77": IconSnowGrains,
    "95": IconThunderstorm,
    "96": IconThunderstormHail,
    "99": IconThunderstormHail
};


export function getWeatherIcon(weatherCode) {
    for (const key in weatherIcons) {
        if (key.split(',').includes(weatherCode.toString())) {
            return weatherIcons[key]; // Devuelve el componente directamente
        }
    }
}
export function getWeatherName(weatherCode) {
    return weatherNames[weatherCode.toString()] || "Unknown";
}


const weatherNames = {
    "0": "Sun",
    "1": "Pardy Clody",
    "2": "Pardy Clody",
    "3": "Pardy Clody",
    "45": "Fog",
    "48": "Fog",
    "51": "Drizzle",
    "53": "Drizzle",
    "55": "Drizzle",
    "56": "Freezing Drizzle",
    "57": "Freezing Drizzle",
    "61": "Rain",
    "63": "Rain",
    "65": "Rain",
    "80": "Rain",
    "81": "Rain",
    "82": "Rain",
    "66": "Freezing Rain",
    "67": "Freezing Rain",
    "71": "Snow fall",
    "73": "Snow fall",
    "75": "Snow fall",
    "85": "Snow fall",
    "86": "Snow fall",
    "77": "Snow Grains",
    "95": "Thunderstorm",
    "96": "Thunderstorm Hail",
    "99": "Thunderstorm Hail"
};