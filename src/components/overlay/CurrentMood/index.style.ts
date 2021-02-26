import styled from "styled-components";
import { motion } from "framer-motion";

const BannerContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const PantherContainer = styled(motion.div)`
  position: relative;
  top: 48px;
  z-index: 1;
`;

export { BannerContainer, PantherContainer };
