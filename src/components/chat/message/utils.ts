import type { ConstructedEmote } from "../types";
import sanitizeHtml from "sanitize-html";
import { ChatMessageData } from "@whitep4nth3r/p4nth3rb0t-types";
import { makeNumeronym } from "@whitep4nth3r/numeronym-all-the-things";

// my channel badges
// https://badges.twitch.tv/v1/badges/channels/469006291/display?language=en

export const globalChatBadges = {
  broadcaster: "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/2",
  partner: "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/2",
  vip: "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/2",
  mod: "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/2",
};

export const getTeamMemberIconUrl = (isTeamMember: boolean): string => {
  const teamMemberIconUrls = [
    "https://static-cdn.jtvnw.net/emoticons/v2/302880696/default/dark/3.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/303132137/default/dark/3.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/303132133/default/dark/3.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/302880702/default/dark/3.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/303767955/default/dark/3.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/303544706/default/dark/3.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/302880692/default/dark/3.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_988672c47ba5482c89c68aef34016169/default/dark/3.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_b7ccedd05f684a85a05587a8a8605f6c/default/dark/3.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_56f5ba6b5b944560a2476d52027dbece/default/dark/3.0",
  ];

  return isTeamMember
    ? teamMemberIconUrls[Math.floor(Math.random() * teamMemberIconUrls.length)]
    : "";
};

export function processChat(chat_event: ChatMessageData, numeronymMode: boolean) {
  let tempMessage: string = chat_event.message.replace(/<img/g, "<DEL");

  const emotes: any[] = [];

  // If the message has emotes, modify message to include img tags to the emote
  if (chat_event.emotes) {
    let emoteSet: ConstructedEmote[] = [];

    for (const emote of Object.keys(chat_event.emotes) as any) {
      const emoteLocations = chat_event.emotes[emote];
      emoteLocations.forEach((location: string) => {
        emoteSet.push(generateEmote(emote, location));
      });
    }

    // Order the emotes descending so we can iterate
    // through them with indexes
    emoteSet.sort((a, b) => {
      return b.end - a.end;
    });

    emoteSet.forEach((emote: ConstructedEmote) => {
      emotes.push(emote.emoteUrl);

      let emoteMessage = tempMessage.slice(0, emote.start);
      emoteMessage += emote.emoteImageTag;
      emoteMessage += tempMessage.slice(emote.end + 1, tempMessage.length);
      tempMessage = emoteMessage;
    });
  }

  tempMessage = sanitizeHtml(tempMessage, {
    allowedAttributes: {
      img: ["class", "src"],
    },
    allowedTags: ["marquee", "em", "strong", "b", "i", "code", "strike", "img"],
  });

  tempMessage = tempMessage.replace(/@(\w*)/gm, `<span class="tag">$&</span>`);

  const showAsNumeronyms = numeronymMode && emotes.length === 0;

  return {
    message: showAsNumeronyms ? makeNumeronym(tempMessage) : tempMessage,
    emotes: emotes.map((m) => m.emoteImageTag as string),
    type: chat_event.type,
  };
}

export function generateEmote(emoteId: string, position: string): ConstructedEmote {
  const [start, end] = position.split("-").map(Number);

  //todo - if only emote - make 3.0

  return {
    emoteId,
    emoteImageTag: `<img class='emote' src='https://static-cdn.jtvnw.net/emoticons/v1/${emoteId}/1.0'/>`,
    emoteUrl: `https://static-cdn.jtvnw.net/emoticons/v1/${emoteId}/1.0`,
    start,
    end,
  };
}
