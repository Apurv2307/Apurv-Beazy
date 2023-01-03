import React from "react";
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_4.png';
import featureimage1 from '../images/feature_5.png';
import featureimage2 from '../images/feature_3.png';

function Feature() {
    return (
        <div id='features'>
            <div className='a-container'>
                <FeatureBox image={featureimage} title='TITLE 1'/>
                <FeatureBox image={featureimage1} title='TITLE 2'/>
                <FeatureBox image={featureimage2} title='TITLE 3'/>
            </div>

        </div>
    )
}

export default Feature;