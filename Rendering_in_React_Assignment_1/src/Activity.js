import React from "react";
import "./Activity.css";

function Activity({key, activity}) {
  const {time, description} = activity;
  return (<li key={key}>{`${time} ${description}`}</li>);
}

export default Activity;
