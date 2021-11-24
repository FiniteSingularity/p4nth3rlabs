import styled, { keyframes, css } from "styled-components";

interface ChatMessageProps {
  isSubscriber: boolean;
  isBroadcaster: boolean;
  isVip: boolean;
  isMod: boolean;
  isPartner: boolean;
  isTeamMember: boolean;
  teamMemberIconUrl: string;
}

interface MessageTextProps {
  isAction: boolean;
  startsWithTag: boolean;
}

interface AvatarContainerProps {
  backgroundImage: string;
}

const slideInLeft = keyframes`
  0% {
    transform: translate3d(-100%,0,0);
  }
  100% {
    transform: none;
  }
`;

const slideOutLeft = keyframes`
  0% {
    transform: none;
  }
  100% {
    transform: translate3d(-150%,0,0);
  }
`;

const renderSubscriberAfter = css`
  content: "";
  position: absolute;
  right: -4px;
  bottom: -13px;
  transform: rotate(45deg);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid var(--yellow);
`;

const renderBroadcasterAfter = css`
  content: "";
  position: absolute;
  right: -4px;
  bottom: -13px;
  transform: rotate(45deg);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid var(--broadcaster);
`;

const renderIsTeamMemberBefore = (imgUrl: string | undefined) => {
  if (imgUrl !== undefined) {
    return css`
      &:before {
        content: url("${imgUrl}");
        position: absolute;
        bottom: -12px;
        right: -10px;
        transform: rotate(-60deg);
        opacity: 0.4;
        z-index: 1;
      }
    `;
  }
};

const vipBorderImage = css`
  border-image-source: linear-gradient(90deg, var(--yellow) 0%, var(--vip) 100%);
`;

const modBorderImage = css`
  border-image-source: linear-gradient(90deg, var(--yellow) 0%, var(--mod) 100%);
`;

const broadcasterBorderImage = css`
  border-image-source: linear-gradient(90deg, var(--yellow) 0%, var(--broadcaster) 100%);
`;

const ChatMessage = styled.div<ChatMessageProps>`
  animation: ${slideInLeft} 0.3s ease forwards, ${slideOutLeft} 0.5s ease 10000ms forwards;
  background-color: var(--black);
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-top: 6px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, var(--yellow) 0%, var(--yellow) 100%);
  box-shadow: 0rem 0.6rem 1rem -0.4rem var(--black);
  border-bottom-right-radius: 0.25rem;
  position: relative;
  overflow: hidden;

  &:after {
    ${(props) => (props.isSubscriber ? renderSubscriberAfter : "")}
    ${(props) => (props.isBroadcaster ? renderBroadcasterAfter : "")}
  }

  ${(props) => (props.isVip ? vipBorderImage : "")};
  ${(props) => (props.isMod ? modBorderImage : "")};
  ${(props) => (props.isBroadcaster ? broadcasterBorderImage : "")};
  ${(props) => (props.isTeamMember ? renderIsTeamMemberBefore(props.teamMemberIconUrl) : "")}
`;

const vipLinearGradient = css`
  background: linear-gradient(90deg, var(--yellow), var(--vip));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const modLinearGradient = css`
  background: linear-gradient(90deg, var(--yellow), var(--mod));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const broadcasterLinearGradient = css`
  background: linear-gradient(90deg, var(--yellow), var(--broadcaster));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DisplayName = styled.p<ChatMessageProps>`
  color: var(--white);
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--yellow);
  font-weight: var(--font-weight-bold);

  ${(props) => (props.isVip ? vipLinearGradient : "")};
  ${(props) => (props.isMod ? modLinearGradient : "")};
  ${(props) => (props.isBroadcaster ? broadcasterLinearGradient : "")};
`;

const MessageActionStyles = css`
  color: var(--yellow) !important;
  font-style: italic;
`;

const StartswithTagStyles = css`
  padding-left: 0;
`;

const MessageText = styled.div<MessageTextProps>`
  color: var(--white);
  font-size: 1.4rem;
  display: inline-block;
  word-break: break-word;
  line-height: 1.6rem;
  font-weight: var(--font-weight-normal);
  width: 100%;
  z-index: 2;
  position: relative;
  text-shadow: 2px 2px var(--black);
  ${(props) => (props.isAction ? MessageActionStyles : "")};
  ${(props) => (props.startsWithTag ? StartswithTagStyles : "")};
`;

const AvatarContainer = styled.div<AvatarContainerProps>`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  flex: 0 0 100px;
  display: flex;
  background-position-y: 50%;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-color: var(--black);
  position: relative;
`;

const MessageContainer = styled.div`
  padding: 1rem;
  width: 100%;
`;

const NumeronymIndicator = styled.span`
  position: absolute;
  box-sizing: border-box;
  color: var(--white);
  font-size: 1.4rem;
  font-weight: var(--font-weight-bold);
  text-shadow: 2px 2px #000000;
  background-color: var(--red);
  padding: 0.25rem;
  box-shadow: 1px 1px 4px #000000;
  width: 100%;
  text-align: center;
`;

export {
  ChatMessage,
  DisplayName,
  MessageText,
  AvatarContainer,
  MessageContainer,
  NumeronymIndicator,
};
