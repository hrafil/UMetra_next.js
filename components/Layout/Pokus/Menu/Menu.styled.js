import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  width: 100vw;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  border: 3px solid yellow
  // transition: transform 0.3s ease-in-out;
  // transform: translateX(-100%);
  z-index: 100;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  a {
    font-size: 20px;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;
