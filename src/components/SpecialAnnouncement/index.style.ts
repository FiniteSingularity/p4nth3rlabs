import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  height: 60px;
  width: 1920px;
`;

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const TopBar = styled(motion.div)`
  background-color: var(--red);
  padding: 0.5rem 1rem;
  display: block;
  overflow: hidden;
  box-shadow: 0rem 0.6rem 1rem -0.4rem var(--black);
`;

const TopBarText = styled.p`
  font-weight: var(--font-weight-bold);
  font-size: 1.6rem;
  color: var(--white);
  text-transform: uppercase;
  white-space: nowrap;
  animation: ${scrollLeft} 20s linear infinite;
`;

const BottomBar = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid red;
`;

export { Container, TopBar, TopBarText, BottomBar };
