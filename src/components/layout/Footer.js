import React from 'react'

export default function Footer() {
    return (
        <footer className="p-2">
            <div className="text-sm">&copy;{new Date().getFullYear()} My Company</div>
        </footer>
    )
}
