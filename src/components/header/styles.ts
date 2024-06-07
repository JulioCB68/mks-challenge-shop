import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--blue);
  color: #fff;

  padding: 1rem 2rem;
`

export const Title = styled.p`
  strong {
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0 0.5rem 0 0;
  }

  font-size: 1.25rem;
  font-weight: 300;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  color: #000;

  padding: 1rem;
  border-radius: 0.75rem;
  cursor: pointer;

  p {
    font-size: 0.95rem;
    font-weight: 700;
    margin: 0 0 0 1.5rem;
  }
`
