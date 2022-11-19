import { Link } from "react-router-dom";
import styled from "styled-components";

interface IButtonProps {
  disable?: string;
}

interface ILinkProps {
  disable?: string;
}

export const Button = styled.button<IButtonProps>`
  width: 90%;
  height: 39px;

  border-radius: 3px;

  margin-top: 20px;

  background-color: ${(props) =>
    props.disable
      ? "var(--color-primary-negative)"
      : props.color
      ? "var(--color-primary)"
      : "var(--color-grey1)"};
  color: var(--color-white);

  :focus {
    background-color: ${(props) =>
      props.color ? "var(--color-primary-focus)" : "var(--color-grey2)"};
  }

  :hover {
    background-color: ${(props) =>
      props.disable
        ? "var(--color-primary-negative)"
        : props.color
        ? "var(--color-primary-focus)"
        : "var(--color-grey2)"};
  }
`;

export const StyledLinkLogin = styled(Link)<ILinkProps>`
  width: 90%;
  height: 39px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3px;

  margin-top: 20px;

  text-decoration: none;

  color: var(--color-white);

  background-color: ${(props) =>
    props.disable
      ? "var(--color-primary-negative)"
      : props.color
      ? "var(--color-primary)"
      : "var(--color-grey1)"};
  color: var(--color-white);

  :focus {
    background-color: ${(props) =>
      props.color ? "var(--color-primary-focus)" : "var(--color-grey2)"};
  }

  :hover {
    background-color: ${(props) =>
      props.disable
        ? "var(--color-primary-negative)"
        : props.color
        ? "var(--color-primary-focus)"
        : "var(--color-grey2)"};
  }

  p {
    font-size: 0.9rem;
    font-weight: 100;
    color: var(--color-white);
  }
`;
