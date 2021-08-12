import { useContext } from "react";
import AppContext from "../../../AppContext";

interface CarSeatProps {}

export default function CarSeat(props: CarSeatProps) {
  const { state } = useContext(AppContext);
  const { currentBackseater } = state;

  return (
    <>{currentBackseater !== "" && <img alt="carSeat" src="/assets/special/car/car-seat.png" />}</>
  );
}
