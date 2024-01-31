<template>
    <div>
        <table border>
            <thead>
                <tr>
                    <th style="width: 180px;">管理處</th>
                    <th> {{ resDataStore.selectedDepartment }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="width: 180px;">水源別</td>
                    <td>{{ resDataStore.selectedWaterSource }}</td>
                </tr>
                <tr>
                    <td style="width: 180px;">分處</td>
                    <td>{{ resDataStore.selectedLocation }}</td>
                </tr>
                <tr>
                    <td style="width: 180px;">系統1</td>
                    <td>{{ resDataStore.selectedSystem1 }}</td>
                </tr>
                <tr>
                    <td style="width: 180px;">系統2</td>
                    <td>{{ resDataStore.selectedSystem2 }}</td>
                </tr>
                <tr>
                    <td style="width: 180px;">工作站</td>
                    <td>{{ resDataStore.selectedWorkstation }}</td>
                </tr>
                <tr>
                    <td style="width: 180px;">埤圳別</td>
                    <td>{{ resDataStore.selectedPondName }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const { resDataStore } = useCounterStore();

</script>

<style scoped lang="scss"></style>