import styled from "styled-components";

export const Input = styled.input`
  width: 90%;
  height: 39px;

  border-radius: 3px;
  border: none;

  padding: 0px 13px 0px 13px;

  font-size: 1rem;
  color: var(--color-grey0);

  background-color: var(--color-grey2);

  :focus {
    border: 1px solid var(--color-grey0);
  }
`;
