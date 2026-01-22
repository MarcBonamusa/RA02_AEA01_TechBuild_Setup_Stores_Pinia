import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import hardware from '@/data/hardware.json'

export const useHardwareStore = defineStore('HardwareStore', () => {
    // State
    const productRef = ref([])
    // Actions (Sense getters)
    function loadHardware() {
        productRef.value = hardware
    }
    return { productRef, loadHardware }
})