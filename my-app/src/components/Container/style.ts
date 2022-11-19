import styled from "styled-components";

interface IContainerProps {
  height?: string;
}

export const Container = styled.form<IContainerProps>`
  width: 90%;
  height: ${(props) => (props.height ? "453px" : "855px")};

  background-color: var(--color-grey3);
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  label {
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--color-grey0);

    margin: 0px 17px;

    align-self: flex-start;
  }

  div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }

  span {
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--color-grey1);
  }

  span + {
    color: var(--color-white);
  }

  .eye {
    width: 12px;
    position: relative;
    top: 0;
    right: 8%;
  }

  @media (min-width: 600px) {
    width: 50%;
    max-width: 400px;
  }
`;
