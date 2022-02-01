import React from "react";
import "./right.css";
import Account from "../account/Account";

import { RiSearchLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Trends from "../trends/Trends";

const Right = () => {
  return (
    <div id="container-right">
      <div id="fixed-search">
        <div id="search-box">
          <input placeholder=" Search Twitter" id="serch-input" type="text" />
          <RiSearchLine id="search-icon" />
        </div>
      </div>

      <div id="image-post-box">
        <div id="box-left-post"></div>
        <div id="box-right">
          <div id="box-up"></div>
          <div id="box-down"></div>
        </div>
      </div>

      <div id="might-like-box">
        <h2 id="title-might">You might like</h2>
        <Account
          verified={false}
          name="Manish Thapa"
          id="@Iammanish041"
          src="https://pbs.twimg.com/profile_images/1240680400931840001/vAhIH_3h_400x400.jpg"
        />
        <Account
          verified={true}
          name="JavaScript"
          id="@JavaScript"
          src="https://usefulangle.com/img/thumb/javascript.png"
        />
        <Account
          verified={true}
          name="GitHub"
          id="@github"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />
        <Account
          verified={true}
          name="React"
          id="@reactjs"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4lrqANPnXmusNdulIrE2Vg1VPQHHpOmqo6lFMzRn0k7iH3JzFSIXaOG2h78uIUEB8uQ&usqp=CAU"
        />

        <div id="show-more-box">
          <button id="show-more-btn">Show more</button>
        </div>
      </div>

      <div id="trends-container">
        <div id="header-trends">
          <p id="trends-text">Trends</p>
          <span id="box-setting-icon">
            <IoSettingsOutline id="setting-icon" />
          </span>
        </div>

        <Trends name="ReactJs" number="53.2K" />
        <Trends name="Javascript" number="28.5K" />
        <Trends name="GitHub" number="15.3K" />
        <Trends name="Google" number="20.8K" />

        <div id="show-more-box">
          <button id="show-more-btn">Show more</button>
        </div>
      </div>

      <footer id="footer">
        <div id="footer-top">
          <a id="trems" href="#" onClick={(e) => e.preventDefault()}>
            Terms of Service
          </a>
          <a id="privacy" href="#" onClick={(e) => e.preventDefault()}>
            Privacy Policy
          </a>

          <a id="cookie" href="#" onClick={(e) => e.preventDefault()}>
            Cookie Policy
          </a>
        </div>

        <div id="footer-down">
          <a id="trems" href="#" onClick={(e) => e.preventDefault()}>
            Imprint
          </a>
          <a id="privacy" href="#" onClick={(e) => e.preventDefault()}>
            Ads info
          </a>

          <a id="cookie" href="#" onClick={(e) => e.preventDefault()}>
            More...
          </a>

          <a id="cookie" href="#" onClick={(e) => e.preventDefault()}>
            © 2022 Twitter, Inc.
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Right;
