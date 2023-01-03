import React,{ useState,useEffect } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FeatureBox from "./FeatureBox";
import img1 from '../images/feature_1.png'
import img2 from '../images/feature_2.png'
import img3 from '../images/feature_3.png'
import img4 from '../images/feature_4.png'
import img5 from '../images/feature_5.png'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';
import "../FeatureTab.css";
function Tabs() {
  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
    return (
      <div style={isFirstItemVisible?{visibility:"hidden"}:{display:"flex",alignItems:"center",visibility:"visible"}}>
        <ArrowCircleLeftIcon onClick={() => scrollPrev()}/>
      </div>
    );
  }
  
  function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
    return (
      <div style={isLastItemVisible?{visibility:"hidden"}:{display:"flex",alignItems:"center",visibility:"visible"}}>
      <ArrowCircleRightIcon onClick={() => scrollNext()}/>
      </div>
    );
  }

  const data=[
    {
      imgUrl:img1,
      Title:"retailer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"retailer"
    },
    {
      imgUrl:img2,
      Title:"retailer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"retailer"
    },{
      imgUrl:img3,
      Title:"retailer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"retailer"
    },{
      imgUrl:img4,
      Title:"retailer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"retailer"
    },
    {
      imgUrl:img1,
      Title:"retailer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"retailer"
    },
    {
      imgUrl:img2,
      Title:"retailer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"retailer"
    },{
      imgUrl:img3,
      Title:"retailer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"retailer"
    },{
      imgUrl:img4,
      Title:"retailer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"retailer"
    },
    {
      imgUrl:img3,
      Title:"destributer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"destributer"
    },{
      imgUrl:img4,
      Title:"destributer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"destributer"
    },{
      imgUrl:img5,
      Title:"retailer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"retailer"
    },{
      imgUrl:img1,
      Title:"destributer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"destributer"
    },
    {
      imgUrl:img2,
      Title:"destributer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"destributer"
    },
    {
      imgUrl:img3,
      Title:"destributer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"destributer"
    },
    {
      imgUrl:img4,
      Title:"destributer",
      content:" Line 31:21:  The href attribute requires a valid value to be accessible ",
      type:"destributer"
    }
    
  ]
  const [toggleState, setToggleState] = useState(1);
  const [showData,setData]=useState([]);
  useEffect(()=>{
    if(toggleState===1)
    {
      const arr=data?.filter(({type})=>type==='retailer')
      setData(arr)
    }
    else{
      const arr=data?.filter(({type})=>type==="destributer")
      setData(arr);
    }
  },[toggleState])

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          RETAILER
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          DISTRIBUTER / FMCG
        </button>
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
        <ScrollMenu Footer="none" LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {
              showData.map(({imgUrl,Title,content})=><FeatureBox img={imgUrl} title={Title} content={content}/>)
            }
        </ScrollMenu>
        </div>
        </div>

        
    </div>
  );
}

export default Tabs;