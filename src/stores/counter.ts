import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const resDataStore = reactive({
    selectedDepartment: '',
    selectedWaterSource: '',
    selectedLocation: '',
    selectedSystem1: '',
    selectedSystem2: '',
    selectedWorkstation: '',
    selectedPondName: ''
  })

  const fetchDataStore = async (obj) => {
    resDataStore.selectedDepartment = obj.selectedDepartment
    resDataStore.selectedWaterSource = obj.selectedWaterSource
    resDataStore.selectedLocation = obj.selectedLocation
    resDataStore.selectedSystem1 = obj.selectedSystem1
    resDataStore.selectedSystem2 = obj.selectedSystem2
    resDataStore.selectedWorkstation = obj.selectedWorkstation
    resDataStore.selectedPondName = obj.selectedPondName
  }
  return { count, doubleCount, increment, fetchDataStore, resDataStore }
})
