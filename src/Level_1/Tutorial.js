import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { tutorial, speechBubble } from '../state/actions/level_1/actions.js';
import { gsap } from 'gsap';
import pointer from './images/marioPointer.svg';

export default function Tutorial() {

  const first = useRef();
  const second = useRef();
  const third = useRef();
  const center_l = useRef();
  const innerRing_l = useRef();
  const middleRing_l = useRef();
  const outerRing_l = useRef();
  const center_u = useRef();
  const innerRing_u = useRef();
  const middleRing_u = useRef();
  const outerRing_u = useRef();
  const upperPointer = useRef();
  const lowerPointer = useRef();

  const dispatch = useDispatch();

  const firstSlide = gsap.timeline();
  const secondSlide = gsap.timeline({paused: true});
  const thirdSlide = gsap.timeline({paused: true});

  const lowerCirclesTL = () => {
    let tl = gsap.timeline();
    tl.fromTo([center_l.current, innerRing_l.current, middleRing_l.current, outerRing_l.current], {opacity: 0}, {opacity: 1, stagger: 0.05})
    tl.to([center_l.current, innerRing_l.current, middleRing_l.current, outerRing_l.current], {opacity: 0, stagger: 0.05})
    return tl;
  };
  const upperCirclesTL = () => {
    let tl = gsap.timeline();
    tl.fromTo([center_u.current, innerRing_u.current, middleRing_u.current, outerRing_u.current], {opacity: 0}, {opacity: 1, stagger: 0.05})
    tl.to([center_u.current, innerRing_u.current, middleRing_u.current, outerRing_u.current], {opacity: 0, stagger: 0.05})
    return tl;
  };
  const pointerTL = (ref) => {
    let tl = gsap.timeline();
    tl.to(ref.current, {duration: 0.5, scale: 0.7, opacity: 1})
    .to(ref.current, {duration: 0.5, scale: 1, ease: 'back'})
    .to(ref.current, {duration: 1, opacity: 0});
    return tl;
  };

  useEffect(() => {

    firstSlide.fromTo(first.current, {scale: 0}, {duration: 1, opacity: 1, scale: 1,  ease: 'back'});

    secondSlide.to(first.current, {duration: 0.1, opacity: 0})
    secondSlide.fromTo(second.current, {scale: 0}, {duration: 1, opacity: 1, scale: 1,  ease: 'back'});
    secondSlide.add(pointerTL(lowerPointer), 0);
    secondSlide.add(lowerCirclesTL(), 0.2);
    secondSlide.add(pointerTL(upperPointer), 1);
    secondSlide.add(upperCirclesTL(), 1.2);

    thirdSlide.to(second.current, {duration: 0.1, opacity: 0});
    thirdSlide.fromTo(third.current, {scale: 0}, {duration: 1, scale: 1, opacity: 1, ease: 'back'});

  }, [firstSlide, secondSlide, thirdSlide]);

  return (
    <Container>

      <UpperCircles version="1.1" viewBox="0 0 63.5 63.5" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-102.37 -95.61)">
          <path ref={outerRing_u} d="m134.12 95.61a31.75 31.75 0 0 0-31.75 31.75 31.75 31.75 0 0 0 31.75 31.75 31.75 31.75 0 0 0 31.75-31.75 31.75 31.75 0 0 0-31.75-31.75zm0 3.8607a27.568 27.568 0 0 1 27.567 27.568 27.568 27.568 0 0 1-27.567 27.567 27.568 27.568 0 0 1-27.568-27.567 27.568 27.568 0 0 1 27.568-27.568z" fill="#f00" strokeDashoffset="150.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0001"/>
          <path ref={middleRing_u} d="m134.12 105.92a21.442 21.442 0 0 0-21.442 21.442 21.442 21.442 0 0 0 21.442 21.442 21.442 21.442 0 0 0 21.442-21.442 21.442 21.442 0 0 0-21.442-21.442zm0 2.6074a18.618 18.618 0 0 1 18.618 18.618 18.618 18.618 0 0 1-18.618 18.618 18.618 18.618 0 0 1-18.618-18.618 18.618 18.618 0 0 1 18.618-18.618z" fill="#f00" strokeDashoffset="150.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".67543"/>
          <circle ref={center_u} cx="134.12" cy="127.36" r="7.9516" fill="#f00" strokeDashoffset="150.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0001"/>
          <path ref={innerRing_u} d="m134.12 113.47a13.893 13.893 0 0 0-13.893 13.893 13.893 13.893 0 0 0 13.893 13.893 13.893 13.893 0 0 0 13.893-13.893 13.893 13.893 0 0 0-13.893-13.893zm0 1.6894a12.063 12.063 0 0 1 12.063 12.063 12.063 12.063 0 0 1-12.063 12.063 12.063 12.063 0 0 1-12.063-12.063 12.063 12.063 0 0 1 12.063-12.063z" fill="#f00" strokeDashoffset="150.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".43764"/>
        </g>
      </UpperCircles>
      <UpperPointer ref={upperPointer} src={pointer} alt='pointer finger' />

      <LowerCircles version="1.1" viewBox="0 0 63.5 63.5" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-102.37 -95.61)">
          <path ref={outerRing_l} d="m134.12 95.61a31.75 31.75 0 0 0-31.75 31.75 31.75 31.75 0 0 0 31.75 31.75 31.75 31.75 0 0 0 31.75-31.75 31.75 31.75 0 0 0-31.75-31.75zm0 3.8607a27.568 27.568 0 0 1 27.567 27.568 27.568 27.568 0 0 1-27.567 27.567 27.568 27.568 0 0 1-27.568-27.567 27.568 27.568 0 0 1 27.568-27.568z" fill="#f00" strokeDashoffset="150.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0001"/>
          <path ref={middleRing_l} d="m134.12 105.92a21.442 21.442 0 0 0-21.442 21.442 21.442 21.442 0 0 0 21.442 21.442 21.442 21.442 0 0 0 21.442-21.442 21.442 21.442 0 0 0-21.442-21.442zm0 2.6074a18.618 18.618 0 0 1 18.618 18.618 18.618 18.618 0 0 1-18.618 18.618 18.618 18.618 0 0 1-18.618-18.618 18.618 18.618 0 0 1 18.618-18.618z" fill="#f00" strokeDashoffset="150.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".67543"/>
          <circle ref={center_l} cx="134.12" cy="127.36" r="7.9516" fill="#f00" strokeDashoffset="150.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0001"/>
          <path ref={innerRing_l} d="m134.12 113.47a13.893 13.893 0 0 0-13.893 13.893 13.893 13.893 0 0 0 13.893 13.893 13.893 13.893 0 0 0 13.893-13.893 13.893 13.893 0 0 0-13.893-13.893zm0 1.6894a12.063 12.063 0 0 1 12.063 12.063 12.063 12.063 0 0 1-12.063 12.063 12.063 12.063 0 0 1-12.063-12.063 12.063 12.063 0 0 1 12.063-12.063z" fill="#f00" strokeDashoffset="150.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".43764"/>
        </g>
      </LowerCircles>
      <LowerPointer ref={lowerPointer} src={pointer} alt='pointer finger' />

      <FirstSlide ref={first} >
        <Title>Tutorial</Title>
        <Text>Your mission is to get your character to the goal!</Text>
        <Button onClick={() => secondSlide.play() + firstSlide.progress(1)} >NEXT</Button>
      </FirstSlide>
      <SecondSlide ref={second} >
        <Title>Actions</Title>
        <Text>Some items on the board do things. Click around and see what you find!</Text>
        <Button onClick={() => thirdSlide.play() + secondSlide.progress(1)} >NEXT</Button>
      </SecondSlide>
      <ThirdSlide ref={third} >
        <Title>Good Luck!</Title>
        <Text>and if you get stuck just push the restart button in the top left corner.</Text>
        <Button onClick={() => dispatch(tutorial) + dispatch(speechBubble)} >Finish</Button>
      </ThirdSlide>
    </Container>
  );
};

const Container = styled.div`
  height: 90vh;
  width: 90vw;
  position: absolute;
  z-index: 3;
`
const FirstSlide = styled.div`
  display: grid;
  grid-template-areas:
  "title title title"
  "text text text"
  ". button .";
  grid-template-rows: 40% 40% 20%;
  grid-template-columns: 33% 33% 33%;
  height: 25vh;
  width: 25vw;
  background: #C7C3C3;
  border-radius: 5%;
  position: relative;
  top: 30%;
  left: 40%;
  opacity: 0;
  overflow: auto;
`
const SecondSlide = styled.div`
  display: grid;
  grid-template-areas:
  "title title title"
  "text text text"
  ". button .";
  height: 25vh;
  width: 25vw;
  background: #C7C3C3;
  border-radius: 5%;
  position: relative;
  top: 25%;
  left: 45%;
  opacity: 0;
  overflow: auto;
`
  const ThirdSlide = styled.div`
  display: grid;
  grid-template-areas:
  "title title title"
  "text text text"
  ". button .";
  height: 25vh;
  width: 25vw;
  background: #C7C3C3;
  border-radius: 5%;
  position: relative;
  bottom: 35%;
  left: 25%;
  opacity: 0;
  overflow: auto;
`
const LowerCircles = styled.svg`
  height: 10vh;
  width: 10vw;
  position: relative;
  top: 75%;
  left: 15%;
  z-index: 3;
`
const LowerPointer = styled.img`
  position: absolute;
  height: 5vh;
  width: 5vw;
  top: 75%;
  left: 30%;
  opacity: 0;
`
const UpperCircles = styled.svg`
  height: 10vh;
  width: 10vw;
  position: relative;
  top: 17%;
  left: 84%;
  z-index: 3;
`
const UpperPointer = styled.img`
  position: absolute;
  height: 5vh;
  width: 5vw;
  top: 17%;
  left: 89%;
  opacity: 0;
`
const Title = styled.h1`
  grid-area: title;
  justify-self: center;
  font-family: 'Fuzzy Bubbles', cursive;
  text-decoration: underline;
`
const Text = styled.p`
  grid-area: text;
  font-family: 'Fuzzy Bubbles', cursive;
  margin-left: 10%;
`
const Button = styled.button`
  grid-area: button;
  justify-self: center;
  margin-bottom: 5%;
  font-family: 'Fuzzy Bubbles', cursive;
`