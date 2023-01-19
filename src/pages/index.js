import React from 'react'
import Layout from '../components/layout/Layout'
import Hero from '../components/Hero'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <main className="h-screen px-4 py-5">
        <h1 className="font-bold text-4xl">The quick brown fox jumps over the lazy dog</h1>
      </main>
    </Layout>
  )
}