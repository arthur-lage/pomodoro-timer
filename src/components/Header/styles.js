import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 10%;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.headerBorder};
  background-color: ${props => props.theme.colors.secondary};
`;

export const HeaderTitle = styled.div`
  font-size: "Poppins";
  text-transform: uppercase;

  @media only screen and (max-width: 320px) {
    font-size: .8rem;
  }
`;

export const HeaderSwitch = styled.div`
  .switch {
    cursor: pointer;
    color: white;
    border-radius: 50%;
    border: 0;
    padding: 1rem;
    box-shadow: 0px 0px 15px ${props => props.theme.colors.switchShadow};
    background: transparent;
    transition: 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;
