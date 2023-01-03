import React from "react";
function Header() {
    return (
        <div id='main'>
            
            <div className='name'>
                <h1><span>Make Your Business</span> Eazy With BEAZY.</h1>
                <p className='details'>We at Beazy are on a mission to organize small format retailers data and make 
                it accessible and useful.</p>
                <a href='https://play.google.com/store/apps/details?id=com.beazy' className='cv-btn'>Download</a>
                {/* <a href='https://play.google.com/store/apps/details?id=com.beazy' className='cv-btn'>Partner With Us</a> */}
            </div>
        </div>
    )
}

export default Header;