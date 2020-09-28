import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

const URL = "http://localhost:6001/transactions";

class App extends Component {

  constructor() {
    super()
    this.state = {
      transacs: [],
      filteredBy: ''
    }
  }


  componentDidMount() {
    fetch(URL).then(res => res.json())
    .then(
      (result) => {
        this.setState({
          transacs: result
        })
      }
    )
  }


  addTransaction = (event) => {
    event.preventDefault();
    fetch(URL, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "date": event.target.date.value,
        "description": event.target.description.value,
        "category": event.target.category.value,
        "amount": event.target.amount.value
      })
    })
    .then(res => res.json())
    .then(data => this.setState({
      transacs: [...this.state.transacs, data]
    }))
    event.target.reset();
  }

  
  filterSearch = (event) => {
    this.setState({
      filteredBy: event.target.value
    })
  }


  render() {

    const filteredTransacs = this.state.transacs.filter(transac => transac.description.includes(this.state.filteredBy))

    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transacs={filteredTransacs} filterSearch={this.filterSearch} addTransaction={this.addTransaction} />
      </div>
    );
  }
}

export default App;


