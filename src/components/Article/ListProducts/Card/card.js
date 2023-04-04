import styled from "styled-components";

export const CardProductStyle = styled.li`

  display: flex;
  min-width: 300px;
  height: 346px;
  background: #fff;
  border: 2px solid var(--grey-20);
  border-radius: 5px;
  list-style-type: none;
  position: relative;

  .boxImg {
    display: flex;
    justify-content: center;
    width: 298px;
    height: 200px;
    border-radius: 3px 3px 0 0;
    background: var(--grey-20);
  }
  img {
    width: 200px;
    height: 200px;
    background: var(--grey-20);
  }

  .description {
    position: absolute;
    left: 1.5rem;
    bottom: 1rem;
    line-height: 150%;
  }
  .description > p {
    font-weight: bold;
    color: var(--color-primary);
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    width: 106px;
    height: 40px;
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
  }
`;
