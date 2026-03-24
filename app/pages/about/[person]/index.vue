<template>
  <h1>{{ route.params.person }}</h1>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
