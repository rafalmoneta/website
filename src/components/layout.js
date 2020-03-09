import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import Nav from "./nav"


class Layout extends React.Component {
  render() {
    const {children} = this.props
    
    return (
      <React.Fragment>
        <GlobalStyle />
        <Wrapper>
          <ContentGrid>
            <Nav pathName=".COM"/>
            {children}
          </ContentGrid>
          <Border/>
      </Wrapper>
      </React.Fragment>

    )
  }
}


const GlobalStyle = createGlobalStyle`
  body {
    font-family: Open Sans,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
    margin: 0;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-size: 1.2em;
    font-weight: 400;
    line-height: 1.5;
  }

  html {
    background-color: #fff;
    font-size: 16px;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }
  * {
    box-sizing: border-box;
  }
`

const Wrapper = styled.div`
  background: #214169;
  background: linear-gradient(45deg,#214169,#101a26);
  min-height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
`

const ContentGrid = styled.div`
  width: 768px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 7fr 80px;
  grid-column-gap: 0;
  grid-row-gap: 10vh;
  min-height: 100%;
  margin: 3rem auto;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80%;
    grid-template-rows: 80px 7fr;
  }
`

const Border = styled.div`
  position: absolute;
  border: 2px solid #F9A825;
  width: calc(100% - 50px);
  height: calc(100% - 50px);
  top: 25px;
`

export default Layout
