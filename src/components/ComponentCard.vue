<script setup>
const props = defineProps({
  component: Object,
});
</script>

<template>
  <li class="component">
    <div class="container-img">
      <img src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png" alt="hardware" />
    </div>

    <div class="info">
        <h3 class="nom">{{ component.name }}</h3>
        <span class="categoria">{{ component.type }}</span>
        <p class="preu">{{ component.price }}€</p>
      
        <button class="afegir-btn">
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
  background-color: #e5e7eb;
  width: 100%;
  height: 150px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

.container-img img {
  width: 60px;
  opacity: 0.7;
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
  color: #2563eb;
  margin-bottom: 15px;
}

.afegir-btn {
  width: 100%;
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.afegir-btn:hover {
  background-color: #1d4ed8;
}

</style>