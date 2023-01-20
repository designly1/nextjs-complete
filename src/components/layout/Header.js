import React, { useState } from 'react'
import useScrollPosition from 'hooks/useScrollPosition'
import menuItems from 'data/menuItems';
import uuid from 'react-uuid';
import Link from 'next/link';
import uiConfig from 'constants/uiConfig';

export default function Header({ isMobileMenu }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y <= -400) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    })

    const scrollClass = (isScrolled)
        ?
        "fixed top-0 left-0 right-0 z-50"
        :
        "";

    return (
        <header
            className={`bg-secondary-600 flex items-center p-4 text-gray-100 shadow-md ${scrollClass}`}
            style={{ minHeight: `${uiConfig.navbarHeight}px` }}
        >
            <Link href="/" className="">
                <div className="align-middle">
                    <span className="text-4xl align-middle mr-1">⍟</span>
                    <span className="align-middle">My Company</span>
                </div>
            </Link>
            <div className={`flex gap-6 text-white ml-10${isMobileMenu ? ' hidden' : ''}`}>
                {
                    menuItems.map((mi) => (
                        <Link
                            href={mi.route}
                            key={uuid()}
                            className="hover:text-menu-item-hover"
                        >{mi.title}</Link>
                    ))
                }
            </div>
        </header>
    )
}
