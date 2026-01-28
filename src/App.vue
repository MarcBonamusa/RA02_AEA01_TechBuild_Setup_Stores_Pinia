<script setup>
import ComponentCard from './components/ComponentCard.vue';
import CurrentBuildWidget from './components/CurrentBuildWidget.vue';
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
    <main class="contenido">
      <ul class="components">
        <ComponentCard 
          v-for="component in componentRef" 
          :key="component.name" 
          :component="component" 
          @addComponent="BuildStore.addComponent($event, component)"/>
      </ul>
      
      <CurrentBuildWidget class="carrito"/>
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

.contenido {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
}

.components {
  flex: 3;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 0;
  list-style: none;
  margin: 0;
}

.carrito {
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  position: sticky;
  top: 20px;
}

</style>