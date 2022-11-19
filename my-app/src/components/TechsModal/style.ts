import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: var(--color-grey3);

  width: 90%;
  height: 330px;

  margin: 0 auto;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 40px;

    padding: 20px;
    border-radius: 4px 4px 0px 0px;

    background-color: var(--color-grey2);
  }

  div > h2 {
    font-size: 0.9rem;
    font-weight: 700;

    margin: 0px;
  }

  div > button {
    color: var(--color-grey1);
  }

  form {
    width: 90%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0 auto;

    gap: 10px;
  }

  form > label {
    font-size: 0.8rem;
    color: var(--color-grey1);
  }

  form > input {
    width: 100%;
    height: 39px;

    padding: 10px;
    border-radius: 4px;
    border: 1px solid var(--color-white);

    color: var(--color-white);
  }

  form > select {
    width: 100%;
    height: 39px;

    padding: 10px;
    border-radius: 4px;

    color: var(--color-grey1);

    border: 1px solid var(--color-white);
  }

  form > button {
    width: 100%;
    height: 38px;

    border-radius: 4px;

    background-color: var(--color-primary);
    color: var(--color-white);

    font-size: 0.9rem;
  }

  form > button:hover {
    background-color: var(--color-primary-focus);
  }

  form > button:focus {
    background-color: var(--color-primary-focus);
  }

  @media (min-width: 1000px) {
    position: fixed;
    top: 252px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;

    max-width: 350px;
  }

  @media (max-width: 400px) {
    margin-bottom: 20px;

    div > h2 {
      color: var(--color-white);
    }
  }
`;

export const ModalOverlay = styled.div`
  @media (min-width: 1000px) {
    width: 100vw;
    height: 100vh;

    background-color: rgba(7, 7, 7, 0.66);

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2000;
  }
`;

export const StyledTechsHeader = styled.div`
  width: 90%;
  height: 50px;

  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    border-radius: 4px;

    background-color: var(--color-grey2);
  }

  @media (max-width: 400px) {
    h2 {
      color: var(--color-white);
      font-size: 1rem;
    }
  }
`;
