<template>
  <h1>Список книг</h1>

  <div v-for="item in books">
    <h3>{{ item.title }}</h3>
  </div>

  <button @click="clear()">Очистить Books</button>
  <button @click="execute()">Execute</button>
</template>

<script setup lang="ts">
const {
  data: books,
  clear,
  refresh,
  execute,
} = await useFetch("https://fakerestapi.azurewebsites.net/api/v1/Books", {
  immediate: false,
});
</script>
