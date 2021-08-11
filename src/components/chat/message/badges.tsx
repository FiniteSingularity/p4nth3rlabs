import { globalChatBadges } from "./utils";
import { BadgesContainer, BadgeImage } from "./badges.style";

interface BadgesProps {
  isPartner: boolean;
  isVip: boolean;
  isBroadcaster: boolean;
  isMod: boolean;
}

export default function Badges(props: BadgesProps) {
  const { isPartner, isVip, isBroadcaster, isMod } = props;

  return (
    <BadgesContainer>
      {isVip && <BadgeImage src={globalChatBadges.vip} alt="VIP badge" />}
      {isMod && <BadgeImage src={globalChatBadges.mod} alt="Mod badge" />}
      {isBroadcaster && <BadgeImage src={globalChatBadges.broadcaster} alt="Broadcaster badge" />}
      {isPartner && <BadgeImage src={globalChatBadges.partner} alt="Partner badge" />}
    </BadgesContainer>
  );
}
