import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.25rem;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.headerBorder};
  background-color: ${props => props.theme.colors.secondary}
`;

export const HeaderTitle = styled.div`
  font-size: "Poppins";
  text-transform: uppercase;
`;

export const HeaderSwitch = styled.div`
  .switch {
    cursor: pointer;
    color: white;
    border-radius: 50%;
    border: 0;
    padding: 1rem;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.45);
    background: transparent;
    transition: 0.2s ease;
    font-size: 0;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;
