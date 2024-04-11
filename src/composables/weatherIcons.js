const weatherIcons = {
    "0": () => import('./IconClearSky.vue'),//
    "1, 2, 3": () => import('./IconPardyClody.vue'),//
    "45, 48": () => import('./IconFog.vue'),//
    "51, 53, 55": () => import('./IconDrizzle.vue'),//
    "56, 57": () => import('./IconFreezingDrizzle.vue'),//
    "61, 63, 65, 80, 81, 82": () => import('./IconRain.vue'),//
    "66, 67": () => import('./IconFreezingRain.vue'), //
    "71, 73, 75, 85, 86": () => import('./IconSnowfall.vue'),//
    "77": () => import('./IconSnowGrains.vue'),//
    "95": () => import('./IconThunderstorm.vue'),//
    "96, 99": () => import('./IconThunderstormHail.vue')//
};
   