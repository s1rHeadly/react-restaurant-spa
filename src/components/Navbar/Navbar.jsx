import React, {useState} from 'react';
import './Navbar.scss';
import {gericht} from './imports';

// react icons 
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {GiHamburgerMenu} from 'react-icons/gi';



const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  }


  return (
   <nav className="app__navbar">


      <div className="app__navbar-logo">
        <img src={gericht} alt="app logo" />
      </div>


      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>


      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">login / register</a>
        <div />
        <a href="/" className="p__opensans">book a table</a>
      </div>



      <div className="app__navbar-smallscreen">
           { !toggle ? (
              <GiHamburgerMenu fontSize={27} color="#fff" onClick={toggleHandler} className="burger"/>
            ) : 
             (<div className="app_navbar-smallscreen_overlay flex__center slide-bottom">
                <MdOutlineRestaurantMenu className='overlay__close' fontSize={27} color="#fff" onClick={toggleHandler}/>
                <ul className="app__navbar-smallscreen-links">
                <li className="p__opensans">
                  <a href="#home">Home</a>
                </li>
                <li className="p__opensans">
                  <a href="#about">About</a>
                </li>
                <li className="p__opensans">
                  <a href="#menu">Menu</a>
                </li>
                <li className="p__opensans">
                  <a href="#awards">Awards</a>
                </li>
                <li className="p__opensans">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>)
           }
      </div>

      
   </nav>
  )
}

export default Navbar