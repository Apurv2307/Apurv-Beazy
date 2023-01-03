import React from 'react'; 
import Header from'./Components/Header';
import FeatureTab from'./Components/FeatureTab';
import YoutubeEmbed from './Components/YoutubeEmbed';
import About from './Components/About';
import aboutimage from './images/about1.gif';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <section id=""><Header/></section>
      <section id="features"><FeatureTab/></section>
      <section id="talk"><YoutubeEmbed/></section>
      <section id="about"><About image={aboutimage} title='All you need is BEAZY to make it EAZY' button='Get The APP'/></section>
    </div>
    </BrowserRouter>
  );
}

export default App;
