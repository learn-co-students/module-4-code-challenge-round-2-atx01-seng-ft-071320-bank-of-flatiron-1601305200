import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transac.date}</td>
      <td>{props.transac.description}</td>
      <td>{props.transac.category}</td>
      <td>{props.transac.amount}</td>
      <td>
        <button onClick={() => props.handleDelete(props.transac)} >Delete</button>
      </td>
    </tr>
  );
};

export default Transaction;



