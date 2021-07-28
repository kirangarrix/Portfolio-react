import React from 'react';

const Navbar = () => {
    return (
        <>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand fs-2 text-success" href="/#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-light active" aria-current="page" href="#skills">My Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#work">Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>   
        </>
    )
}

export default Navbar
