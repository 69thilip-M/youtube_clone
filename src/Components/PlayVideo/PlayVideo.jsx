import React from "react";
import "./PlayVideo.css";
import Video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={Video1} controls autoPlay mute></video>
      <h3>Unleashing travel magic daily</h3>
      <div className="play-video-info">
        <p>1.5M views &bull; 12 days ago</p>
        <div>
          <span>
            <img src={like} alt="like" />
            111k
          </span>
          <span>
            <img src={dislike} alt="dislike" />
            1k
          </span>
          <span>
            <img src={share} alt="share" />
            Share
          </span>
          <span>
            <img src={save} alt="save" />
            Save
          </span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={jack} alt="jack" />
        <div>
          <p>Travel Vibes</p>
          <span>1.5M subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>Channel That's For World Travelling</p>
        <p>Subscribe Travel Vibes To Explore the World</p>
        <hr />
        <h4>2.9k Comments</h4>

        <div className="comment">
          <img src={user_profile} alt="user_profile" />
          <div>
            <h3>
              Angle White <span>1 day ago</span>
            </h3>
            <p>
              you are amazing i remember when you used to make small projects
              videos now your making clones for big apps this 10x more amazing
              keep posting we want series for big apps like this long videos
            </p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>244</span>

              <img src={dislike} alt="dislike" />

              <span>12</span>
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="user_profile" />
          <div>
            <h3>
              Angle White <span>1 day ago</span>
            </h3>
            <p>
              you are amazing i remember when you used to make small projects
              videos now your making clones for big apps this 10x more amazing
              keep posting we want series for big apps like this long videos
            </p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>244</span>

              <img src={dislike} alt="dislike" />
              <span>12</span>
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="user_profile" />
          <div>
            <h3>
              Angle White <span>1 day ago</span>
            </h3>
            <p>
              you are amazing i remember when you used to make small projects
              videos now your making clones for big apps this 10x more amazing
              keep posting we want series for big apps like this long videos
            </p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>244</span>

              <img src={dislike} alt="dislike" />

              <span>12</span>
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="user_profile" />
          <div>
            <h3>
              Angle White <span>1 day ago</span>
            </h3>
            <p>
              you are amazing i remember when you used to make small projects
              videos now your making clones for big apps this 10x more amazing
              keep posting we want series for big apps like this long videos
            </p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>244</span>

              <img src={dislike} alt="dislike" />
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
