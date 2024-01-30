import { computed } from 'vue';

const tableRowList = ref([]);
const tableRowListData = computed((tableRowList){
    let previousYear = null;
    for (let idx = 0; idx < tableRowList.length; idx++) {
        let obj = tableRowList[idx];
        obj.ifShowYearTd = ifFirstComing(previousYear, obj.year);
        if (obj.ifShowYearTd) {
            let yearRowSpan = tableRowList.filter(innerObj => innerObj.year == obj.year).length;
            console.log(yearRowSpan);
            obj.yearRowSpan = yearRowSpan;
        }
        previousYear = obj.year;
    }
    console.log(tableRowList);
    return tableRowList;
}
)

function ifFirstComing(previous, current) {
    return (previous != current);
}

// const tableRowListData = computed(() => {
//     let previousYear = null;
//     for (let idx = 0; idx < this.tableRowList.length; idx++) {
//         let obj = this.tableRowList[idx];
//         obj.ifShowYearTd = this.ifFirstComing(previousYear, obj.year);
//         if (obj.ifShowYearTd) {
//             let yearRowSpan = this.tableRowList.filter(innerObj => innerObj.year == obj.year).length;
//             console.log(yearRowSpan);
//             obj.yearRowSpan = yearRowSpan;
//         }
//         previousYear = obj.year;
//     }
//     console.log(this.tableRowList);
//     return this.tableRowList;
// })

