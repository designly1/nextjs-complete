import React from 'react'
import Layout from 'components/layout/Layout'
import MainContainer from 'components/layout/MainContainer'
import ContainerCenterFit from 'components/layout/ContainerCenterFit'

export default function Page404() {
    return (
        <Layout title="Error 404">
            <MainContainer appendClass={`bg-red-800`}>
                <ContainerCenterFit appendClass={`gap-10`}>
                    <h1 className="text-4xl text-gray-300">Error 404 😵</h1>
                    <p className="text-gray-200">We could not locate the file or resource you were looking for!</p>
                </ContainerCenterFit>
            </MainContainer>
        </Layout>
    )
}
