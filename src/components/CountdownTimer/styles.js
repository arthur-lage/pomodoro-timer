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
`;
