import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const url = 'http://localhost:6001/transactions';

class AccountContainer extends Component { 

  state = {
    transactions:[],
    filterT: [],
    searchValue: '',
  };

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then((data) => this.setState({
        filterT:data,
        transactions :data,
      })
    )}

  addNewTrans=()=>{
    fetch(url)
      .then(res => res.json())
      .then((data) => this.setState({
        filterT:data,
        transactions :data,
      })
    )}

  filterTrans=(e)=>{
    console.log("Searching...",e)
    let filteredT = this.state.filterT.filter((t) => t.description.slice (0,e.length)=== e)
      console.log(filteredT);
  }

  render() {
    console.log("filtertT",this.state.filterT,"transaction",this.state.transactions)
    return(
      <div>
        <Search 
          searchValue={this.state.searchValue}
          filterTrans={this.filterTrans}
          filterT ={this.state.filterT}
        />
        <AddTransactionForm addNewTrans={this.addNewTrans}/>
        <TransactionsList 
        transactions ={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
