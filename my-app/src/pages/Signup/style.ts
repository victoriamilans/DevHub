import { Link } from "react-router-dom";
import styled from "styled-components";

export const Error = styled.p`
  color: var(--color-error);
  font-size: 0.7rem;
`;

export const Select = styled.select`
  width: 90%;
  height: 39px;

  border-radius: 3px;

  padding: 0px 13px 0px 13px;

  font-size: 1rem;
  color: var(--color-grey1);

  background-color: var(--color-grey2);
`;

export const StyledLinkSignup = styled(Link)`
  width: 80px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-grey3);
  color: var(--color-white);

  border-radius: 3px;

  text-decoration: none;

  span {
    font-size: 0.8rem;
  }
`;
