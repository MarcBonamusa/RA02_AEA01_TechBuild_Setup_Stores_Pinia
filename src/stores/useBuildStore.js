import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash'

export const useBuildStore = defineStore('BuildStore', () => {
    // State
    const components = ref([])
    // Getters
    const totalPrice = computed(() => components.value.reduce((acomulador, elemento) => acomulador + elemento.price, 0))
    const groupedByType = computed(() => groupBy(components.value, 'type'))
    // Action
    function addComponent(contador, item) {
        /*contador = parseInt(contador)
        for (let i = 0; i < contador; i++) {
            
        }*/
        components.value.push(item)
        console.log(components.value)
    }
    const removeComponent = (itemName) => (components.value = components.value.filter(item => item.name !== itemName))
    function checkout() {
        
    }
    return { components, totalPrice, groupedByType, addComponent, removeComponent, checkout }
})
