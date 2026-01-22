import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import hardware from '@/data/hardware.json'

export const useHardwareStore = defineStore('HardwareStore', () => {
    // State
    const componentRef = ref([])
    // Actions
    function loadHardware() {
        componentRef.value = hardware
    }
    return { componentRef, loadHardware }
})