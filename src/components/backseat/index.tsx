import { useContext } from "react";
import AppContext from "../../AppContext";
import { ImageContainer } from "./index.style";

interface BackseatProps {}

export default function Backseat(props: BackseatProps) {
  const { state } = useContext(AppContext);
  const { currentBackseater } = state;

  return (
    <>
      {currentBackseater !== "" && (
        <ImageContainer>
          <img alt="currentBackseater" src={currentBackseater} />
        </ImageContainer>
      )}
    </>
  );
}
