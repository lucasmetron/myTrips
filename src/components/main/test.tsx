import React from 'react'
import { render, screen } from '@testing-library/react'
import Main from './index' //por ele esta na pasta, pode se colocar somente um .

//serve para descreve o que vamos começar a testar
describe('<Main />', () => {
  //it serve para escrever o teste de fato
  it('should rende the heading', () => {
    //Este teste esta renderizar o componente e espera encontrar um heading escrito 'react avançado'
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i }) //o i buscar maiusculas e minuscula
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
