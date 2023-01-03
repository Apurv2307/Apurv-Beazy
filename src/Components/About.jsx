import React from "react";

function About(props) {
return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-image'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac luctus ligula.
               Vivamus pharetra mattis lectus viverra vestibulum. Pellentesque laoreet tellus id sem ultricies mollis.
               Integer consectetur metus nec odio posuere, facilisis volutpat arcu interdum. Ut eros nunc.</p>
               <button>{props.button}</button>
        </div>
    </div>
)

}
export default About;