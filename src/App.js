import React from "react";
import qa from "./qa";
import List from "./list";

class Accordion extends React.Component {
  render() {
    return (
      <div>
        {qa.map(function(e, i) {
          return <List question={e.question} answer={e.answer} key={i} />;
        })}
      </div>
    );
  }
}

export default Accordion;