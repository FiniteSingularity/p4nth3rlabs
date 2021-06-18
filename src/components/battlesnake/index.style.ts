import styled from "styled-components";
import { motion } from "framer-motion";

const BattleSnakeContainer = styled.div`
  height: 1080px;
  width: 1920px;
`;

const CornerTriangle = styled.div`
  background: linear-gradient(135deg, #e80987 15%, #3e338f 100%);
  height: 300px;
  left: -50px;
  position: absolute;
  top: -120px;
  width: 140px;
  -webkit-transform: rotate(45deg);
`;

const ColorLogoContainer = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  top: 23px;
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

const WatermarkContainer = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  top: 20px;
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0.5;

  img {
    width: 100%;
  }
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 64px;
  height: 20px;
  width: 100%;
  background: linear-gradient(135deg, #e80987 15%, #3e338f 100%);
`;

export {
  WatermarkContainer,
  BattleSnakeContainer,
  CornerTriangle,
  ColorLogoContainer,
  BadgeContainer,
  BottomBar,
};
