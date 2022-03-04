import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  height: 1080px;
  width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

interface ImageContainerProps {
  size: number;
  coords: {
    x: number;
    y: number;
  };
}

const Image = styled(motion.img)<ImageContainerProps>`
  position: absolute;
  background-color: var(--black);
  left: ${(props) => props.coords.x - props.size}px;
  bottom: ${(props) => props.coords.y - props.size}px;
  height: ${(props) => props.size * 2}px;
  width: ${(props) => props.size * 2}px;
  border-radius: 50%;
  border: 0.125rem solid var(--black);
  box-sizing: border-box;
  transform: rotate(-60deg) scale(0);
`;

const MothContainer = styled(motion.div)`
  width: 500px;
  padding: 2rem;
  box-sizing: border-box;
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);

  svg {
    filter: drop-shadow(0px 9px 8px rgb(0 0 0 / 0.6));
  }
`;

export { Container, Image, MothContainer };
