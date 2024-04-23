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


    const handleClick = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img 
        className='nav__logo' 
        src='/Netflix-logo-design.png'
        alt='Netflix Logo'
        onClick={handleClick}
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