import React from 'react'
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components'
import Basic from './Basic';
import Standard from './Standard';
import Premium from './Premium';
import Free from './Free';
import Plan from './Plan';

function Dashboard() {
  return (
<Section>
    <Navbar/>
    <div className='grid'>
<div className="row__one">
<Basic/>
<Standard/>
<Premium/>
</div>
<div className="row__two">
<Free/>
<Plan/>
</div>
    </div>
</Section>
  )
}

const Section=styled.section`

margin-left:18vw;
padding:2rem;
height:100%
`;

export default Dashboard