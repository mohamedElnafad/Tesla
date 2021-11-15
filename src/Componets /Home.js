import React from 'react'

import Header from './Header'
import Section from './Section'
import style from 'styled-components'

function Home() {
  return (
    <Container>
      <Section
        name='Model S'
        img='/images/model-s.jpg'
        desc='Order Online Touchless Delivery '
        firstButtonText='Custom Order'
        secondButtonText='Exixting invetory'
      />
      <Section
        name='Model Y'
        img='/images/model-y.jpg'
        desc='Order Online Touchless Delivery '
        firstButtonText='Custom Order'
        secondButtonText='Exixting invetory'
      />
      <Section
        name='Model 3'
        img='/images/model-3.jpg'
        desc='Order Online Touchless Delivery '
        firstButtonText='Custom Order'
        secondButtonText='Exixting invetory'
      />
      <Section
        name='Model X'
        img='/images/model-x.jpg'
        desc='Order Online Touchless Delivery '
        firstButtonText='Custom Order'
        secondButtonText='Exixting invetory'
      />
      <Section
        name='Solar Panaels'
        img='/images/solar-panel.jpg'
        desc='Lowest Cost Solar Paneles in America'
        firstButtonText='Custom Order'
        secondButtonText='learn more'
      />
      <Section
        name='Solar Roof'
        img='/images/solar-roof.jpg'
        desc='Produce Clean Energy Your Roof'
        firstButtonText='Order Now'
        secondButtonText='Learn more'
      />
      <Section
        name='Accessories'
        img='/images/accessories.jpg'
        desc=''
        firstButtonText='Shop now'
      />
    </Container>
  )
}

export default Home
const Container = style.div`
 height: 100vh

`
