import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import styled from 'styled-components'
export default function Header() {
  const [close, setClose] = React.useState(false)

  return (
    <Conatainer>
      <Logo>
        <a href='#'>
          <img src='/images/logo.svg' alt='logo image' />
        </a>
      </Logo>
      <MenuModels>
        <a href='#'>Model S</a>
        <a href='#'>Model Y</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
      </MenuModels>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomIcon onClick={() => setClose(!close)} />
      </RightMenu>
      <SideBar show={close}>
        <DivOfClose>
          <CloseButton onClick={() => setClose(!close)} />
        </DivOfClose>
        <li>
          {' '}
          <a href='#'>Model S</a>
        </li>
        <li>
          {' '}
          <a href='#'>Model Y</a>
        </li>
        <li>
          {' '}
          <a href='#'>Model 3</a>
        </li>
        <li>
          {' '}
          <a href='#'>Model X</a>
        </li>
        <li>
          {' '}
          <a href='#'>Solar Roof</a>
        </li>
        <li>
          {' '}
          <a href='#'>Solar Panels</a>
        </li>
        <li>
          {' '}
          <a href='#'>Existing Enventory</a>
        </li>
        <li>
          {' '}
          <a href='#'>Used Inventory</a>
        </li>
        <li>
          {' '}
          <a href='#'>Test Drive</a>
        </li>
        <li>
          {' '}
          <a href='#'>Commercial Energy</a>
        </li>
        <li>
          {' '}
          <a href='#'>Investors Relations</a>
        </li>
      </SideBar>
    </Conatainer>
  )
}
const Conatainer = styled.div`
  z-index: 1;
  position: fixed;
  height: 60px;
  // background: green;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
`
const Logo = styled.div`
  padding: 10px;
`
const MenuModels = styled.div`
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 10px;
    flex-wrap: nowrap;
    cursor: pointer;
  }
  @media (max-width: 890px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 10px;
    padding: 0 10px;
  }
  @media (max-width: 400px) {
    a {
      font-size: 14px;
    }
  }
`
const CustomIcon = styled(MenuIcon)`
  cursor: pointer;
`

const SideBar = styled.div`
  z-index: 2;
  position: fixed;
  width: 300px;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  list-style: none;
  li {
    margin-top: 35px;
    padding: 10px 0;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }
  a {
    text-decoration: none;
    font-weight: 400;
  }
  transform: ${(props) => (props.show ? 'translatX(0)' : 'translateX(100%)')};
  transition: 0.3s ease-in;
`
const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`
const DivOfClose = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`
