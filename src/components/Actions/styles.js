import styled from "styled-components";

export const ActionsContainer = styled.div`
  border-radius: 20px;
  display: flex;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  align-items: center;
  width: 35%;
  margin: 0 auto;
  margin-top: 3rem;
  justify-content: center;

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
      color: white;
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

    @media only screen and (min-width: 1440px) {
      font-size: 1.2rem;
    }

    @media only screen and (min-width: 1366px) {
      font-size: 1rem;
    }

    @media only screen and (min-width: 1024px) {
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: 1920px) {
    width: 70%;
  }
`;

export const ChangingAlert = styled.div`
  position: absolute;
  right: 50%;
  transform: translateX(50%);

  p {
    transition: 0.2s ease;
    color: ${(props) => props.theme.colors.text};
    font-size: 1.35rem;
  }

  p.hidden {
    opacity: 0;
    pointer-events: none;
  }

  p.active {
    opacity: 1;
    pointer-events: auto;
  }

  @media only screen and (min-width: 1440px) {
    bottom: 90px;
    
    p{
      font-size: 1.75rem;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1439px) {
    bottom: 20px;
    p{
      font-size: 1.35rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    bottom: 55px;
    p{
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    bottom: 20px;
  }

  @media only screen and (max-width: 425px) {
    bottom: 35px;
  }

  @media only screen and (max-width: 375px) {
    bottom: 30px;
  }

  @media only screen and (max-width: 320px) {
    bottom: 20px;
  }
`;
