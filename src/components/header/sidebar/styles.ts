import styled from 'styled-components'

export const SidebarContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isVisible }) => (isVisible ? '0' : '-100%')};
  height: 100%;
  width: 80%;
  background-color: var(--blue);
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease-in-out;
  padding: 1rem;
  z-index: 1000;
  overflow-y: auto;

  @media only screen and (min-width: 768px) {
    width: 50%;
    padding: 1rem 2rem;
  }

  @media only screen and (min-width: 1024px) {
    width: 40%;
  }

  @media only screen and (min-width: 1700px) {
    width: 20%;
  }
`
export const CartHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 2rem 0;

  p {
    font-size: 1.75rem;
    font-weight: 700;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #000;
    color: #fff;

    padding: 0.25rem;

    border: none;
    border-radius: 100%;
    cursor: pointer;
  }
`

export const CartContent = styled.div`
  width: 100%;
`

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  position: relative;

  > p {
    font-weight: 700;
  }

  > button {
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #000;
    color: #fff;

    /* padding: 0.15rem; */
    width: 1.125rem;
    height: 1.125rem;

    border: none;
    border-radius: 100%;
    cursor: pointer;
  }
`

export const CartItemActions = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;

  > p {
    font-size: 0.65rem;
    font-weight: 400;
  }

  > div {
    border: 1px solid var(--border);
    border-radius: 0.25rem;
    padding: 0.15rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span {
      width: 100%;
      border-left: 1px solid var(--border);
      border-right: 1px solid var(--border);
      text-align: center;
      font-weight: 400;
      font-size: 0.75rem;
    }
  }

  button {
    width: 100%;
    background: #fff;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;

    &:hover {
      background: #f5f5f5;
    }
  }
`
