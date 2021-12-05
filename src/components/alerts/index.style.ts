import styled, { keyframes, css } from "styled-components";
import { MainframeEvent } from "@whitep4nth3r/p4nth3rb0t-types";

const doAnimation = true;

const dropDownBounce = keyframes`
  0% { 
    transform: scale(1,1) translateY(-200%); 
  }
  10% { 
    transform: translateY(0); 
  }
  30% { 
    transform: translateY(-100px); 
  }
  50% { 
    transform: translateY(0); 
  }
  57% { 
    transform: translateY(-7px); 
  }
  64% { 
    transform: translateY(0); 
  }
  100% { 
    transform: translateY(0); 
  }
`;

const swoopDown = keyframes`
    0% {
      transform: translateY(0);
    }
    100% {
      transform: scale(1,1) translateY(400%); ;
    }
  `;

const bounceInRight = keyframes`
  0% { 
    transform: translate3d(100%,0,0) scale(1,1) translateX(0); 
  }
  10% { 
    transform: scale(1.1,.9) translateX(0); 
  }
  30% { 
    transform: scale(.9,1.1) translateX(-100px); 
  }
  50% { 
    transform: scale(1,1) translateX(0); 
  }
  57% { 
    transform: scale(1,1) translateX(-7px); 
  }
  64% { 
    transform: scale(1,1) translateX(0); 
  }
  100% { 
    transform: translate3d(0,0,0) scale(1,1) translateX(0); 
  }
`;

const slideOutLeft = keyframes`
  0% {
    transform: none;
  }
  100% {
    transform: translate3d(-100%,0,0);
  }
`;

const growAndRotate = keyframes`
  0% {
    width: 0;
    transform: rotate(360deg)  translateY(-200px);
  }
  100% {
    width: 300px;
    transform: none;
  }
`;

const shrinkAndRotateAndUp = keyframes`
  0% {
    width: 300px;
    transform: none;
  }
  100% {
    width: 0;
    transform: rotate(360deg) translateY(-200px);
  }
`;

const scrollUpSlowly = keyframes`
  0% {
    background-position: center 0;
  }
  100% {
    background-position: center -160px;
  }
`;

const AlertContainer = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
`;

const AlertContainerInner = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-self: center;
  position: relative;
`;

const AlertLogo = styled.img`
  ${doAnimation
    ? css`
        animation: ${growAndRotate} 0.6s var(--cb-animation),
          ${shrinkAndRotateAndUp} 0.5s ease var(--alert-display-time) forwards;
      `
    : ""}

  margin-left: auto;
  margin-right: auto;
  display: flex;
  left: 0;
  right: 0;
  top: 150px;
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  background-color: var(--black);
  padding: 1rem;
  border: 0.5rem solid var(--yellow);
`;

function getAlertContainerBackgroundCss(alertType: MainframeEvent): any {
  let color;
  switch (alertType) {
    case MainframeEvent.follow:
      color = "red";
      break;
    case MainframeEvent.raid:
    case MainframeEvent.shoutOut:
    case MainframeEvent.drawGiveaway:
    case MainframeEvent.special:
      color = "black";
      break;
    case MainframeEvent.cheer:
      color = "green";
      break;
    case MainframeEvent.sub:
      color = "yellow";
      break;
    default:
      color = "red";
  }

  return css`
    background-color: var(--${color});
    background-image: url("/assets/bg-${color}.png");
  `;
}

interface AlertNameContainerProps {
  alertType: MainframeEvent;
}

const AlertNameContainer = styled.h1<AlertNameContainerProps>`
  ${doAnimation
    ? css`
        animation: ${bounceInRight} 1s var(--cb-animation),
          ${scrollUpSlowly} 20s var(--cb-animation),
          ${slideOutLeft} 0.5s ease var(--alert-display-time) forwards;
      `
    : ""}
  margin-left: auto;
  margin-right: auto;
  display: block;
  border-top: 6px solid var(--black);
  border-bottom: 6px solid var(--black);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 410px;
  padding: 3rem 1.25rem 1rem 1.25rem;
  background-size: cover;
  ${(props) => getAlertContainerBackgroundCss(props.alertType)}
`;

const AlertName = styled.span`
  font-family: var(--font-family-alt);
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
  color: var(--white);
  text-shadow: 0.125rem 0.125rem 6px var(--black);
`;

const AlertBanner = styled.div`
  ${doAnimation
    ? css`
        animation: ${dropDownBounce} 0.8s ease-in-out,
          ${swoopDown} 0.5s ease var(--alert-display-time) forwards;
      `
    : ""}
  width: 100%;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  top: 406px;
`;

const slideUp = keyframes`
  0% {
    transform: translateY(1000px);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(1000px);
  }
`;

const AlertLastStreamTitle = styled.p`
  ${doAnimation
    ? css`
        animation: ${slideUp} 0.5s ease-in-out,
          ${slideDown} 0.2s ease var(--alert-display-time) forwards;
      `
    : ""}
  position: absolute;
  top: 720px;
  left: 0;
  right: 0;
  width: 30%;
  margin: auto;
  border: 0.25rem solid var(--yellow);
  background-color: var(--black);
  color: var(--white);
  padding: 1rem;
  font-size: 2rem;
  line-height: 1.4;
  box-shadow: 0.5rem 0.5rem 0 0 var(--red);
  font-style: italic;
  font-weight: var(--font-weight-bold);
`;

//alert__subtitle in global styles
//alert__bannerTextPath in global styles
//alert__bannerImage in global styles

export {
  AlertContainer,
  AlertLogo,
  AlertNameContainer,
  AlertName,
  AlertBanner,
  AlertContainerInner,
  AlertLastStreamTitle,
};
