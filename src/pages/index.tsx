import React from 'react'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../components/Map/Map'), { ssr: false })
export default function Index() {
  return (
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
  )
}
