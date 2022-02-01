import React, { useState } from "react";

import { CgMoreAlt } from "react-icons/cg";
import { SiGoogleanalytics } from "react-icons/si";
import { FiShare } from "react-icons/fi";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import manoj from "../../Images/manoj.png";

const Tweet = (props) => {
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    if (like === false) {
      setLike(true);
    } else if (like === true) {
      setLike(false);
    }
  };

  return (
    <div id="tweet-box">
      <div id="profile-tweet">
        <img src={manoj} alt="profile" id="image-profile" />
      </div>

      <div id="box-tweet">
        <div id="name-id">
          <span id="flex-tweet">
            <p id="tweet-name">Manoj Kumar Thapa</p>
            <p id="tweet-id">@manojthapaa . </p>
            <p id="tweet-date">Mar 19, 2017</p>
          </span>

          <span id="span-more">
            <CgMoreAlt />
          </span>
        </div>

        <div id="post-box">
          <p id="text-tweet" style={{ textAlign: "left" }}>
            {props.tweet}
            {props.image && (
              <img
                src={props.image}
                style={{ borderRadius: "20px", width: "98%" }}
                alt="College Friend"
              />
            )}
            {props.video && (
              <video controls autoPlay style={{ borderRadius: "20px", width: "98%" }}>
                <source src={props.video} type="video/mp4"></source>
              </video>
            )}
          </p>
        </div>

        <div id="nav-bottom-post">
          <div id="box-comment-number">
            <span className="comment" id="nav-icon-box">
              <FaRegComment />
            </span>
            <p id="comment-tweet"> {props.comment} </p>
          </div>
          <div id="box-like-number">
            <span className="retweet" id="nav-icon-box">
              <AiOutlineRetweet />
            </span>
            <span id="like-number">{props.retweet}</span>
          </div>
          <div id="box-like-number">
            <span onClick={likeHandler} className="like" id="nav-icon-box">
              {like === true ? (
                <AiFillHeart id="red-heart" />
              ) : (
                <AiOutlineHeart />
              )}
            </span>
            <span id="like-number">
              {like === true
                ? parseInt(props.likeNumber) + 1
                : props.likeNumber}
            </span>
          </div>
          <span className="share" id="nav-icon-box">
            <FiShare />
          </span>
          <span className="analytic" id="nav-icon-box">
            <SiGoogleanalytics />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
