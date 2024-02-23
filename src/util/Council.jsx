import React from 'react'
import { Link } from 'react-router-dom';
import baljeev from '../../image/baljeev.jpg';
import abhinav from '../../image/abhinav.jpg';
import tresurer from '../../image/TRESURER.jpg';
import kritika from '../../image/kritika.jpg';
import jet from '../../image/tech_sec_eng.jpg';
import ayush from '../../image/ayush.jpg';
import aditi from '../../image/aditi.jpg';
import ruchir from '../../image/ruchir.jpg';
import shweta from '../../image/shweta.jpg';
import sumit from '../../image/sumit.jpg';
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
import CardSlider from './CardSlider';
import CouncilSlider from './CouncilSlider';
const Council = ({ isSmallScreen }) => {
    const slides = [
        {
            image: `${baljeev}`,
            name: "BALJEEV SINGH",
            role: "(GENERAL SECRETARY)",
            year: "FINAL YEAR CSBS"
        },
        {
            image: `${General_Sectary}`,
            name: "ROHITASHWA ROY",
            role: "(GENERAL SECRETARY)",
            year: "SY MBA"
        },
        {
            image: `${kritika}`,
            name: "KRITIKA PAWAN",
            role: "(JOINT SECRETARY)",
            year: "FINAL YEAR CSBS"
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
            image: `${abhinav}`,
            name: "ABHINAV SINGH",
            role: "(TREASURER)",
            year: "FINAL YEAR IT"
        },
        {
            image: `${tresurer}`,
            name: "SAHI MANJULKAR",
            role: "(TREASURER)",
            year: "TY BCA"
        },
        {
            image: `${jet}`,
            name: "JETRA VYAS",
            role: "(TECHNICAL HEAD)",
            year: "FINAL YEAR CSE"
        },
        {
            image: `${teach_sec}`,
            name: "HARSH MAHAJAN",
            role: "(TECHNICAL SECRETARY)",
            year: "TY BCA"
        },
        {
            image: `${ayush}`,
            name: "AYUSH DHWAJ",
            role: "(CULTURAL HEAD)",
            year: "FINAL YEAR CSE"
        },
        {
            image: `${cul_sec}`,
            name: "PIYUSHA BHOIR",
            role: "(CULTURAL SECRETARY)",
            year: "TY BBA"
        },
        {
            image: `${aditi}`,
            name: "AIDIT THAKUR",
            role: "(CULTURAL HEAD)",
            year: "FINAL YEAR IT"
        },
        {
            image: `${ruchir}`,
            name: "RUCHIR UPADHYAY",
            role: "(PR HEAD)",
            year: "FINAL YEAR CSE"
        },
        {
            image: `${pr_sec}`,
            name: "SHRUTI TIWARI",
            role: "(PR SECRETARY)",
            year: "TY BBA"
        },
        {
            image: `${shweta}`,
            name: "SHWETA ENDDAW",
            role: "(PR HEAD)",
            year: "FINAL YEAR CSE"
        },
        {
            image: `${ali}`,
            name: "ALI KHAN",
            role: "(MEDIA HEAD)",
            year: "TY AIML"
        },
        {
            image: `${sumit}`,
            name: "SUMIT WADHMARE",
            role: "(SPORTS HEAD)",
            year: "FINAL YEAR CSBS"
        },
        {
            image: `${sports_sec}`,
            name: "RAFID MUKADDAM",
            role: "(SPORTS SECRETARY)",
            year: "SY MBA"
        },
        {
            image: `${brijesh}`,
            name: "BRIJESH MANDAL",
            role: "(DISCIPLINE HEAD)",
            year: "FINAL YEAR CSBS"
        },
        {
            image: `${lr}`,
            name: "SHREYA BOSE",
            role: "(LADY REPRESNTATIVE)",
            year: "SY MBA"
        },
        // Add more slides as needed
    ];
    const text = 'COUNCIL (ENG & DMS)'
    return (
        <>
            <div>
                <div className="flex justify-center mt-6">
                    <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
                </div>
                <div className="flex justify-center my-2">
                    <h3 className='text-center text-4xl max-sm:text-3xl text-yellow-300 font-bold'>{text}</h3>
                </div>
                <div className="flex justify-center">
                    <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
                </div>

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
                <div className="flex justify-center mt-6">
                <button className='bg-yellow-500 hover:bg-yellow-600 w-40 p-2 text-white rounded-full font-semibold text-lg'>
                <Link to="/allcouncil">
                View Council &gt;
              </Link>
                </button>
            </div>
            </div>
        </>
    )

}

export default Council