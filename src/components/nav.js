import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Navigation = styled.nav`
  grid-area: 1/1/2/2;
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    &:hover {
      color: #F9A825;
      ${'' /* color: #E90A1F; */}
    }
  }
  li, ul {
    margin: 0;
    padding: 0;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  li:not(:last-child) {
    margin-right: 1rem;
  }
  @media (max-width: 760px) {
    justify-content: center;
  }
`

const NavLink = styled(Link).attrs({
  activeClassName: 'active'
})`
  text-decoration: none;
  color: #FFF;
  
  font-weight: 700;
  font-size: 14px;
  -webkit-transition: color .3s ease-in-out;
  transition: color .3s ease-in-out;
  &.${'active'} {
    color: #F9A825;
    ${'' /* color: #E90A1F; */}
  }
`

const Logo = styled.div`
  font-family: Cousine;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 22px;
  span {
    color: #F9A825;
    ${'' /* color: #E90A1F; */}
  }
`

const Nav = () => {
  return (
    <Navigation>
      <Link to="/">
        <Logo>RAFALMONETA<span>.COM</span></Logo>
      </Link>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/about">ABOUT ME</NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">PROJECTS</NavLink>
        </li>
        <li>
          <NavLink to="/blog/" activeClassName="active">BLOG</NavLink>
        </li>
      </ul>
    </Navigation>
  );
}
 
export default Nav;