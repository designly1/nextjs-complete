import React from 'react'

export default function ContainerCenterFit({ children, appendClass }) {
    let className = "flex flex-col mx-auto p-5";
    if (appendClass) className += ' ' + appendClass;

    return (
        <div className={className}>
            {children}
        </div>
    )
}
