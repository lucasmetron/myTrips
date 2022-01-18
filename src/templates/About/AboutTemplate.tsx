import React from 'react'
import LinkWrapper from '../../components/LinkWrapper/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'

const AboutTemplate = () => {
  
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>{process.env.NODE_ENV || 'teste'} || tes</S.Heading>

      <S.Body>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting //
          eslint-disable-next-line react/no-unescaped-entities industry. Lorem
          Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
