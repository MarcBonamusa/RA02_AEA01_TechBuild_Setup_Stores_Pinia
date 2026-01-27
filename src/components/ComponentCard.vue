<script setup>
import { ref } from 'vue';


// props
const props = defineProps({
  component: Object,
});

// emits
defineEmits(["addComponent"])

// data
const count = ref(0)

</script>

<template>
  <li class="component">
    <div class="container-img">
      <img :src="`/images/${component.image}`" alt="hardware" />
    </div>

    <div class="info">
        <h3 class="nom">{{ component.name }}</h3>
        <span class="categoria">{{ component.type }}</span>
        <p class="preu">{{ component.price }}€</p>
      
        <button class="afegir-btn" @click="$emit('addComponent')">
            Afegir al Muntatge
        </button>
    </div>
  </li>
</template>

<style scoped>

.component {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.component:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.container-img {
  background-color: #ffffff;
  width: 100%;
  height: 180px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  overflow: hidden;
}

.container-img img {
  width: 100%;
  height: 100%;
  object-fit: contain; 
  opacity: 1;
  padding: 10px;
}

.categoria {
  background: #f3f4f6;
  color: #6b7280;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 4px;
  text-transform: uppercase;
}

.nom {
  font-size: 1rem;
  margin: 10px 0;
  color: #1f2937;
  min-height: 2.5rem;
}

.preu {
  font-size: 1.4rem;
  font-weight: 800;
  color: #0a1120;
  margin-bottom: 15px;
}

.afegir-btn {
  width: 100%;
  background-color: #0a1120;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

</style>