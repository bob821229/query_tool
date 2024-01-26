//import OfficialDownloadSample from "./official-download-sample.js";
export default {
  components: {
    //OfficialDownloadSample,
  },
  data() {
    return {
      tableRowList: [
        {
          year: 99,
          date: '2021-10',
          tenDays: '苗粟',
        },
        {
          year: 99,
          date: '2021-11',
          tenDays: '宜蘭',
        },
        {
          year: 104,
          date: '103-02',
          tenDays: '桃園',
        },
        {
          year: 104,
          date: '103-10',
          tenDays: '花蓮',
        },
        {
          year: 104,
          date: '104-01',
          tenDays: '彰化',
        },
        {
          year: 107,
          date: '106-01',
          tenDays: '桃園',
        },
      ]
    };
  },
  computed: {
    tableRowListData() {
      let previousYear = null;
      for (let idx = 0; idx < this.tableRowList.length; idx++) {
        let obj = this.tableRowList[idx];
        obj.ifShowYearTd = this.ifFirstComing(previousYear, obj.year);
        if (obj.ifShowYearTd) {
          let yearRowSpan = this.tableRowList.filter(innerObj => innerObj.year == obj.year).length;
          console.log(yearRowSpan);
          obj.yearRowSpan = yearRowSpan;
        }
        previousYear = obj.year;
      }
      console.log(this.tableRowList);
      return this.tableRowList;
    },
    tableRowData() {
      for (let inx = 0; data2.length; inx++)
  },
    methods: {
      ifFirstComing(previous, current) {
        return (previous != current);
      },
      ShowTd(x, y) {
        return (x !== y)
      }

    },
    mounted() {
      //console.log(components);
      this.renderDataTable();
    },
    template: `
        <div class="row">  
            <div class="col-12">
                <table id="myTable" class="table table-border">
                  <thead>
                    <tr>
                      <td>年度</td>
                      <td>日期</td>
                      <td>管理處</td>
                    </tr>
                    
                  </thead>
                  <tbody>
                    <tr v-for="(obj, idx) in tableRowListData" :key="idx">
                      <td :rowSpan="obj.yearRowSpan" v-if="obj.ifShowYearTd">{{obj.year}}{{obj.ifShowYearTd}}</td>
                      <td>{{obj.date}}</td>
                      <td>{{obj.tenDays}}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
      `,
  };
