import React from "react";

const Transaction = (props) => {
  const {id, date, description, category, amount} = props.transactions
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
