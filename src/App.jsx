import styled from "styled-components";
import {Info} from './components/Info';
import {About} from './components/About';
import {Interests} from './components/Interests';
import {Footer} from './components/Footer';


function App() {

  return (
    <Container>
      <Body_card>
        <Info />
        <About />
        <Interests />
        <Footer />
      </Body_card>
    </Container>
  )
}

const Container = styled.div`
  background-color: #faf9f9;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body_card = styled.div`
  background-color: #fff;
  height: auto;
  width: 300px;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  text-align: center;
  background-color: #282c34;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
  
`;

export default App
