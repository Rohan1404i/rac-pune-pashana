import React from "react";
import "./Home.css";
import logo from "../../assets/logo.png";
import Header from "../header/Header";
import Carousel from "./CarouselContainer";
import Team from "./Team";
import Footer from "../footer/Footer";
import themeImg from "../../assets/theme.png";
import EventsComponent from "../EventsComponent";

function Home({yScroll}) {
  return (
    <div>
      <Header yScroll={yScroll}/>
      <div className="home">
        <div className="carousel">
          <Carousel />
        </div>
        <h3>About US</h3>
        <hr width="30%" />
        <div className="about">
          <div className="home-logo-shadow"/>
          <img className="home-logo" src={logo} alt="logo" />
          <p>
            <span>What we do?</span>
            <hr width="15%" />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            non rem quibusdam ipsa, magni eligendi sint mollitia quod dolorum
            aliquam, doloremque, cumque accusamus repellendus similique.
            Mollitia perspiciatis cumque aliquid quam.
          </p>
        </div>
        {/* <h3>Meet our President</h3> */}
        {/* <hr width="30%" /> */}
        <div className="teams-section">
          <h3>Meet our President<hr style={{width:"100%"}} /><p>Rtr. Pooja Patil</p></h3>
          <Team />
        </div>
        <EventsComponent />
        {/* <h3>Our Theme of the Year</h3> */}
        {/* <hr width="30%" /> */}
        <div className="theme-section" style={{marginTop:"10vh"}}>
          <h3 style={{marginTop: '20vh'}}>Our Theme of the Year</h3>
          <hr />
          <img src={themeImg} alt="Theme" className='theme-image' />
        </div>
        <h3 style={{marginTop: '25vh'}}>Aid us in creating a Better Planet</h3>
        <hr width="30%" />
        <div className="donate-section">
          <p>
            Rotaract Club of Pune Pashan <br /> will support
            our initiatives that promote community growth,to social
            consciousness, and women's empowerment. Join us in realising this
            goal and vision. Join us in creating a better society.
          </p>
          <button>Donate Now</button>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
