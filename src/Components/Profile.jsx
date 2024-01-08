import React from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from "react-icons/io";
import { cardStyles } from "./Reusable";
function Profile() {
  return (
    <Section>
    <div className='image'>
      <img src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" alt="" />  
    </div>   
    <div className="title">
        <strong  > Ram Mohan</strong> <IoIosArrowForward />
        <h6>      rammohan2@gmail.com</h6>
     </div>     
    </Section>
  )
}

const Section = styled.section`
${cardStyles};
.image{

    img{
        height:5rem;
        width: 5rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
      left:0

    }
    &:hover {
        img {
          transform: scale(1.3)
        }

}
  }
`;

export default Profile