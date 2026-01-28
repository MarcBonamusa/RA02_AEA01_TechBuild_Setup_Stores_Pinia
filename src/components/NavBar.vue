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
      <p>Hola, <span class="github-link" @click="userSession.visitGitHub">{{ userSession.userName }}</span></p>
    </div>
  </header>
</template>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a1120;
  padding: 1rem 2rem;
  color: white;
  font-family: sans-serif;
}

.marca {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
}

.usuari {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

</style>