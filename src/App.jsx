import React, { useState } from 'react';
import Navbar from './util/NavBar';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import PastEvents from './components/PastEvents';
import About from './util/About';
import Council from './util/Council';
import MadeBy from './util/MadeBy';
import Guests from './util/Guests';
import FollowUs from './util/FollowUs';
import mainlogo from '../image/logo.png';
import bg1 from '../image/mainbg.png';
import Technical from './pages/Technical';
import Sports from './pages/Sports';
import Cultural from './pages/Cultural';
import Esports from './pages/Esports';
import DummyComponent from './DummyComponent'; // Import your dummy component here
import { useScreenSize } from './util/ScreenSizeUtil';
import { useScreenSize1 } from './util/ScreenSizeUtil1';
import AllCouncil from './components/AllCouncil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const isSmallScreen = useScreenSize();
  const isSmallScreen1 = useScreenSize1();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleScroll = (component) => {
    document.getElementById(component).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Router>
        {isSmallScreen1 ? (
          <Routes>
            <Route
              path="/"
              element={
                <div id="home">
                  <img className="bg min-h-screen -z-50 object-cover" src={bg1} alt="" />
                  <Navbar
                    toggleMenu={toggleMenu}
                    closeMenu={closeMenu}
                    isMenuOpen={isMenuOpen}
                    handleScroll={handleScroll}
                  />
                  <hr className="border border-t-2 w-full" />
                  <div className="min-h-[95vh] max-sm:min-h-[85vh] lg:min-h-screen flex flex-col items-center max-sm:justify-center">
                    <img src={mainlogo} className="w-[80vw] max-w-[400px] h-auto mt-8 mb-4" alt="" />

                    <p className="font-serif text-center px-4 md:px-48 text-lg md:text-3xl text-white">
                      Get Ready To Ignite Your Senses! Alkemy Is Back, And This Year Is Going To Be A Transformative
                      Experience. Step Into A Realm Where Creativity And Innovation Collide. Prepare To Be Amazed,
                      Inspired, And Forever Changed 🚀
                    </p>
                    <div className=" flex flex-col mt-2 font-homo">
                      <p className="text-center px-4 font-semibold text-md md:text-2xl max-sm:hidden text-white">
                        Keep the dates locked: <span className="font-extrabold">2nd to 8th March 2024</span>{' '}
                        <a href="" className="underline">
                          Go through our official brochure
                        </a>
                      </p>
                      <p className="text-center px-4 font-semibold text-md md:text-2xl lg:hidden text-white">
                        Keep the dates locked: 2nd to 8th
                      </p>
                      <p className="text-center px-4 font-semibold text-md md:text-2xl lg:hidden text-white">
                        March 2024
                      </p>
                      <p className="text-center px-4 font-semibold text-md md:text-2xl lg:hidden text-white underline">
                        <a href="">Go through our Official Brochure</a>
                      </p>
                    </div>
                  </div>
                  <div id="events">
                    <Events isSmallScreen={isSmallScreen}></Events>
                  </div>
                  {/* <Guests isSmallScreen={isSmallScreen}></Guests>
                  <div id="sponsors">
                    <Sponsors isSmallScreen={isSmallScreen}></Sponsors>
                  </div> */}
                  <div id="pastevents">
                    <PastEvents isSmallScreen={isSmallScreen}></PastEvents>
                  </div>
                  <MadeBy isSmallScreen={isSmallScreen}></MadeBy>
                  <div id="council">
                    <Council isSmallScreen={isSmallScreen} />
                  </div>
                  <div id="aboutus">
                    <About></About>
                  </div>
                  <FollowUs></FollowUs>
                </div>
              }
            />
            <Route
              path="/technical"
              element={
                <div className="">
                  <Technical
                    toggleMenu={toggleMenu}
                    closeMenu={closeMenu}
                    isMenuOpen={isMenuOpen}
                    handleScroll={handleScroll}
                    isSmallScreen={isSmallScreen}
                  ></Technical>
                </div>
              }
            />
            <Route
              path="/sports"
              element={
                <div className="">
                  <Sports
                    toggleMenu={toggleMenu}
                    closeMenu={closeMenu}
                    isMenuOpen={isMenuOpen}
                    handleScroll={handleScroll}
                    isSmallScreen={isSmallScreen}
                  ></Sports>
                </div>
              }
            />
            <Route
              path="/esports"
              element={
                <div className="">
                  <Esports
                    toggleMenu={toggleMenu}
                    closeMenu={closeMenu}
                    isMenuOpen={isMenuOpen}
                    handleScroll={handleScroll}
                    isSmallScreen={isSmallScreen}
                  ></Esports>
                </div>
              }
            />
            <Route
              path="/cultural"
              element={
                <div className="">
                  <Cultural
                    toggleMenu={toggleMenu}
                    closeMenu={closeMenu}
                    isMenuOpen={isMenuOpen}
                    handleScroll={handleScroll}
                    isSmallScreen={isSmallScreen}
                  ></Cultural>
                </div>
              }
            />
            <Route
              path="/allcouncil"
              element={
                <div className="">
                  <AllCouncil
                    toggleMenu={toggleMenu}
                    closeMenu={closeMenu}
                    isMenuOpen={isMenuOpen}
                    handleScroll={handleScroll}
                    isSmallScreen={isSmallScreen}
                  ></AllCouncil>
                </div>
              }
            />
          </Routes>
        ) : (
          <DummyComponent /> // Render the dummy component if isSmallScreen1 is false
        )}
      </Router>
    </>
  );
};

export default App;
