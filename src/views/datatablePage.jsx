import React from "react";
import { MDBDataTable } from "mdbreact";
import { getAllDealers } from "../services/dealersapi";

class DatatablePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          label: "FullName",
          field: "fullname",
          sort: "asc",
          width: 150
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
          width: 270
        },
        {
          label: "Mobile",
          field: "mobile",
          sort: "asc",
          width: 200
        },
        {
          label: "Address",
          field: "address",
          sort: "asc",
          width: 100
        }
      ],
      rows: []
    };
  }

  componentDidMount() {
    getAllDealers().then(res => {
      this.setState({ rows: res.data.data });
    });
  }

  render() {
    return <MDBDataTable striped hover data={this.state} />;
  }
}

export default DatatablePage;
