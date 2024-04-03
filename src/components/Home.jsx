import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
        <div className='bar'>
        <nav class="navbar-expand-lg  ">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <span  class="navbar-brand" >EXPENSE TRACKER</span>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to='/login'><button className='btnnav' aria-current="page" href="#">LOGIN</button></Link>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      
        </div>
        
      
        <header>
        Welcome to the PettyCash Manager
        💰💰💰💰💰💰💰💰💰💰💰💰

      </header>
      <footer>
        <div>
          <h6>All rights reserved &copy; IRINE SWARNA.V</h6>
        </div>
      </footer>

    </div>
  )
}

export default Home