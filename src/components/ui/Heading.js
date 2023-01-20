import React from 'react'

const types = [
    'h1', 'h2', 'h3', 'h4'
]

const sizes = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl'
}

export default function Heading({ type = 'h1', children, appendClass }) {
    if (!types.includes(type)) {
        return (
            <p className="text-red-700">Invalid heading type: {type}!</p>
        )
    }

    const Htag = type;

    let className = `font-bold text-secondary-600 ${sizes[type]}`;
    if (appendClass) className += ' ' + appendClass;

    return (
        <Htag className={className}>
            {children}
        </Htag>
    )
}