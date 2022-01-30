import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function SpeechBubble({ ...props }) {

  const bubble = useRef();
  const text = useRef();
  const tl = useRef()
  const textTL = useRef();

  useEffect(() => {

    tl.current = gsap.timeline();

    textTL.current = gsap.timeline({repeat: 2, yoyo: true, duration: 0.8});

    tl.current.to(bubble.current, {duration: 3, scale: 2, opacity: 1}, 0.25);

    textTL.current.to(text.current, {transformOrigin: '50% 50%', rotate: '20deg'})
    .to(text.current, {transformOrigin: '50% 50%', rotate: '-20deg'}, 0.25);

    tl.current.to([bubble.current], {opacity: 0, scale: 0.8, duration: 2}, 4);

    return () => {
      tl.current.kill();
      textTL.current.kill();
    };

  }, []);

  return (
    <svg ref={bubble} style={{position: 'fixed', top:'30%', left: '30%', height: '10vh', width: '10vw', zIndex: 3, opacity: 0}} width="293.5mm" height="220.18mm" version="1.1" viewBox="0 0 293.5 220.18" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(56.163 -318.87)">
        <path d="m85.423 320.52s119.44-9.8274 147.41 77.863c0 0 23.827 51.849-58.702 95.058 0 0-75.615 30.246-138.7 3.4567l-90.801 40.947 41.546-31.122s13.824-17.972 12.566-26.464c0 0-40.258-37.427-36.798-67.306 0 0-0.25031-82.649 123.48-92.433z" fill="#fff" strokeWidth="2.6458" stroke="#000"/>
      </g>
      <g ref={text} transform="translate(56.163 -318.87)">
        <text x="-4.4103966" y="429.56586" fontFamily="Arial Black" fontSize="50.8px" line-height="1.25" strokeWidth=".26458" xmlSpace="preserve"><tspan x="-4.4103966" y="429.56586" fontSize="50.8px" strokeWidth=".26458">Mario!!!</tspan></text>
      </g>
    </svg>
  );
};