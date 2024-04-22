import React, {useState, useEffect} from 'react'
import './Nav.css'
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect (() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true) ;
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", handleShow);
        };
    }, [])
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img 
        className='nav__logo' 
        src='/Netflix-logo-design.png'
        alt='Netflix Logo'
        />
         <img 
        className='nav__avatar' 
        src='/Netflix-avatar.png'
        alt='Avatar'
        />
    </div>
  )
}

export default Nav