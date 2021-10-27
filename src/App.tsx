import { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Socket from "./socket";
import AppContext, { AppState } from "./AppContext";
import AppReducer from "./AppReducer";
import MessageQueue from "./components/chat";
import Alerts from "./components/alerts";
import Overlay from "./components/overlay";
import Webcam from "./components/webcam";
import Giveaway from "./components/giveaway";
import TheClaw from "./components/theclaw";
import BackseatAvatar from "./components/backseat/avatar";
import CarFront from "./components/backseat/car/front";
import CarSeat from "./components/backseat/car/seat";
import CarBack from "./components/backseat/car/back";
import BattleSnake from "./components/battlesnake";
import { GlobalStyle } from "./styles";
import { WebSocketPacket, CurrentMoods } from "@whitep4nth3r/p4nth3rb0t-types";

interface AppProps {
  uri: string | undefined;
}

function App(props: AppProps) {
  const { uri } = props;

  useEffect(() => {
    let socket: Socket;
    if (uri && uri.length > 0) {
      socket = new Socket(uri, {
        reconnect: true,
      });

      socket.onPacket((event: WebSocketPacket) => {
        dispatch(event);
      });
    }
    return () => {
      // cleanup
      if (socket) {
        socket.disconnect();
      }
    };
  }, [uri]);

  const initialState: AppState = {
    chatMessages: [],
    alerts: [],
    giveawayEntries: [],
    giveawayInProgress: false,
    currentMood: CurrentMoods.Majick,
    numeronymMode: false,
    currentBackseater: "",
    clawShoutOut: false,
    clawShoutOutData: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <GlobalStyle />

      <Router>
        <Switch>
          <Route path="/battlesnake">
            <BattleSnake />
          </Route>
          <Route path="/chat">
            <MessageQueue />
          </Route>
          <Route path="/alerts">
            <Alerts dispatch={dispatch} />
          </Route>
          <Route path="/overlay">
            <Overlay />
          </Route>
          <Route path="/webcam">
            <Webcam />
          </Route>
          <Route path="/giveaway">
            <Giveaway />
          </Route>
          <Route path="/theclaw">
            <TheClaw dispatch={dispatch} />
          </Route>
          <Route path="/backseat/avatar">
            <BackseatAvatar />
          </Route>
          <Route path="/backseat/car/front">
            <CarFront />
          </Route>
          <Route path="/backseat/car/seat">
            <CarSeat />
          </Route>
          <Route path="/backseat/car/back">
            <CarBack />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
