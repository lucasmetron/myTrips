import React from 'react'
import { render, screen } from '@testing-library/react'
import LinkWrapper from './LinkWrapper'

describe('<LinkWrapper />', () => {
  it('should render link', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByText(/anything/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})
