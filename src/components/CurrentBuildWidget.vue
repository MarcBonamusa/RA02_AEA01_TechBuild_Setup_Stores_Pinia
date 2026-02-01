<script setup>
import { useBuildStore } from '@/stores/useBuildStore';
import { countBy } from 'lodash';

const buildStore = useBuildStore();

</script>

<template>
  <aside class="container">
    <h2>Carret de la compra</h2>

    <div v-if="buildStore.components.length === 0">
      El carret està buit.
    </div>

    <div v-for="(items, type) in buildStore.groupedByType" :key="type">
      <h3 class="tipus">{{ type }}</h3>
      <ul class="llista">
        <li v-for="(cantidad, nombre) in countBy(items, 'name')" :key="nombre" class="producte">
          <span>
            <strong>{{ cantidad }}x</strong> {{ nombre }}
            ({{items.find(i => i.name === nombre).price * cantidad}}€)
          </span>

          <button class="btn-eliminar" @click="buildStore.removeComponent(nombre)">
            Eliminar
          </button>
        </li>
      </ul>
    </div>

    <div v-if="buildStore.components.length > 0" class="pagament">
      <hr>
      <div class="pagament-container">
        <p class="total">Total: <strong>{{ buildStore.totalPrice }}€</strong></p>
        <button class="btn-pagar" @click="buildStore.checkout">Pagar</button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.container {
  padding: 10px;
}

.producte strong {
  color: #28a745;
  margin-right: 5px;
}

.tipus {
  font-size: 15px;
  text-transform: uppercase;
  margin: 15px 0 5px 0;
  border-bottom: 1px solid #9A9A9A;
}

.llista {
  list-style: none;
  padding: 0;
}

.producte {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-size: 15px;
}

.btn-eliminar {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.2s;
}

.btn-eliminar:hover {
  background-color: #cc0000;
}

.pagament {
  margin-top: 20px;
}

.pagament-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.total {
  font-size: 18px;
  margin: 0;
}

.btn-pagar {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  transition: transform 0.1s, background 0.2s;
}

.btn-pagar:hover {
  background-color: #218838;
  transform: scale(1.02);
}
</style>