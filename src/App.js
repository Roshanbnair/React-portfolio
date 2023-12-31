import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
// import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
import About from "./components/About/About";
import Skills from "./Skills/Skills";


function App() {
  return (
    <Container>
        <Header />
      <Banner>
        <ProfComponent />
      </Banner>

      <About />

      <LightColor>
        <Services />
      </LightColor>

      <Skills />

      <LightColor>
        <Projects />
      </LightColor>

      {/* <Clients /> */}
      
      <Footer />


    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
