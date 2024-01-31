<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="500px">
                <Aside></Aside>
            </el-aside>
            <el-main>
                <Main></Main>
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import Aside from '@/components/Aside.vue';
import Main from '@/components/Main.vue';

</script>

<style scoped lang="scss"></style>