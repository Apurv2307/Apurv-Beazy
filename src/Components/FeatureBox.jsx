import React from "react";
import '../FeatureBox.css'
function FeatureBox(props) {
    return (
        <div className="feature_box">
            <div className='a-b-img'>
                <img src={props.img} alt="none"/>
            </div>
            <div className='s-b-text'>
                <h2> {props.title} </h2> 
                <div className="details">
                    <p>{props.content}</p>
                </div>
            </div>

        </div>
    )
}

export default FeatureBox;