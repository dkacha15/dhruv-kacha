import * as React from "react";
import TagCloud from "react3dtagcloud";
import { TypeAnimation } from "react-type-animation";
import Animation from "../../Animation/animation";
import Sidebar from "../../Sidebar/sidebar";
import "./about.css";

const About = () => {
  setTimeout(function () {
    const elements = document.getElementsByClassName("Bounce1");
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

  const tagName = [
    "Java",
    "JavaScript",
    "C/C++",
    "C#",
    "NodeJS",
    "ReactJS",
    "Angular",
    "ExpressJS",
    "MongoDB",
    "MySQL",
    "PHP",
    "Python",
    "Java",
    "JavaScript",
    "C/C++",
    "C#",
    "NodeJS",
    "ReactJS",
    "Angular",
    "ExpressJS",
    "MongoDB",
    "MySQL",
    "PHP",
    "Python",
  ];

  return (
    <div style={{ display: "flex", backgroundColor: "#222222" }}>
      <div>
        <Sidebar />
      </div>
      <div className="container nopadding">
        <Animation>
          <div className="row nopadding">
            <div className="col-lg-6 col-md-12 col-sm-12 nopadding">
              <div style={{ marginLeft: "30px", marginTop: "10px" }}>
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
                  <div className="Bounce-box1">
                    <div className="Bounce-box1">
                      <TypeAnimation
                        sequence={[1000, "M"]}
                        wrapper="span"
                        cursor={false}
                        className="Bounce1"
                      />
                      <TypeAnimation
                        sequence={[1100, "e"]}
                        wrapper="span"
                        cursor={false}
                        className="Bounce1"
                      />
                      <TypeAnimation
                        sequence={[1200, ","]}
                        wrapper="span"
                        cursor={false}
                        className="Bounce1"
                      />
                    </div>
                    <div className="Bounce-box1">
                      <TypeAnimation
                        sequence={[1400, "M"]}
                        wrapper="span"
                        cursor={false}
                        className="Bounce1"
                      />
                      <TypeAnimation
                        sequence={[1500, "y"]}
                        wrapper="span"
                        cursor={false}
                        className="Bounce1"
                      />
                      <TypeAnimation
                        sequence={[1600, "s"]}
                        wrapper="span"
                        cursor={false}
                        className="Bounce1"
                      />
                      <TypeAnimation
                        sequence={[1700, "e"]}
                        wrapper="span"
                        cursor={false}
                        className="Bounce1"
                      />
                      <TypeAnimation
                        sequence={[1800, "l"]}
                        wrapper="span"
                        cursor={false}
                        className="Bounce1"
                      />
                      <TypeAnimation
                        sequence={[1900, "f"]}
                        wrapper="span"
                        cursor={false}
                        className="Bounce1"
                      />
                    </div>
                    <div className="Bounce-box-space1">
                      <TypeAnimation
                        sequence={[2100, "&"]}
                        wrapper="span"
                        cursor={false}
                        className="Bounce1"
                      />
                    </div>
                    <div className="Bounce-box-space1">
                      <TypeAnimation
                        sequence={[2300, "I"]}
                        wrapper="span"
                        cursor={false}
                        className="Bounce1"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tags"
                  style={{ marginTop: "20px", marginLeft: "40px" }}
                >
                  &lt;/h1&gt;
                </div>
                <div className="tags" style={{ marginLeft: "40px" }}>
                  &lt;p&gt;
                </div>
                <div className="full-stack">Description</div>
                <div className="tags" style={{ marginLeft: "40px" }}>
                  &lt;/p&gt;
                </div>
                <div
                  className="tags"
                  style={{ marginTop: "20px", marginLeft: "20px" }}
                >
                  &lt;/body&gt;
                </div>
                <div className="tags">&lt;/html&gt;</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <section
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "100vh",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "300px",
                    height: "300px",
                    justifyContent: "center",
                    pointerEvents: "none",
                  }}
                >
                  <TagCloud
                    tagName={tagName}
                    radius={200}
                    speed={0.7}
                  ></TagCloud>
                </div>
              </section>
            </div>
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default About;
