import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top custom-navbar" >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Hotel</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/products">Rooms</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id='{dropdownId}' data-bs-toggle="dropdown"
                  >Dropdown</a>

                  <div className='dropdown-menu mega-menu' aria-labelledby="navbardrop">
                   <div className='container'>
                   <div className='row'>
                    <div className="col-md-3 mega-menu-column" >
                      <h4 className='mega-list' >Category 1</h4>
                      <ul>
                        <li className='mega-list'><a href='#'>Subcategory1 </a></li>
                        <li className='mega-list'><a href='#'>Subcategory2 </a></li>
                      </ul>
                    </div>

                    <div className="col-md-3 mega-menu-column">
                      <h4 className='mega-list'>Category 2</h4>
                      <ul>
                        <li className='mega-list'><a href='#'>Subcategory1 </a></li>
                        <li className='mega-list'><a href='#'>Subcategory2 </a></li>
                      </ul>
                    </div>

                    <div className="col-md-3 mega-menu-column">
                      <h4 className='mega-list'>Category 3</h4>
                      <ul>
                        <li className='mega-list'><a href='#'>Subcategory1 </a></li>
                        <li className='mega-list'><a href='#'>Subcategory2 </a></li>
                      </ul>
                    </div>

                    <div className="col-md-3 mega-menu-column">
                      <h4 className='mega-list'>Category 4</h4>
                      <ul>
                        <li className='mega-list'><a href='#'>Subcategory1 </a></li>
                        <li className='mega-list'><a href='#'>Subcategory2 </a></li>
                      </ul>
                    </div>

                    <div className='row'>
                    <div className="col-md-3 mega-menu-column">
                      <h4 className='mega-list'>Category 5</h4>
                      <ul>
                        <li className='mega-list'><a href='#'>Subcategory1 </a></li>
                        <li className='mega-list'><a href='#'>Subcategory2 </a></li>
                      </ul>
                    </div>

                    <div className="col-md-3 mega-menu-column">
                      <h4 className='mega-list'>Category 6</h4>
                      <ul>
                        <li className='mega-list'><a href='#'>Subcategory1 </a></li>
                        <li className='mega-list'><a href='#'>Subcategory2 </a></li>
                      </ul>
                    </div>

                    <div className="col-md-3 mega-menu-column">
                      <h4 className='mega-list'>Category 7</h4>
                      <ul>
                        <li className='mega-list'><a href='#'>Subcategory1 </a></li>
                        <li className='mega-list'><a href='#'>Subcategory2 </a></li>
                      </ul>
                    </div>

                    <div className="col-md-3 mega-menu-column">
                      <h4 className='mega-list'>Category 8</h4>
                      <ul>
                        <li className='mega-list'><a href='#'>Subcategory1 </a></li>
                        <li className='mega-list'><a href='#'>Subcategory2 </a></li>
                      </ul>
                    </div>
                    </div>

                    <div className='row'>
                    <div className="col-md-3 mega-menu-column">
                      <h4 className='mega-list'>Category 9</h4>
                      <ul>
                        <li className='mega-list'><a href='#'>Subcategory1 </a></li>
                        <li className='mega-list'><a href='#'>Subcategory2 </a></li>
                      </ul>
                    </div>

                    <div className="col-md-3 mega-menu-column">
                      <h4 className='mega-list'>Category 10</h4>
                      <ul>
                        <li className='mega-list'><a href='#'>Subcategory1 </a></li>
                        <li className='mega-list'><a href='#'>Subcategory2 </a></li>
                      </ul>
                    </div>

                    <div className="col-md-3 mega-menu-column">
                      <h4 className='mega-list'>Category 11</h4>
                      <ul>
                        <li className='mega-list'><a href='#'>Subcategory1 </a></li>
                        <li className='mega-list'><a href='#'>Subcategory2 </a></li>
                      </ul>
                    </div>

                    <div className="col-md-3 mega-menu-column">
                      <h4 className='mega-list'>Category 12</h4>
                      <ul>
                        <li className='mega-list'><a href='#'>Subcategory1 </a></li>
                        <li className='mega-list'><a href='#'>Subcategory2 </a></li>
                      </ul>
                    </div>
                    </div>

                    </div>
                   </div>
                     
                  </div>
              
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex ml-auto" role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
</nav>
    </div>
  )
}

export default Navbar