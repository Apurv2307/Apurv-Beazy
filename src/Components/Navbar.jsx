import React, {useState} from "react";
import logo from '../images/logo.png';

function Navbar() {
    const [active,setActive]=useState({
        nav:"Home"
    })
    const [nav,setnav] = useState(false);

    const changeBackground =() =>{
        if(window.scrollY >=5) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? 'nav active':'nav'}>
            <a href="/" className='logo' style={{display:"flex"}}>
                <img src={logo} alt=''/> 
            </a>
            <input type='checkbox' className='menu btn' id='menu-btn'/>
            <label className='menu-icon' for = 'menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li>
                    <a href="/" 
                    onClick={()=>{setActive({nav:"Home"})}} className={active.nav==="Home"?'active':""}>
                        Home
                    </a>
                </li>
                <li>
                    <a 
                    className={active.nav==="Features"?'active':""} onClick={()=>{setActive({
                    nav:"Features"})}}
                    href="#features">
                        Features
                    </a>
                </li>
                <li>
                    <a 
                    className={active.nav==="About"?'active':""}
                    onClick={()=>{setActive({nav:"About"})}}
                    href="#about">
                        About
                    </a>
                </li>
                <li>
                    <a
                    className={active.nav==="ui_si"?'active':""}
                    onClick={()=>{setActive({nav:"ui_si"})}} 
                    href="#talk">
                        UI SC
                    </a>
                </li>
                <li>
                    <a href="/">
                        Download
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;