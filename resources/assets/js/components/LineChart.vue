 <script>
 import { Line } from 'vue-chartjs'

  export default Line.extend({
    props: {},
    data () {
      return {
         chartMetrics: '',
         chartLabels: '',
        collection: {},
        options: {
          title: {
              display: true,
              text: 'Chart.js Line Chart'
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: true,
        }
      }
   },
   mounted() {
     EventBus.listen('submitted', function (payLoad) {
      // EventBus.$on('submitted', function (payLoad) {

       this.chartLabels = payLoad.chartLabels ;
       this.chartMetrics = payLoad.chartMetrics ;

       if ( this._chart ) {
          this._chart.destroy();
       }

       this.renderChart({
         labels: this.chartLabels ,
         datasets: [
         {
           label: 'downloads',
             borderColor: 'RGBA(155, 127, 185, 1.00)',
             pointBackgroundColor: 'white',
             borderWidth: 1,
             pointBorderColor: 'RGBA(155, 127, 185, 1.00)',
             backgroundColor: 'RGBA(221, 225, 243, 0.30)',
             data: this.chartMetrics
         }]
       });


    }.bind(this));
   }


  });
  </script>
