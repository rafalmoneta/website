import React from "react"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import profileImage from "../assets/images/profile-pic.jpg";
import Next from "../assets/svg/next.svg";
import Instagram from "../assets/svg/ig.svg";
import Github from "../assets/svg/github.svg";
import Twitter from "../assets/svg/twitter.svg";
// import Linkedin from "../assets/svg/linkedin.svg";
import { Link } from "gatsby";

const fadeSimple = keyframes`
  from {
    opacity: 0;
    transform: translateX(2em)
  }

  to {
    opacity: 1;
    transform: translateX(0em);
  }
`;

const top = keyframes`
  from {
    opacity: 0;
    transform: translateY(-4em);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const bottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(4em);
  }
  50% {
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const HomeContent = styled.main`
  grid-area: 2/1/3/2;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: baseline;
  }
`

const ContentLeft = styled.div`
  flex: 1 1;
  @media (max-width: 768px) {
    order: 2;
    margin-top: -40px;
    z-index: 1;
  }
`
const ContentRight = styled.div`
  flex: 0.5 1;
  height: 100%;
  background-image: url(${profileImage});
  background-size: cover;
  background-position: 50%;
  border: 5px solid #fff;
  max-height: 300px;
  min-height: 260px;
  opacity: 0;
  -webkit-animation: ${fadeSimple} .3s ease-in-out 1.5s forwards;
  animation: ${fadeSimple} .3s ease-in-out 1.5s forwards;
  @media (max-width: 768px) {
    order: 1;
    min-height: 0;
    border: none;
    opacity: 0;
    width: 100%;
    -webkit-animation: ${fadeSimple} .3s ease-in-out 0.5s forwards;
    animation: ${fadeSimple} .3s ease-in-out 0.5s forwards; 
    background-image: 
      linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${profileImage})
  }
`
const HelloText = styled.div`
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 1rem;
  font-weight: lighter;
  strong {
    font-weight: 700;
  }
  p {
    margin: 0;
  }
  div > div {
    animation: ${top} 800ms ease 0s forwards;
    position: relative;
    top: 0px;
    opacity: 0;
  }
`

const AboutText = styled.div`
  position: relative;
  animation: ${bottom} 1600ms ease 0s forwards;
  div {
    color: #74879f;
    max-width: 80%;
    p {
      font-size: 14px;
      em {
        color: #FFF;
      }
    }
  }
`

const ReadMore = styled(Link)`
  position: relative;
  color: #FFF;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 1rem;
  animation: ${bottom} 1600ms ease 0s forwards;
  svg {
    width: 12px;
    margin-left: 5px;
  }
  &:hover {
    border-bottom:2px solid #F9A825;
  }
`

const Colored = styled.span`
  color: #F9A825;
  font-weight: 700;
`

const White = styled.span`
  color: #FFF;
`

const SocialMedia = styled.div`
  margin-top: 1rem;
  animation: ${bottom} 1600ms ease 0s forwards;
  a:hover svg {
    fill: #F9A825;
  }
  svg {
    width: 20px;
    fill: #75869d;
  }
  a:not(:first-child) {
    svg {
      margin-left: 1rem;
    }
  }
`

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <HomeContent>
          <ContentLeft>
            <HelloText>
              <div>
                <div ><p>I'M</p></div>
                <div ><p><strong>RAFAŁ</strong></p></div>
                <div ><p><strong>MONETA</strong></p></div>
              </div>
            </HelloText>
            <AboutText>
              <div>
                <p><Colored>Nerd</Colored>, <White>web developer</White>, and <White>science fiction fan</White>. Wants to solve real problems using code and build useful applications!</p>
              </div>
            </AboutText>
            <ReadMore to="/about">Read More <Next/></ReadMore>
            <SocialMedia>
              <a href="https://github.com/rafalmoneta"><Github/></a>
              <a href="https://twitter.com/rafalmoneta5"><Twitter/></a>
              {/* <a href="https://www.linkedin.com/in/rafalmoneta/"><Linkedin/></a> */}
              <a href="https://www.instagram.com/monetka8/"><Instagram/></a>
            </SocialMedia>
          </ContentLeft>
          <ContentRight/>
        </HomeContent>
      </Layout>
    )
  }
}

export default IndexPage
