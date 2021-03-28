import type { AllActions, AppState } from "./AppContext";
import { MaxMessageCount } from "./components/chat";
import { MainframeEvent, ChatMessageData } from "p4nth3rb0t-types";
import { getTeamMemberIconUrl } from "./components/chat/message/utils";

export default function AppReducer(state: AppState, action: AllActions) {
  const newState = { ...state };

  switch (action.event) {
    case MainframeEvent.deleteChatMessage:
      const filteredChatMessages = newState.chatMessages.filter(
        (message: ChatMessageData) => message.messageId !== action.data.messageId,
      );

      newState.chatMessages = filteredChatMessages;

      return { ...newState };
    case MainframeEvent.chatMessage:
      action.data.teamMemberIconUrl = getTeamMemberIconUrl(action.data.isTeamMember);

      newState.chatMessages.push(action.data);

      if (newState.chatMessages.length > MaxMessageCount) {
        newState.chatMessages.shift();
      }

      return { ...newState };
    case MainframeEvent.follow:
    case MainframeEvent.raid:
    case MainframeEvent.cheer:
    case MainframeEvent.sub:
      if (!newState.alerts.some((alert) => alert.id === action.id)) {
        newState.alerts.push(action);
      }
      return { ...newState };
    case "alert_complete":
      newState.alerts.shift();
      return { ...newState };
    case MainframeEvent.startGiveaway:
      if (!newState.alerts.some((alert) => alert.id === action.id)) {
        newState.alerts.push(action);
      }
      newState.giveawayInProgress = true;
      return { ...newState };
    case MainframeEvent.endGiveaway:
      if (!newState.alerts.some((alert) => alert.id === action.id)) {
        newState.alerts.push(action);
      }
      newState.giveawayInProgress = false;
      newState.giveawayEntries = [];
      return { ...newState };
    case MainframeEvent.announceGiveaway:
      if (!newState.alerts.some((alert) => alert.id === action.id)) {
        newState.alerts.push(action);
      }
      return { ...newState };
    case MainframeEvent.drawGiveaway:
      if (!newState.alerts.some((alert) => alert.id === action.id)) {
        newState.alerts.push(action);
      }
      return { ...newState };
    case MainframeEvent.enterGiveaway:
      newState.giveawayEntries.push(action);
      return { ...newState };
    case MainframeEvent.moodChange:
      newState.currentMood = action.data.mood;
      return { ...newState };
    default:
      return { ...state };
  }
}
