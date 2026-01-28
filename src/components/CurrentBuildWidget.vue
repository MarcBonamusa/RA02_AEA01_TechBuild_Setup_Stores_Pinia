<script setup>
import { useBuildStore } from '@/stores/useBuildStore';

const buildStore = useBuildStore();

</script>

<template>
  <div class="cart-container">
    <h1>Cistella de la compra</h1>
    
    <div v-if="buildStore.components.length === 0">
      <p>La cistella esta buida.</p>
    </div>

    <ul v-else>
      <li v-for="(items, type) in buildStore.groupedByType" :key="type">
        <strong>{{ type }}:</strong> 
        {{ items.length }}x {{ items[0].name }} 
        - {{ items[0].price * items.length }}€
        
        <button @click="buildStore.removeComponent(items[0].name)">
          Eliminar
        </button>
      </li>
    </ul>

    <hr />
    <h3>Total: {{ buildStore.totalPrice }}€</h3>
  </div>
</template>