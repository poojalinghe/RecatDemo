import React from "react";
import DonutChart from "./donutChart";
import LineChart from "./lineChart";
import BarChart from "./barChart";
import MixedChart from "./mixChart";
class Charts extends React.Component {
  render() {
    return (
      <div className="container" style={{ background: "white" }}>
        <div className="row">
          <div className="col">
            <LineChart></LineChart>
          </div>
          <div className="col">
            <BarChart></BarChart>
          </div>
        </div>
        <hr></hr>
        <hr></hr>

        <div className="row">
          <div className="col">
            <DonutChart></DonutChart>
          </div>
          <div className="col">
            <MixedChart></MixedChart>
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
