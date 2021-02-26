import { PantherContainer, BannerContainer } from "./index.style";
import { CurrentMoods } from "../../../types";

import Cool from "./svg/Cool";
import Dolla from "./svg/Dolla";
import Fire from "./svg/Fire";
import Heart from "./svg/Heart";
import Majick from "./svg/Majick";
import PewPew from "./svg/PewPew";
import Sad from "./svg/Sad";
import Star from "./svg/Star";
import Banner from "./svg/Banner";

interface CurrentMoodProps {
  mood: string;
}

function getPantherSvg(mood: string) {
  switch (mood) {
    case CurrentMoods.Cool:
      return <Cool />;
    case CurrentMoods.Dolla:
      return <Dolla />;
    case CurrentMoods.Fire:
      return <Fire />;
    case CurrentMoods.Heart:
      return <Heart />;
    case CurrentMoods.Majick:
      return <Majick />;
    case CurrentMoods.PewPew:
      return <PewPew />;
    case CurrentMoods.Sad:
      return <Sad />;
    case CurrentMoods.Star:
      return <Star />;
    default:
      return <Majick />;
  }
}

export default function CurrentMood(props: CurrentMoodProps) {
  const { mood } = props;

  return (
    <>
      <PantherContainer
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
        }}
      >
        {getPantherSvg(mood)}
      </PantherContainer>
      <BannerContainer>
        <Banner />
      </BannerContainer>
    </>
  );
}
