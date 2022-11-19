import styled from "styled-components";

export const StyledTechList = styled.ul`
  background-color: var(--color-grey3);

  width: 90%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  border-radius: 4px;

  @media (min-width: 1000px) {
    width: 100%;
  }
`;
