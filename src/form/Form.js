import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';
import { getCompanies, getPlaces } from '../services/dealersapi';

class Form extends Component {
  constructor(props) {

    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.companies  =  this.companies.bind(this);
    this.places = this.places.bind(this);
    this.state = {
      companies:[],
      places:[],
      page: 0,
      steps: [
        {title: 'Dealer Details'},
        {title: 'Contact Details'},
        {title: 'Alternate Contact'}
      ],
    };

    this.companies();
    this.places();
  }

  companies= () => {
    getCompanies()
    .then(res => {
          let companies = res['data']['data'];
          this.setState({companies:companies})
    });
  }

  places= () => {
    getPlaces()
    .then(res => {
          let places = res['data']['data'];
          this.setState({places:places})
    });
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (
      <Card className="card mt-2">
        <Stepper steps={ steps } activeStep={ page } />
        <div></div>
        {page === 0 && <FirstForm companies={this.state.companies} places={this.state.places} onSubmit={this.nextPage} />}
        {page === 1 && (
          <SecondForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 2 && (
          <ThirdForm
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </Card>
    );
  }

}

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form;
