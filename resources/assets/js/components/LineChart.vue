 <script>
 import { Line } from 'vue-chartjs'
 
  export default Line.extend({
    props: {
      chartMetrics: {
        type: Array | Object,
        required: false
      },
      chartLabels: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
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
      }},


      mounted() {
        EventBus.listen('submitted', () => {

          this.collection = Object.assign({})
          this.$set(this.collection,"labels",this.chartLabels)
          this.$set(this.collection,"datasets",[])
          this.collection.datasets.push({
                                    backgroundColor: [
                                        'rgba(255, 159, 64, 0.2)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(155, 159, 64, 0.2)',
                                        'rgba(255, 129, 64, 0.2)',
                                    ],
                                    borderColor: [
                                        'rgba(255,99,132,1)',                        
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(255, 206, 86, 1)',
                                    ],
                                    borderWidth: 1
                                
                            });
         this.$set(this.collection.datasets[0],"data",this.chartMetrics);
         
         

          this.renderChart({
          labels: this.collection.labels , 
          datasets: [
          {
            label: 'downloads',
              borderColor: 'RGBA(155, 127, 185, 1.00)',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: 'RGBA(155, 127, 185, 1.00)',
              backgroundColor: 'RGBA(221, 225, 243, 0.30)',
              data: this.collection.datasets[0].data
          }]
          });

        })
    }
  })
  </script>