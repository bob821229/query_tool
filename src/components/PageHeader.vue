<template>
    <div class="page_header">
        <el-page-header>
            <template #breadcrumb>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>
                        <slot name="breadcrumb1"></slot>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>
                        <slot name="breadcrumb"></slot>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>
                        <slot name="title">title</slot>
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </template>
            <template #content>
                <span class="text-large font-600 mr-3">
                    <slot name="title">title</slot>
                </span>
            </template>
        </el-page-header>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped >
.page_header {
    margin-top: 20px;
    margin-bottom: 40px;
}
</style>