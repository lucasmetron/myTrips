import { NextSeo } from 'next-seo'

import React from 'react'
import LinkWrapper from '../../components/LinkWrapper/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}
export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.'
        }
        canonical="https://mytrips.com"
        openGraph={{
          url: 'https://mytrips.com',
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />

      <LinkWrapper href="/">
        <CloseOutline size={32} arial-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading> {place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                priority={true}
                quality={75}
                objectFit={'fill'}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
