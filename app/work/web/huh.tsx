'use client'

import React, { useRef } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// const splide = new Splide( '.splide', {
//   type   : 'loop',
//   drag   : 'free',
//   focus  : 'center',
//   autoWidth: true,
// //   perPage: 3,
//   autoScroll: {
//     speed: 1,
//   },
// } );

// splide.mount();

function MyComponent() {
    const mainSliderRef = useRef(null);
    const thumbnailSliderRef = useRef(null);

// function Web() {
    return (
        <div className="splide">
            <Splide
                options={{
                    type: 'loop',
                    gap: '10px',
                    drag: 'free',
                    focus: 'center',
                    arrows: false,
                    pagination: true,
                    autoWidth: true,
                    perPage: 3,
                    autoScroll: {
                        pauseOnHover: true,
                        pauseOnFocus: true,
                        rewind: false,
                        speed: 1,
                    }
                }}
                extensions={{ AutoScroll }}
                aria-label="My Favorite Images">
                <SplideSlide>
                    <img src="/filter_NRM.jpg" alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="/filter_NRM.jpg" alt="Image 2"/>
                </SplideSlide>
            </Splide>

            <br/><br/><br/>

            <Splide ref={mainSliderRef}
                options={{
                    type       : 'fade',
                    heightRatio: 0.5,
                    pagination : false,
                    arrows     : false,
                    cover      : true,
                }}
                aria-label='#main-slider'>
                <SplideSlide>
                    <img src="/filter_NRM.jpg" alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="/filter_NRM.jpg" alt="Image 2"/>
                </SplideSlide>
            </Splide>

            <Splide ref={thumbnailSliderRef}
                options={{
                    rewind          : true,
                    fixedWidth      : 104,
                    fixedHeight     : 58,
                    isNavigation    : true,
                    gap             : 10,
                    focus           : 'center',
                    pagination      : false,
                    cover           : true,
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
                }}
                aria-label='#thumbnail-slider'>
                <SplideSlide>
                    <img src="/filter_NRM.jpg" alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="/filter_NRM.jpg" alt="Image 2"/>
                </SplideSlide>
            </Splide>

            {/* <Splide hasTrack={ false } aria-label="...">
                <div className="custom-wrapper">
                    <SplideSlide>
                        <img src="filter_NRM.jpg" alt="Image 1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="filter_NRM.jpg" alt="Image 2"/>
                    </SplideSlide>
                    <div className="splide__arrows" />
                </div>
            </Splide> */}

        </div>
    );
}