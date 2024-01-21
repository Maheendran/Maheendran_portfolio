import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <>
    
     <div className='skills-container '>
     <div className='dummy'  >
     </div>


<div className="skill_circle" id="skills"></div>
<div className="skill_small_circle"></div>


<div className="row">
<h1 className='heading text-center'>My Technical Skills</h1>
</div>

<div className='skills-grid'>
<div className='skills-single-react'>
<img 
src="./assets/react.png" alt="" />
<p>React</p>
</div>
<div className='skills-single-boot'>
<img 
src="./assets/next.png" alt="" />
<p>NEXT JS</p>
</div>

<div className='skills-single-react'>
<img src="./assets/typscript.png" alt="" />
<p>Typscript</p>
</div>
<div className='skills-single-react'>
<img  
src="./assets/jss.png" alt="" />
<p>JavaScript</p>
</div>
<div className='skills-single-boot'>
<img 
src="./assets/tailwind.png" alt="" />
<p>TAILWIND</p>
</div>




<div className='skills-single-boot'>
<img 
src="./assets/html.png" alt="" />
<p>HTML</p>
</div>
<div className='skills-single-boot'>
<img 
src="./assets/css.png" alt="" />
<p>CSS</p>
</div>


<div className='skills-single-react'>
<img 
src="./assets/node.png" alt="" />
<p>Node</p>
</div>
<div className='skills-single-boot'>
<img src="./assets/logo.png" alt="" />
<p>Redux</p>
</div>
<div  className='skills-single-boot'>
<img 
src="./assets/boot.png" alt="" />
<p>BootStrap</p>
</div>



<div className='skills-single-boot'>
<img src="./assets/gitclone.png" alt="" />
<p>Git</p>
</div>
{/* <div className='skills-single-boot'>
<img 
src="./assets/tail.png" alt="" />
<p>TailWind</p>
</div> */}


<div className='skills-single-react'>
<img 
src="./assets/npm-logo.png" alt="" />
<p>NPM</p>
</div>

</div>
</div>
    
    </>
  )
}

export default Skills