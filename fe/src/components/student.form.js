import React, { Component } from 'react';

class StudentForm extends Component {

    constructor(props) {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      fetch('http://localhost:8080/student', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {
          'Content-Type': 'application/json'
        }
      })
     }
      
    render() {
      return (
        
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
          <label htmlFor="phone_number">Phone number</label>
          <input id="phone_number" name="phone_number" type="text" />
          <label htmlFor="birth_date">Birth date</label>
          <input id="birth_date" name="birth_date" type="text" />
          <label htmlFor="country">Country</label>
          <input id="country" name="country" type="text" />
          <label htmlFor="city">City</label>
          <input id="city" name="city" type="text" />
          <label htmlFor="career">Career</label>
          <input id="career" name="career" type="text" />
          <label htmlFor="payment_option">Payment Option</label>
          <input id="payment_option" name="payment_option" type="text" />
          <button>Send</button>
        </form>
      );
    }
  }

export default StudentForm