import React, { useState } from 'react'
import useWindowSize from 'hooks/useWindowSize';
import uiConfig from 'constants/uiConfig';

export default function MainContainer({ children, appendClass }) {
    const { height, width } = useWindowSize();


    let className = "px-4 py-5 flex flex-col";
    if (appendClass) className += ' ' + appendClass;

    let minHeight = height - uiConfig.windowHeightOffset;

    return (
        <main className={className} style={{ minHeight: `${minHeight}px` }}>
            {children}
        </main>
    )
}
