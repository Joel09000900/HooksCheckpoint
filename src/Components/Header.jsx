import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {

  let NavbarHover = document.querySelector ('.Navbar')

   const ajoute = () => {
    NavbarHover.classList.add("NavbarHover2")
    
   }

   const supprime = () => {
    NavbarHover.classList.remove("NavbarHover2")
    }



    return (
     <>
          
      
 
       

        <div className='Profile  d-flex align-items-center justify-content-around mr-4  ' style={{gap :"14cm"}} >

          <ul className='Navbar  d-flex' style={{gap :"12px"}} onMouseEnter={ajoute} onMouseLeave={supprime}>
               <li ><Link to="/">Acceuil</Link></li>
               <li ><Link to="/Contact" >Contact</Link></li>
               
          </ul>


          <div className="d-flex align-items-center " style={{ gap :"12px" }}>
            <div className="User"></div>
             
            
             </div>   
             

        </div>

        
    </>
    );
}

export default Header;

