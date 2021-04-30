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

  const processedChat = processChat(message);
  const startsWithTag = processedChat.message.startsWith('<span class="tag">');
  const isAction: boolean = processedChat.type === "action";

  const isDefault = !isVip && !isBroadcaster && !isSubscriber;
  const backgroundImage = logoUrl === "" ? getRandomPantherImgUrl() : logoUrl;

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
