import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const FooterContainer = styled.div`
  display: block;
  position: fixed;
  background-image: url("/assets/footer-bar.png");
  background-size: cover;
  height: 1080px;
  width: 1920px;
`;

const svgDropShadow = css`
  filter: drop-shadow(6px 10px 3px rgba(0, 0, 0, 0.22));
`;

const FireIconContainer = styled(motion.span)`
  position: absolute;
  display: inline-block;
  width: 24px;
  height: 31px;
  left: 8px;
  top: 997px;
  transform: rotate(-11deg);

  svg {
    ${svgDropShadow}
  }
`;

const LighteningIconContainer = styled(motion.span)`
  position: absolute;
  display: inline-block;
  width: 16px;
  height: 27px;
  left: 21px;
  bottom: 8px;
  transform: rotate(-17deg);

  svg {
    ${svgDropShadow}
  }
`;

const PewCoinContainer = styled(motion.span)`
  display: inline-block;
  position: absolute;
  width: 18px;
  height: 18px;
  left: 276px;
  bottom: 10px;
  transform: rotate(12deg);

  svg {
    ${svgDropShadow}
  }
`;

const ExtraStarsContainer = styled.span`
  display: inline-block;
  position: absolute;
  left: 110px;
  bottom: 8px;
  width: 49px;
  height: 55px;

  svg {
    ${svgDropShadow}
  }
`;

const HeartPantherContainer = styled(motion.span)`
  position: absolute;
  display: inline-block;
  width: 92px;
  height: 92px;
  left: 34px;
  top: 969px;
  transform: rotate(7deg);

  svg {
    ${svgDropShadow}
  }
`;

const MajickPantherContainer = styled(motion.span)`
  position: absolute;
  display: inline-block;
  width: 126px;
  height: 126px;
  left: 140px;
  top: 948px;
  transform: rotate(-14deg);

  svg {
    ${svgDropShadow}
  }
`;

const PewPewPantherContainer = styled(motion.span)`
  position: absolute;
  display: inline-block;
  width: 234px;
  height: 130px;
  left: 240px;
  top: 956px;
  transform: rotate(8deg);

  svg {
    ${svgDropShadow}
  }
`;

export {
  FooterContainer,
  FireIconContainer,
  LighteningIconContainer,
  PewCoinContainer,
  ExtraStarsContainer,
  HeartPantherContainer,
  MajickPantherContainer,
  PewPewPantherContainer,
};
