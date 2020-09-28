import React from "react";

const Transaction = (props) => { 
  return (
    <tr>
      <td>{props.transactions.date}</td>
      <td>{props.transactions.description}</td>
      <td>{props.transactions.category}</td>
      <td>{props.transactions.amount}</td>
    </tr>
  );
};

export default Transaction;
