import { useContext } from "react";
import AppContext from "../../../AppContext";
import { MirrorContainer, Moth1Container, Moth2Container } from "./index.style";

interface CarFrontProps {}

export default function CarFront(props: CarFrontProps) {
  const { state } = useContext(AppContext);
  const { currentBackseater } = state;

  return (
    <>
      {currentBackseater !== "" && (
        <div>
          <img alt="carSeat" src="/assets/special/car/car-front.png" />
          <MirrorContainer>
            <img alt="carMirrot" src="/assets/special/car/mirror.png" />
          </MirrorContainer>
          <Moth1Container
            animate={{
              rotate: [-12, 12, -12],
              x: [-8, 8, -8],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              loop: Infinity,
            }}
          >
            <img alt="moth1" src="/assets/panthers/panther-moth.png" />
          </Moth1Container>
          <Moth2Container
            animate={{
              rotate: [-10, 10, -10],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              loop: Infinity,
            }}
          >
            <img alt="moth2" src="/assets/panthers/panther-moth.png" />
          </Moth2Container>
        </div>
      )}
    </>
  );
}
