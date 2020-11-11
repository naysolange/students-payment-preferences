import React, { Component } from 'react';

class StudentForm extends Component {

    constructor(props) {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
      showSuccessAlert: false, showFailAlert: false, message: ''
    };

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      this.setState({
        showSuccessAlert: false,
        showFailAlert: false,
        message: ''
      })
      fetch('http://localhost:8080/student', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          showSuccessAlert: true,
          message: json.message
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          showFailAlert: true,
          message: err.message
        })
      });
    }
      
    render() {
      return (
        <div>
          <div>
            { this.state.showSuccessAlert && <div className="success"> {this.state.message} </div> }
            { this.state.showFailAlert && <div className="fail"> {this.state.message} </div> }
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="formField">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" onChange={this.handleChange} required/>
            </div>
            <div className="formField">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required/>
            </div>
            <div className="formField">
              <label htmlFor="phone_number">Phone number</label>
              <input id="phone_number" name="phone_number" type="number" onChange={this.handleChange} required/>
            </div>
            <div className="formField">
              <label htmlFor="birth_date">Birth date</label>
              <input id="birth_date" name="birth_date" type="text" onChange={this.handleChange} required/>
            </div>
            <div className="formField">
              <label htmlFor="country">Country</label>
              <input id="country" name="country" type="text" onChange={this.handleChange} required/>
            </div>
            <div className="formField">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" onChange={this.handleChange} required/>
            </div>
            <div className="formField">
              <label htmlFor="career">Career</label>
              <input id="career" name="career" type="text" onChange={this.handleChange} required/>
            </div>
            <div className="formField">
              <label htmlFor="payment_option">Payment Option</label>
              <select onChange={this.handleChange} id="payment_option" name="payment_option">
                <option value="Credit card (1 installment)">Credit card (1 installment)</option>
                <option value="Credit card (3 installments)">Credit card (3 installments)</option>
                <option value="Credit card (6 installments)">Credit card (6 installments)</option>
                <option value="Debit card">Debit card</option>
                <option value="Cash">Cash</option>
                <option value="Transfer">Transfer</option>
              </select>
            </div>
            <div className="formButton"><button>Send</button></div>
          </form>
        </div>
      );
    }
  }

export default StudentForm