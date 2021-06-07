import styled from "styled-components";

export const ActionsContainer = styled.div`
  border-radius: 20px;
  display: flex;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  align-items: center;
  width: 35%;
  margin: 0 auto;
  margin-top: 3rem;

  button {
    font-family: "Poppins";
    cursor: pointer;
    border: 0;
    padding: 0.75rem;
    transition: 0.2s ease;
    background-color: transparent;
    color: ${(props) => props.theme.colors.actionsText};
    width: 100%;
    height: 100%;

    &:hover {
      background: rgba(0, 0, 0, 0.25);
    }

    &.active {
      background: ${(props) => props.theme.colors.actions};
      color: white
    }

    &:nth-child(1) {
      border-radius: 20px 0 0 20px;
    }

    &:nth-child(2) {
      margin: 0 auto;
    }

    &:nth-child(3) {
      border-radius: 0 20px 20px 0;
    }
  }
`;
