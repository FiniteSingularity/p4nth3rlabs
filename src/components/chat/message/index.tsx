import { useContext } from "react";
import AppContext from "../../../AppContext";
import { ChatMessageData } from "@whitep4nth3r/p4nth3rb0t-types";
import {
  ChatMessage,
  DisplayName,
  MessageText,
  AvatarContainer,
  MessageContainer,
} from "./index.style";
import { processChat } from "./utils";
import { getRandomPantherImgUrl } from "../../../utils";

interface MessageProps {
  message: ChatMessageData;
}

export default function Message(props: MessageProps) {
  const { state } = useContext(AppContext);

  const { message } = props;
  const {
    displayName,
    logoUrl,
    isMod,
    isVip,
    isSubscriber,
    isBroadcaster,
    isTeamMember,
    isMyFavoriteStreamer,
    teamMemberIconUrl,
  } = message;

  const processedChat = processChat(message, state.numeronymMode);
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
    backgroundImage = "/assets/special/blob.gif";
  }

  return (
    <ChatMessage
      isSubscriber={isSubscriber}
      isBroadcaster={isBroadcaster}
      isVip={isVip}
      isMod={isMod}
      isTeamMember={isTeamMember}
      isMyFavoriteStreamer={isMyFavoriteStreamer}
      teamMemberIconUrl={teamMemberIconUrl ?? ""}
    >
      <AvatarContainer backgroundImage={backgroundImage} />
      <MessageContainer>
        <DisplayName
          className={!isDefault ? `background-clip-text-hack` : ``}
          isSubscriber={isSubscriber}
          isBroadcaster={isBroadcaster}
          isVip={isVip}
          isMod={isMod}
          isTeamMember={isTeamMember}
          isMyFavoriteStreamer={isMyFavoriteStreamer}
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
