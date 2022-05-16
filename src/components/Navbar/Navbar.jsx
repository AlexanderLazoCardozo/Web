import { useState } from "react";
import {
  Container,
  Wrapper,
  IconContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileMenuIcon,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import wasiLogo from "../../images/wasiLogo.png"
import {NavLink , Outlet } from 'react-router-dom';

import "./estilos1.css" 

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <Container style={{position:"fixed",boxShadow: "0px 15px 20px 5px rgba(0, 0, 0, 0.2)"}}>
        <Wrapper style={{}}>
          <IconContext.Provider value={{ color: "#5b287a", size: "1.8em" }}>
            <IconContainer showMobileMenu={showMobileMenu}>
              <NavLink to="/">
                <img style={{width:"100px"}} src={wasiLogo} />
              </NavLink>
            </IconContainer>

            <MobileMenuIcon onClick={() => handleShowMobileMenu()}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileMenuIcon>

            <Menu  showMobileMenu={showMobileMenu}>
             

              <NavLink  to="/Nosotros">
              <MenuItem  onClick={() => handleShowMobileMenu()}>
                    <MenuItemLink id="nos" >Nosotros</MenuItemLink>
                    <hr />
              </MenuItem>
              </NavLink>

              <NavLink to="/Contacto">
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink  id="nos">Contacto</MenuItemLink>
                <hr />
              </MenuItem>
              </NavLink> 

              <NavLink to="/Planes">
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink id="nos"> Planes </MenuItemLink>
                <hr />
              </MenuItem>
              </NavLink>

              <NavLink to="/Blog">
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink id="nos"> Blog </MenuItemLink>
                <hr />
              </MenuItem>
              </NavLink>

              <NavLink  to="/Solicitar">
              <MenuItem  onClick={() => handleShowMobileMenu()}>
                <MenuItemLink id="nos2"> SOLICITAR </MenuItemLink>
                <hr />
              </MenuItem>
              </NavLink> 

            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;