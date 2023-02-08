import React from "react"
import styles from './App.css'
import Project from './components/project'
import Main from './components/main'
import logo from './images/Bec-logo.png'
import Contact from './components/contact'
import projectData from './data/projectData'
import Jewellery from "./images/jewellery.jpg"
import Travel from "./images/travel.jpg"
import resume from "./images/resume.pdf"

function App() {

  const [projects, setProjects] = React.useState(projectData)
  const [blur, setBlur] = React.useState(false)
  const [thumbnail, setThumbnail] = React.useState("")
  const [contactColour, setContactColour] = React.useState(false)


  const projectElements = projects.map(project => (
    <Project
      key={project.id}
      id={project.id}
      project={project.project}
      title={project.title}
      link={project.link}
      technology={project.technology}
      slideOne={project.preview.slideOne}
      slideTwo={project.preview.slideTwo}
      slideThree={project.preview.slideThree}
      slideFour={project.preview.slideFour}
      slideFive={project.preview.slideFive}
      show={project.show}
      close={close}
      colour={project.colour}
    />
  ))

  const blurStyle = {
    filter: blur ? "blur(4px)" : ""
  }

  const contactStyle = {
    color: contactColour ? "#000" : "#fff"
  }

  const projectList = projects.map(project => (
    <li id={project.id}
      className="project-list-items"
      onMouseEnter={(event) => handleMouseEnter(event, project.id)}
      onMouseLeave={handleMouseLeave}
      onClick={() => toggle(project.id)}>
      {project.project}
    </li>
  ))

  function handleMouseEnter(event, id){
    setBlur(true)
    setThumbnail(<img className="thumbnail" src={projects[id-1].thumbnail} />)
  }

  function handleMouseLeave() {
    setBlur(false)
    setThumbnail("")
  };

  function close(id) {
    setProjects(prevProjects => {
      return prevProjects.map((project) => {
        return project.id === id ? {...project, show: !project.show} : project
      })
    })

    setContactColour(false)
  }

  function toggle(id) {
    setProjects(prevProjects => {
      return prevProjects.map((project) => {
        return project.id === id ? {...project, show: !project.show} : project
      })
    })

    setContactColour(true)
  }

  return (
    <div className="app">

      <div className="main">
          {/* <h1 style={blurStyle}>Rebecca Lim</h1> */}
        <div className="col-1">
          <img style={blurStyle} className="logo" src={logo } />
          <div style={blurStyle} className="contact-div">
            <div className="contact">
              <ul>
                <li><a style={{color: contactColour ? "rgba(255,255,255,0.3)" : "#000"}} href="mailto:rebeccalim23@gmail.com">Email</a></li>
                <li><a style={{color: contactColour ? "rgba(255,255,255,0.3)" : "#000"}} href={resume} target="blank">Resumé</a></li>
                <li><a style={{color: contactColour ? "rgba(255,255,255,0.3)" : "#000"}} href="https://www.linkedin.com/in/rebeccalim23/" target="blank">LinkedIn</a></li>
                <li><a style={{color: contactColour ? "rgba(255,255,255,0.3)" : "#000"}} href="https://github.com/RebeccaL23" target="blank">GitHub</a></li>
                <li><a style={{color: contactColour ? "rgba(255,255,255,0.3)" : "#000"}} href="https://www.instagram.com/rebecca__lim/" target="blank">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio-grid portfolio">
          <div className="portfolio-row">
            <div className="portfolio-col recent-projects">
              <h2 style={blurStyle}>Recent Projects</h2>
              <ul className="projectList">
                {projectList}
              </ul>
              {thumbnail}
            </div>
          </div>

          <div className="portfolio-row portfolio">
            <div className="about" style={blurStyle}>
              <div className="portfolio-col">
                <h2>About</h2>
                <div>
                  <p>
                    I'm Rebecca Lim–a Malaysian-Australian fullstack developer based in London.<br></br><br></br>
                    I was previously the Manager of Business Systems at <a href="https://www.bluerockdigital.com.au/" target='blank'>BlueRock Digital</a>,
                    a Melbourne-based digital consultancy part of the <a href="https://www.bluerock.com.au/" target='blank'>BlueRock</a> group.
                    That experience gave me a holistic view and appreciation of the digital space;
                    I had the opportunity to plan, design and manage the development of digital solutions for clients across various industries.
                  </p>
                  <br></br>
                  <p>
                    I realised that the missing puzzle piece for me was getting hands-on and actually building the solution,
                    so I pivoted slightly and completed the intensive web development course at Le Wagon in 2022.
                    I am now on the hunt for developer roles.
                  </p>
                </div>
              </div>
              <div className="portfolio-col portfolio">
                <h2 className="currently-learning">Currently</h2>
                <ul className="currently-learning">
                  <li>Digging deeper into React with Scrimba</li>
                  <li>Scratching the surface on Shopify Hydrogen Framework for our brand, <a href="https://repleat.co/" target='blank'>repleat.co</a></li>
                  <li className="travel-hover">Exploring and travelling the northern hemisphere </li><img className='image-hover travel' src={Travel} alt="travel" />
                  <li className="jewellery-hover">Crafting jewellery </li><img className='image-hover jewellery' src={Jewellery} alt="jewellery making" />
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {projectElements}
    </div>


  )
}

export default App
