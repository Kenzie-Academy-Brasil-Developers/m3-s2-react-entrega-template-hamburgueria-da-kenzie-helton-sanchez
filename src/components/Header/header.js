import styled from "styled-components";

export const HeaderStyled = styled.header`

  margin: 0 auto;
  max-width: 1440px;
  width: 100vw;
  height: 139px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  box-shadow: 5px 5px 5px var(--grey-20);
  margin-bottom: 2rem;
  background: var(--grey-0);

  div {
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    width: 365px;
    max-width: 95%;
    background: #fff;
    border: 2px solid var(--grey-0);
    border-radius: 8px;
    padding: 0 10px ;
    gap: .3rem;
  }
  div > input {
    max-width: 70%;
    min-width: 200px;
    max-height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 115px;
    height: 3.75rem;
    background: #fff;
    border: none;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 30%;
    max-width: 107px;
    height: 40px;
    background: var(--color-primary);
    border: 2px var(--color-primary);
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 0;
    right: 0.7rem;
    bottom: 0.7rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--grey-0);
  }

  @media (min-width: 768px) {
    height: 80px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  
`
