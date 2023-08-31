/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPersonVcardFill } from "react-icons/bs";
import Link from 'next/link';


const Navbar = () => {



  return (

   <>
    
     <nav className='d-flex justify-content-between'>

         <div>
           <button className="btn btn-dark ms-3 my-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <GiHamburgerMenu/>
           </button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex='-1' id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">

               <Link href={'/createNew'} 
                      className='btn btn-dark rounded-1 vstack mx-auto' 
                      style={{width: '200px'}}>
                Create New Item
              </Link>

              </div>
            </div>
         </div>

          <h3 className='my-3'>TypeScript CRUD</h3>

         <div>
          <button className="btn btn-dark me-3 my-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <BsPersonVcardFill/>
          </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Select Car</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <div className='rightSide'>
                    <img src="/ford.jpg" 
                          style={{width: '195px', cursor:'pointer'}} 
                          alt="img" />  
                    <img src="/volvo.jpg" 
                          style={{width: '195px', cursor:'pointer'}} 
                          alt="img" />  
                    <img src="/tesla.jpg" 
                          style={{width: '195px', cursor:'pointer'}} 
                          alt="img" />  
                    <img src="/tesla3.jpg" 
                          style={{width: '195px', cursor:'pointer'}} 
                          alt="img" />  
                    </div>
              </div>
            </div>
         </div>
    </nav>


    <style>{`
      
      .rightSide {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-left: 30px;
      }
    
    `}</style>
   
   </>

  )
}

export default Navbar