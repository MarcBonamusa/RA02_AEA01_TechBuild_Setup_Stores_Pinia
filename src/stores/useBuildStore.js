
import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash'

export const useBuildStore = defineStore('BuildStore', () => {
    // State
    const components = ref([])

    // Persistencia
    const guardat = localStorage.getItem('hardware-guardat')
    if (guardat) {
       components.value = JSON.parse(guardat) 
    }
    watch(components, (nouValor) => {localStorage.setItem('hardware-guardat', JSON.stringify(nouValor))}, { deep: true })

    // Getters
    const totalPrice = computed(() => components.value.reduce((acomulador, element) => acomulador + element.price, 0))
    const groupedByType = computed(() => groupBy(components.value, 'type'))

    // Actions
    function addComponent(contador, item) {
        components.value.push(item)
        console.log(components.value)
    }
    const removeComponent = (itemName) => {
        const index = components.value.findIndex(item => item.name === itemName)
        if (index !== -1) {
            components.value.splice(index, 1)
        }
    }
    function checkout() {
        alert(`Compra realitzada: ${totalPrice.value}€`)
        components.value = []
    }
    return { components, totalPrice, groupedByType, addComponent, removeComponent, checkout }
})