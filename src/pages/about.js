import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import Chart from '../components/chart';


const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

const AboutMe = styled.div`
  flex: 1;
  padding-left: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 0;
    h1 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`

const AboutPage = () => {
  return (
    <Layout>
      <AboutContainer>
        <Chart />
        <AboutMe>
          <h1>Who am I</h1>
          <p>
          I'm a guy who I always dreamed of making stuff from scratch, that in some way, would change someone's life. That's why I started learning to code.
          When not working or futzing around with code, I study how to escape from University.
          </p>
          <p>Now I am working on my five-year plan. Just need to choose a font.</p>
        </AboutMe>

      </AboutContainer>
    </Layout>
  );
}
 
export default AboutPage;