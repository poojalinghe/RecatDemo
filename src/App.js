import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import '@coreui/icons/css/coreui-icons.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './scss/style.css';

import Form from '../src/form';


class App extends Component {

  result = (values) => {
    console.log(values)
    alert("Information is submitted succesfully");
  }

  render() {
    return (
      <Provider store={store}>
      <Form onSubmit={this.result}/>
      </Provider>
    );
  }
}

export default App;
