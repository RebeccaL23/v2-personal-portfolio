
import TraceGif from '../images/trace-gif.gif'
import TraceMobileGif from '../images/trace-mobile-gif.gif'
import ContextGif from '../images/context-gif.gif'
import ContextImage from "../images/context.png"
import PortfolioImage from "../images/portfolio.png"
import d2cGif from "../images/1800d2c-gif.gif"
import TraceThumbnail from "../images/trace-thumbnail.png"
import ContextThumbnail from "../images/context-thumbnail.png"
import d2cThumbnail from "../images/d2c-thumbnail.png"
import PortfolioThumbnail from "../images/portfolio-thumbnail.png"

export default [
  {
    "id":"1",
    "project": "Trace",
    "title": "Merging the digital and real-world experience through custom scavenger hunt games",
    "link": "http://www.playtracewith.me",
    "github": "https://github.com/RebeccaL23/trace",
    "thumbnail": TraceThumbnail,
    "preview": {
      "slideOne": "Trace was created as our final project for the Le Wagon Fullstack Web Development course. I conceptualised, designed and wireframed Trace on Figma, and developed it with two other members.",
      "slideTwo": "For usability, we designed a desktop view for the admin and game setup, and a mobile view for players to join and play games on the move.",
      "slideThree": TraceGif,
      "slideFour": TraceMobileGif,
      "slideFive": "Built with Ruby on Rails, HTML, CSS, JavaScript & Stimulus, and plugs into the MapBox API and Weather API. Deployed on Heroku. "
    },
    "show":false
  },
  {
    "id":"2",
    "project": "Context",
    "title": "Helping bi-lingual children read and practice comphrension in both English and Spanish",
    "link": "https://team50.herokuapp.com/",
    "github": "https://github.com/RebeccaL23/Rails-Hackathon-2022-Context",
    "thumbnail": ContextThumbnail,
    "preview": {
      "slideOne": ContextGif,
      "slideTwo": "Context was built as part of the 48-hour Ruby Hackathon 2022. The requisite was to create an application using any of the Hotwire frameworks (Turbo and/or Stimulus). Context received third place overall. Context works by translating randomised parts of English readings to encourage children's understanding of the Spanish language through contextual clues.",
      "slideThree": "Mocked-up on Figma, and built with Ruby on Rails, HTML, CSS / Tailwind, JavaScript, and Hotwire (Stimulus and Turbo). Deployed on Heroku.",
      "slideFour": "",
      "slideFive": ""
    },
    "show":false
  },
  {
    "id":"3",
    "project": "Portfolio",
    "title": "My personal porfolio (yup, this one!) showcasing recent projects",
    "link": "https://rebecca-lim.com/",
    "github": "https://github.com/RebeccaL23/v2-personal-portfolio",
    "thumbnail": PortfolioThumbnail,
    "preview": {
      "slideOne": "After completing the Scrimba React beginners course, I wanted a practical way to apply my newly-learnt skills. This portfolio site is my first ever React build. It also gave me the opportunity to delve deep into understanding the CSS grid and flex system across responsiveness.",
      "slideTwo": PortfolioImage,
      "slideThree": "Built with React, HTML, CSS / CSS Grid & Flex. Scaffolded with Vite and deployed on Netlify.",
      "slideFour": "",
      "slideFive": ""
    },
    "show":false
  },
  {
    "id":"4",
    "project": "1800-D2C Job board",
    "title": "Job board to find the best jobs in eCommerce",
    "link": "https://jobs.1800d2c.com/",
    "github": "https://github.com/RebeccaL23/1800d2c",
    "thumbnail": d2cThumbnail,
    "preview": {
      "slideOne": d2cGif,
      "slideTwo": "The job board leverages a SaaS-based platform, Job Board Fire. On top of that, I have used HTML & CSS to customise and align with the 1800-D2C branding.",
      "slideThree": "Customised using HTML & CSS.",
      "slideFour": "",
      "slideFive": ""
    },
    "show":false
  }
]
