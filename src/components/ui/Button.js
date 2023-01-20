import React from 'react'
import Link from 'next/link';

export default function Button({ href, variant = 'primary', children, appendClass }) {
    let className = `mt-8 px-12 py-3 bg-gradient-to-r from-primary-500 to-secondary-600`
        + ' hover:opacity-90 text-xl text-white/90 font-semibold drop-shadow-lg rounded-full';
    if (appendClass) className += ' ' + appendClass;

    return href
        ? <Link className={className} href={href}>{children}</Link>
        : <button type="button" className={className}>{children}</button>
}
