import { useContext } from "react";
import AppContext from "../../../AppContext";

interface CarBackProps {}

export default function CarBack(props: CarBackProps) {
  const { state } = useContext(AppContext);
  const { currentBackseater } = state;

  return (
    <>
      {currentBackseater !== "" && (
        <>
          {currentBackseater !== "" && <img alt="carSeat" src="/assets/special/car/car-back.png" />}
        </>
      )}
    </>
  );
}
