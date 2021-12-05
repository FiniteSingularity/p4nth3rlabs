import {
  ChatMessageData,
  CheerPacket,
  AnnounceGiveawayPacket,
  DrawGiveawayPacket,
  EndGiveawayPacket,
  EnterGiveawayPacket,
  FollowPacket,
  RaidPacket,
  StartGiveawayPacket,
  SubPacket,
  WebSocketPacket,
  ShoutOutPacket,
  TeamMemberForOverlay,
  SpecialPacket,
} from "@whitep4nth3r/p4nth3rb0t-types";
import { createContext, Dispatch } from "react";

export type AlertQueueEvent =
  | CheerPacket
  | SubPacket
  | FollowPacket
  | RaidPacket
  | AnnounceGiveawayPacket
  | StartGiveawayPacket
  | EndGiveawayPacket
  | DrawGiveawayPacket
  | ShoutOutPacket
  | SpecialPacket;

export type GiveawayEntryEvent = EnterGiveawayPacket | StartGiveawayPacket | EndGiveawayPacket;

export interface AlertCompleteAction {
  event: "alert_complete";
  id: "alert_complete";
}

export interface RemoveClawShoutOutAction {
  event: "remove_clawshoutout";
  id: "remove_clawshoutout";
}

export type AllActions = WebSocketPacket | AlertCompleteAction | RemoveClawShoutOutAction;

export interface AppState {
  chatMessages: ChatMessageData[];
  alerts: AlertQueueEvent[];
  giveawayEntries: EnterGiveawayPacket[];
  giveawayInProgress: boolean;
  currentMood: string;
  numeronymMode: boolean;
  currentBackseater: string;
  clawShoutOut: boolean;
  clawShoutOutData: TeamMemberForOverlay[];
}

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<any>;
}

const AppContext = createContext({} as AppContextProps);

export default AppContext;
