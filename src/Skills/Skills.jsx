import React from "react";
import "./Skills.css";
import styled from "styled-components";
import {Slide, Zoom} from "react-awesome-reveal";

const Skills = () => {
  return (
    <>
      <Container id="skills">
        <Slide direction="up">
          <h4>
            My <span className="green">skills</span>
          </h4>
          <h1>What I Know</h1>
        </Slide>

        <Cards>
          <Texts>
            <div className="skill-box">
              <Zoom>
                <span className="title">HTML</span>
              </Zoom>
              <Slide direction="left">
                <div className="skill-bar">
                  <span className="skill-per html">
                    <Zoom>
                      <span className="tooltip">95%</span>
                    </Zoom>
                  </span>
                </div>
              </Slide>
            </div>

            <div className="skill-box">
              <Zoom>
                <span className="title">CSS/Tailwind/SCSS</span>
              </Zoom>
              <Slide direction="right">
                <div className="skill-bar">
                  <span className="skill-per css">
                    <Zoom>
                      <span className="tooltip">85%</span>
                    </Zoom>
                  </span>
                </div>
              </Slide>
            </div>

            <div className="skill-box">
              <Zoom>
                <span className="title">JavaScript</span>
              </Zoom>
              <Slide direction="left">
                <div className="skill-bar">
                  <span className="skill-per javascript">
                    <Zoom>
                      <span className="tooltip">90%</span>
                    </Zoom>
                  </span>
                </div>
              </Slide>
            </div>

            <div className="skill-box">
              <Zoom>
                <span className="title">Angular</span>
              </Zoom>
              <Slide direction="right">
                <div className="skill-bar">
                  <span className="skill-per angular">
                    <Zoom>
                      <span className="tooltip">70%</span>
                    </Zoom>
                  </span>
                </div>
              </Slide>
            </div>
          </Texts>

          <Texts className="change">
            <div className="skill-box">
              <Zoom>
                <span className="title">ReactJS</span>
              </Zoom>{" "}
              <Slide direction="left">
                <div className="skill-bar">
                  <span className="skill-per reactjs">
                    <Zoom>
                      <span className="tooltip">85%</span>
                    </Zoom>{" "}
                  </span>
                </div>
              </Slide>
            </div>

            <div className="skill-box">
              <Zoom>
                <span className="title">NodeJS</span>
              </Zoom>
              <Slide direction="right">
                <div className="skill-bar">
                  <span className="skill-per nodejs">
                    <Zoom>
                      <span className="tooltip">78%</span>
                    </Zoom>
                  </span>
                </div>
              </Slide>
            </div>

            <div className="skill-box">
              <Zoom>
                <span className="title">ExpressJS</span>
              </Zoom>{" "}
              <Slide direction="left">
                <div className="skill-bar">
                  <span className="skill-per expressjs">
                    <Zoom>
                      <span className="tooltip">70%</span>
                    </Zoom>{" "}
                  </span>
                </div>
              </Slide>
            </div>

            <div className="skill-box">
              <Zoom>
                <span className="title">Mongo DB</span>
              </Zoom>{" "}
              <Slide direction="right">
                <div className="skill-bar">
                  <span className="skill-per mongodb">
                    <Zoom>
                      <span className="tooltip">80%</span>
                    </Zoom>{" "}
                  </span>
                </div>
              </Slide>
            </div>
          </Texts>
        </Cards>
      </Container>
    </>
  );
};

export default Skills;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;

const Texts = styled.div`
  span {
    font-weight: 300;
    @media (max-width: 1200px) {
      font-size: 19px;
    }
    @media (max-width: 1000px) {
      font-size: 18px;
    }
    @media (max-width: 800px) {
      font-size: 16px;
    }
    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
  flex: 1;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 5rem;
`;
