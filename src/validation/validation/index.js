const validate = (values) => {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = 'Name is Required';
  }

  if (!values.mobile) {
    errors.mobile = 'Mobile Number is  Required';
  } else if (values.mobile && !/^([6-9]\d{9})$/i.test(values.mobile)) {
    errors.mobile = 'Invalid mobile number, must be 10 digits';
  }


  if (!values.email) {
    errors.email = 'E-mail is  Required';
  } 

  

  if (!values.address) {
    errors.address = 'Address is Required';
  }

  if (!values.companyid) {
    errors.companyid = 'Please select any  option';
  }

  if (!values.placeid) {
    errors.placeid = 'Please select any option';
  }
  
  return errors;
};

export default validate;
