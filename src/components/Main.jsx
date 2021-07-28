import React from 'react'
import man from '../img/man.jpg'
const Main = () => {
    return (
        <>
           <div className="container-fluid bg-dark text-light py-5">
              <div className="container">
                  <div className="row">
                      <div className="col-10 m-auto text-center">
                          <img src={man} alt="profile" className="img-fluid img-profile rounded-circle" />
                          <h1 className="my-3">Hi, am Kiran</h1>
                          <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, mollitia?</p>
                      </div>
                  </div>
              </div>
           </div>  
        </>
    )
}

export default Main
