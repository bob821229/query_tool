<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
        <el-sub-menu index="/irrigation-query">
            <template #title>管理處灌溉用水資料</template>
            <el-menu-item index="/">用水紀錄查詢</el-menu-item>
            <el-sub-menu index="/irrigation-statistics-area">
                <template #title>灌溉用水資料統計</template>
                <el-menu-item index="/irrigation-statistics-area">歷史面積資料統計</el-menu-item>
                <el-menu-item index="/irrigation-statistics-water">歷史旬用水量統計</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="/reservoir-query">
            <template #title>水庫型灌區用水資料</template>
            <el-menu-item index="/reservoir-query">水庫用水紀錄查詢</el-menu-item>
            <el-sub-menu index="/reservoir-statistics-area">
                <template #title>灌溉用水資料統計</template>
                <el-menu-item index="/reservoir-statistics-area">歷史面積資料統計</el-menu-item>
                <el-menu-item index="/reservoir-statistics-water">歷史旬用水量統計</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="/history">歷史停灌資訊</el-menu-item>
        <el-menu-item index="/Datatables">DataTables</el-menu-item>
        <el-menu-item index="/Element">Element</el-menu-item>
        <el-menu-item index="/Excel">Excel</el-menu-item>
    </el-menu>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped lang="scss"></style>