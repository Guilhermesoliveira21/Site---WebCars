import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  width: 100%;
  position: relative;

  /* Menu icon only visible on small screens */
  .menu-icon {
    display: none;
  }

  @media (max-width: 1024px) {
    padding: 1rem 2rem; /* Adjust padding for smaller screens */
    
    .menu-icon {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      cursor: pointer;
    }
  }
`;

// Navigation Menu
export const Navegacao = styled.ul`
  display: flex;
  gap: 1.6rem;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: ${(props) => props.theme.colors.gray};
    text-decoration: none;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      background-color: ${(props) => props.theme.backgroundColor.secundary};
      height: 2px;
      width: 0%;
      transition: width 0.2s;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 60px; /* Adjust as needed */
    right: 20px; /* Adjust as needed */
    background-color: ${(props) => props.theme.colors.white};
    padding: 1rem;
    border-radius: 8px;
    width: 200px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    li {
      margin: 0;
      padding: 10px 0;
      text-align: center;
    }
  }
`;