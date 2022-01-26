import { NextSeo } from 'next-seo'

import React from 'react'
import dynamic from 'next/dynamic'
import LinkWrapper from '../../components/LinkWrapper/LinkWrapper'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from '../../components/Map/Map'

const Map = dynamic(() => import('../../components/Map/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="Um simples projeto para mostrar meus conhecimento com NextJS e também os lugares onde visitei e quero visitar"
        canonical="https://my-trips.lucas.com.br"
        openGraph={{
          url: 'https://my-trips.lucas.com.br',
          title: 'My Trips',
          description:
            'Um simples projeto para mostrar meus conhecimento com NextJS e também os lugares onde visitei e quero visitar',
          images: [
            {
              url: 'https://my-trips.willianjusten.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href={'/about'}>
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
