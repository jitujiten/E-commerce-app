import React from "react";
import "./Ticket.css"
const Ticket=(props)=>{
  return <li 
  id="lis"
  className="list-group-item">
 <span id="dat">{props.date}</span>
 <span className="font">{props.title}</span>
 <span className="font">{props.hall}</span>
 <button className="but">Buy Tickets</button>
  </li>
}

export default Ticket;