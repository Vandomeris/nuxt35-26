<template>
  <h1>Создать пользователя</h1>
  <form @submit.prevent="createUser()">
    <input
      v-model="form.email"
      type="text"
      required
      placeholder="Введите Email"
    />
    <input
      v-model="form.password"
      type="text"
      required
      placeholder="Введите password"
    />
    <button>Создать</button>
  </form>

  <p v-if="result?.email">Пользователь с Email - {{ result.email }} создан</p>
</template>

<script setup lang="ts">
const form = reactive({
  email: "",
  password: "",
});

const result = ref<User | string>("");
const loading = ref(false);

async function createUser() {
  loading.value = true;

  const resp = await $fetch("/api/users/create", {
    method: "POST",
    body: form,
  });

  result.value = resp;

  form.email = "";
  form.password = "";

  loading.value = false;
}
</script>
