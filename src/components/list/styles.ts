import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;

  @media only screen and (min-width: 1024px) {
    margin: 7rem 0;
  }
`

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem 1rem;
  padding: 0 2rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
    width: 80%;
  }
`
