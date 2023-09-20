import React from "react";
import {Slide} from "react-awesome-reveal";
import styled from "styled-components";

const About = () => {
  return (
    <Container id="about">
      <Slide direction="left">
        <Profile>
          {/* https://i.ibb.co/TgmJgnv/Whats-App-Image-2023-08-05-at-16-23-55.jpg */}
          {/* https://i.ibb.co/5vpr6KB/Whats-App-Image-2023-08-05-at-16-23-56.jpg */}
          {/* bg removed better one  : https://o.remove.bg/downloads/2fe8dedd-d415-43ca-8b48-c08a18e7511f/Whats-App-Image-2023-08-05-at-16-23-55-removebg-preview.png */}
          {/* bg removed :https://o.remove.bg/downloads/a85701c5-af57-4180-8df8-16f4cd5338f9/Whats-App-Image-2023-08-05-at-16-23-56-removebg-preview.png */}
          <img
            src=" https://o.remove.bg/downloads/2fe8dedd-d415-43ca-8b48-c08a18e7511f/Whats-App-Image-2023-08-05-at-16-23-55-removebg-preview.png"
          />
        </Profile>
      </Slide>
      <Slide direction="right">
        <Texts>
          <h1>
            About <span className="green hmm">Me</span>
          </h1>
          <p>
            Committed and goal-oriented Web Developer who has the ability to
            learn things quickly and able to work in a fast-pace and team-driven
            environment.
          </p>
          <h3>Name: <span>Roshan B Nair</span></h3>
          <h3>Date of Birth: <span>20/01/1996</span></h3>
          <h3>Address: <span >Vaikom, Kottayam, Kerala, India</span></h3>
          <h3>Pin Code: <span >682307</span></h3>
          <h3>Email: <span >roshanbn20@gmail.com</span></h3>
          <h3>Phone: <span>9847767171</span></h3>

        </Texts>
      </Slide>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Texts = styled.div`
span{
  font-weight:300;
  @media (max-width: 1200px) {
    margin-left:0px;
    font-size: 19px;
  }
  @media (max-width: 1000px) {
    margin-left:0px;
    font-size: 18px;
  }
  @media (max-width: 800px) {
    margin-left:0px;
    font-size:16px;
  }
  @media (max-width: 600px) {
    font-size:14px;
    margin-left:0px;
  }
  @media (max-width: 362px) {
    font-size:14px;
    margin-left:0px;
  }
}
  flex: 1;
  h2{
    margin-bottom:20px;
    letter-spacing: 2px;
  }
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 3.2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
    margin-bottom:25px;
    margin-top:30px;
    @media (max-width: 1200px) {
      margin-top:0px;
      margin-bottom:0px;
      font-size: 3rem;
    }
    @media (max-width: 1000px) {
      font-size: 2.7rem;
    }
    @media (max-width: 800px) {
      font-size:2.2rem;
    }
    @media (max-width: 600px) {
      font-size:1.8rem;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    @media (max-width: 1200px) {
      font-size: 19px;
    }
    @media (max-width: 1000px) {
      font-size: 18px;
    }
    @media (max-width: 800px) {
      font-size:16px;
    }
    @media (max-width: 600px) {
      font-size:14px;
    }
  }
  p {
    margin-bottom:40px;
    font-weight: 300;
    font-size:20px;
    @media (max-width: 1200px) {
      margin-bottom:20px;
      font-size: 19px;
    }
    @media (max-width: 1000px) {
      font-size: 18px;
    }
    @media (max-width: 800px) {
      font-size:16px;
    }
    @media (max-width: 600px) {
      font-size:14px;
    }
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    margin-right: 10px;
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
  .hmm{
    font-size: 3.2rem;
    font-weight:700;
    @media (max-width: 1200px) {
      font-size: 3rem;
    }
    @media (max-width: 1000px) {
      font-size: 2.7rem;
    }
    @media (max-width: 800px) {
      font-size:2.2rem;
    }
    @media (max-width: 600px) {
      font-size:1.8rem;
    }
  }
`;
const Profile = styled.div`
  img {
    width: 30rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    border-radius:200px;
    @media (max-width: 1200px) {
      width: 25rem;
    }
    @media (max-width: 1000px) {
      width: 22rem;
    }
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
