import { useContext } from "react";
import AppContext from "../../../AppContext";
import { ImageContainer } from "./index.style";

interface BackseatProps {}

export default function BackseatAvatar(props: BackseatProps) {
  const { state } = useContext(AppContext);
  const { currentBackseater } = state;

  console.log(currentBackseater);

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
