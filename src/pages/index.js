import React from 'react'
import Layout from '../components/layout/Layout'
import Hero from '../components/Hero'
import MainContainer from 'components/layout/MainContainer'
import Heading from 'components/ui/Heading'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <MainContainer>
        <Heading type="h1">Helo world</Heading>
      </MainContainer>
    </Layout>
  )
}