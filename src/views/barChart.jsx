import React from "react";
import ReactApexChart from "react-apexcharts";

class BarChart extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          chart:{
            toolbar:{
                show:false
            }
          },
          title: {
            text: 'Apex Bar Chart',
            align: 'center'
          },
          dataLabels: {
            enabled: true
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
        },
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
      }
    }

    render() {
      return (
        

        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="350" width="400"/>
        </div>


      );
    }
  }

  export default BarChart;