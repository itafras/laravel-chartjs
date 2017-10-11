import axios from 'axios';
import Vue from 'vue';
import  LineChart  from './components/LineChart'

//import LineChart from './components/LineChart';

new Vue ({
  el: '#app',
  components: { LineChart },
  data: {
    searched: '',
    chartMetrics:[],
    chartLabels:[],
    period:'last-month',
    package:'',
    errorMessage:'',
    showError: false,

    collection: ''
  },
  methods:{
     requestData() {
      axios.get(`https://api.npmjs.org/downloads/range/${this.period}/${this.searched}`)
       .then(response => {
         console.log(response.data);
         this.chartMetrics = response.data.downloads.map(download => download.downloads);
         this.chartLabels = response.data.downloads.map(download => download.day);
         this.package = response.data.package;
         EventBus.fire('submitted', { chartMetrics: this.chartMetrics, chartLabels: this.chartLabels } );
       })
       .catch(err => {
        this.errorMessage = err;
        this.showError = true;
     });
     }
  }
});
