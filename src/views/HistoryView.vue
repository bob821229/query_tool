<template>
    <PageHeader>
        <template #title>歷史停灌資訊</template>
    </PageHeader>

    <!-- <table>
        <thead>
            <tr>
                <th>年度</th>
                <th>日期</th>
                <th>管理處</th>
            </tr>
        </thead>
        <tr v-for="(item, index) in data" :key="index">
            <template v-if="index === 0 || item.year !== data[index - 1].year">
                <td :rowspan="yearRowSpan(item.year, data)">
                    {{ item.year }}
                </td>
            </template>
            <td v-if="index === 0 || item.date !== data[index - 1].date" :rowspan="dateRowSpan(item.date, data)">
                {{ item.date }}
            </td>
            <td>{{ item.managementOffice }}</td>
        </tr>
    </table>
    <hr> -->
    <!-- 
    <table>
        <thead>
            <tr>
                <th>公告年份</th>
                <th>公告日期</th>
                <th>期作</th>
                <th>管理處</th>
                <th>供灌停灌區域</th>
                <th>公告停灌面積(公頃)</th>
            </tr>
        </thead>
        <tr v-for="(item, index) in data2" :key="index">
            <td :rowspan="item.yearRowSpan" v-if="item.yearRowSpan">{{ item.year }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.period }}</td>
            <td>{{ item.department }}</td>
            <td>{{ item.area }}</td>
            <td>{{ item.irrigationStopArea }}</td>
        </tr>
    </table> -->
    <!-- --------- -->
    <table>
        <thead>
            <tr>
                <th>公告年份</th>
                <th>公告日期</th>
                <th>期作</th>
                <th>管理處</th>
                <th>供灌停灌區域</th>
                <th>公告停灌面積(公頃)</th>
            </tr>
        </thead>
        <tr v-for="(item, index) in data2" :key="index">
            <td v-if="index === 0 || item.year !== data2[index - 1].year" :rowspan="yearRowSpan(item.year, data2)">{{
                item.year }}</td>
            <td v-if="index === 0 || item.date !== data2[index - 1].date" :rowspan="dateRowSpan(item.date, data2)">{{
                item.date }}</td>
            <td>{{ item.period }}</td>
            <td v-if="trueOrFalse(index, data2)" :rowspan="departmentRowSpan(item.date, item.department, data2)">
                {{ item.department }}
            </td>
            <!-- <td>{{ item.department }}</td> -->
            <td>{{ item.area }}</td>
            <td v-if="index === 0 || item.irrigationStopArea !== data2[index - 1].irrigationStopArea"
                :rowspan="irrigationStopAreaRowSpan(item.date, item.irrigationStopArea, data2)">{{ item.irrigationStopArea
                }}
            </td>
        </tr>
    </table>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue';
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
const data2 = ref([])
const data = [
    {
        "year": 99,
        "date": '99/1/8',
        'managementOffice': "苗栗"
    },
    {
        "year": 99,
        "date": '99/2/18',
        'managementOffice': "新竹"
    },
    {
        "year": 99,
        "date": '99/3/28',
        'managementOffice': "桃園"
    },
    {
        "year": 99,
        "date": '99/6/5',
        'managementOffice': "台中"
    },
    {
        "year": 100,
        "date": '100/1/8',
        'managementOffice': "台北"
    },
    {
        "year": 101,
        "date": '101/1/8',
        'managementOffice': "台東"
    },
    {
        "year": 101,
        "date": '101/1/8',
        'managementOffice': "雲林"
    },
    {
        "year": 101,
        "date": '101/1/8',
        'managementOffice': "基隆"
    },
    {
        "year": 102,
        "date": '102/1/8',
        'managementOffice': "台南"
    },
    {
        "year": 103,
        "date": '103/1/8',
        'managementOffice': "高雄"
    },
    {
        "year": 103,
        "date": '103/1/8',
        'managementOffice': "屏東"
    },


]
const trueOrFalse = (index, data) => {
    if (index === 0) {
        return true;

    } else if (data[index].date === data[index - 1].date && data[index].department === data[index - 1].department) {
        return false;
    } else {
        return true;
    }
};
const yearRowSpan = (year, data) => {
    const count = data.filter(item => item.year === year).length;
    return count > 1 ? count : 1;
};
const dateRowSpan = (date, data) => {
    const count = data.filter(item => item.date === date).length;
    return count > 1 ? count : 1;
};
const irrigationStopAreaRowSpan = (date, irrigationStopArea, data) => {
    const count = data.filter(item => item.irrigationStopArea === irrigationStopArea && item.date === date).length;
    return count > 1 ? count : 1;
};
const departmentRowSpan = (date, department, data) => {
    const count = data.filter(item => item.department === department && item.date === date).length;
    return count > 1 ? count : 1;
};
const tableRowListData = computed(() => {
    let previousYear = null;
    for (let idx = 0; idx < data2.value.length; idx++) {
        let obj = data2.value[idx];
        obj.ifShowYearTd = ifFirstComing(previousYear, obj.year);
        if (obj.ifShowYearTd) {
            let yearRowSpan = data2.value.filter(innerObj => innerObj.year == obj.year).length;
            console.log(yearRowSpan);
            obj.yearRowSpan = yearRowSpan;
        }
        previousYear = obj.year;
    }
    console.log(tableRowListData);
    return tableRowListData;
}
)
const ifFirstComing = (previous, current) => {
    return (previous != current);
}

const getData = async () => {
    try {
        const response = await axios.get('public/data/historyStopsIrrigation.json');
        data2.value = response.data;
    } catch (error) {
        console.error('連線失敗:', error);
    }
}
onMounted(async () => {
    await getData()
})
</script>

<style scoped lang="scss">
table {
    border-collapse: collapse;
    width: 100%;

    th,
    td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        text-align: center;
        font-size: 20px;
    }

    th {
        background-color: #f2f2f2;
    }
}
</style>