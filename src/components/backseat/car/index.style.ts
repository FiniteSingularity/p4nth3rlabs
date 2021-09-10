import styled from "styled-components";
import { motion } from "framer-motion";

const MirrorContainer = styled.span`
  position: absolute;
  top: 140px;
  left: 900px;
  width: 200px;
  z-index: 2;

  img {
    width: 100%;
  }
`;

const Moth1Container = styled(motion.span)`
  width: 100px;
  display: inline-block;
  position: absolute;
  top: 235px;
  left: 960px;
  z-index: 0;

  img {
    width: 100%;
  }
`;

const Moth2Container = styled(motion.span)`
  width: 100px;
  display: inline-block;
  position: absolute;
  top: 220px;
  left: 930px;
  z-index: 1;

  img {
    width: 100%;
  }
`;

export { MirrorContainer, Moth1Container, Moth2Container };
