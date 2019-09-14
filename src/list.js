import React from "react";

function List(props) {
  return (
    <ul>
      <li>{props.question}</li>
      <li>{props.answer}</li>
    </ul>
  );
}

export default List;