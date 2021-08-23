import React from "react";
import "./ActivityList.css";
import Activity from "./Activity.js";

function ActivityList({activities}) {
  if(!activities) return null;
  const list = activities.map((activity, index)=>{
    return (<Activity key={index} activity={activity} />);
  });
  return (
      <ul>
        {list}
      </ul>
        
  );
}

export default ActivityList;
