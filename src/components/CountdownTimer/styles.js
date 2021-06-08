import styled from "styled-components";

export const CountdownTimerContainer = styled.div`
  text-align: center;
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .countdown {
    width: 300px;
    height: 300px;
  }

  .time {
    font-family: "Odibee Sans";
    font-size: 4rem;
    letter-spacing: 0.4rem;
  }

  .button {
    border: 0;
    margin-top: 2rem;
    width: 250px;
    height: 50px;
    border-radius: 5px;
    font-family: "Inter";
    letter-spacing: 0.2rem;
    font-weight: 600;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.2s ease;
  }

  .button.start {
    background-color: rgb(55, 48, 156);
    box-shadow: 0px 7.5px 10px rgb(16, 13, 56);
  }

  .button.start:hover {
    background-color: rgb(81, 74, 187);
    box-shadow: 0px 7.5px 10px rgb(39, 33, 116);
  }

  .button.stop {
    background-color: rgb(197, 12, 37);
    box-shadow: 0px 7.5px 10px rgb(68, 1, 10);
  }

  .button.stop:hover {
    background-color: rgb(219, 39, 63);
    box-shadow: 0px 7.5px 10px rgb(109, 11, 24);
  }

  .CircularProgressbar-path {
    stroke: ${(props) => props.theme.colors.progressbar};
  }

  @media only screen and (min-width: 1440px) {
    .countdown {
      width: 350px;
      height: 350px;
    }

    .countdown .time {
      font-size: 5rem;
    }

    .button {
      width: 325px;
      height: 60px;
      font-size: 1.75rem;
      margin-top: 2.5rem;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1439px) {
    .countdown {
      width: 250px;
      height: 250px;
    }

    .countdown .time {
      font-size: 3.5rem;
    }

    .button {
      width: 275px;
      height: 50px;
      font-size: 1.5rem;
      margin-top: 2.5rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    .countdown {
      width: 300px;
      height: 300px;
    }

    .countdown .time {
      font-size: 3.5rem;
    }

    .button {
      width: 275px;
      height: 50px;
      font-size: 1.5rem;
      margin-top: 3rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .countdown {
      width: 200px;
      height: 200px;
    }

    .countdown .time {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 425px) {
    .countdown {
      width: 180px;
      height: 180px;
    }

    .countdown .time {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 375px) {
    .button {
      margin-top: 10%;
    }
  }

  @media only screen and (max-width: 320px) {
    margin-top: 10%;

    .countdown {
      width: 200px;
      height: 200px;
    }

    .button {
      margin-top: 15%;
    }
  }
`;
