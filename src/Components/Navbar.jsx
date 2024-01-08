
import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

function Navbar() {
  return (
    <Nav>
      <div className='title'>
        <h4>
          <strong> Choose a plan that's just right for you!</strong>

        </h4>
      </div>
      <div className='search'>
                  <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="light" className="round-btn">Light</Button>{' '}

      </div >
      {/* <div className='search'> */}
      {/* </div> */}
    </Nav>
  );
}

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center; /* Align items vertically */

color: white;

.title {
  flex-grow: 1; /* Occupy remaining space */
  text-align: center; /* Center-align text */

  h4 {
    display: flex; /* Enable flexbox */
    align-items: center; /* Align items vertically */
    justify-content: center; /* Align content horizontally */

    strong {
        // margin-left: 0.8rem;
        // margin-bottom: 1px; /* Adjust the bottom margin as needed */
        // color: black;
        // // font-family: "Permanent Marker", cursive;
        // letter-spacing: 0.2rem;
        // display: inline-block; /* Ensure margin-bottom works */    }

        position: absolute;
        top: 150px; /* Adjust the top value to position the span down */
        left: 50%;
        transform: translateX(-50%);
        color: black;
        letter-spacing: 0.2rem;
  }
}

.search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #ffc107;
    }
    button {
        background-color: transparent;
        border: none;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.3rem;
        &:focus {
          outline: none;
        }
        // &::placeholder {
        //   color: #ffc107;
        //   font-family: "Permanent Marker", cursive;
        // }
      }
    }
    `;

export default Navbar;


