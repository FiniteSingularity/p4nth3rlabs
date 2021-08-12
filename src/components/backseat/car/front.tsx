import { useContext } from "react";
import AppContext from "../../../AppContext";

interface CarFrontProps {}

export default function CarFront(props: CarFrontProps) {
  const { state } = useContext(AppContext);
  const { currentBackseater } = state;

  return (
    <>
      {currentBackseater !== "" && (
        <>
          {currentBackseater !== "" && (
            <img alt="carSeat" src="/assets/special/car/car-front.png" />
          )}
        </>
      )}
    </>
  );
}
