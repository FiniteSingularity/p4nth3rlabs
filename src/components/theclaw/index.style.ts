import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  max-width: 760px;
  margin: auto;
  align-self: center;
  justify-self: center;
  display: grid;
  margin-top: 10rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  background-color: var(--black);
  transform: rotate3d(1, 0, 0, 90deg);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Name = styled.p`
  position: absolute;
  bottom: 0;
  background-color: var(--black);
  color: var(--yellow);
  font-size: 1rem;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  font-weight: var(--font-weight-bold);
  z-index: 1;
`;

const MothContainer = styled(motion.div)`
  width: 760px;
  padding: 2rem;
  box-sizing: border-box;
  position: absolute;
  margin: auto;
  top: 50%;
  transform: translateY(-50%) scale(1);

  svg {
    filter: drop-shadow(0px 9px 8px rgb(0 0 0 / 0.6));
  }
`;

export { Container, Image, ImageContainer, Name, MothContainer };
