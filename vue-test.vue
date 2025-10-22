<script setup lang="ts">
/**
 * Vue test
 */

import { ref } from "vue";

const props = defineProps<{
    title: string;
}>();

const count = ref<number>(0);
</script>

<template>
    <h1>{{ props.title }}</h1>
    <p>
        {{ count }}
    </p>
    <button @click="count++">Increment</button>
</template>
