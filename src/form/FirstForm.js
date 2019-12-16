import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import validate from "../validation/validation";
import FormInput from "../components/FormInput/FormInput";
import { captialize } from "../validation/normalize";
import { Button, Card, CardBody, Col, FormGroup, FormText } from "reactstrap";

let companies ;
let places;

const renderCompanies = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input} className="form-control">
      <option value="">-- Select a Company --</option>
      {companies.map((comp, index) => <option value={comp.id} key={index}>{comp.company_name}</option>)}
    </select>
    {touched && <FormText className="help-block" style ={{color:"red"}}>{error}</FormText>}
  </div>
);

const renderPlaces = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input} className="form-control">
      <option value="">-- Select a Place --</option>
      {places.map((place, index) => <option value={place.id} key={index}>{place.place_name}</option>)}
    </select>
    {touched && <FormText className="help-block" style ={{color:"red"}}>{error}</FormText>}

  </div>
);

const FirstForm = props => {
  const { handleSubmit } = props;
  companies = props.companies
  places=props.places
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <Field
              name="fullname"
              type="text"
              component={FormInput}
              label="Dealer Name *"
              inputPlaceHolder="Enter Dealer's Name"
              normalize={captialize}
            />
            <FormGroup row>
              <Col>
                <Field name="companyid" component={renderCompanies} />
              </Col>
              <Col>
                <Field name="placeid" component={renderPlaces} />
              </Col>
            </FormGroup>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button
              color="primary"
              className="btn-pill pull-right"
              type="submit"
              style={{ marginRight: "70px" }}
            >
              Next &nbsp;
              <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

FirstForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(FirstForm);
