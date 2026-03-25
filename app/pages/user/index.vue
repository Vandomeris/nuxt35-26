<template>
  <h1>Главная страница USER</h1>

  <div v-for="user in data">
    <p>{{ user.id }}</p>
    <p>{{ user.email }}</p>
  </div>

  <NuxtLink to="/user/create">Создать пользователя</NuxtLink>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/users");
</script>
