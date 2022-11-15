import * as React from "react";
import { TypeAnimation } from "react-type-animation";
import Animation from "../../Animation/animation";
import Sidebar from "../../Sidebar/sidebar";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  setTimeout(function () {
    const elements = document.getElementsByClassName("Bounce");
    if (elements != null) {
      for (let i = 0; i <= elements.length; i++) {
        elements[i].addEventListener("animationend", function (e) {
          elements[i].classList.remove("animated");
        });

        elements[i].addEventListener("mouseover", function (e) {
          elements[i].classList.add("animated");
        });
      }
    }
  }, 100);

  return (
    <div style={{ display: "flex", backgroundColor: "#222222" }}>
      <div>
        <Sidebar />
      </div>
      <div className="home">
        <div className="tags">&lt;html&gt;</div>
        <div className="tags" style={{ marginLeft: "20px" }}>
          &lt;body&gt;
        </div>
        <div
          className="tags"
          style={{
            marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "-30px",
          }}
        >
          &lt;h1&gt;
        </div>
        <div style={{ marginLeft: "60px" }}>
          <div className="Bounce-box">
            {/* <span className="Bounce">H</span>
          <span className="Bounce">i</span>
          <span className="Bounce">,</span> */}
            <TypeAnimation
              sequence={[100, "H"]}
              wrapper="span"
              cursor={false}
              className="Bounce"
            />
            <TypeAnimation
              sequence={[200, "i"]}
              wrapper="span"
              cursor={false}
              className="Bounce"
            />
            <TypeAnimation
              sequence={[300, ","]}
              wrapper="span"
              cursor={false}
              className="Bounce"
            />
          </div>
          <div className="Bounce-box">
            <div className="Bounce-box">
              <TypeAnimation
                sequence={[400, "I"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[500, "'"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[600, "m"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
            </div>
            <div className="Bounce-box-space">
              <TypeAnimation
                sequence={[800, "D"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[900, "h"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[1000, "r"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[1100, "u"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[1200, "v"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[1300, ","]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
            </div>
            {/* <span className="Bounce">I</span>
          <span className="Bounce">'</span>
          <span className="Bounce">m</span>
          <span className="Bounce">&nbsp;</span>
          <span className="Bounce">D</span>
          <span className="Bounce">h</span>
          <span className="Bounce">r</span>
          <span className="Bounce">u</span>
          <span className="Bounce">v</span>
          <span className="Bounce">&nbsp;</span>
            <span className="Bounce">K</span>
            <span className="Bounce">a</span>
            <span className="Bounce">c</span>
            <span className="Bounce">h</span>
            <span className="Bounce">a</span>
          <span className="Bounce">,</span> */}
          </div>
          <div className="Bounce-box">
            <TypeAnimation
              sequence={[
                1400,
                "Frontend",
                1000,
                "Backend",
                1000,
                "Full-Stack",
                1000,
                "",
              ]}
              wrapper="span"
              cursor={false}
              className="Not-bounce"
            />
            <div className="Bounce-box">
              <TypeAnimation
                sequence={[8000, "W"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[8100, "e"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[8200, "b"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
            </div>
            <div className="Bounce-box-space">
              <TypeAnimation
                sequence={[8300, "D"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[8400, "e"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[8500, "v"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[8600, "e"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[8700, "l"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[8800, "o"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[8900, "p"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[9000, "e"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
              <TypeAnimation
                sequence={[9100, "r"]}
                wrapper="span"
                cursor={false}
                className="Bounce"
              />
            </div>
            {/* <span className="Bounce">W</span>
          <span className="Bounce">e</span>
          <span className="Bounce">b</span>
          <span className="Bounce">&nbsp;</span>
          <span className="Bounce">D</span>
          <span className="Bounce">e</span>
          <span className="Bounce">v</span>
          <span className="Bounce">e</span>
          <span className="Bounce">l</span>
          <span className="Bounce">o</span>
          <span className="Bounce">p</span>
          <span className="Bounce">e</span>
          <span className="Bounce">r</span> */}
          </div>
        </div>
        <div className="tags" style={{ marginTop: "20px", marginLeft: "40px" }}>
          &lt;/h1&gt;
        </div>
        <div className="tags" style={{ marginTop: "20px", marginLeft: "40px" }}>
          &lt;p&gt;
        </div>
        <div className="full-stack">
          Full-Stack Developer / Software Developer
        </div>
        <div className="tags" style={{ marginLeft: "40px" }}>
          &lt;/p&gt;
        </div>
        <div className="tags" style={{ marginTop: "20px", marginLeft: "20px" }}>
          &lt;/body&gt;
        </div>
        <div className="tags">&lt;/html&gt;</div>
      </div>
    </div>
  );
};

export default Home;
