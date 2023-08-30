import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPersonVcardFill } from "react-icons/bs";


const Navbar = () => {



  return (

    <nav className='d-flex justify-content-between'>

         <div>
           <button className="btn btn-dark ms-3 my-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <GiHamburgerMenu/>
           </button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex='-1' id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <p>Try scrolling the rest of the page to see this option in action.</p>
              </div>
            </div>
         </div>

          <h3 className='my-3'>TypeScript CRUD</h3>

         <div>
          <button className="btn btn-dark me-3 my-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <BsPersonVcardFill/>
          </button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                ...
              </div>
            </div>
         </div>
    </nav>

  )
}

export default Navbar