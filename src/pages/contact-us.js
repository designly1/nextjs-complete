import React from 'react'
import Layout from 'components/layout/Layout'
import MainContainer from 'components/layout/MainContainer'
import ContactForm from 'components/ContactForm'

export default function ContactPage() {
    return (
        <Layout
            title="Contact Us"
            description="Submit your inquiry to My Company"
        >
            <MainContainer>
                <ContactForm />
            </MainContainer>
        </Layout>
    )
}
