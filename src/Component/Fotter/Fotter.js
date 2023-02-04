import React from "react";
import "./Fotter.css";
import youtube from "../../Component/Images/youtube-logo-red-hd-13.png";
import spotify from "../../Component/Images/logo-music-player-spotify-brand-10.png";
import facebook from "../../Component/Images/facebook-icon-vectors-3.jpg";

const Fotter = (props) => {
  return (
    <div className="row">
      <div className="col-12  mt-5">
        <div className="fotter">
          <p id="head">The Generics</p>
          <footer className="footer">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="anker"
                src={youtube}
                alt="YouTube logo"
                height="100"
                width="150"
              />
            </a>
            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="anker"
                src={spotify}
                alt="Spotify logo"
                height="45"
                width="50"
              />
            </a>
            <a
              id="face"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="anker"
                src={facebook}
                alt="Facebook logo"
                height="45"
                width="45"
              />
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
