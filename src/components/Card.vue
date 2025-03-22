<script setup>
import { defineProps } from "vue";

defineProps({
  bg: {
    type: String,
    default: "bg-gray-50",
  },
});
</script>

<template>
  <div :class="`${bg}`">
    <slot></slot>
  </div>
</template>