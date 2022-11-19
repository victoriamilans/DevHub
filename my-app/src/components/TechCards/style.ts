import styled from "styled-components";

export const StyledTechCard = styled.li`
  background: var(--color-grey4);

  width: 95%;
  height: 55px;

  margin: 30px 0px 0px 0px;
  padding: 10px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;

    width: 50%;
    height: 100%;
  }


  h2 {
    margin: 0px;

    font-size: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 0.7rem;
    font-weight: 400;
    color: var(--color-grey1);
  }

  :hover {
    background-color: var(--color-grey2);
  }

  @media (max-width: 400px) {
    h2 {
      color: var(--color-white);
    }
  }

  @media (min-width: 1000px) {
    padding: 20px;

    img {
      visibility: visible;
    }
  }
`;

export const StyledSpan = styled.span`
  margin: 50px;

  text-align: center;

  @media (max-width: 400px) {
    color: var(--color-white);
  }
`;
