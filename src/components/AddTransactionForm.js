import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount:'',
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    const {date, description, category, amount} = this.state
    event.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        date,
        description,
        category,
        amount,
      })
      
    })
      .then(r => r.json())
      .then(transaction => this.props.addTransaction(transaction))
    this.setState(this.state)
  }

  render() {
    
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleInputChange}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleInputChange}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleInputChange}/>
            <input type="number" name="amount" placeholder="Amount" step="0.01" value={this.state.amount} onChange={this.handleInputChange}/>
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
