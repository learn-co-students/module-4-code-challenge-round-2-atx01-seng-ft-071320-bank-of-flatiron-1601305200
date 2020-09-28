import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    search: ''
  }
  
  
  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(data => this.setState({transactions: data}))
  }
  
  addTransaction = (transaction, event) => {
  console.log(transaction)
  fetch('http://localhost:6001/transactions', {
  method: "POST",
  headers: {'Content-type': 'application/json' },
  body: JSON.stringify(transaction)
   })
  .then(res => res.json())
  .then(data => this.setState({transactions: [...this.state.transactions, data]}))
  }

  deleteTrans = (transaction) =>{
    //not quite there on this one i know i have to set state
console.log(transaction)
  
  fetch(`http://localhost:6001/transactions/${transaction.id}`, {
  method: "DELETE",
  headers: {'Content-type': 'application/json' },
  body: JSON.stringify(transaction)
   })
   .then(res => res.json())
.then(res => console.log(res))
  }

  searchTrans = (e) =>{
console.log(e.target.value)
this.setState({
  search: e.target.value,
  transactions: this.state.transactions
})
}
 


render() {
    const transactionFilter = this.state.transactions.filter(trans => trans.description.includes(this.state.search))
    return (
      
      <div>
        <Search searchTrans={this.searchTrans}/>
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList transactions={transactionFilter} deleteTrans={this.deleteTrans}/>
      </div>
    );
  }
}

export default AccountContainer;
