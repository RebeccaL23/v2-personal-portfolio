import React from "react"
import resume from "../images/resume.pdf"

export default function Contact() {
  return(
    <div className="contact">
      <ul>
        <li><a href="mailto:rebeccalim23@gmail.com">Email</a></li>
        <li><a href={resume} target="blank">Resumé</a></li>
        <li><a href="https://www.linkedin.com/in/rebeccalim23/" target="blank">LinkedIn</a></li>
        <li><a href="https://github.com/RebeccaL23" target="blank">GitHub</a></li>
        <li><a href="https://www.instagram.com/rebecca__lim/" target="blank">Instagram</a></li>
      </ul>
    </div>
  )
}
