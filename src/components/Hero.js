import React, { useState, useMemo } from 'react'
import { throttle } from "lodash";
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions';
import useScrollPosition from 'hooks/useScrollPosition';
import arrayCeil from '../lib/arrayCeil';
import Button from './ui/Button';

export default function Hero() {
    const [heroImage, setHeroImage] = useState('hero-1920.jpg')
    const imageSizes = [600, 1280, 1920]
    const [isScrolled, setIsScrolled] = useState(false);

    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y <= -400) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    })

    const { observe, unobserve } = useDimensions({
        onResize: useMemo(
            () =>
                throttle(({ observe, unobserve, width, height, entry }) => {
                    const detectSize = arrayCeil(imageSizes, width);
                    setHeroImage(`hero-${detectSize}.jpg`)

                    unobserve();
                    observe();
                }, 300),
            []
        ),
    });

    const scrollClass = (isScrolled)
        ?
        "mt-20"
        :
        "";

    return (
        <div
            ref={observe}
            className={`w-full h-screen flex justify-center items-center overflow-hidden relative bg-black ${scrollClass}`}>
            <Image
                src={`/images/${heroImage}`}
                alt="Hero Image"
                className="opacity-60 object-cover"
                fill
            />
            <div className="flex flex-col justify-center items-center px-3">
                <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">WELCOME TO <br />
                    <span className="text-primary-500">MY COMPANY</span>
                </h1>
                <p className="mt-5 text-center text-lg text-white opacity-90">Making tomorrows widgets today...</p>
                <Button href="/" appendClass="animate-bounceLight">Get Started</Button>
            </div>
        </div>
    )
}
