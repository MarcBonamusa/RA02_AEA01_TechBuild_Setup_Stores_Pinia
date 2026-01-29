<script setup>
import { useUserSessionStore } from '@/stores/useUserSessionStore';

const userSession = useUserSessionStore();
</script>

<template>
  <header>
    <div class="marca">
      <h1 class="logo">TechBuilds</h1>
    </div>

    <div class="usuari">
      <p>Hola, <span @click="userSession.visitGitHub">{{ userSession.userName }}</span></p>
    </div>
  </header>
</template>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a1120;
  padding: 15px 20px;
  color: white;
  font-family: sans-serif;
}

.marca {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
}

.usuari {
  display: flex;
  align-items: center;
  gap: 20px;
}

span {
  text-decoration: underline;
  cursor: pointer;
}

</style>