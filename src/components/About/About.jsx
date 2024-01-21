import React, { useEffect, useState } from 'react'
import './About.css'
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const About = () => {
  const [night, setNight] = useState(false);
    //////////
  
    const headinganimation=useAnimation()
    const heroSitting=useAnimation()
    const skyshine=useAnimation()
    const{ref,inView}=useInView({
      threshold:0.1
    })


    useEffect(()=>{



  if(inView){
    headinganimation.start({
      x:'0rem',
      transition:{
        type:"spring",duration:2,bounce:0.2
      }
    })
    heroSitting.start({
      y:'0rem',
      transition:{
        type:"spring",duration:6,bounce:0.2
      }
    })
    skyshine.start({
      y:'0rem',
      transition:{
        type:"spring",duration:6,bounce:0.3,
        // repeat: Infinity,
      }
    })
  }
  if(!inView){
    headinganimation.start({x:'50rem'})
    heroSitting.start({y:'20rem'})
    skyshine.start({y:'-50rem'})
  }
    },[inView])




  return (
    <>





 
  <div className="about-container"  ref={ref}>
  <div className='dummy_about' id="about"></div>
      
      <div className='main_about' >
        <div className="about-left">
          <h1 className={night ? "nightheading" : "heading"}>About me</h1>
          <div className="about-left-inside">
            <ul>
              <li>
                {" "}
               <span className='about_letter'>Hello!
                </span>  My name is Maheendran Kp and I enjoy creating things that
                live on the internet.
              </li>
              <li>
                {" "}
                I'm a passionate Developer, with strong administrative and
                communication skills, good attention to detail and the ability
                to write efficient code using MERN Stack.
              </li>
              <li>
                {" "}
                My interest in web development started back last year when I was
                trying to edit things on the web, that taught me a lot about
                HTML & CSS.
              </li>
              <li>
                {" "}
                As I grow and flourish as a Developer, one thing which keeps me
                going is my inquisitiveness for discovering new things every
                day.
              </li>
              <li>
                {" "}
                Fast Forwarding to today, I built a number of web applications
                and 4 major projects. Learned a great deal about teamwork,
                leadership, and communication. After months of rigorous
                training, here I am looking for an opportunity as a full stack
                web developer.
              </li>
            </ul>
          </div>
        </div>
      
       
          <motion.div animate={headinganimation} className="about-right">
          <motion.img animate={skyshine} className="sky" src="./assets/cloud.svg" alt="" />
          <img className="tree" src="./assets/R (3).png" alt="" />
          <motion.img animate={heroSitting} className="man" src="./assets/man_sit.gif" alt="" />
          <img className="smallrock" src="./assets/smallrock.png" alt="" />
      
       
       <div className='right_grass'>
       <img className="grass" src="./assets/R (4).png" alt="" />
       <img className="grass" src="./assets/R (4).png" alt="" />
       <img className="grass" src="./assets/R (4).png" alt="" />
       <img className="grass" src="./assets/R (4).png" alt="" />
       </div>

       <div className="leaves">
              <img src="./assets/leaf01.png" alt="" />
              <img src="./assets/leaf02.png" alt="" />
              <img src="./assets/leaf03.png" alt="" />
            </div>
          </motion.div>

          </div>

      </div> 

    </>
  )
}

export default About