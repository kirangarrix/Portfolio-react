import React from 'react'
import laptop from '../img/laptop.jpg'
const Work = () => {
    return (
        <>
           <section className="bg-grey">
              <div className="row text-center" id="work">
                <div className="col-10 m-auto">
                   <h2 className="my-5">Work</h2>
                   <img src={laptop} alt="work"  className="img-work img-fluid rounded-circle mb-5  shadow"/>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam beatae suscipit dolore aut architecto molestiae eos obcaecati! Quos, omnis modi sed unde ratione, quisquam quibusdam, laborum temporibus molestiae explicabo beatae.</p>
                   <a href="/#" className="btn btn-outline-success mb-5">Git Respository</a>
                </div>
              </div>
           </section>    
        </>
    )
}

export default Work
