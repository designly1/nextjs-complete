import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ pageTitle = null, description = null, children = null }) {
    // Append page title to main title of site
    let title = "My Company";
    if (pageTitle) title += ' | ' + pageTitle;

    // Default description
    if (!description) description = "At My Company, we make the widgets of tomorrow!";

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}
