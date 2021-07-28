import React from 'react'

const Skills = () => {
    return (
        <>
         <div className="container">
              <div className="row text-center my-5" id="skills">
                <h2>My Skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, saepe.</p>
              </div>
              <div className="row my-5">
               <div className="col-md-4 mb-3 text-light text-center">
               <div className="h-100 p-5 border bg-dark shadow">
               <i class="bi bi-globe fs-1"></i> 
               <p>Web Development</p>              
               </div>
               </div>
               <div className="col-md-4 mb-3 text-light text-center">
               <div className="h-100 p-5 border bg-dark shadow">
               <i class="bi bi-pencil fs-1"></i>
               <p>Web Design</p>              
               </div>
               </div>
               <div className="col-md-4 mb-3 text-light text-center">
               <div className="h-100 p-5 border bg-dark shadow">
               <i class="bi bi-tv fs-1"></i>
               <p>UI {"&"} UX</p>              
               </div>
               </div>
              </div>
         </div>   
        </>
    )
}

export default Skills
