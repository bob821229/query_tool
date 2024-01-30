export default {
  components: {
  },
  data() {
    return {
      waterUsage: [
        {
          rowName: "1",
          Jan_1: 50,
          Jan_2: 20,
          Jan_3: 15,
          Feb_1: 80,
          Feb_2: 30,
          Feb_3: 25,
          Mar_1: 60,
          Mar_2: 25,
          Mar_3: 20,
          Apr_1: 70,
          Apr_2: 15,
          Apr_3: 30,
          May_1: 90,
          May_2: 10,
          May_3: 35,
          Jun_1: 75,
          Jun_2: 18,
          Jun_3: 22,
          Jul_1: 85,
          Jul_2: 22,
          Jul_3: 28,
          Object1_Total: 700,
          totalUsage: 850,
        },
        {
          rowName: "3",
          Jan_1: 120,
          Jan_2: 15,
          Jan_3: 18,
          Feb_1: 90,
          Feb_2: 25,
          Feb_3: 22,
          Mar_1: 110,
          Mar_2: 20,
          Mar_3: 25,
          Apr_1: 100,
          Apr_2: 30,
          Apr_3: 20,
          May_1: 95,
          May_2: 12,
          May_3: 28,
          Jun_1: 80,
          Jun_2: 18,
          Jun_3: 24,
          Jul_1: 105,
          Jul_2: 15,
          Jul_3: 30,
          Object2_Total: 900,
          totalUsage: 1100,
        },
        {
          rowName: "2",
          Jan_1: 80,
          Jan_2: 25,
          Jan_3: 20,
          Feb_1: 70,
          Feb_2: 18,
          Feb_3: 22,
          Mar_1: 85,
          Mar_2: 20,
          Mar_3: 25,
          Apr_1: 95,
          Apr_2: 15,
          Apr_3: 30,
          May_1: 75,
          May_2: 30,
          May_3: 18,
          Jun_1: 110,
          Jun_2: 12,
          Jun_3: 28,
          Jul_1: 100,
          Jul_2: 22,
          Jul_3: 24,
          Object3_Total: 800,
          totalUsage: 950,
        },
        {
          rowName: "2",
          Jan_1: 95,
          Jan_2: 22,
          Jan_3: 28,
          Feb_1: 100,
          Feb_2: 20,
          Feb_3: 25,
          Mar_1: 85,
          Mar_2: 18,
          Mar_3: 22,
          Apr_1: 120,
          Apr_2: 15,
          Apr_3: 20,
          May_1: 70,
          May_2: 30,
          May_3: 18,
          Jun_1: 90,
          Jun_2: 25,
          Jun_3: 20,
          Jul_1: 105,
          Jul_2: 12,
          Jul_3: 30,
          Object4_Total: 950,
          totalUsage: 1100,
        },
        {
          rowName: "2",
          Jan_1: 110,
          Jan_2: 15,
          Jan_3: 22,
          Feb_1: 95,
          Feb_2: 22,
          Feb_3: 28,
          Mar_1: 80,
          Mar_2: 30,
          Mar_3: 18,
          Apr_1: 105,
          Apr_2: 18,
          Apr_3: 24,
          May_1: 90,
          May_2: 25,
          May_3: 20,
          Jun_1: 75,
          Jun_2: 15,
          Jun_3: 30,
          Jul_1: 100,
          Jul_2: 20,
          Jul_3: 25,
          Object5_Total: 920,
          totalUsage: 1050,
        },
      ],
      $datatable: null,
      datatableSettings: {
        pageLength: 10,
        currentPageIndex: 0,
        currentSearchTxt: '',
        order: [],
        columns: [
          {
            name: 'r1',
            title: `旬`,
            //data: 'rowName'
            data: function (rowData) {
              return rowData.rowName;
            },
          },
          {
            name: 'r2',
            title: `一上`,
            //data: 'Jan_1'
            data: function (row) {
              return row.Jan_1;
            },
          },
          {
            title: `一中`,
            data: function (row) {
              return row.Jan_2;
            },
          },
          {
            title: `一下`,
            data: function (row) {
              return row.Jan_3;
            },
          },
        ],
      },
    };
  },
  computed: {
    // compData(){
    //     return {
    //         title: this.comp,
    //         extra: `this is extra`
    //     };
    // }
  },
  methods: {
    renderDataTable: function () {
      this.$datatable = $("#myRowSpanTable").DataTable({
        // language: {
        //   url: self.config.list.defaultDatatableSettings.languagePackUri, //"/assets/locales/datatable/Chinese-traditional.json",
        // },
        deferLoading: true,
        destroy: true,
        data: this.waterUsage,
        paging: true,
        responsive: true,
        displayStart:
          this.datatableSettings.pageLength *
          this.datatableSettings.currentPageIndex,
        pageLength: this.datatableSettings.pageLength,
        search: {
          search: this.datatableSettings.currentSearchTxt,
        },

        // //descent order by the values of the 1st column
        order: this.datatableSettings.order, //order: [[0, "desc"]],
        columns: this.datatableSettings.columns,
        rowsGroup: [
          'r1:name',
          'r2:name'
        ],
      });
    },
  },
  mounted() {
    //console.log(components);
    this.renderDataTable();
  },
  template: `
        <div class="row">  
            <div class="col-12">
                <table id="myRowSpanTable" class="table table-border"></table>
            </div>
        </div>
      `,
};
