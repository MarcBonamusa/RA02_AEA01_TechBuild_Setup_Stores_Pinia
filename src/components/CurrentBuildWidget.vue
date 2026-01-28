<script setup>
import { useBuildStore } from '@/stores/useBuildStore';

const buildStore = useBuildStore();

</script>

<template>
  <aside>
    <h2>Carret de la compra</h2>
    
    <div v-if="buildStore.components.length === 0">
      El carret està buit.
    </div>

    <div v-for="(items, type) in buildStore.groupedByType" :key="type">
      <h3>{{ type }}</h3>
      
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <span>{{ item.name }}</span>
          <span> - {{ item.price }}€ </span>
          <button @click="buildStore.removeComponent(item.name)">Eliminar</button>
        </li>
      </ul>
    </div>

    <div v-if="buildStore.components.length > 0">
      <hr>
      <p>Total: <strong>{{ buildStore.totalPrice }}€</strong></p> </div>
  </aside>
</template>