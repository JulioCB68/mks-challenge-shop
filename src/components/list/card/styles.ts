import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;
    font-size: 0.875rem;
    font-weight: 600;
    color: #fff;
    background-color: var(--blue);
    border: 0;
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    cursor: pointer;

    > svg {
      width: 1rem;
      margin: 0 0.5rem 0 0;
    }
  }

  @media only screen and (min-width: 1024px) {
    min-height: 21.25rem;
  }

  @media only screen and (min-width: 1400px) {
    min-height: 20rem;
  }
`

export const CardImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    margin: 1rem 0 0;
    object-fit: contain;
  }
`

export const CardContent = styled.div`
  width: 100%;
  padding: 1rem;

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0.5rem 0;

    h1 {
      font-size: 1rem;
      font-weight: 400;
    }

    > div {
      background-color: var(--backgrounddark-gray);
      font-size: 0.938rem;
      font-weight: 700;
      border-radius: 0.25rem;
      padding: 0.5rem;
      color: #fff;
    }
  }
`

export const CardDescription = styled.p`
  font-size: 0.625rem;
  font-weight: 300;
  color: var(--text-dark-gray);
`
