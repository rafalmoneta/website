import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import Folder from '../assets/svg/folder.svg';
import Github from "../assets/svg/github.svg";
import Go from "../assets/svg/go-icon.svg";


const ProjectsContainer = styled.div`
  
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  position: relative;
  gap: 15px;
  width: 100%;
`

const Project = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  
  background-color: #234069;
  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  border-radius: 3px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  &:hover {
    transform: translateY(-5px);
  }
`
const ProjectContent = styled.div`
  padding: 1.5rem;
  h3 {
    margin: 0;
  }
`

const ProjectHeader = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 1rem;
  a {
    margin-left: 1rem;
  }
  a:hover svg {
    fill: #F9A825;
  }
`
const ProjectDescription = styled.div`
  font-size: 1rem;
  color: #FFF;
`

const ProjectTags = styled.div`
  font-size: 0.8rem;
  color: #F9A825;
  ul {
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      margin-right: 1rem;
    }
  }
`

const FolderIcon = styled(Folder)`
  fill: #F9A825;
  width: 40px;
`

const GoIcon = styled(Go)`
  fill: #FFF;
  width: 20px;
`

const GithubIcon = styled(Github)`
  fill: #FFF;
  width: 20px;
`

const ProjectsPage = () => {
  return ( 
    <Layout>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <ProjectsContainer>
        <ProjectsGrid>
          <Project>
            <ProjectContent>
              <ProjectHeader>
                <FolderIcon />
                <div>
                  <a href="https://github.com/rafalmoneta/movie-app-react"><GithubIcon/></a>
                  <a href="https://rafalmoneta.github.io/movie-app-react/"><GoIcon /></a>
                </div>
              </ProjectHeader>
              <h3>Movie app</h3>
              <ProjectDescription>
                <p>
                   Movie App created in React with MovieDB API.
                </p>
              </ProjectDescription>
              <ProjectTags>
                <ul>
                  <li>ReactJS</li>
                  <li>JavaScript</li>
                  <li>Hooks</li>
                </ul>
              </ProjectTags>
            </ProjectContent>
          </Project>
          
          <Project>
            <ProjectContent>
              <ProjectHeader>
                <FolderIcon />
                <div>
                  <a href="https://github.com/rafalmoneta/react-todolist"><GithubIcon/></a>
                  <a href="https://rafalmoneta.github.io/react-todolist/"><GoIcon /></a>
                </div>
              </ProjectHeader>
              <h3>To-do app</h3>
              <ProjectDescription>
                <p>
                   First project with React Hooks. Created while learning React and hooks.
                </p>
              </ProjectDescription>
              <ProjectTags>
                <ul>
                  <li>ReactJS</li>
                  <li>JavaScript</li>
                  <li>Hooks</li>
                </ul>
              </ProjectTags>
            </ProjectContent>
          </Project>

          <Project>
            <ProjectContent>
              <ProjectHeader>
                <FolderIcon />
                <div>
                  <a href="https://safe-bastion-00302.herokuapp.com/"><GithubIcon/></a>
                  <a href="https://github.com/rafalmoneta/mini-message-board"><GoIcon /></a>
                </div>
              </ProjectHeader>
              <h3>Mini message board</h3>
              <ProjectDescription>
                <p>
                Simple message board created while learning basic of nodejs.
                </p>
              </ProjectDescription>
              <ProjectTags>
                <ul>
                  <li>EJS</li>
                  <li>JavaScript</li>
                  <li>Expressjs</li>
                </ul>
              </ProjectTags>
            </ProjectContent>
          </Project>

          <Project>
            <ProjectContent>
              <ProjectHeader>
                <FolderIcon />
                <div>
                  <a href="https://github.com/rafalmoneta/jekyll_blog"><GithubIcon/></a>
                </div>
              </ProjectHeader>
              <h3>Jekyll Blog</h3>
              <ProjectDescription>
                <p>
                Created when learning about static website generators. Simple template blog made in Jekyll.
                </p>
              </ProjectDescription>
              <ProjectTags>
                <ul>
                  <li>Jekyll</li>
                  <li>Static website</li>
                  <li>Liquid</li>
                </ul>
              </ProjectTags>
            </ProjectContent>
          </Project>

          <Project>
            <ProjectContent>
              <ProjectHeader>
                <FolderIcon />
                <div>
                  <a href="https://github.com/rafalmoneta/pokedex-app"><GithubIcon/></a>
                  <a href="https://github.com/rafalmoneta/mini-message-board"><GoIcon /></a>
                </div>
              </ProjectHeader>
              <h3>Pokedex</h3>
              <ProjectDescription>
                <p>
                   Pokedex app build in React with full fake REST API from JSON-server.
                </p>
              </ProjectDescription>
              <ProjectTags>
                <ul>
                  <li>ReactJS</li>
                  <li>JavaScript</li>
                  <li>Hooks</li>
                  <li>fake REST API</li>
                </ul>
              </ProjectTags>
            </ProjectContent>
          </Project>

          <Project>
            <ProjectContent>
              <ProjectHeader>
                <FolderIcon />
                <div>
                  <a href="https://github.com/rafalmoneta/personal-website"><GithubIcon/></a>
                  <a href="https://www.rafalmoneta.com/"><GoIcon /></a>
                </div>
              </ProjectHeader>
              <h3>Personal Website</h3>
              <ProjectDescription>
                <p>
                   Personal website with blog. Created with GatsbyJS and deployed to Netlify.
                </p>
              </ProjectDescription>
              <ProjectTags>
                <ul>
                  <li>ReactJS</li>
                  <li>JavaScript</li>
                  <li>Gatsby</li>
                </ul>
              </ProjectTags>
            </ProjectContent>
          </Project>

        </ProjectsGrid>
      </ProjectsContainer>
    </Layout>
  );
}
 
export default ProjectsPage;