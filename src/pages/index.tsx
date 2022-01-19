import React from 'react'
import dynamic from 'next/dynamic'
import LinkWrapper from '../components/LinkWrapper/LinkWrapper'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('../components/Map/Map'), { ssr: false })
export default function Index() {
  return (
    <>
      <LinkWrapper href={'/about'}>
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <Map
        places={[
          {
            id: '1',
            name: 'Reykjavik',
            slug: 'reykjavik',
            location: {
              latitude: -15.82951368729815,
              longitude: -48.055715887482805
            }
          },
          {
            id: '2',
            name: 'Petrópolis',
            slug: 'petrópolis',
            location: {
              latitude: -30.54657894,
              longitude: -47.5643248
            }
          }
        ]}
      />
    </>
  )
}
