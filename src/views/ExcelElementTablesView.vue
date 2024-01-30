<template>
    <div class="container">
        <el-button type="success" :icon="Download" @click="exportToExcel('commTable', '导出单表')">导出单表</el-button>
        <el-button type="info" :icon="Download" @click="exportTable">导出多表</el-button>
        <el-alert title="单表数据" type="success" :closable="false" effect="dark" />
        <el-table id="commTable" :data="commData" :span-method="objectSpanMethod" border>
            <el-table-column prop="date" label="Date" align="center" />
            <el-table-column prop="name" label="Name" align="center" />
            <el-table-column prop="address" label="Address" align="center" />
        </el-table>

        <template v-for="(item, idx) in tableData" :key="idx">
            <el-alert :title="item.title" :closable="false" effect="dark" />
            <el-table :id="eleIdPrefix + idx" :data="item.data">
                <el-table-column prop="date" label="日期" align="center" />
                <el-table-column prop="name" label="姓名" align="center" />
                <el-table-column prop="state" label="状态" align="center" />
                <el-table-column prop="city" label="城市" align="center" />
                <el-table-column prop="address" label="地址" width="300" align="center" />
                <el-table-column prop="zip" label="Zip" align="center" />
            </el-table>
        </template>
    </div>
</template>
<script setup lang="ts">
import { Download } from '@element-plus/icons-vue'
import exportToExcel from "@/utils/exportToExcel"
import type { IExportXlsx } from '@/utils/exportToExcel'
import { ref, reactive } from 'vue'

const eleIdPrefix = ref<string>('prefix') // 循环Dmo绑定的ID前缀
const exportTable = () => {
    const eleIds: Array<IExportXlsx> = [{
        eleById: "commTable", title: '单表数据'
    }, ...tableData.map((item, idx) => {
        return { eleById: eleIdPrefix.value + idx, title: item.title }
    })]
    console.log(eleIds);
    exportToExcel(eleIds, '导出多表')
}

const tableData = reactive([{
    title: '多表数据-人员统计',
    data: [{
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    }, {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    }, {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    }, {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    }]
}, {
    title: '多表数据-地址统计',
    data: [{
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    }, {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    }, {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    }, {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    }]
}, {
    title: '多表数据-信息统计',
    data: [{
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    }, {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    }, {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    }, {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    }]
}, {
    title: '多表数据-状态统计',
    data: [{
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    }, {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    }, {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    }, {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    }]
}])
const commData = reactive([{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
}, {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
}, {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
}, {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
}])
const objectSpanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex,
}) => {

    //第二列(日期)合併邏輯
    if (columnIndex === 1) {
        if (rowIndex === 0) {
            return {
                rowspan: 4,
                colspan: 1,
            };
        }
        if (commData[rowIndex].name === commData[rowIndex - 1].name) {
            // 如果與前一行年份相同，就隱藏當前的的年份單元格
            return {
                rowspan: 0
            };
        } else {
            let rowspan = commData.filter(item => item.name === row.name).length;
            return {
                rowspan: rowspan,
                colspan: 1
            }
        }
    }
};
</script>
  
<style>
.el-alert {
    margin-top: 10px;
}
</style>
 