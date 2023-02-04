import React from "react";
import "./Home.css";
import mxplayer from "../../Component/Images/logo-dark.png";
import Ticket from "./Ticket";

const ticketname = [
  { date: "JUL 16", title: "DETROIT,MI", hall: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL 19", title: "TORONTO,ON", hall: "BUDWEISER STAGE" },
  { date: "JUL 22", title: "BRISTOW, VA", hall: "JIGGY LUBE LIVE" },
  { date: "JUL 29", title: "PHOENIX, AZ", hall: "AK-CHIN PAVILION" },
  { date: "AUG 2", title: "LAS VEGAS, NV", hall: "T-MOBILE ARENA" },
  { date: "AUG 7", title: "CONCORD, CA", hall: "CONCORD PAVILION" },
];

const Home = (props) => {
  const col = ticketname.map((item) => {
    return (
      <Ticket
        key={Math.random()}
        title={item.title}
        hall={item.hall}
        date={item.date}
      />
    );
  });

  return (
    <div className="row">
      <div className="col-12  mt-4">
        <div className="Home">
          <button id="btns" className="btn btn-outline-light">
            Get Our Latest Album
          </button>
          <button id="roundbtns" className="btn btn-outline-info">
            <img src={mxplayer} alt="mxplayer logo" height="55" width="55" />
          </button>
        </div>

        <div className="tours">
          <h2 id="tou">TOURS</h2>
          <ul className="list-group list-group-flush">
           {col}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
