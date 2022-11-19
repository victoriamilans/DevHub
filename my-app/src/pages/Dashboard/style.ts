import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLinkBackLogin = styled(Link)`
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

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;

  width: 100%;
  height: 73px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  border-bottom: 1px solid var(--color-grey3);

  background-color: var(--color-grey4);

  div {
    width: 100%;
    height: 73px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1000px) {
    position: static;

    div {
      max-width: 1000px;
    }
  }
`;

export const StyledProfile = styled.div`
  position: absolute;
  top: 63px;

  width: 100%;
  height: 131px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px;

  border-bottom: 1px solid var(--color-grey3);

  div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 10px;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-white);
  }

  p {
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--color-grey2);
  }

  @media (min-width: 400px) {
    align-items: center;

    div {
      max-width: 1000px;

      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const StyledDashboard = styled.div`
  position: absolute;
  top: 204px;

  width: 100%;
  height: 100vh;

  gap: 20px;

  padding: 10px;

  @media (min-width: 400px) {
    color: var(--color-white);

    display: flex;
    flex-direction: column;

    max-width: 1000px;

    margin-top: 20px;

    h2 {
      margin-top: 10px;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }
`;

export const StyledDashContainer = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
`;
