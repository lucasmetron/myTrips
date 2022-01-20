import React from 'react'
import dynamic from 'next/dynamic'
import LinkWrapper from '../../components/LinkWrapper/LinkWrapper'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from '../../components/Map/Map'

const Map = dynamic(() => import('../../components/Map/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href={'/about'}>
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
