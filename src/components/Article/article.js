import styled from "styled-components";

export const MainArticle = styled.main`
  margin: 0 auto;
  min-width: 300px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  gap: 2rem;

  .container__cart {

    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  @media (min-width: 1024px) {
    
    display: flex;
    flex-wrap: nowrap;

    .container__products--ul {
      width: 1000px;
      max-width: 65.4vw;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
    }
    .container__cart {
      width: 25%;
    }
  }
`;
