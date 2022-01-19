import React from 'react'
import LinkWrapper from '../../components/LinkWrapper/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'

export type PageTemplateProps = { 
  heading: string,
  body: string
}

const PageTemplate = ({heading, body}: PageTemplateProps) => {
  
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        {/* como iremos receber um html, precisa ser dessa forma */}
        <div dangerouslySetInnerHTML={{__html:body}}/>
      </S.Body>
    </S.Content>
  )
}

export default PageTemplate
