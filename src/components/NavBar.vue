<script setup>
import CurrentBuildWidget from './CurrentBuildWidget.vue';
</script>

<template>
  <header>
    <div class="marca">
      <h1 class="logo">TechBuilds</h1>
    </div>

    <div class="usuari">
      <p>Hola, Guest Builder</p>
      <button class="carro-btn">
        <i>🛒</i>
      </button>
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

.carro-btn {
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.2s;
  background-color: #ffffff;
  border-radius: 50px;
  padding: 10px;
}

.carro-btn:hover {
  transform: scale(1.1);
}

</style>