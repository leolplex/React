import React from "react";

function Gravatar(props) {
  return (
    <img className={props.className} src={props.avatarUrl} alt="Avatar"></img>
  );
}

export default Gravatar;
