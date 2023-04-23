import React from "react";

const Header = ()=>{

    return(
    <>
        <header>
            <div className='header container'>
                <div className='logoname'>
                    <h4>Dev<span>Foody</span></h4>
                </div>
                <nav className='nav-menu'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>Cart<span className='badge'>2</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>)
}

export default Header;