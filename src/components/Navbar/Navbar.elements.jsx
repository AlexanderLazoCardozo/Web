import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const IconContainer = styled.div`
  margin-left: 0.5rem;
  font-size: 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const Menu = styled.ul`
margin:0;
z-index: 999;
paddingLeft: 100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1020px) {
    position: absolute;
    top: 70px;
    left: ${({ showMobileMenu }) => (showMobileMenu ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white;
    transition: 0.8s all ease;
  }
`;

export const MenuItem = styled.li`
  margin:0;
  z-index: 999;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
  background-color: white;
  transition: 0.3s all ease;
  hr {
    text-align: center;
    width: 0;
    border: none;
    border-bottom: 0.3rem solid #5b287a;
    transition: 0.3s all ease;
  }
  &:hover {
    background-color: white;
    transition: 0.8s all ease;
    hr {
      width: 100%;
      transition: 0.8s all ease;
      box-shadow: 1px -10px 20px  #B886D9;
    }
  }
  @media screen and (max-width: 1020px) {
    width: 100%;
    height: 70px;
  }
`;

export const MenuItemLink = styled.a`
  padding: 0.5rem 4rem;
  color: #5b287a;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
  text-decoration: none;
`;

export const MobileMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 1020px) {
    display: flex;
    margin-right: 0.5rem;
    svg {
      animation: ${({ showMobileMenu }) =>
        showMobileMenu ? "rotationMoveInitial" : "rotationMoveReverse"};
      animation-duration: 0.3s;
    }
    @keyframes rotationMoveInitial {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(90deg);
      }
    }
    @keyframes rotationMoveReverse {
      0% {
        transform: rotate(90deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;