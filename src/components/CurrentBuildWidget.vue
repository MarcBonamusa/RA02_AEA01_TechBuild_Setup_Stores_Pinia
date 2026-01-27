<script setup>
import { useBuildStore } from '@/stores/useBuildStore';

// data
const BuildStore = useBuildStore()

</script>

<template>
    <h1>Carret de la compra</h1>
    <ul v-for="(items, name) in BuildStore.groupedByType" 
        :key="name"
        :product="items[0]"
        @clear="CartStore.removeComponent(name)">
    </ul>
</template>