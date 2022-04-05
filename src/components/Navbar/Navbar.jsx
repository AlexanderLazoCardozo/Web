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
import { Sticky } from "semantic-ui-react";
import {NavLink ,Link } from 'react-router-dom';


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
    <Sticky>
      <Container >
        <Wrapper >
          <IconContext.Provider value={{ color: "#5b287a", size: "1.8em" }}>
            <IconContainer showMobileMenu={showMobileMenu}>
                <img style={{width:"100px"}} src={wasiLogo} />
            </IconContainer>

            <MobileMenuIcon onClick={() => handleShowMobileMenu()}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileMenuIcon>

            <Menu  showMobileMenu={showMobileMenu}>
              <NavLink to="/">
              <MenuItem   onClick={() => handleShowMobileMenu()}>
                    <MenuItemLink   >INICIO</MenuItemLink>
                    <hr />
              </MenuItem>
              </NavLink>

              <NavLink   to="/Nosotros">
              <MenuItem  onClick={() => handleShowMobileMenu()}>
                    <MenuItemLink >NOSOTROS</MenuItemLink>
                    <hr />
              </MenuItem>
              </NavLink>

              <NavLink to="/Contacto">
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink>CONTACTO</MenuItemLink>
                <hr />
              </MenuItem>
              </NavLink> 

              <NavLink to="/Planes">
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink> PLANES </MenuItemLink>
                <hr />
              </MenuItem>
              </NavLink>

              <NavLink  to="/Solicitar">
              <MenuItem  onClick={() => handleShowMobileMenu()}>
                <MenuItemLink style={{fontSize:"20px"}}> SOLICITAR </MenuItemLink>
                <hr />
              </MenuItem>
              </NavLink> 

            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
    </Sticky> 
    </>
  );
};

export default Navbar;