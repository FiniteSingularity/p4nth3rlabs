import { useContext } from "react";
import AppContext from "../../../AppContext";
import { ImageContainer } from "./index.style";

interface BackseatProps {}

export default function BackseatAvatar(props: BackseatProps) {
  const { state } = useContext(AppContext);
  const { currentBackseater } = state;

  return (
    <>
      {currentBackseater !== "" && (
        <ImageContainer>
          <audio autoPlay>
            <source src="/assets/special/car/honk.mp3" type="audio/mp3" />
          </audio>
          <img alt="currentBackseater" src={currentBackseater} />
        </ImageContainer>
      )}
    </>
  );
}
