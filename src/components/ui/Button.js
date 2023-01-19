import React from 'react'
import Link from 'next/link';

export default function Button(props, { variant = 'primary', children }) {
    let className = "mt-8 px-12 py-3 bg-gradient-to-r hover:opacity-90 transition-all ease-in-out duration-300 text-white/90 font-semibold drop-shadow-lg rounded-full";
    className += ` from-${variant} to-${variant}Dark `;

    return props.href
        ? <Link className={className} {...props} />
        : <button type="button" className={className} {...props} />
}
