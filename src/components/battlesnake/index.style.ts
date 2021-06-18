import styled from "styled-components";
import { motion } from "framer-motion";

const BattleSnakeContainer = styled.div`
  height: 1080px;
  width: 1920px;
`;

const TopBanner = styled.div`
  background: linear-gradient(135deg, #e80987 15%, #3e338f 100%);
  height: 65px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  img {
    height: 75px;
  }
`;

const BottomLogoContainer = styled(motion.div)`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  bottom: 16px;
  position: absolute;
  left: 0;
  right: 0;

  img {
    width: 100%;
  }
`;

const BadgeContainer = styled(motion.span)`
  width: 160px;
  top: 10px;
  position: absolute;
  left: 10px;

  img {
    width: 100%;
  }
`;

export { BattleSnakeContainer, LogoContainer, TopBanner, BottomLogoContainer, BadgeContainer };
