import React from 'react'
import * as S from './styles' //boa pratica para sabermos que estamos utilizando um estilo

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="imagem de um àtomo e react avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJs, NextJS e StyledComponents
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor em frente a uma tela com código"
    />
  </S.Wrapper>
)

export default Main
