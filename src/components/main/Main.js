import React, { useState } from "react";
import "./main.css";

import { BiArrowBack } from "react-icons/bi";
import { CgMoreAlt, CgCalendarDates } from "react-icons/cg";

import Tweet from "../tweet/Tweet";
import college from "../../Images/college.png";
import nepaliarmy from "../../Images/nepaliarmy.png";
import video from "../../Images/video.mp4";

const Main = () => {
  const [follow, setFollow] = useState(true);

  const followHandler = () => {
    if (follow === true) {
      setFollow(false);
    } else if (follow === false) {
      setFollow(true);
    }
  };

  return (
    <div id="container-main">
      <div id="box-top">
        <span id="back-icon-box">
          <BiArrowBack id="back-icon" />
        </span>

        <div id="box-top-right">
          <p id="name-header">Manoj Kumar Thapa</p>
          <span id="tweets-number">2123 Tweets</span>
        </div>
      </div>

      <div id="header-box">
        <div id="profile-image"></div>
      </div>

      <div id="edit-box">
        <span id="more-box">
          <CgMoreAlt id="more-header" />
        </span>
        <button
          className={follow === false ? "following" : "Follow"}
          onClick={followHandler}
        >
          {follow ? "Follow" : "Following"}
        </button>
      </div>

      <div id="name-id-box">
        <p id="name-user">Manoj Kumar Thapa</p>
        <p id="id-user">@manojthapaa</p>
      </div>

      <div id="job-box">
        <p id="job">React Developer</p>
      </div>

      <div id="date-box">
        <CgCalendarDates id="date-icon" />
        <p id="date">Joined April 2016</p>
      </div>

      <div id="following-follow-box">
        <span id="number-follow">800</span>
        <a href="#" id="follow-text" onClick={(e) => e.preventDefault()}>
          Following
        </a>

        <span id="number-follow" className="margin-left">
          {follow === false ? 4020 : 4019}
        </span>
        <a href="#" id="follow-text" onClick={(e) => e.preventDefault()}>
          Followers
        </a>
      </div>

      <div id="nav-header">
        <div id="box-nav" className="box-Tweets">
          <p id="nav">Tweets</p>
        </div>

        <div id="box-nav" className="box-replies">
          <p id="nav">Tweets & replies</p>
        </div>

        <div id="box-nav" className="box-Media">
          <p id="nav">Media</p>
        </div>

        <div id="box-nav" className="box-Likes">
          <p id="nav">Likes</p>
        </div>
      </div>

      <div id="line"></div>

      <Tweet
        tweet="मित्रहरूको यस्तो भेटघाट अब कहिल्यै देख्न नपाइने होला।समयले पनि यस्तो मौका अब कहिले दिने होला तर मित्र गए पनि समझना त मन मै रहने छ ❤️"
        likeNumber="62"
        retweet="22"
        comment="4"
        image={college}
      />
      <Tweet
        tweet="Congratulation @IamSandeep25 to be selected for the first time in Vivo @IPL
         2018 and playing for @DelhiDaredevils. It's very proud moment for Nepal and Nepali Cricket Team."
        likeNumber="50"
      />
      <Tweet
        tweet="आज शिबरात्री मात्र नभएर सैनिक दिवस पनि हो
        आज उनीहरू ले रात दिन खटेर देशमा शान्ति सुरक्षा कायम गर्न सफल भएका हुन र शिबरात्री को शुभ कामना छ |"
        likeNumber="252"
        retweet="64"
        comment="6"
        image={nepaliarmy}
      />
      <Tweet
        tweet="Love, faith and blessings are not visible but make the impossible possible ❤️"
        likeNumber="100"
        retweet="51"
        comment="35"
      />
      <Tweet
        tweet="पढने मान्छेलाई पढ्नेकै चासो । क्या छ जिन्दगी ।"
        likeNumber="18"
        retweet="6"
        comment="5"
        video={video}
      />
    </div>
  );
};

export default Main;
