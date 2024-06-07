import styled from 'styled-components'

export const SidebarContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isVisible }) => (isVisible ? '0' : '-100%')};
  height: 100%;
  width: 80%;
  background-color: var(--blue);
  color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease-in-out;
  padding: 1rem;
  z-index: 1000;

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
