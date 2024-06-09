import { motion } from 'framer-motion'
import styled from 'styled-components'

export const CardContainerSkeleton = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    width: 100%;
    border: 0;
  }

  @media only screen and (min-width: 1024px) {
    min-height: 21.25rem;
  }

  @media only screen and (min-width: 1400px) {
    min-height: 20rem;
  }
`

export const CardImageSkeleton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    margin: 1rem 0 0;
    object-fit: contain;
  }
`

export const CardContentSkeleton = styled.div`
  padding: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem 0;

    > div {
      padding: 0.5rem;
    }
  }
`

export const CardDescriptionSkeleton = styled.p``

export const Skeleton = styled(motion.div)<{ height: string; width: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #dddddd;
  border-radius: 4px;
  /* animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; */

  /* @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  } */
`
