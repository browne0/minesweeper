import React from "react";
import Cell from "../Cell";

const Row = props => {
  let cells = props.cells.map((data, index) => (
    <Cell data={data} open={props.open} flag={props.flag} key={index} />
  ));
  return <div className="row">{cells}</div>;
};

export default Row;
