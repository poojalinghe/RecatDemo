import React, { Component } from "react";
import { Provider, Subscribe } from "unstated";
import DealerContainer from "../components/Unstate/UnstateDemo";
import { Card } from "reactstrap";
import "animate.css";

class UnstateDemo extends Component {
  render() {
    return (
      <div style={{ textAlign: "-webkit-center" }}>
        <Provider>
          <Subscribe to={[DealerContainer]}>
            {dealers => (
              <div className="container ">
                <form
                  onSubmit={dealers.handleAddDealer}
                  style={{
                    width: "500px",
                    height: "200px",
                    padding: "15px"
                  }}
                  className="data"
                >
                  <h3 className="animated infinite slow bounce ">
                    Enter Data Here
                  </h3>
                  <div className="form-group mt-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control "
                      placeholder="Enter your name here"
                      value={dealers.state.name}
                      required
                      onChange={dealers.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email here"
                      value={dealers.state.email}
                      required
                      onChange={dealers.handleInputChange}
                    />
                  </div>

                  <button className="btn btn-secondary animated fadeInRightBig delay-10s slow ">Submit</button>
                </form>

                <hr></hr>
              </div>
            )}
          </Subscribe>

          <div className="container">
            <h3 className="animated infinite pulse ">
              All Data
            </h3>
            <Subscribe to={[DealerContainer]}>
              {dealers =>
                dealers.state.dealers.map((dealer, index) => (
                  <Card
                    style={{
                      width: "500px",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                      paddingRight: "10px"
                    }}
                    key={index}
                    className="data"
                  >
                    <p>
                      <button
                        style={{ float: "right" }}
                        onClick={() => dealers.handleDeleteDealer(dealer)}
                      >
                        X
                      </button>
                      <b>Name:</b> {dealer.name} <br />
                      <b> E-mail: </b>
                      {dealer.email}
                    </p>
                  </Card>
                ))
              }
            </Subscribe>
          </div>
        </Provider>
      </div>
    );
  }
}

export default UnstateDemo;
