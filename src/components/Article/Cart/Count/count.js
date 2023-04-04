import styled from "styled-components";

export const CardCount = styled.div`
  height: 140px;
  width: 100%;
  border: 2px red;
  background: var(--grey-20);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  border-top: 2px solid var(--grey-50);
  border-radius: 0px 0px 5px 5px;

  div {
    display: flex;
    justify-content: space-around;
  }

  button {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    height: 60px;
    width: 90%;
  }
`;
