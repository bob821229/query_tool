<template>
    <PageHeader>
        <template #breadcrumb1></template>
        <template #breadcrumb>管理處灌溉用水資料</template>
        <template #title>用水紀錄查詢</template>
    </PageHeader>
    <el-container style="min-height: 610px;">
        <!-- 側邊選項欄 -->
        <el-aside width="300px">
            <el-tabs type="border-card">
                <!-- 查詢方式1 -->
                <el-tab-pane label="查詢方式1">
                    <div class="m-4">
                        <p>管理處</p>
                        <el-select v-model="selectedDepartment" placeholder="請選擇" style="width: 200px"
                            @change="changeDepartment">
                            <el-option v-for="item in departments" :key="item" :label="item" :value="item" />
                        </el-select>
                    </div>
                    <div class="m-4">
                        <p>水源別</p>
                        <el-select v-model="selectedWaterSource" placeholder="請選擇" style="width: 200px"
                            @change="changeWaterSource" :disabled="waterSoureSelect">
                            <el-option v-for="(item, index) in waterSources" :key="index" :label="item.waterSource"
                                :value="item.waterSource" />
                        </el-select>
                    </div>
                    <div class="m-4">
                        <p>分處</p>
                        <el-select v-model="selectedLocation" placeholder="請選擇" style="width: 200px"
                            @change="changeLocation" :disabled="locationSelect">
                            <el-option v-for="item in locations" :label="item.location" :value="item.location" />
                        </el-select>
                    </div>
                    <div class="m-4">
                        <p>系統1</p>
                        <el-select v-model="selectedSystem1" placeholder="請選擇" style="width: 200px" @change="changeSystem1"
                            :disabled="system1Select">
                            <el-option v-for="item in system1s" :label="item.system1" :value="item.system1" />
                        </el-select>
                    </div>
                    <div class="m-4">
                        <p>系統2</p>
                        <el-select v-model="selectedSystem2" placeholder="請選擇" style="width: 200px" @change="changeSystem2"
                            :disabled="system2Select">
                            <el-option v-for="item in system2s" :label="item.system2" :value="item.system2" />
                        </el-select>
                    </div>
                    <div class="m-4">
                        <p>工作站</p>
                        <el-select v-model="selectedWorkstation" placeholder="請選擇" style="width: 200px"
                            @change="changeWorkstation" :disabled="workstationSelect">
                            <el-option v-for="item in workstations" :label="item.workstation" :value="item.workstation" />
                        </el-select>
                    </div>
                    <div class="m-4">
                        <p>埤圳別</p>
                        <el-select v-model="selectedPondName" placeholder="請選擇" style="width: 200px"
                            :disabled="pondNameSelect">
                            <el-option v-for="item in pondNames" :label="item.pondName" :value="item.pondName" />
                        </el-select>
                    </div>
                    <div style="display: flex;justify-content: center;padding-top: 20px;">
                        <el-button @click="GetInfo(i, 1)">查詢</el-button>
                    </div>
                </el-tab-pane>
                <!-- 查詢方式2 -->

                <el-tab-pane label="查詢方式2" class="search_result">
                    <el-input v-model="searchText" placeholder="請輸入埤圳別" clearable @input="handleSearch" />
                    <div class="btn_wrap">
                        <template v-for="i in searchResult">
                            <el-button class="el_btn" @click="GetInfo(i, 2)">
                                {{ i.department }}管理處-{{ i.pondName }}</el-button>
                        </template>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-aside>
        <!-- 主要顯示區域 -->
        <el-main>
            <div v-if="detailedInfo" style="display: flex;justify-content: space-evenly;">
                <div>
                    <!-- 詳細資料表格 -->
                    <div class="table">
                        <table>
                            <thead>
                                <tr>
                                    <th style="width: 180px;">管理處</th>
                                    <th>{{ detailedInfo.department }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="width: 180px;">水源別</td>
                                    <td>{{ detailedInfo.waterSource }}</td>
                                </tr>
                                <tr>
                                    <td style="width: 180px;">分處</td>
                                    <td>{{ detailedInfo.location }}</td>
                                </tr>
                                <tr>
                                    <td style="width: 180px;">系統1</td>
                                    <td>{{ detailedInfo.system1 }}</td>
                                </tr>
                                <tr>
                                    <td style="width: 180px;">系統2</td>
                                    <td>{{ detailedInfo.system1 }}</td>
                                </tr>
                                <tr>
                                    <td style="width: 180px;">工作站</td>
                                    <td>{{ detailedInfo.workstation }}</td>
                                </tr>
                                <tr>
                                    <td style="width: 180px;">埤圳別</td>
                                    <td>{{ detailedInfo.pondName }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- 資料長度 -->
                    <div class="time_line">
                        <span style="margin-right: 20px;">資料長度:</span>
                        <span v-for="t in detailedInfo.dataLength" :key="t.year" style="width: 35px;text-align: center;"
                            :class="{ 'nodata': t.data }">
                            <div class="box" :class="{ 'red': t.data, 'gray': t.data }"></div>{{ t.year }}
                        </span>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column;gap: 10px;padding: 10px;">
                    <div class="mb-2 flex items-center text-sm">
                        <el-radio-group v-model="period" class="ml-4">
                            <el-radio label='1' size="large">一期作</el-radio>
                            <el-radio label='2' size="large">二期作</el-radio>
                            <el-radio label='0' size="large">合計</el-radio>
                        </el-radio-group>
                    </div>
                    <div class="m-4 flex-d-c">
                        <div class="mb-2 flex items-center text-sm ">
                            <el-radio-group v-model="annualOption">
                                <el-radio label="singleYear" size="large">單一年度</el-radio>
                                <el-radio label="rangeYear" size="large">起訖年度</el-radio>
                            </el-radio-group>
                        </div>
                        <div v-if="annualOption === 'singleYear'"
                            style="display: flex;justify-content:start;align-items: center;width: 100%;">
                            <el-select v-model="year" class="m-2" placeholder="請選擇年份" style="width: 100%"
                                @change="changeYear">
                                <el-option v-for="item in options" :key="item" :label="item.label" :value="item.value" />
                            </el-select>
                        </div>
                        <div v-if="annualOption === 'rangeYear'"
                            style="display: flex;justify-content: space-between;align-items: center;width: 100%;">
                            <el-select v-model="startYear" class="m-2" placeholder="請選擇年份" style="width: 100px">
                                <el-option v-for="item in options" :key="item" :label="item.label" :value="item.value" />
                            </el-select>
                            <span>
                                至
                            </span>
                            <el-select v-model="endYear" class="m-2" placeholder="請選擇年份" style="width: 100px">
                                <el-option v-for="item in options" :key="item" :label="item.label" :value="item.value" />
                            </el-select>
                        </div>


                    </div>
                    <el-button @click="getTableData">查詢</el-button>
                </div>
            </div>
        </el-main>
    </el-container>
    <template v-if="showTable">
        <div class="table_wrap">
            <div class="left_table">
                <template v-if="detailedInfo">
                    <el-table :data="tableData2" border show-summary sum-text='合計' style="width:100% " stripe size="small">
                        <el-table-column prop="label" label="名稱" />
                        <el-table-column prop="value" label="用水量" />
                    </el-table>
                </template>
            </div>
            <div class="right_table" style="width: 100%;">
                <table style="width: 100%;">
                    <tr>
                        <td colspan="50">title</td>
                    </tr>
                    <tr>
                        <td>月份</td>
                        <td v-for="m in 12" colspan="3">{{ m }}月</td>
                        <td rowspan="2" style="white-space:nowrap;">取(用)水量合計CMS</td>
                        <td rowspan="2" style="white-space:nowrap;">取(用)水量合計(立方公尺)</td>
                    </tr>
                    <tr>
                        <td>旬</td>
                        <template v-for="m in 12">
                            <td>上</td>
                            <td>中</td>
                            <td>下</td>
                        </template>
                    </tr>
                    <tr>
                        <td style="white-space:nowrap;">計畫用水量CMS</td>
                        <template v-for="mm in 36">
                            <td>{{ mm }}</td>
                        </template>
                        <td>100</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>進水口取水量</td>
                        <template v-for="mm in 36">
                            <td>{{ mm }}</td>
                        </template>
                        <td>100</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>地面水配合量</td>
                        <template v-for="mm in 36">
                            <td>{{ mm }}</td>
                        </template>
                        <td>100</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>地下水配合量</td>
                        <template v-for="mm in 36">
                            <td>{{ mm }}</td>
                        </template>
                        <td>100</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>降雨量mm</td>
                        <template v-for="mm in 36">
                            <td>{{ mm }}</td>
                        </template>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </table>
            </div>
        </div>
    </template>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue';
import { ref, reactive, computed, onMounted } from 'vue';
import axios from 'axios';
const tableData2 = ref([
    {
        label: '水稻計畫面積',
        value: 150
    }, {
        label: '旱作計畫面積',
        value: 150
    }, {
        label: '計畫面積總計',
        value: 250
    }, {
        label: '水稻實際面積',
        value: 200
    }, {
        label: '旱作計畫面積',
        value: 250
    }, {
        label: '實際面積總計',
        value: 450
    },
])

// 查詢方式一
const selectedDepartment = ref('')//管理處
const departments = ref<any[]>([]);//options

const selectedWaterSource = ref('')//水源別
const waterSources = ref([])//options
const waterSoureSelect = ref(true)

const selectedLocation = ref('') // 分處
const locations = ref([]) // options
const locationSelect = ref(true)


const selectedSystem1 = ref('')//系統1
const system1s = ref([])//options
const system1Select = ref(true)

const selectedSystem2 = ref('')//系統2
const system2s = ref([])//options
const system2Select = ref(true)

const selectedWorkstation = ref('')//工作站
const workstations = ref([])//options
const workstationSelect = ref(true)

const selectedPondName = ref('')//埤圳別
const pondNames = ref([])//options
const pondNameSelect = ref(true)


const changeDepartment = () => {
    selectedWaterSource.value = '';
    selectedLocation.value = '';
    selectedSystem1.value = '';
    selectedSystem2.value = '';
    selectedWorkstation.value = '';
    selectedPondName.value = '';

    waterSoureSelect.value = false
    locationSelect.value = true
    system1Select.value = true
    system2Select.value = true
    workstationSelect.value = true
    pondNameSelect.value = true

    // 先找到符合的 department
    const filteredByDepartment = data.value.filter(item => item.department === selectedDepartment.value);
    // 再去除重複的 waterSource
    const uniqueWaterSources = [...new Set(filteredByDepartment.map(item => item.waterSource))];
    waterSources.value = uniqueWaterSources.map(waterSource => ({ waterSource }));
}
const changeWaterSource = () => {
    selectedLocation.value = '';
    selectedSystem1.value = '';
    selectedSystem2.value = '';
    selectedWorkstation.value = '';
    selectedPondName.value = '';

    waterSoureSelect.value = false
    locationSelect.value = false
    system1Select.value = true
    system2Select.value = true
    workstationSelect.value = true
    pondNameSelect.value = true

    const filteredByWaterSource = data.value.filter(item => item.waterSource === selectedWaterSource.value && item.department === selectedDepartment.value)
    // 再去除重複的 location
    const uniqueLocations = [...new Set(filteredByWaterSource.map(item => item.location))]
    locations.value = uniqueLocations.map(location => ({ location }))
}
const changeLocation = () => {
    selectedSystem1.value = '';
    selectedSystem2.value = '';
    selectedWorkstation.value = '';
    selectedPondName.value = '';

    waterSoureSelect.value = false
    locationSelect.value = false
    system1Select.value = false
    system2Select.value = true
    workstationSelect.value = true
    pondNameSelect.value = true

    const filteredByLocation = data.value.filter(item => item.waterSource === selectedWaterSource.value && item.department === selectedDepartment.value && item.location === selectedLocation.value)
    // 再去除重複的 system1
    const uniqueSystem1 = [...new Set(filteredByLocation.map(item => item.system1))]
    system1s.value = uniqueSystem1.map(system1 => ({ system1 }))

}
const changeSystem1 = () => {
    selectedSystem2.value = '';
    selectedWorkstation.value = '';
    selectedPondName.value = '';

    waterSoureSelect.value = false
    locationSelect.value = false
    system1Select.value = false
    system2Select.value = false
    workstationSelect.value = true
    pondNameSelect.value = true

    const filteredBySystem1 = data.value.filter(item => item.waterSource === selectedWaterSource.value && item.department === selectedDepartment.value && item.location === selectedLocation.value && item.system1 === selectedSystem1.value)
    // 再去除重複的 system2
    const uniqueSystem2 = [...new Set(filteredBySystem1.map(item => item.system2))]
    system2s.value = uniqueSystem2.map(system2 => ({ system2 }))
}
const changeSystem2 = () => {
    selectedWorkstation.value = '';
    selectedPondName.value = '';

    waterSoureSelect.value = false
    locationSelect.value = false
    system1Select.value = false
    system2Select.value = false
    workstationSelect.value = false
    pondNameSelect.value = true

    const filteredBySystem2 = data.value.filter(item => item.waterSource === selectedWaterSource.value && item.department === selectedDepartment.value && item.location === selectedLocation.value && item.system1 === selectedSystem1.value)
    // 再去除重複的 workstation
    const uniqueworkstation = [...new Set(filteredBySystem2.map(item => item.workstation))]
    workstations.value = uniqueworkstation.map(workstation => ({ workstation }))
}
const changeWorkstation = () => {
    selectedPondName.value = '';

    waterSoureSelect.value = false
    locationSelect.value = false
    system1Select.value = false
    system2Select.value = false
    workstationSelect.value = false
    pondNameSelect.value = false

    const filteredByWorkstation = data.value.filter(item => item.waterSource === selectedWaterSource.value && item.department === selectedDepartment.value && item.location === selectedLocation.value && item.system1 === selectedSystem1.value && item.workstation === selectedWorkstation.value)
    // 再去除重複的 workstation
    const uniquePondNames = [...new Set(filteredByWorkstation.map(item => item.pondName))]
    pondNames.value = uniquePondNames.map(pondName => ({ pondName }))
}



// -----------------------------------------
const year = ref(null)//單一年度年份
const startYear = ref(null)//起始年份
const endYear = ref(null)//結束年份
//該埤圳年份
const options = ref([
    {
        label: '105年',
        value: 105
    }, {
        label: '106年',
        value: 106
    }, {
        label: '107年',
        value: 107
    }, {
        label: '108年',
        value: 108
    }, {
        label: '109年',
        value: 109
    }, {
        label: '110年',
        value: 110
    }, {
        label: '111年',
        value: 111
    }, {
        label: '112年',
        value: 112
    },
])


const searchText = ref('') //埤圳別

const changeYear = () => {
    startYear.value = year.value
    endYear.value = year.value
}


const data = ref<DataItem[]>([]); // 使用 ref
const getData = async () => {
    try {
        const response = await axios.get('public/data/data.json');
        data.value = response.data;
        // console.log(response.data);
    } catch (error) {
        console.error('連線失敗:', error);
    }
}

onMounted(async () => {
    await getData();
    const departmentSet = new Set(data.value.map(item => item.department));
    departments.value = Array.from(departmentSet);
    // selectedDepartment.value = departments.value[0]; //預設第一個
    // console.log("deps:", departments.value);
})
const detailedInfo = ref<DataItem | null>(null);//點擊表格後顯示詳細資訊

const searchResult = ref<DataItem[]>([])//顯示出符合條件的埤圳別
// 搜尋框功能
const handleSearch = computed(() => {

    if (searchText.value === "") {
        searchResult.value = [];

    } else {
        let result = data.value.filter(item => item.pondName.includes(searchText.value));
        searchResult.value = result;
    }

})

interface DataLengthItem {
    year: string;
    data: boolean;
}
interface DataItem {
    "department": string,
    "waterSource": string,
    "location": string,
    "system1": string,
    "system2": string,
    "workstation": string,
    "pondName": string,
    "dataLength": DataLengthItem[]
}
const GetInfo = (i: DataItem, x: number) => {
    if (x == 1) {
        let result = data.value.filter(item => item.pondName === selectedPondName.value);
        detailedInfo.value = result[0];
    }
    else if (x == 2) {

        detailedInfo.value = i;
    }

    startYear.value = null;
    endYear.value = null;
    year.value = null;
};

const annualOption = ref('singleYear')//年度選項 (預設為單一年度)
// singleYear單一
// rangeYear起訖

const period = ref('1')//期作別(1:一期作,2:二期作,0:合計)
const showTable = ref(false)//是否顯示表格
const getTableData = async () => {
    showTable.value = true
    let obj;
    if (detailedInfo.value) {

        obj = {
            "department": detailedInfo.value.department,
            "pondName": detailedInfo.value.pondName,
            "period": period.value,
            "startYear": startYear.value,
            "endYear": endYear.value,
        }
        console.log("obj:", obj)
        // try {
        //     const response = await axios.post('url', obj);
        //     tableData2.value = response.data;
        // } catch (error) {
        //     console.error('請求失敗:', error);
        // }
    } else {
        console.error('無法發送請求，因為 detailedInfo 為 null');
    }


}
</script>

<style scoped lang="scss">
.m-4 {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;


}

.flex-d-c {
    flex-direction: column;
    min-height: 100px;
    align-items: flex-start;
    justify-content: space-around;
}

.nodata {
    color: rgb(169, 168, 168);
    // color: $primary-color;
    // color: $red-color;
}

.g-5 {
    gap: 5px;
    display: flex;
    align-items: start;
}

.table {
    padding: 5px;
    width: 50%;
}

.el-main {
    padding: 0 20px;
}

.search_result {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.time_line {
    display: flex;
    align-items: center;
    padding: 5px;
}

.box {
    height: 10px;
    background-color: green;
    border: 1px solid #000;
}

.red {
    background-color: red;
}

table {
    border-collapse: collapse;
    width: 500px;
    text-align: center;
}

th,
td {
    border: 1px solid #dddddd;
    /* 設置所有 th 和 td 的邊框為1px實線，顏色為 #dddddd */
    padding: 8px;
    /* 設置單元格內間距 */
    text-align: left;
    /* 設置文字對齊方式 */
}

th {
    background-color: #f2f2f2;
    /* 設置 th 的背景色 */
}

.table_wrap {
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    gap: 15px;
    margin-top: 50px;
}

.btn_wrap {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: start;
    max-height: 500px;
    overflow-y: auto;
}

.el_btn {
    margin-left: 0;
}

.right_table td {
    text-align: center;
    padding: 3.5px;
}

.left_table {
    width: 30%;
}

.right_table {
    width: 70%;
}
</style>