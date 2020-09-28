import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search handleChange={this.props.filterSearch} />
        <AddTransactionForm handleSubmit={this.props.addTransaction} />
        <TransactionsList transacs={this.props.transacs} />
      </div>
    );
  }
}

export default AccountContainer;



