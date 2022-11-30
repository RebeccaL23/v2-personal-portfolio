import React, { useEffect, useState } from "react"
import close from '../images/close.png'
// import Slider from 'react-touch-drag-slider'
// import { useSwipeable } from "react-swipeable";
import projectData from '../data/projectData'
// import Carousel, { CarouselItem } from "./carousel"


export default function Project(props)  {

  const slides = [
    {
      id: 1,
      url: props.slideOne,
    },
    {
      id: 2,
      url: props.slideTwo,
    },
    {
      id: 3,
      url: props.slideThree,
    },
    {
      id: 4,
      url: props.slideFour,
    },
    {
      id: 5,
      url: props.slideFive,
    },
  ]

  // show the photo with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next photo
  // if we are at the end, go to the first photo
  const next = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  // move to the previous photo
  // if we are at the beginning, go to the last photo
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return(
    <>

    {props.show &&
    <div className="project-container">
      <div className="project-pane">
        <div className="project-sidebar">
          <div className="project-sidebar-top">
            <img className="close" onClick={()=>props.close(props.id)} src={close} />
            <h2>{props.project}</h2>
            <h3>{props.title}</h3>

            {/* Render dots indicator */}

            <div className="indicators">
              <div className='dots'>
                {slides.map((slide) => (
                    slide.url ?
                      <span
                        key={slide.id}
                        // highlight the dot that corresponds to the current photo
                        className={
                          slides[currentIndex].id === slide.id ? 'dot active' : 'dot'
                        }
                        // when the user clicks on a dot, go to the corresponding photo
                        onClick={() => setCurrentIndex(slides.indexOf(slide))}
                      ></span>
                    :
                    <span></span>
                ))}
              </div>
              <div className="pagination">
                  <p>{currentIndex + 1}/{document.querySelectorAll('.dot').length} </p>
              </div>
            </div>
          </div>

          <div className="project-sidebar-bottom">
            <a target="_blank" href={props.link}>Live Site</a>
            <br></br>
            <a target="_blank" href={props.link}>GitHub</a>
          </div>
        </div>

        <div className="project-preview">

        {/* Render the carousel */}
        <div className='slider-container'>
          {slides.map((slide) => (
            slide.url ?
            <div
              key={slide.id}

              // if the photo is the current photo, show it
              className={
                slides[currentIndex].id === slide.id ? 'fade' : 'slide fade'
              }
            >
              { slide.url.includes("/assets")  ? <img src={slide.url} className='photo' /> : <div className="div-h4"><h4>{slide.url}</h4></div> }
            </div>
            :
            <div></div>
          ))}

          {/* Previous button */}
          {/* <button onClick={prev} className='prev'>
            Previous
          </button> */}

          {/* Next button */}
          {/* <button onClick={next} className='next'>
            Next
          </button> */}
        </div>




        </div>
      </div>
    </div>
    }
    </>
  )
}
