<template>
    test
    <div class="row">
        <div class="col-12">
            <DataTable :columns="columns" :options="options" :data="data"
                class="table table-border table-hover table-striped " width="100%" @row-selected="handleRowSelected">
                <!-- <thead>
                    <tr>
                        <th>公告年份</th>
                        <th>公告日期</th>
                        <th>期作</th>
                        <th>管理處</th>
                        <th>供灌停灌區域</th>
                        <th>公告停灌面積(公頃)</th>
                    </tr>
                </thead> -->
            </DataTable>
        </div>
    </div>
</template>

<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
// import DataTableRowGroup from 'datatables.net-rowgroup';
import Select from 'datatables.net-select';
import $ from 'jquery';


import { ref } from 'vue'

// DataTable.use(DataTableRowGroup);
DataTable.use(DataTablesCore);
DataTable.use(Select);

const columns = [
    { title: `公告年份`, data: 'year' },
    { title: `公告日期`, data: 'date' },
    { title: `期作`, data: 'period' },
    { title: `管理處`, data: 'department' },
    { title: `供灌停灌區域`, data: 'area' },
    { title: `公告停灌面積(公頃)`, data: 'irrigationStopArea' },
];

const data = ref([
    {
        "year": "99",
        "date": "99/1/8",
        "period": "1",
        "department": "苗栗",
        "area": "明德水庫",
        "irrigationStopArea": 1175
    },
    {
        "year": "99",
        "date": "99/2/9",
        "period": "1",
        "department": "苗栗",
        "area": "中港溪水系",
        "irrigationStopArea": 2184
    },
    {
        "year": "104",
        "date": "103/12/31",
        "period": "1",
        "department": "苗栗",
        "area": "明德水庫",
        "irrigationStopArea": 1175
    },
    {
        "year": "104",
        "date": "103/12/31",
        "period": "1",
        "department": "台中",
        "area": "鯉魚潭水庫",
        "irrigationStopArea": 4490
    },
    {
        "year": "104",
        "date": "103/12/31",
        "period": "1",
        "department": "台中",
        "area": "大安溪水系-鯉魚潭圳",
        "irrigationStopArea": 135
    },
    {
        "year": "104",
        "date": "104/1/9",
        "period": "1",
        "department": "桃園",
        "area": "全區",
        "irrigationStopArea": 22672
    },
    {
        "year": "104",
        "date": "104/1/9",
        "period": "1",
        "department": "新竹",
        "area": "頭前溪水系",
        "irrigationStopArea": 4353
    },
    {
        "year": "104",
        "date": "104/1/9",
        "period": "1",
        "department": "新竹",
        "area": "鳳山溪水系",
        "irrigationStopArea": 253
    },
    {
        "year": "104",
        "date": "104/1/9",
        "period": "1",
        "department": "嘉南",
        "area": "曾文-烏山頭水庫",
        "irrigationStopArea": 7891
    },
    {
        "year": "104",
        "date": "104/1/9",
        "period": "1",
        "department": "嘉南",
        "area": "白河水庫",
        "irrigationStopArea": 602
    },
    {
        "year": "104",
        "date": "104/2/12",
        "period": "1",
        "department": "苗栗",
        "area": "中港溪水系",
        "irrigationStopArea": 2083
    },
    {
        "year": "107",
        "date": "107/2/6",
        "period": "1",
        "department": "苗栗",
        "area": "明德水庫",
        "irrigationStopArea": 1175
    },
    {
        "year": "109",
        "date": "109/10/6",
        "period": "2",
        "department": "桃園",
        "area": "石門水庫灌區",
        "irrigationStopArea": 19000
    },
    {
        "year": "109",
        "date": "109/10/6",
        "period": "2",
        "department": "石門",
        "area": "石門水庫灌區",
        "irrigationStopArea": 19000
    },
    {
        "year": "109",
        "date": "109/10/6",
        "period": "2",
        "department": "新竹",
        "area": "頭前溪水系",
        "irrigationStopArea": 19000
    },
    {
        "year": "109",
        "date": "109/10/6",
        "period": "2",
        "department": "苗栗",
        "area": "明德水庫",
        "irrigationStopArea": 19000
    },
    {
        "year": "109",
        "date": "109/10/6",
        "period": "2",
        "department": "苗栗",
        "area": "中港溪水系",
        "irrigationStopArea": 19000
    },
    {
        "year": "109",
        "date": "109/10/6",
        "period": "2",
        "department": "台中",
        "area": "鯉魚潭水庫-苑裡圳",
        "irrigationStopArea": 19000
    },
    {
        "year": "110",
        "date": "11/1/6",
        "period": "1",
        "department": "桃園",
        "area": "石門水庫灌區",
        "irrigationStopArea": 15361
    },
    {
        "year": "110",
        "date": "11/1/6",
        "period": "1",
        "department": "石門",
        "area": "石門水庫灌區",
        "irrigationStopArea": 12085
    },
    {
        "year": "110",
        "date": "109/12/31",
        "period": "1",
        "department": "新竹",
        "area": "頭前溪水系",
        "irrigationStopArea": 4588
    },
    {
        "year": "110",
        "date": "109/12/31",
        "period": "1",
        "department": "苗栗",
        "area": "明德水庫",
        "irrigationStopArea": 1175
    },
    {
        "year": "110",
        "date": "109/12/31",
        "period": "1",
        "department": "苗栗",
        "area": "中港溪水系",
        "irrigationStopArea": 1719
    },
    {
        "year": "110",
        "date": "109/12/31",
        "period": "1",
        "department": "台中",
        "area": "大安溪水系中、下游灌區",
        "irrigationStopArea": 20062
    },
    {
        "year": "110",
        "date": "109/12/31",
        "period": "1",
        "department": "台中",
        "area": "大甲溪水系中、下游灌區",
        "irrigationStopArea": 20062
    },
    {
        "year": "110",
        "date": "109/12/10",
        "period": "1",
        "department": "嘉南",
        "area": "曾文-烏山頭灌區",
        "irrigationStopArea": 19385
    },
    {
        "year": "110",
        "date": "109/12/10",
        "period": "1",
        "department": "嘉南",
        "area": "白河水庫",
        "irrigationStopArea": 19385
    },
    {
        "year": "112",
        "date": "111/12/12",
        "period": "1",
        "department": "嘉南",
        "area": "曾文-烏山頭灌區",
        "irrigationStopArea": 19000
    },
    {
        "year": "112",
        "date": "111/12/12",
        "period": "1",
        "department": "嘉南",
        "area": "白河水庫",
        "irrigationStopArea": 19000
    },
    {
        "year": "112",
        "date": "112/7/21",
        "period": "2",
        "department": "嘉南",
        "area": "曾文-烏山頭灌區(第3-6組)",
        "irrigationStopArea": 28350
    }
])

const options = {
    select: true,
    rowGroup: {
        dataSrc: 'year'
    },
    rowCallback: function (row, data, displayNum, displayIndex, dataIndex) {
        if (dataIndex == 1) {
            //$(row).html('abc');
            //$(row).find('td:eq(1)').addClass('bg-danger');
            //$(row).find('td:eq(1)').remove();
            $(row).find('td:eq(2)').remove();
            $(row).find('td:eq(1)')
                .attr('colspan', 2)
                .attr('rowspan', 2)
            //.html(data.Jan_1)
            //.append(`<td colspan="2" rowspan="2">${data.Jan_1}</td>`);
        } else if (dataIndex == 2) {
            $(row).find('td:eq(1)').remove();
            $(row).find('td:eq(2)').remove();

        }
    }
};
const selectedData = ref(null);
const handleRowSelected = (selectedRowData) => {
    selectedData.value = selectedRowData;
    console.log(selectedRowData)
};
</script>

<style scoped lang="scss">
@import 'datatables.net-bs5';
@import 'datatables.net-dt';
</style>