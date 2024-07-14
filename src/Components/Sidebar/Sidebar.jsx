import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-links">
          <img src={home} alt="home" />
          <p>Home</p>
        </div>

        <div className="side-links">
          <img src={game_icon} alt="game_icon" />
          <p>Gamming</p>
        </div>

        <div className="side-links">
          <img src={automobiles} alt="automobiles" />
          <p>Auto Mobiles</p>
        </div>

        <div className="side-links">
          <img src={sports} alt="sports" />
          <p>Sports</p>
        </div>

        <div className="side-links">
          <img src={entertainment} alt="entertainment" />
          <p>Entertainment</p>
        </div>

        <div className="side-links">
          <img src={tech} alt="tech" />
          <p>Technology</p>
        </div>

        <div className="side-links">
          <img src={music} alt="music" />
          <p>Music</p>
        </div>

        <div className="side-links">
          <img src={blogs} alt="blogs" />
          <p>Blogs</p>
        </div>

        <div className="side-links">
          <img src={news} alt="news" />
          <p>News</p>
        </div>

        <hr />
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-links">
          <img src={jack} alt="jack" /> <p>TK Designs</p>
        </div>

        <div className="side-links">
          <img src={simon} alt="simon" /> <p>MrBeast</p>
        </div>

        <div className="side-links">
          <img src={tom} alt="tom" /> <p>Justin Bieber</p>
        </div>

        <div className="side-links">
          <img src={megan} alt="megan" /> <p>5-Minutes Crafts</p>
        </div>
        <div className="side-links">
          <img src={cameron} alt="cameron" /> <p>Minutes Mystery</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
