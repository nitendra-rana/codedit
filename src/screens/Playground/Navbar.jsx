import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
const NavbarContainer = styled.div`
  height: 4.5rem;
  background: #241f21;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavbarContent = styled.button`
  background: transparent;
  border: 0;

  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`

const Logo = styled.img`
  width: 60px;
`

const MainHeading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #fff;

  span{
    font-weight: 700;
  }
`

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <NavbarContainer>
      <NavbarContent onClick={() => {
        navigate('/')
      }}>
        <Logo src={logo} />
        <MainHeading>
          <span>Codedit</span>
        </MainHeading>
      </NavbarContent>
    </NavbarContainer>
  )
}

export default Navbar