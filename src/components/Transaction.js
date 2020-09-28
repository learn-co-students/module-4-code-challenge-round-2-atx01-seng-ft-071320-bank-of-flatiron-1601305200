import React from "react";

const Transaction = (props) => {
  const {id, date, description, category, amount} = props.transaction
  return (
    <tr onClick={() => props.deleteTrans(props.transaction)}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
