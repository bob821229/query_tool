<template>
    <div>
        <div class="m-4">
            <p>管理處</p>
            <el-select v-model="selectedDepartment" placeholder="請選擇" style="width: 200px">
                <el-option label="台北" value="台北" />
                <el-option label="桃園" value="桃園" />
                <el-option label="台中" value="台中" />
                <el-option label="高雄" value="高雄" />
            </el-select>
        </div>
        <div class="m-4">
            <p>水源別</p>
            <el-select v-model="selectedWaterSource" placeholder="請選擇" style="width: 200px">
                <el-option label="台北水源" value="台北水源" />
                <el-option label="桃園水源" value="桃園水源" />
                <el-option label="台中水源" value="台中水源" />
                <el-option label="高雄水源" value="高雄水源" />
            </el-select>
        </div>
        <div class="m-4">
            <p>分處</p>
            <el-select v-model="selectedLocation" placeholder="請選擇" style="width: 200px">
                <el-option label="台北處" value="台北處" />
                <el-option label="桃園處" value="桃園處" />
                <el-option label="台中處" value="台中處" />
                <el-option label="高雄處" value="高雄處" />
            </el-select>
        </div>
        <div class="m-4">
            <p>系統1</p>
            <el-select v-model="selectedSystem1" placeholder="請選擇" style="width: 200px">
                <el-option label="台北系統1" value="台北系統1" />
                <el-option label="桃園系統1" value="桃園系統1" />
                <el-option label="台中系統1" value="台中系統1" />
                <el-option label="高雄系統1" value="高雄系統1" />
            </el-select>
        </div>
        <div class="m-4">
            <p>系統2</p>
            <el-select v-model="selectedSystem2" placeholder="請選擇" style="width: 200px">
                <el-option label="台北系統2" value="台北系統2" />
                <el-option label="桃園系統2" value="桃園系統2" />
                <el-option label="台中系統2" value="台中系統2" />
                <el-option label="高雄系統2" value="高雄系統2" />
            </el-select>
        </div>
        <div class="m-4">
            <p>工作站</p>
            <el-select v-model="selectedWorkstation" placeholder="請選擇" style="width: 200px">
                <el-option label="台北站" value="台北站" />
                <el-option label="桃園站" value="桃園站" />
                <el-option label="台中站" value="台中站" />
                <el-option label="高雄站" value="高雄站" />
            </el-select>
        </div>
        <div class="m-4">
            <p>埤圳別</p>
            <el-select v-model="selectedPondName" placeholder="請選擇" style="width: 200px">
                <el-option label="台北圳" value="台北圳" />
                <el-option label="桃園圳" value="桃園圳" />
                <el-option label="台中圳" value="台中圳" />
                <el-option label="高雄圳" value="高雄圳" />
            </el-select>
        </div>
        <div style="display: flex;justify-content: center;padding-top: 20px;">
            <el-button @click="getInfo">查詢</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, } from 'vue';
import { useCounterStore } from '@/stores/counter'
const { fetchDataStore } = useCounterStore();
const selectedDepartment = ref()
const selectedWaterSource = ref()
const selectedLocation = ref()
const selectedSystem1 = ref()
const selectedSystem2 = ref()
const selectedWorkstation = ref()
const selectedPondName = ref()

const getInfo = async () => {

    const obj = {
        selectedDepartment: selectedDepartment.value,
        selectedWaterSource: selectedWaterSource.value,
        selectedLocation: selectedLocation.value,
        selectedSystem1: selectedSystem1.value,
        selectedSystem2: selectedSystem2.value,
        selectedWorkstation: selectedWorkstation.value,
        selectedPondName: selectedPondName.value
    }

    await fetchDataStore(obj)



}
</script>

<style scoped lang="scss"></style>