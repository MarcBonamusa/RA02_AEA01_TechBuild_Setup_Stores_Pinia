import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash'

export const useBuildStore = defineStore('BuildStore', () => {
    // State
    const components = []
    // Getters
    const totalPrice = computed(() => components.value.reduce((acomulador, elemento) => acomulador + elemento.price, 0))
    const groupedByType = groupBy(components.value, (item) => item.type)
    // Action
    function addComponent(contador, item) {
        contador = parseInt(contador)
        for (let i = 0; i < contador; i++) {
            components.value.push(item)
        }
    }
    function removeComponent() {
        
    }
    function checkout() {
        
    }
    return { components, totalPrice, groupedByType, addComponent, removeComponent, checkout }
})
