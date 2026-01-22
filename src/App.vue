<script setup>
import ComponentCard from './components/ComponentCard.vue';
import NavBar from './components/NavBar.vue';
import { useBuildStore } from './stores/useBuildStore';
import { useHardwareStore } from './stores/useHardwareStore';
import { storeToRefs } from 'pinia';

const HardwareStore = useHardwareStore()
HardwareStore.loadHardware()

const BuildStore = useBuildStore()

const { componentRef } = storeToRefs(useHardwareStore())

</script>

<template>
  <div class="container">
    <NavBar />
    <main>
      <ul class="components">
        <ComponentCard v-for="component in componentRef" :key="component.name" :component="component" />
      </ul>
    </main>
  </div>
</template>

<style>

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #f0f2f5;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.components {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 40px;
  list-style: none;
  margin: 0;
}

</style>