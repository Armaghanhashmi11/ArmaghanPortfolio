import React from "react";
import logo from "../assets/images/astronout.png";
import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/bg.jpg";
import Navbar from "./Navbar";
import "../styles.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
              <a href="ArmaghanHashmi(Resume).pdf" download="Armaghan.pdf">
                <button className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 md:p-2 rounded-2xl">
                  Get My Resume
                </button>
              </a>
            </div>
            <h1 className="text-white md:text-xl lg2:text-5xl lg:text-3xl font-bold">Hi! I'm Armaghan Software Engineer</h1>
            <p className="text-white py-4 max-w-lg lg2:text-lg lg:text-base md:text-sm ">
              A motivated and tech-savvy Software Engineer, able to work on
              different tools and web-based technologies, learn things more
              quickly, work well and communicate effectively within a team.
              Adept at developed web-based solutions by maintaining code quality
              and standards. Well-versed in numerous programming languages and
              Specializes in front-end programming.
            </p>
            <AnchorLink href="#contact">
            <button className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#1054A5,#66BDC4)] md:p-1 p-2 rounded-2xl">
              Let's Connect{" "}
              <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}
            </button>
            </AnchorLink>
          </div>
          <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo1} alt="" />
          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
