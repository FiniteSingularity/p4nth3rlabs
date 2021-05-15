import { useContext } from "react";
import AppContext from "../../../AppContext";
import { CurrentMoodContainer, PantherContainer, BannerContainer } from "./index.style";
import { CurrentMoods } from "@whitep4nth3r/p4nth3rb0t-types";

import Coffee from "./svg/Coffee";
import Cool from "./svg/Cool";
import Dolla from "./svg/Dolla";
import Fire from "./svg/Fire";
import Heart from "./svg/Heart";
import Majick from "./svg/Majick";
import PewPew from "./svg/PewPew";
import Rap from "./svg/Rap";
import Sad from "./svg/Sad";
import Star from "./svg/Star";
import Tattoo from "./svg/Tattoo";
import Troll from "./svg/Troll";
import Banner from "./svg/Banner";

function getPantherSvg(mood: string) {
  switch (mood) {
    case CurrentMoods.Coffee:
      return <Coffee />;
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
    case CurrentMoods.Rap:
      return <Rap />;
    case CurrentMoods.Sad:
      return <Sad />;
    case CurrentMoods.Star:
      return <Star />;
    case CurrentMoods.Tattoo:
      return <Tattoo />;
    case CurrentMoods.Troll:
      return <Troll />;
    default:
      return <Majick />;
  }
}

function getAlertAudioUrl(mood: string) {
  switch (mood) {
    case CurrentMoods.Coffee:
      return process.env.REACT_APP_AUDIO_CURRENT_MOOD_URL_COFFEE;
    case CurrentMoods.Cool:
      return process.env.REACT_APP_AUDIO_CURRENT_MOOD_URL_COOL;
    case CurrentMoods.Dolla:
      return process.env.REACT_APP_AUDIO_CURRENT_MOOD_URL_DOLLA;
    case CurrentMoods.Fire:
      return process.env.REACT_APP_AUDIO_CURRENT_MOOD_URL_FIRE;
    case CurrentMoods.Heart:
      return process.env.REACT_APP_AUDIO_CURRENT_MOOD_URL_HEART;
    case CurrentMoods.Majick:
      return process.env.REACT_APP_AUDIO_CURRENT_MOOD_URL_MAJICK;
    case CurrentMoods.PewPew:
      return process.env.REACT_APP_AUDIO_CURRENT_MOOD_URL_PEWPEW;
    case CurrentMoods.Rap:
      return process.env.REACT_APP_AUDIO_CURRENT_MOOD_URL_RAP;
    case CurrentMoods.Sad:
      return process.env.REACT_APP_AUDIO_CURRENT_MOOD_URL_SAD;
    case CurrentMoods.Star:
      return process.env.REACT_APP_AUDIO_CURRENT_MOOD_URL_STAR;
    case CurrentMoods.Tattoo:
      return process.env.REACT_APP_AUDIO_CURRENT_MOOD_URL_TATTOO;
    case CurrentMoods.Troll:
      return process.env.REACT_APP_AUDIO_CURRENT_MOOD_URL_TROLL;
    default:
      return process.env.REACT_APP_AUDIO_CURRENT_MOOD_URL_MAJICK;
  }
}

export default function CurrentMood() {
  const { state } = useContext(AppContext);
  const { currentMood } = state;
  const audioUrl = getAlertAudioUrl(currentMood);

  return (
    <CurrentMoodContainer key={currentMood}>
      <audio autoPlay>
        <source src={audioUrl} type="audio/mp3" />
      </audio>
      <PantherContainer
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
        }}
      >
        {getPantherSvg(currentMood)}
      </PantherContainer>
      <BannerContainer>
        <Banner />
      </BannerContainer>
    </CurrentMoodContainer>
  );
}
