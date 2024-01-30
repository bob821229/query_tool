<template>
    <div>
        <h2>被選取:</h2>
        {{ currentRow }}
        <el-button type="primary" style="margin:20px;" @click="exportExcel">導出Excel</el-button>
    </div>
    <div>
        <el-table id="abc" ref="singleTableRef" highlight-current-row :data="tableData" :span-method="objectSpanMethod"
            border stripe style="width: 100%; margin-top: 20px" @current-change="handleCurrentChange">
            <el-table-column prop="year" label="公告年份" width="180" />
            <el-table-column prop="date" label="公告日期" />
            <el-table-column prop="period" label="期作" />
            <el-table-column prop="department" label="管理處" />
            <el-table-column prop="area" label="供灌停灌區域" />
            <el-table-column prop="irrigationStopArea" label="公告停灌面積(公頃)" />
        </el-table>
    </div>
</template>
  
<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus'
import { ref, } from 'vue'

// ===========以下excel

// import FileSaver from 'file-saver'
// import * as XLSX from 'xlsx'

// const exportExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(tableData);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
//     const blob = XLSX.write(wb, { bookType: 'xlsx', type: 'blob', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//     saveAs(blob, 'table-export.xlsx');
// };
// ===============以上excel

interface User {
    year: string
    date: string
    period: string
    department: string
    area: string
    irrigationStopArea: number
}

interface SpanMethodProps {
    row: User
    column: TableColumnCtx<User>
    rowIndex: number
    columnIndex: number
}



const objectSpanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex,
}: SpanMethodProps) => {
    // 第一列(年分)合併邏輯
    if (columnIndex === 0) {
        // 檢查跳過第一行,沒有前一筆可以比較
        if (rowIndex === 0) {
            let rowspan = tableData.filter(item => item.year === row.year).length;
            return {
                rowspan: rowspan,
                colspan: 1
            }
        }
        // 檢查年分是否與前一行相同
        if (tableData[rowIndex].year === tableData[rowIndex - 1].year) {
            // 如果與前一行年份相同，就隱藏當前的的年份單元格
            return {
                rowspan: 0
            };
        } else {
            let rowspan = tableData.filter(item => item.year === row.year).length;
            return {
                rowspan: rowspan,
                colspan: 1
            }
        }
    }
    //第二列(日期)合併邏輯
    if (columnIndex === 1) {
        if (rowIndex === 0) {
            return {
                rowspan: 1,
                colspan: 1,
            };
        }
        if (tableData[rowIndex].date === tableData[rowIndex - 1].date) {
            // 如果與前一行年份相同，就隱藏當前的的年份單元格
            return {
                rowspan: 0
            };
        } else {
            let rowspan = tableData.filter(item => item.date === row.date).length;
            return {
                rowspan: rowspan,
                colspan: 1
            }
        }
    }
    //第四列(管理處)合併邏輯
    if (columnIndex === 3) {
        if (rowIndex === 0) {
            let rowspan = tableData.filter(item => item.department === row.department && item.date === row.date).length;
            return {
                rowspan: rowspan,
                colspan: 1
            }
        }
        if (tableData[rowIndex].department === tableData[rowIndex - 1].department && tableData[rowIndex].date === tableData[rowIndex - 1].date) {
            // 如果與前一行年份相同，就隱藏當前的的年份單元格
            return {
                rowspan: 0
            };
        } else {
            let rowspan = tableData.filter(item => item.department === row.department && item.date === row.date).length;
            return {
                rowspan: rowspan,
                colspan: 1
            }
        }
    }
    //第五列(供灌區域)合併邏輯
    if (columnIndex === 4) {
        if (rowIndex === 0) {
            let rowspan = tableData.filter(item => item.area === row.area && item.date === row.date).length;
            return {
                rowspan: rowspan,
                colspan: 1
            }
        }
        if (tableData[rowIndex].area === tableData[rowIndex - 1].area && tableData[rowIndex].date === tableData[rowIndex - 1].date) {
            // 如果與前一行年份相同，就隱藏當前的的年份單元格
            return {
                rowspan: 0
            };
        } else {
            let rowspan = tableData.filter(item => item.area === row.area && item.date === row.date).length;
            return {
                rowspan: rowspan,
                colspan: 1
            }
        }
    }
    //第六列(供灌區域)合併邏輯
    if (columnIndex === 5) {
        if (rowIndex === 0) {
            let rowspan = tableData.filter(item => item.irrigationStopArea === row.irrigationStopArea && item.date === row.date).length;
            return {
                rowspan: rowspan,
                colspan: 1
            }
        }
        if (tableData[rowIndex].irrigationStopArea === tableData[rowIndex - 1].irrigationStopArea && tableData[rowIndex].date === tableData[rowIndex - 1].date) {
            // 如果與前一行年份相同，就隱藏當前的的年份單元格
            return {
                rowspan: 0
            };
        } else {
            let rowspan = tableData.filter(item => item.irrigationStopArea === row.irrigationStopArea && item.date === row.date).length;
            return {
                rowspan: rowspan,
                colspan: 1
            }
        }
    }
};

const tableData: User[] = [
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
]
const currentRow = ref()
const handleCurrentChange = (val: User | undefined) => {
    currentRow.value = val
}



</script>