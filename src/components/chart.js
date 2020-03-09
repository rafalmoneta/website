import React from 'react';
import styled from 'styled-components';

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  @media (max-width: 900px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`

const Char = styled.div`
  display: flex;
  flex-direction: column;
`

const CharLabel = styled.div`
  display: flex;
  justify-content: space-between;
`

const CharPlot = styled.div`
  position: relative;
  padding: 2px 9px 2px 9px;
  border-radius: 10px;
  background-color: #d6d1ce;
  span {
    display: block;
    background-color: #F9A825;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 10px;
  }
`

const Chart = () => {
  return (
    <ChartsContainer>
      <h1>About me</h1>
      <Char>
        <CharLabel>
          <p>Curiosity of new things</p>
          <p>90%</p>
        </CharLabel>
        <CharPlot>
          <span style={{width: '90%'}}></span>
        </CharPlot>
      </Char>

      <Char>
        <CharLabel>
          <p>Overthinking and analyzing</p>
          <p>60%</p>
        </CharLabel>
        <CharPlot>
          <span style={{width: '60%'}}></span>
        </CharPlot>
      </Char>

      <Char>
        <CharLabel>
          <p>Nerdiness</p>
          <p>80%</p>
        </CharLabel>
        <CharPlot>
          <span style={{width: '80%'}}></span>
        </CharPlot>
      </Char>

      <Char>
        <CharLabel>
          <p>Another carefully selected metric</p>
          <p>97%</p>
        </CharLabel>
        <CharPlot>
          <span style={{width: '97%'}}></span>
        </CharPlot>
      </Char>
    </ChartsContainer>
  );
}
 
export default Chart;