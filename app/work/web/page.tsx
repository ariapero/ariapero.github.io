'use client'

import React, { useEffect, useRef } from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
// import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import '@splidejs/react-splide/css/sea-green';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function MyComponent() {

    const SPLIDE_OPTIONS_show = {
        type: 'fade',
        // fixedHeight: 500,
        heightRatio: 0.5,
        // rewind     : true,
        pagination : false,
        arrows     : false,
        cover      : true,
        // autoWidth  : true,
        // perPage    : 3,
        // autoScroll: {
        //     speed: 1,
        // },
    };

    const SPLIDE_OPTIONS_thumb = {
        rewind          : true,
        fixedWidth      : 104,
        fixedHeight     : 58,
        gap             : 10,
        isNavigation    : true,
        pagination      : false,
        cover           : true,
        focus           : 'center',
        dragMinThreshold: {
            mouse: 4,
            touch: 10,
        },
        breakpoints : {
            640: {
            fixedWidth  : 66,
            fixedHeight : 38,
            },
        },
        // autoScroll: {
        //     speed: 1,
        // },
    };

    const photos = [
        { src: '/unsubscribe.png', alt: 'Image 1' },
        { src: '/unsubscribe2.png', alt: 'Image 2' },
        { src: '/unsubscribe.png', alt: 'Image 1' },
        { src: '/unsubscribe2.png', alt: 'Image 2' },
        { src: '/unsubscribe.png', alt: 'Image 1' },
        { src: '/unsubscribe2.png', alt: 'Image 2' },
    ];

    const slider1: any = useRef();
    const slider2: any = useRef();

    useEffect(() => {
        slider1.current.sync(slider2.current.splide);
    }, [slider1, slider2]);

    return (
        <>
            <Splide
                ref={(slider: any) => (slider1.current = slider)}
                options={SPLIDE_OPTIONS_show}
                extensions={{ AutoScroll }}
            >
                {/* <SplideSlide>
                    <img src="/unsubscribe.png" alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/unsubscribe2.png" alt="Image 2" />
                </SplideSlide> */}
                {photos.map((photo, index) => (
                    <SplideSlide key={index}>
                        <img src={photo.src
                        } alt={photo.alt} />
                    </SplideSlide>
                ))}
            </Splide>
            <Splide
                ref={(slider: any) => (slider2.current = slider)}
                options={SPLIDE_OPTIONS_thumb}
                // extensions={{ AutoScroll }}
            >
                {photos.map((photo, index) => (
                    <SplideSlide key={index}>
                        <img src={photo.src
                        } alt={photo.alt} />
                    </SplideSlide>
                ))}
            </Splide>
        </>
    );
}