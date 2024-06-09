import {
  CardContainerSkeleton,
  CardContentSkeleton,
  CardDescriptionSkeleton,
  CardImageSkeleton,
  Skeleton,
} from './styles'

export default function CardSkeleton() {
  return (
    <CardContainerSkeleton>
      <CardImageSkeleton>
        <Skeleton
          height="150px"
          width="100%"
          animate={{ opacity: [1, 0.5, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </CardImageSkeleton>
      <CardContentSkeleton>
        <div>
          <h1>
            <Skeleton
              height="20px"
              width="10rem"
              animate={{ opacity: [1, 0.5, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </h1>
          <div>
            <Skeleton
              height="20px"
              width="70px"
              animate={{ opacity: [1, 0.5, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
        <CardDescriptionSkeleton>
          <Skeleton
            height="50px"
            width="100%"
            animate={{ opacity: [1, 0.5, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </CardDescriptionSkeleton>
      </CardContentSkeleton>
      <button>
        <Skeleton
          height="40px"
          width="100%"
          animate={{ opacity: [1, 0.5, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </button>
    </CardContainerSkeleton>
  )
}
