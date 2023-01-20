import React, { useState, useMemo } from 'react'
import { push as Menu } from 'react-burger-menu'
import burgerStyles from '../../jsStyles/burger'
import menuItems from 'data/menuItems';
import uuid from 'react-uuid';
import Link from 'next/link';

export default function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Burger menu functions
    const handleMenuStateChange = (state) => {
        setIsMenuOpen(state?.isOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <Menu
            onStateChange={(state) => handleMenuStateChange(state)}
            isOpen={isMenuOpen}
            pageWrapId="page-wrapper"
            outerContainerId="app-wrapper"
            styles={burgerStyles}
            right
        >
            {
                menuItems.map((mi) => (
                    <Link
                        href={mi.route}
                        key={uuid()}
                        className="hover:text-menu-item-hover transition-all"
                        onClick={closeMenu}
                    >{mi.title}</Link>
                ))
            }
        </Menu>
    )
}
