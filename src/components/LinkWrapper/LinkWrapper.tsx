import Link from 'next/link'

import React from 'react'
import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  return (
    <S.wrapper>
      <Link href={href}>{children}</Link>
    </S.wrapper>
  )
}

export default LinkWrapper
