import { Dispatch } from "react";
import {
  AlertContainer,
  AlertLogo,
  AlertNameContainer,
  AlertName,
  AlertBanner,
  AlertContainerInner,
  AlertLastStreamTitle,
} from "./index.style";
import BannerImage from "./svg/bannerImage";
import BannerTextPath from "./svg/bannerTextPath";
import { useAlertQueue } from "../../AlertQueue";
import { debugAlert } from "./debug";
import { AlertQueueEvent } from "../../AppContext";
import { MainframeEvent } from "@whitep4nth3r/p4nth3rb0t-types";
import { getRandomPantherImgUrlLarge } from "../../utils";

interface AlertProps {
  dispatch: Dispatch<any>;
}

function getRandomCongrats(username: string): string {
  const congrats = [
    `Congratulations, ${username}!`,
    `Well done, ${username}!`,
    `You're a winner, ${username}!`,
    `Good work, ${username}!`,
    `Lucky you, ${username}!`,
    `[object Object], ${username}!`,
    `${username}, you won!`,
    `Huzzah, ${username}! You won!`,
  ];

  return congrats[Math.floor(Math.random() * congrats.length)];
}

function getBannerText(alert: AlertQueueEvent): any {
  switch (alert.event) {
    case MainframeEvent.shoutOut:
      return {
        banner: "Shout out!",
        footer: alert.data.username,
        imgAlt: alert.data.username,
        logoUrl: alert.data.logoUrl,
      };
    case MainframeEvent.startGiveaway:
      return {
        banner: "!win !win !win",
        footer: "Giveaway is open!",
        imgAlt: "p4nth3rb0t",
        logoUrl: getRandomPantherImgUrlLarge(),
      };
    case MainframeEvent.endGiveaway:
      return {
        banner: "!win !win !win",
        footer: "Giveaway is closed!",
        imgAlt: "p4nth3rb0t",
        logoUrl: getRandomPantherImgUrlLarge(),
      };
    case MainframeEvent.special:
      return {
        banner: "Announcement",
        footer: "I'm joining the DX team at Netlify!",
        imgAlt: "netlify logo",
        logoUrl: "./assets/special/netlify_logo.png",
      };
    case MainframeEvent.announceGiveaway:
      return {
        banner: "!win !win !win",
        footer: "It's Giveaway Friday!",
        imgAlt: "p4nth3rb0t",
        logoUrl: getRandomPantherImgUrlLarge(),
      };
    case MainframeEvent.drawGiveaway:
      return {
        banner: "Winner",
        footer: `${getRandomCongrats(alert.data.winner)}`,
        imgAlt: alert.data.winner,
        logoUrl: alert.data.logoUrl === "" ? getRandomPantherImgUrlLarge() : alert.data.logoUrl,
      };
    case MainframeEvent.follow:
      return {
        banner: "New follower",
        footer: alert.data.followerName,
        imgAlt: alert.data.followerName,
        logoUrl: alert.data.logoUrl === "" ? getRandomPantherImgUrlLarge() : alert.data.logoUrl,
      };
    case MainframeEvent.raid:
      return {
        banner: "It's a raid!",
        footer: `${alert.data.raider} is raiding with ${alert.data.raiderCount} viewers!`,
        imgAlt: alert.data.raider,
        logoUrl: alert.data.logoUrl === "" ? getRandomPantherImgUrlLarge() : alert.data.logoUrl,
      };
    case MainframeEvent.cheer:
      return {
        banner: `Bits! Cheers!`,
        footer: `${alert.data.bitCount} bit${+alert.data.bitCount > 1 ? "s" : ""} from ${
          alert.data.cheererName
        }!`,
        imgAlt: alert.data.cheererName,
        logoUrl: alert.data.logoUrl === "" ? getRandomPantherImgUrlLarge() : alert.data.logoUrl,
      };
    case MainframeEvent.sub:
      let tierText =
        alert.data.subTier === "Prime" ? "with Twitch Prime" : `at Tier ${alert.data.subTier}`;
      return {
        banner: alert.data.months > 0 ? `Resub!` : `New sub!`,
        footer: `${alert.data.subscriberUsername} has ${
          alert.data.months > 0 ? "re" : ""
        }subscribed ${tierText}!`,
        imgAlt: alert.data.subscriberUsername,
        logoUrl: alert.data.logoUrl === "" ? getRandomPantherImgUrlLarge() : alert.data.logoUrl,
      };
    default:
      return {
        banner: "default",
        footer: "default",
        imgAlt: "default",
        logoUrl: "default",
      };
  }
}

function getAlertAudioUrl(type: MainframeEvent) {
  switch (type) {
    case MainframeEvent.startGiveaway:
      return "";
    case MainframeEvent.endGiveaway:
      return "";
    case MainframeEvent.announceGiveaway:
      return process.env.REACT_APP_AUDIO_ALERT_ANNOUNCE_GIVEAWAY_URL;
    case MainframeEvent.drawGiveaway:
      return process.env.REACT_APP_AUDIO_ALERT_GIVEAWAY_URL;
    case MainframeEvent.follow:
      return process.env.REACT_APP_AUDIO_ALERT_FOLLOW_URL;
    case MainframeEvent.raid:
    case MainframeEvent.special:
      return process.env.REACT_APP_AUDIO_ALERT_RAID_URL;
    case MainframeEvent.cheer:
      return process.env.REACT_APP_AUDIO_ALERT_CHEER_URL;
    case MainframeEvent.sub:
      return process.env.REACT_APP_AUDIO_ALERT_SUB_URL;
    case MainframeEvent.shoutOut:
      return process.env.REACT_APP_AUDIO_ALERT_SHOUTOUT;
    default:
      return process.env.REACT_APP_AUDIO_ALERT_FOLLOW_URL;
  }
}

export default function Alert(props: AlertProps) {
  const debug = false;
  let alert = useAlertQueue(props.dispatch);
  if (debug) {
    alert = debugAlert as any;
  }

  if (!alert) {
    return null;
  }

  const displayText = getBannerText(alert);
  const alertAudioUrl = getAlertAudioUrl(alert.event);

  return (
    <AlertContainer key={alert.id}>
      <audio autoPlay>
        <source src={alertAudioUrl} type="audio/mp3" />
      </audio>
      <AlertContainerInner>
        <AlertLogo src={displayText.logoUrl} alt={displayText.imgAlt} />
        <AlertBanner>
          <BannerImage />
          <BannerTextPath displayText={displayText.banner} />
        </AlertBanner>
      </AlertContainerInner>

      <AlertNameContainer alertType={alert.event}>
        <AlertName>{displayText.footer}</AlertName>
      </AlertNameContainer>
      {alert.event === MainframeEvent.shoutOut && (
        <AlertLastStreamTitle>
          Last stream: {alert.data.lastStream.title} in {alert.data.lastStream.category}
        </AlertLastStreamTitle>
      )}
    </AlertContainer>
  );
}
