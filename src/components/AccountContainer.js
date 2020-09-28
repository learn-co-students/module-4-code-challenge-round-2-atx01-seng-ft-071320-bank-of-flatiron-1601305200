import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
  }
  
  componentDidMount() {
    this.fetchTransactions()
  }
  
  fetchTransactions(){
    fetch("http://localhost:6001/transactions")
    .then(res => res.json())
    .then(transactions => this.setState({transactions}))
  }

  transactionForm = (transaction) => {
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        "date": transaction.date,
      "description": transaction.description,
      "category": transaction.category,
      "amount": transaction.amount
      })
    })
    .then(res => res.json())
    .then(() => this.fetchTransactions())
    
  }

  transactionSearch = (search) => {
    console.log(search)
     this.fetchTransactions()
     setTimeout(() => {
       let newArray = this.state.transactions.filter(transaction => transaction.description.startsWith(search))
        this.setState({
         transactions: newArray
      })
     }, 50)
  }

  render() {
    return ( 
      <div>
        <Search transactionSearch={this.transactionSearch}/>
        <AddTransactionForm transactionForm={this.transactionForm}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
