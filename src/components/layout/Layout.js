import React, { useState, useMemo } from 'react'
import { throttle } from "lodash";
import useDimensions from 'react-cool-dimensions';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

export default function Layout({ pageTitle = null, description = null, children = null, appendClass }) {
    const mobileMenuBreakpoint = 800;
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const { observe, unobserve } = useDimensions({
        onResize: useMemo(
            () =>
                throttle(({ observe, unobserve, width, height, entry }) => {
                    setIsMobileMenu(width <= mobileMenuBreakpoint);
                    unobserve();
                    observe();
                }, 300),
            []
        ),
    });

    // Append page title to main title of site
    let title = "My Company";
    if (pageTitle) title += ' | ' + pageTitle;

    // Default description
    if (!description) description = "At My Company, we make the widgets of tomorrow!";

    let className = "";
    if (appendClass) className += ' ' + appendClass;

    return (
        <>
            <Head>
                <title>{title} {isMobileMenu.toString()}</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>
            <div id="app-wrapper" ref={observe}>
                {
                    isMobileMenu
                        ?
                        <MobileMenu />
                        :
                        <></>
                }
                <div id="page-wrapper" className={className}>
                    <Header isMobileMenu={isMobileMenu} />
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    )
}
