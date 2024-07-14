import React from "react";
import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";
const Feed = () => {
  return (
    <div className="feed">
      <Link to={`video/20/4521`} className="card">
        <img src={thumbnail1} alt="thumbnail1" />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </Link>

      <div className="card">
        <img src={thumbnail2} alt="thumbnail2" />
        <h2>Unleashing tech magic daily.</h2>
        <h3>TechGuru</h3>
        <p>215k views &bull; 12 days ago</p>
      </div>

      <div className="card">
        <img src={thumbnail3} alt="thumbnail3" />
        <h2>Savor the flavors, one recipe at a time.</h2>
        <h3>Cooking Delights</h3>
        <p>225k views &bull; 10 days ago</p>
      </div>

      <div className="card">
        <img src={thumbnail4} alt="thumbnail4" />
        <h2>Level up your gaming experience!</h2>
        <h3>Gaming Haven</h3>
        <p>55k views &bull; 5 days ago</p>
      </div>

      <div className="card">
        <img src={thumbnail5} alt="thumbnail5" />
        <h2>Wanderlust captured in frames</h2>
        <h3>Travel Vibes</h3>
        <p>600k views &bull; 7 days ago</p>
      </div>

      <div className="card">
        <img src={thumbnail6} alt="thumbnail6" />
        <h2>Sweat, smile, repeat</h2>
        <h3>Fitness Fusion</h3>
        <p>155k views &bull; 20 days ago</p>
      </div>

      <div className="card">
        <img src={thumbnail7} alt="thumbnail7" />
        <h2>Where paws meet hearts.</h2>
        <h3>Pet Pals</h3>
        <p>10k views &bull; 24 days ago</p>
      </div>

      <div className="card">
        <img src={thumbnail8} alt="thumbnail8" />
        <h2>Singam Movie</h2>
        <h3>A2D</h3>
        <p>3M views &bull; 1 Year ago</p>
      </div>

      <div className="card">
        <img src={thumbnail1} alt="thumbnail1" />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>

      <div className="card">
        <img src={thumbnail2} alt="thumbnail2" />
        <h2>Unleashing tech magic daily.</h2>
        <h3>TechGuru</h3>
        <p>215k views &bull; 12 days ago</p>
      </div>

      <div className="card">
        <img src={thumbnail3} alt="thumbnail3" />
        <h2>Savor the flavors, one recipe at a time.</h2>
        <h3>Cooking Delights</h3>
        <p>225k views &bull; 10 days ago</p>
      </div>

      <div className="card">
        <img src={thumbnail4} alt="thumbnail4" />
        <h2>Level up your gaming experience!</h2>
        <h3>Gaming Haven</h3>
        <p>55k views &bull; 5 days ago</p>
      </div>

      <div className="card">
        <img src={thumbnail5} alt="thumbnail5" />
        <h2>Wanderlust captured in frames</h2>
        <h3>Travel Vibes</h3>
        <p>600k views &bull; 7 days ago</p>
      </div>

      <div className="card">
        <img src={thumbnail6} alt="thumbnail6" />
        <h2>Sweat, smile, repeat</h2>
        <h3>Fitness Fusion</h3>
        <p>155k views &bull; 20 days ago</p>
      </div>

      <div className="card">
        <img src={thumbnail7} alt="thumbnail7" />
        <h2>Where paws meet hearts.</h2>
        <h3>Pet Pals</h3>
        <p>10k views &bull; 24 days ago</p>
      </div>

      <div className="card">
        <img src={thumbnail8} alt="thumbnail8" />
        <h2>Singam Movie</h2>
        <h3>A2D</h3>
        <p>3M views &bull; 1 Year ago</p>
      </div>
    </div>
  );
};

export default Feed;
