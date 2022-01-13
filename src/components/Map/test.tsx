import React from 'react'
import { render, screen } from '@testing-library/react'

import Map from './Map'

//primeira coisa que devemos fazer é criar bloco de descrição do teste

describe('<Map />', () => {
  it('should render without any marker', () => {
    //função renderiza o componente, para podermos testa-lo
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    )
    //função abaixo renderiza e entrega link do que foi renderizado
    // screen.logTestingPlaygroundURL()
  })

  it('should render whit marker in corret place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petrópolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '1',
      name: 'Reykjavik',
      slug: 'reykjavik',
      location: {
        latitude: 129,
        longitude: -50
      }
    }
    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument()
  })
})
