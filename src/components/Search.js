import React from "react";

const Search = (props) => { console.log(props)

  // handleChange = (event) => {
  //   props.transactionSearch(event.target.value)
  // }
  
  let handleChange = (event) => {
    props.transactionSearch(event.target.value)
  }
  

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={ handleChange
          }
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
