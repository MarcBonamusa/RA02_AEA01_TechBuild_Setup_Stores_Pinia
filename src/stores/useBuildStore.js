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
    function addComponent() {

    }
    function removeComponent() {
        
    }
    function checkout() {
        
    }
})
