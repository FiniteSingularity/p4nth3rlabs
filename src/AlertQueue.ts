import { Dispatch, useContext, useEffect, useState } from "react";
import AppContext, { AlertCompleteAction, AlertQueueEvent } from "./AppContext";
import { MainframeEvent } from "@whitep4nth3r/p4nth3rb0t-types";

export function useAlertQueue(dispatch: Dispatch<any>): AlertQueueEvent | null {
  const ctx = useContext(AppContext);
  const [currentAlert, setCurrentAlert] = useState<AlertQueueEvent | null>(null);

  useEffect(() => {
    if (ctx.state.alerts.length === 0) setCurrentAlert(null);
    else if (currentAlert?.id !== ctx.state.alerts[0].id) {
      setCurrentAlert(ctx.state.alerts[0]);

      const alertDisplayTime =
        ctx.state.alerts[0].event === MainframeEvent.announceGiveaway ? 19000 : 5000;

      setTimeout(
        () => dispatch({ event: "alert_complete" } as AlertCompleteAction),
        alertDisplayTime,
      );
    }
  }, [ctx, dispatch, currentAlert]);

  return currentAlert;
}
