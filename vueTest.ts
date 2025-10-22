import VueTest from "./vue-test.vue";
import { createApp } from "vue";

createApp({
    components: {
        VueTest,
    },
}).mount("#test-container");
