import React from 'react'
import client from '../../graphql/client'
import { GET_PLACES, GET_PLACE_BY_SLUG } from '../../graphql/querys'
import {
  GetPlaceBySlugQuery,
  GetPlacesQuery
} from '../../graphql/generated/graphql'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PlacesTemplate, {
  PlaceTemplateProps
} from '../../templates/Places/Places'

export default function Place({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <PlacesTemplate place={place} />
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 10
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    props: {
      place
    }
  }
}
