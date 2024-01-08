import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MdSpaceDashboard } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { BiLogOutCircle } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { cardStyles } from "./Reusable";



function Sidebar() {
 const [currentLink,setCurrentLink]=useState(1)

  return (

    <div>
        <>
        <Section>

 <div className='top'>
        <div className='image'>
      <img src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" alt="" />  
    </div>   
    <div className="title">
        <strong  > Ram Mohan</strong> <IoIosArrowForward />
        <h6>      rammohan2@gmail.com</h6>
     </div>     

                <div className='brand'>
                   {/* Profile */}
                </div>
                <div className='toggle'> </div>
                 <div className='links'>
                    <ul>
                        <li onClick={() => setCurrentLink(1)}
                        className={currentLink ===1 ? "active" : ""}>
                            <a href="#">
                            <MdSpaceDashboard />
                                <span> Dashboard</span>

                            </a>
                        </li>
                        <li onClick={() => setCurrentLink(2)}
                        className={currentLink ===2 ? "active" : ""}>
                            <a href="#">
                            <PiPottedPlantFill />
                                <span> Perks</span>

                            </a>
                        </li>
                        <li onClick={() => setCurrentLink(3)}
                        className={currentLink ===3 ? "active" : ""}>
                            <a href="#">
                            <IoExtensionPuzzleSharp />
                                <span> Addons</span>

                            </a>
                        </li>
                        <li onClick={() => setCurrentLink(4)}
                        className={currentLink ===4 ? "active" : ""}>
                            <a href="#">
                            <TbMessageCircleQuestion />
                                <span> FAQ</span>

                            </a>
                        </li>
                        <li onClick={() => setCurrentLink(5)}
                         className={currentLink ===5 ? "active" : ""}>
                            <a href="#">
                            < TiMessages/>
                                <span> Support</span>

                            </a>
                        </li>

                    </ul>
                 </div>
            </div>
            <div className='logout ' >
                <a href="#"></a>

                <span className='logout ' >Logout </span>
                
                <BiLogOutCircle />

            </div>
        </Section>
        </>
    </div>
  )
}

const Section = styled.section
`
position: fixed;
  left: 0;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8rem 0;
  gap: 2rem;
${cardStyles};


.image {
    position: relative;
    height: 15rem; /* Adjust height according to your layout */
    width: 6rem; /* Adjust width according to your layout */
}
 .title{
    position: relative;
     height: 9rem; /* Adjust height according to your layout */
    width: 9rem; /* Adjust width according to your layout */
 
 }

.image img {
    position: absolute;
    height: 5rem;
    width: 8rem;
    object-fit: cover;
    border-radius: 10rem;
    transition: 0.5s ease-in-out;
    left: 0;
    bottom: 0.500rem; /* Adjust this value to position the image slightly towards the bottom */
}

.image:hover img {
    transform: scale(1.3);
}

.title {
    position: absolute;
    top: 15rem; /* Adjust this value to control the gap between the image and the title */
    left: 50%;
    transform: translateX(-50%);
    text-align: center; /* Center the title horizontally */
    width: 100%; /* Ensures the title stays centered */
    font-weight: bold; /* Optionally adjust font styles */
}

.image{
    top:-0.5rem;
}
.top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        // font-size: 2rem;
        // color: #ffc107;
        // font-family: "Permanent Marker", cursive;
      }
    }
    .links {
        display: flex;
        justify-content: center;
        ul {
          list-style-type: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          li {
            padding: 0.6rem 1rem;
            border-radius: 0.6rem;
            &:hover {
              background-color: #70bed4;
              a {
                color: black;
              }
            }
            a {
              text-decoration: none;
              display: flex;
              gap: 1rem;
              color: black;
            }
          }
          .active {
            background-color: #70bed4;
            a {
              color: black;
            }
          }
          .logout {
            padding: 0.3rem 3rem;
            border-radius: 0.6rem;
            &:hover {
              background-color:white ;
            }
            a {
              text-decoration: none;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              color: 
            }
          }
`;

export default Sidebar