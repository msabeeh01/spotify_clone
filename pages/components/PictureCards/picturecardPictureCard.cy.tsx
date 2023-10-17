import React from 'react'
import { PictureCard } from './picturecard'

describe('<PictureCard />', () => {
  it('renders', () => {
    //mock props
    const href = "https://www.google.com"
    const src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    const alt = "google"
    const title = "Google"
    const description = "Google"
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PictureCard href={href} src={src} alt={alt} title={title} description={description} />)
  })
})