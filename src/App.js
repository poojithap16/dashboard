import React from 'react'
import styled from 'styled-components'
import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Basic from './Components/Basic'


export default function App() {
  return (
    <div>
      <Sidebar/>
      <Dashboard/>
<Navbar/>
<Basic/>
    </div>
  )
}

const Section= styled.section``;


 