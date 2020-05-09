import React, { Component } from "react";
import "./listIItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Listitems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          ></input>
          <span>
            <FontAwesomeIcon
              className="fatrashicon"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            ></FontAwesomeIcon>
          </span>
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default Listitems;
