import axios from 'axios';
import Vue from 'vue';
import  LineChart  from './components/LineChart'

//import LineChart from './components/LineChart';

new Vue ({
  el: '#app',
  components: { LineChart },
  data: {
    searched: '',
    chartMetrics:[5,1,4],
    chartLabels:[0,1,3],
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
        this.chartMetrics = response.data.downloads.map(download=> download.downloads);
        this.chartLabels = response.data.downloads.map(download => download.day);
        this.package = response.data.package;
        EventBus.fire('submitted');
      })
      .catch(err => {
       this.errorMessage = err.response.data.error;
       this.showError = true; 
    });
    console.log(() => 'hello world');
    }}

})