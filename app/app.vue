<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/users");
console.log(data.value);
</script>
