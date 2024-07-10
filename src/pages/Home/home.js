import { useState } from "react";
import React, { useEffect, useRef } from "react";
import { ReactComponent as QuoteRight } from "./../../assets/images/quote-right.svg";
import { ReactComponent as QuoteLeft } from "./../../assets/images/quote-left.svg";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import dashboard from "./../../assets/images/dashboard.gif";
import "./home.scss";
import { ReactComponent as ReactImg } from "./../../assets/images/react.svg";
import { ReactComponent as NodeImg } from "./../../assets/images/node.svg";
import { ReactComponent as JavascriptImg } from "./../../assets/images/javascript.svg";
import FlaskIcon from "../Header/FlaskIcon";
import CIcon from "../Header/CIcon";
import CpIcon from "../Header/CpIcon";
import PythonIcon from "../Header/PythonIcon";
import FirebaseIcon from "../Header/FirebaseIcon";
import GithubIcon from "../Header/GithubIcon";
import MySqlIcon from "../Header/MySqlIcon";
import LinuxIcon from "../Header/LinuxIcon";
import GitIcon from "../Header/GitIcon";
import VscodeIcon from "../Header/VscodeIcon";
import MongoIcon from "../Header/MongoIcon";
import TailwindIcon from "../Header/TailwindIcon";
import Img4 from "./terminal.jpg";
import Img1 from "./img-og-pubg.jpg";
import Img3 from "./resolve.jpeg";
import Img2 from "./network1.jpg";
import Img9 from "./my.png";

const Data = [
  {
    id: 0,
    img: "https://ik.imagekit.io/onyedika/phoneapp_oXM1Z9FA_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667104369642",
  },
  {
    id: 1,
    img: "https://ik.imagekit.io/onyedika/slide/pipar-beta?ik-sdk-version=javascript-1.4.3&updatedAt=1664831519274",
  },
  {
    id: 2,
    img: "https://ik.imagekit.io/onyedika/slide/pipar_peinACEKO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256618",
  },
  {
    id: 3,
    img: "https://ik.imagekit.io/onyedika/slide/calender_S6GI-SE7_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256123",
  },
  {
    id: 4,
    img: "https://ik.imagekit.io/onyedika/slide/movie_Si8QWOouP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256396",
  },
  {
    id: 5,
    img: "https://ik.imagekit.io/onyedika/slide/natour_QGZwpr7Ta.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256510",
  },
  {
    id: 6,
    img: "https://ik.imagekit.io/onyedika/slide/ncehr_GV14iEwWG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256179",
  },
  {
    id: 7,
    img: "https://ik.imagekit.io/onyedika/slide/guvve_sUg2If5kc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256276",
  },
  {
    id: 8,
    img: "https://ik.imagekit.io/onyedika/slide/web3-forum_2lXPIycqd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256840",
  },
];

function Home() {
  const navigate = useNavigate();
  const Illus = useRef();
  const i = gsap.utils.selector(Illus);
  const tlm = useRef();
  const dlm = useRef();

  useEffect(() => {
    tlm.current = gsap
      .timeline()
      .fromTo(
        i(".b-one"),
        { fill: "#1E2128", opacity: 0, scale: 0.7 },
        {
          fill: "#FF605C",
          opacity: 1,
          scale: 1.3,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".b-two"),
        { fill: "#1E2128", opacity: 0, scale: 0.7 },
        {
          fill: "#FFBD44",
          opacity: 1,
          scale: 1.3,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".b-three"),
        { fill: "#1E2128", opacity: 0, scale: 0.7 },
        {
          fill: "#00CA4E",
          opacity: 1,
          scale: 1.3,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-one"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-two"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-three"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-four"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-five"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-six"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-seven"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-eight"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-nine"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      );
  });

  const [background, setBackground] = useState("");

  const image = Data.filter((data) => data.id === background).map(
    (filteredData) => filteredData.img
  );

  const nav = () => {
    return navigate("/work"), window.location.reload();
  };

  const Styles = {
    backgroundImage: `url(${Img9})`,
  };

  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <div className="home">
      <div className="home-intro hidden">
        <div className="content">
          <div className="content-tertiary">
            <p>
              <span>✌🏻</span> Hi there! I'm Kevin Thakkar. . . .
            </p>
          </div>
          <div className="content-primary">
            <h1>
              a <span>Passionate Programmer</span>. Proficient in{" "}
              <span>Programming</span> and <span>developing</span> new{" "}
              <span>Technical</span> Skills.
            </h1>
          </div>
          <div className="content-secondary">
            <p>
              I am a B-Tech 3rd year student pursuing Computer Science and
              Engineering from IIIT - Hyderabad.
            </p>
          </div>
        </div>

        <div className="hero-icon">
          <img src={dashboard} alt="home" />
        </div>
      </div>
      <div className="tooling hidden">
        <div className="tooling-title">
          <h2>Tools I Have Used</h2>
        </div>
        <div className="tooling-box">
          <div className="box-content">
            <div className="box-icon">
              <ReactImg className="icon" />
            </div>
            <div className="box-text">
              <p>React</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <NodeImg className="icon" />
            </div>
            <div className="box-text">
              <p>Node</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <CIcon className="icon" />
            </div>
            <div className="box-text">
              <p>C</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <CpIcon className="icon" />
            </div>
            <div className="box-text">
              <p>C + +</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <PythonIcon className="icon" />
            </div>
            <div className="box-text">
              <p>Python</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <JavascriptImg className="icon" />
            </div>
            <div className="box-text">
              <p>Javascript</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <MySqlIcon className="icon" />
            </div>
            <div className="box-text">
              <p>MySQL</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <LinuxIcon className="icon" />
            </div>
            <div className="box-text">
              <p>Linux</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <GitIcon className="icon" />
            </div>
            <div className="box-text">
              <p>Git</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <GithubIcon className="icon" />
            </div>
            <div className="box-text">
              <p>Github</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <TailwindIcon className="icon" />
            </div>
            <div className="box-text">
              <p>Tailwind</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <FirebaseIcon className="icon" />
            </div>
            <div className="box-text">
              <p>Firebase</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <MongoIcon className="icon" />
            </div>
            <div className="box-text">
              <p>MongoDB</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <VscodeIcon className="icon" />
            </div>
            <div className="box-text">
              <p>VsCode</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <FlaskIcon className="icon" />
            </div>
            <div className="box-text">
              <p>Flask</p>
            </div>
          </div>
        </div>
      </div>
      <div className="showroom-section">
        <div className="showroom-title">
          <h2>Showroom</h2>
        </div>
        <div className="showroom">
          <div className="showroom-background" style={Styles}>
            <div className="image-collage">
              <img src={Img1} alt="project 1" className="collage-img img1" />
              <img src={Img2} alt="project 2" className="collage-img img2" />
              <img src={Img3} alt="project 3" className="collage-img img3" />
              <img src={Img4} alt="project 4" className="collage-img img4" />
            </div>
          </div>
        </div>
        <div class="button-wrap">
          <button class="butt" onClick={nav}>
            All Project details
          </button>
        </div>
      </div>
      {/* <div className="featured hidden">
        <div className="featured-title">
          <h2>Featured</h2>
        </div>
        <div className="featured-box">
          <div className="article">
            <div className="top">
              <p>
                Publisher: <span>Hackernoon</span>
              </p>
            </div>
            <div className="bottom">
              <h4>
                An Intro to Algorithms and Data Structures (Javascript Edition)
              </h4>
              <div className="info">
                <p>Sept 15, 2022</p>
                <a
                  href="https://hackernoon.com/an-intro-to-algorithms-and-data-structures-javascript-edition"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="35"
                    height="24"
                    viewBox="0 0 45 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.4481 13.7591L31.2866 0.548391C30.9325 0.208882 30.4595 0.0214931 29.969 0.0263367C29.4784 0.0311803 29.0092 0.227871 28.6619 0.574307C28.3145 0.920742 28.1166 1.38939 28.1105 1.87994C28.1043 2.37048 28.2904 2.84394 28.629 3.19897L38.5212 13.1263H1.8772C1.62149 13.1106 1.36528 13.1475 1.12434 13.2346C0.883402 13.3216 0.662838 13.4571 0.476227 13.6326C0.289616 13.8081 0.140908 14.02 0.0392584 14.2552C-0.062391 14.4903 -0.11483 14.7438 -0.11483 15C-0.11483 15.2562 -0.062391 15.5097 0.0392584 15.7448C0.140908 15.98 0.289616 16.1918 0.476227 16.3674C0.662838 16.5429 0.883402 16.6784 1.12434 16.7654C1.36528 16.8525 1.62149 16.8894 1.8772 16.8737H38.6689L28.636 26.794C28.4452 26.9637 28.2909 27.1705 28.1828 27.4018C28.0746 27.6332 28.0147 27.8841 28.0069 28.1394C27.9991 28.3947 28.0434 28.6488 28.1372 28.8864C28.231 29.1239 28.3722 29.3398 28.5523 29.5209C28.7324 29.7019 28.9476 29.8443 29.1846 29.9394C29.4216 30.0344 29.6756 30.0801 29.9309 30.0736C30.1862 30.0671 30.4375 30.0086 30.6694 29.9017C30.9013 29.7947 31.1089 29.6416 31.2796 29.4516L44.4411 16.4167C44.6158 16.2423 44.7544 16.0352 44.849 15.8072C44.9436 15.5792 44.9923 15.3347 44.9923 15.0879C44.9923 14.841 44.9436 14.5966 44.849 14.3686C44.7544 14.1406 44.6158 13.9334 44.4411 13.7591H44.4481Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="quote hidden">
        <div className="quote-body">
          <QuoteLeft className="left" />
          <div className="quote-body-content">
            <p>
              The only way to do great work is to love what you do{" "}
              <span>!</span>
            </p>
          </div>
          <QuoteRight className="right" />
        </div>
      </div>
    </div>
  );
}

export default Home;
