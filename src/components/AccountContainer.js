import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const url = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchValue: '',
  }

  componentDidMount = () => {
    this.fetchTransactions()
  }

  fetchTransactions = () => {
    fetch(url)
    .then(r=>r.json())
    .then(transactions=>this.setState({ transactions }))
  }

  addTransaction = (transaction) => {
    this.setState({transactions: [...this.state.transactions, transaction]})
  }

  searchChange = (event) => {
    
    this.setState({
      searchValue: event.target.value
    })
  }



  render() {
    const searchedTransaction = this.state.transactions.filter((transaction) => transaction.description.includes(this.state.searchValue))
    return (
      <div>
        <Search searchOnChange={this.searchChange} searchValue={this.state.searchValue}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={searchedTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
