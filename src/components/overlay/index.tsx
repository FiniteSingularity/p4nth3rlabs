import {
  FooterContainer,
  FireIconContainer,
  LighteningIconContainer,
  ExtraStarsContainer,
  PewCoinContainer,
  HeartPantherContainer,
  MajickPantherContainer,
  PewPewPantherContainer,
  PantherMothContainer,
  RapPantherContainer,
} from "./index.style";

import HeartPanther from "./svg/HeartPanther";
import MajickPanther from "./svg/MajickPanther";
import PewPewPanther from "./svg/PewPewPanther";
import PewCoin from "./svg/PewCoin";
import Fire from "./svg/Fire";
import Lightening from "./svg/Lightening";
import ExtraStars from "./svg/ExtraStars";
import PantherMoth from "./svg/PantherMoth";
import RapPanther from "./svg/RapPanther";

import CtaBanner from "./CtaBanner";
import CurrentMood from "./CurrentMood";

interface OverlayProps {}

export default function Overlay(props: OverlayProps) {
  return (
    <FooterContainer>
      <FireIconContainer>
        <Fire />
      </FireIconContainer>

      <LighteningIconContainer>
        <Lightening />
      </LighteningIconContainer>

      <PewCoinContainer>
        <PewCoin />
      </PewCoinContainer>

      <ExtraStarsContainer>
        <ExtraStars />
      </ExtraStarsContainer>

      <HeartPantherContainer
        animate={{
          rotate: [7, 7, 7],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
        }}
      >
        <HeartPanther />
      </HeartPantherContainer>

      <MajickPantherContainer
        animate={{
          rotate: [-14, -14, -14],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
        }}
      >
        <MajickPanther />
      </MajickPantherContainer>

      <PewPewPantherContainer
        animate={{
          rotate: [8, 8, 8],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
        }}
      >
        <PewPewPanther />
      </PewPewPantherContainer>

      <RapPantherContainer
        animate={{
          rotate: [-10, -10, -10],
          y: [-2, 2, -2],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
        }}
      >
        <RapPanther />
      </RapPantherContainer>

      <PantherMothContainer
        animate={{
          rotate: [10, 10, 10],
          y: [2, -4, 2],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
        }}
      >
        <PantherMoth />
      </PantherMothContainer>

      <CtaBanner />
      <CurrentMood />
    </FooterContainer>
  );
}
