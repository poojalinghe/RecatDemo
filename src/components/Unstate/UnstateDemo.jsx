import { Container } from "unstated";

class DealerContainer extends Container {
  state = {
    dealers: [{name:"Audi Dealer", email:"audi@gmail.com"}, {name:"BMW Dealer", email:"bmw@gmail.com"}],
    name: "",
    email:"",
  };

  handleDeleteDealer = dealer => {
    this.setState({
      dealers: this.state.dealers.filter(c => c !== dealer)
    });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddDealer = event => {
    event.preventDefault();
    var data = {name : this.state.name, email: this.state.email}
    this.setState(({ dealers}) => ({
        dealers: dealers.concat(data)
    }));
    this.setState({ name: "" , email:""});
  };
}

export default DealerContainer;
