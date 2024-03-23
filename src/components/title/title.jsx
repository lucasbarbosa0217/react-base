import React from 'react';
import "./title.css"

function Title(props) {
  return <h1 className="titlecomponent">{props.children}</h1>;
}

export default Title;
