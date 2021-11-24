import { useContext } from "react";
import AppContext from "../../../AppContext";
import { ChatMessageData } from "@whitep4nth3r/p4nth3rb0t-types";
import {
  ChatMessage,
  DisplayName,
  MessageText,
  AvatarContainer,
  MessageContainer,
  NumeronymIndicator,
} from "./index.style";
import { processChat } from "./utils";
import { getRandomPantherImgUrl } from "../../../utils";
import Badges from "./badges";

interface MessageProps {
  message: ChatMessageData;
}

export default function Message(props: MessageProps) {
  const { state } = useContext(AppContext);
  const { numeronymMode } = state;

  const { message } = props;
  const {
    displayName,
    logoUrl,
    isBroadcaster,
    isVip,
    isPartner,
    isMod,
    isSubscriber,
    isTeamMember,
    teamMemberIconUrl,
  } = message;

  const processedChat = processChat(message, numeronymMode);
  const startsWithTag = processedChat.message.startsWith('<span class="tag">');
  const isAction: boolean = processedChat.type === "action";

  const isDefault = !isVip && !isBroadcaster && !isSubscriber;
  let backgroundImage = logoUrl === "" ? getRandomPantherImgUrl() : logoUrl;

  if (displayName === "stefanjudis") {
    backgroundImage = "/assets/special/catshake.gif";
  }

  if (displayName === "lucecarter") {
    backgroundImage = "/assets/special/soup.gif";
  }

  if (displayName === "hectahertz") {
    backgroundImage = "/assets/special/birb.gif";
  }

  if (displayName === "tdrayson") {
    backgroundImage = "/assets/special/tdrayson.gif";
  }

  if (displayName === "Matty_TwoShoes") {
    backgroundImage = "/assets/special/shoes.gif";
  }

  if (displayName === "DR_DinoMight") {
    backgroundImage = "/assets/special/dr_dinomight.gif";
  }

  return (
    <ChatMessage
      isSubscriber={isSubscriber}
      isBroadcaster={isBroadcaster}
      isVip={isVip}
      isMod={isMod}
      isPartner={isPartner}
      isTeamMember={isTeamMember}
      teamMemberIconUrl={teamMemberIconUrl ?? ""}
    >
      <AvatarContainer backgroundImage={backgroundImage}>
        {numeronymMode && <NumeronymIndicator>n7m!!1</NumeronymIndicator>}
        <Badges isBroadcaster={isBroadcaster} isVip={isVip} isMod={isMod} isPartner={isPartner} />
      </AvatarContainer>

      <MessageContainer>
        <DisplayName
          className={!isDefault ? `background-clip-text-hack` : ``}
          isSubscriber={isSubscriber}
          isBroadcaster={isBroadcaster}
          isVip={isVip}
          isMod={isMod}
          isTeamMember={isTeamMember}
          isPartner={isPartner}
          teamMemberIconUrl={teamMemberIconUrl ?? ""}
        >
          @{displayName}
        </DisplayName>
        <MessageText
          isAction={isAction}
          startsWithTag={startsWithTag}
          dangerouslySetInnerHTML={{ __html: processedChat.message }}
        ></MessageText>
      </MessageContainer>
    </ChatMessage>
  );
}
