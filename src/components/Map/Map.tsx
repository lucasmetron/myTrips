import { useRouter } from 'next/router'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[] //array de Place
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
  const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
  const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

  const CustomTileLayer = () => {
    return MAPBOX_API_KEY ? (
      <TileLayer
        attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
      />
    ) : (
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    )
  }

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ width: '100%', height: '100%' }}
      worldCopyJump={true}
    >
      <CustomTileLayer />

      {places?.map(({ id, slug, name, location }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
            eventHandlers={{
              click: () => {
                router.push(`place/${slug}`)
              }
            }}
          >
            <Popup>O slug do local é {slug}</Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}

export default Map
