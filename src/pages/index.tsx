import React from 'react'
import { MapProps } from '../components/Map/Map'
import client from '../graphql/client'
import { GetPlacesQuery } from '../graphql/generated/graphql'
import { GET_PLACES } from '../graphql/querys'
import HomeTemplate from '../templates/Home/Home'

export default function home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    props: {
      places
    }
  }
}
