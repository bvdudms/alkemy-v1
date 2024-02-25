import React from 'react';
import PageNav from '../util/PageNav';
import logo from '../../image/logo.png';
import mainbg from '../../image/mainbg.png';
import baljeev from '../../image/baljeev.jpg';
import abhinav from '../../image/abhinav.jpg';
import krishna from '../../image/Krishna.jpg';
import tresurer from '../../image/TRESURER.jpg';
import kritika from '../../image/kritika.jpg';
import jet from '../../image/tech_sec_eng.jpg';
import techco from '../../image/techco.jpg';
import techme from '../../image/techme.jpg';
import tecm from '../../image/tecm.jpg';
import techmem from '../../image/techmem.jpg';
import ayush from '../../image/ayush.jpg';
import aditi from '../../image/aditi.jpg';
import culhe from '../../image/culhe.jpg';
import culmem from '../../image/cul_mem.jpg';
import culco from '../../image/cul_co.jpg';
import ruchir from '../../image/ruchir.jpg';
import shweta from '../../image/shweta.jpg';
import prhe from '../../image/prhe.jpg';
import prmem from '../../image/prmem.jpg';
import prco from '../../image/prco.jpg';
import sumit from '../../image/sumit.jpg';
import spco from '../../image/spco.jpg';
import amaan from '../../image/amaan.jpg';
import spmem from '../../image/spmem.jpg';
import spme from '../../image/spme.jpg';
import cul_sec from '../../image/Cultural_Secretary.jpg';
import pr_sec from '../../image/PR_Secretary.jpg';
import teach_sec from '../../image/Technical_Secretary.jpg';
import sports_sec from '../../image/Sports_Secretary.jpg';
import ali from '../../image/ali.jpeg';
import General_Sectary from '../../image/General_Sectary.jpg';
import dgs1 from '../../image/dgs1.jpg';
import dgs2 from '../../image/dgs2.jpg';
import lr from '../../image/lr.jpg';
import brijesh from '../../image/brijesh.jpg';
import dismem from '../../image/dismem.jpg';
import disco from '../../image/disco.jpg';
import dms from '../../image/dom_logo.png';
import detlogo from '../../image/det_logo.jpeg';
import tech_cosec from '../../image/Technical_cosec.jpg'
import pr_cosec from '../../image/PR_cosec.jpg'
import pr_members from '../../image/PR_members.jpg'
import technical_members from '../../image/Technical_Members.jpg'
import Sports_Members from '../../image/Sports_Member.jpg'
import Cultural_Members from '../../image/Cultural_Members.jpg'
import cul_cosec from '../../image/cul_cosec.jpg'
import sports_cosec from '../../image/sports_cosec.jpg'
import FollowUs from '../util/FollowUs';
import CouncilSlider from '../util/CouncilSlider';
import CardSlider from '../util/CardSlider';
const AllCouncil = ({ isMenuOpen, toggleMenu, closeMenu, handleScroll, isSmallScreen }) => {
  const slides = [
    {
      image: `${baljeev}`,
      name: "BALJEEV SINGH",
      role: "(GENERAL SECRETARY)",
      year: "FINAL YEAR CSBS"
    },
    {
      image: `${kritika}`,
      name: "KRITIKA PAWAN",
      role: "(JOINT SECRETARY)",
      year: "FINAL YEAR CSBS"
    },
    {
      image: `${abhinav}`,
      name: "ABHINAV SINGH",
      role: "(TREASURER)",
      year: "FINAL YEAR IT"
    },
    {
      image: `${krishna}`,
      name: "KRISHNA PATEL",
      role: "(CO-TREASURER)",
      year: "TY CSE"
    },
    {
      image: `${jet}`,
      name: "JETRA VYAS",
      role: "(TECHNICAL SECRETARY)",
      year: "FINAL YEAR CSE"
    },
    {
      image: `${techco}`,
      role: "(TECHNICAL CO-HEADS)"
    },
    {
      image: `${techmem}`,
      role: "(TECHNICAL MEMBERS)"
    },
    {
      image: `${techme}`,
      role: "(TECHNICAL MEMBERS)"
    },
    {
      image: `${tecm}`,
      role: "(TECHNICAL MEMBERS)"
    },
    {
      image: `${culhe}`,
      role: "(CULTURAL SECRETARY)",
      year: "FINAL YEAR CSE & IT"
    },
    {
      image: `${culco}`,
      role: "(CULTURAL CO-HEADS)"
    },
    {
      image: `${culmem}`,
      role: "(CULTURAL MEMBERS)"
    },
    {
      image: `${prhe}`,
      role: "(PR SECRETARY)",
      year: "FINAL YEAR CSE"
    },
    {
      image: `${prco}`,
      role: "(PR CO-HEADS)"
    },
    {
      image: `${prmem}`,
      role: "(PR MEMBERS)"
    },
    {
      image: `${sumit}`,
      name: "SUMIT WAGHMARE",
      role: "(SPORTS SECRETARY)",
      year: "FINAL YEAR CSBS"
    },
    {
      image: `${spco}`,
      role: "(SPORTS CO-HEADS)"
    },
    {
      image: `${amaan}`,
      name: "AMAAN TATLI",
      role: "(SPORTS MEMBER)",
      year: "TY CSBS"
    },
    {
      image: `${spmem}`,
      role: "(SPORTS MEMBERS)"
    },
    {
      image: `${spme}`,
      role: "(SPORTS MEMBERS)"
    },
    {
      image: `${brijesh}`,
      name: "BRIJESH MANDAL",
      role: "(DISCIPLINE SECRETARY)",
      year: "FINAL YEAR CSBS"
    },
    {
      image: `${disco}`,
      role: "(DISCIPLINE CO-HEADS)"
    },
    {
      image: `${dismem}`,
      role: "(DISCIPLINE MEMBERS)"
    },
  ];
  const slides1 = [
    {
      image: `${General_Sectary}`,
      name: "ROHITASHWA ROY",
      role: "(GENERAL SECRETARY)",
      year: "SY MBA"
    },
    {
      image: `${dgs1}`,
      name: "SHUBHAM KUDALE",
      role: "(DEPT GENERAL SECRETARY)",
      year: "TY BCA"
    },
    {
      image: `${dgs2}`,
      name: "HARSHALI PATIL",
      role: "(DEPT GENERAL SECRETARY)",
      year: "TY BBA"
    },
    {
      image: `${tresurer}`,
      name: "SAHIL MANJULKAR",
      role: "(TREASURER)",
      year: "TY BCA"
    },
    {
      image: `${teach_sec}`,
      name: "HARSH MAHAJAN",
      role: "(TECHNICAL SECRETARY)",
      year: "TY BCA"
    },
    {
      image: `${cul_sec}`,
      name: "PIYUSHA BHOIR",
      role: "(CULTURAL SECRETARY)",
      year: "TY BBA"
    },
    {
      image: `${pr_sec}`,
      name: "SHRUTI TIWARI",
      role: "(PR SECRETARY)",
      year: "TY BBA"
    },
    {
      image: `${sports_sec}`,
      name: "RAFID MUKADDAM",
      role: "(SPORTS SECRETARY)",
      year: "SY MBA"
    },
    {
      image: `${lr}`,
      name: "SHREYA BOSE",
      role: "(LADY REPRESNTATIVE)",
      year: "SY MBA"
    },
    {
      image: `${tech_cosec}`,
      name: "",
      role: "(TECHNICAL CO-SECRETARIES)",
      year: "SY BCA/BBA"
    },
    {
      image: `${cul_cosec}`,
      name: "",
      role: "(CULTURAL CO-SECRETARIES)",
      year: "SY BBA"
    },
    {
      image: `${pr_sec}`,
      name: "",
      role: "(PR CO-SECRETARY)",
      year: "TY BBA"
    },
    {
      image: `${sports_cosec}`,
      name: "",
      role: "(SPORTS CO-SECRETARIES)",
      year: "SY BCA/BBA/MBA"
    },
    {
      image: `${technical_members}`,
      name: "",
      role: "(TECHNICAL MEMBERS)",
      year: "FY/SY/TY BCA/BBA"
    },
    {
      image: `${Cultural_Members}`,
      name: "",
      role: "(CULTURAL MEMBERS)",
      year: "FY/SY/TY BCA/BBA"
    },
    {
      image: `${pr_members}`,
      name: "",
      role: "(PR MEMBERS)",
      year: "FY/SY/TY BCA/BBA"
    },
    {
      image: `${Sports_Members}`,
      name: "",
      role: "(SPORTS MEMBERS)",
      year: "FY/SY/TY BCA/BBA"
    },
    // Add more slides as needed
  ];
  return (
    <>
      <div className=''>
        <img className="bg min-h-screen -z-50 " src={mainbg} alt="" />
        <PageNav toggleMenu={toggleMenu} closeMenu={closeMenu} isMenuOpen={isMenuOpen} handleScroll={handleScroll} logo={logo} buttonColor={"#7c3AED"}></PageNav>
        <hr className='border border-t-2 border-purple-600' />

        <div className="min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center">
          <div className="flex justify-center items-center gap-4">
            <img className='w-[120px] h-[50px]' src={detlogo} alt="" />
            <img className='w-[100px]' src={dms} alt="" />
          </div>
          <p className='text-center text-purple-600 text-8xl font-bold max-sm:text-4xl'>STUDENT COUNCIL</p>
          <p className='text-white text-3xl font-bold mt-5 lg:px-96 text-center max-sm:text-lg max-sm:px-7'>Passion, innovation, excitement - witness our student council's marvels: sports, culture, tech, esports - each event resonates with excellence. 🏆🌟</p>
        </div>

        <div className="flex justify-center ">
          <hr className='border border-t-4 border-purple-700 w-[60vw]' />
        </div>
        <div className="flex justify-center my-2">
          <h3 className='text-center text-4xl max-sm:text-xl text-purple-600 font-bold font-homo'>ENGINEERING COUNCIL</h3>
        </div>
        <div className="flex justify-center">
          <hr className='border border-t-4 border-purple-700 w-[60vw]' />
        </div>
        <div className="">
          <div className=" max-sm:hidden px-32 mt-8">
            <CouncilSlider slides={slides} imageWidth={250} imageHeight={250} ></CouncilSlider>
          </div>
          <div>
            {isSmallScreen && (
              <div className="max-sm:mt-5">
                <CardSlider slides={slides} imageWidth={250} imageHeight={250} />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-8 ">
          <hr className='border border-t-4 border-purple-700 w-[60vw]' />
        </div>
        <div className="flex justify-center my-2">
          <h3 className='text-center text-4xl max-sm:text-xl text-purple-600 font-bold font-homo'>MANAGEMENT COUNCIL</h3>
        </div>
        <div className="flex justify-center">
          <hr className='border border-t-4 border-purple-700 w-[60vw]' />
        </div>
        <div className="">
          <div className=" max-sm:hidden px-16 2xl:px-32 mt-8">
            <CouncilSlider slides={slides1} imageWidth={300} imageHeight={250} ></CouncilSlider>
          </div>
          <div>
            {isSmallScreen && (
              <div className="max-sm:mt-5">
                <CardSlider slides={slides1} imageWidth={250} imageHeight={250} />
              </div>
            )}
          </div>
        </div>
      </div>
      <FollowUs></FollowUs>
    </>
  )
}

export default AllCouncil