import { Dispatch, useContext, useEffect } from "react";
import AppContext, { RemoveClawShoutOutAction } from "../../AppContext";
import { Container, Image, ImageContainer, Name, MothContainer } from "./index.style";
import MothAndBanner from "./MothAndBanner";

interface TheClawProps {
  dispatch: Dispatch<any>;
}

export default function TheClaw(props: TheClawProps) {
  const { state } = useContext(AppContext);
  const { clawShoutOut, clawShoutOutData } = state;
  const { dispatch } = props;

  useEffect(() => {
    if (clawShoutOut && clawShoutOutData.length > 0) {
      setTimeout(
        () => dispatch({ event: "remove_clawshoutout" } as RemoveClawShoutOutAction),
        14000,
      );
    }
    return () => {
      // cleanup
    };
  }, [clawShoutOut, clawShoutOutData, dispatch]);

  return (
    <>
      {clawShoutOut && clawShoutOutData.length > 0 && (
        <Container>
          {clawShoutOutData.map((member) => (
            <ImageContainer
              key={member.displayName}
              animate={{
                transform: [
                  "rotate3d(1, 1, 0, 90deg)",
                  "rotate3d(0, 0, 0, 0deg)",
                  "rotate3d(0, 0, 0, 0deg)",
                  "rotate3d(-1, -1, 0, -90deg)",
                ],
              }}
              transition={{
                duration: 5.5,
                ease: "easeInOut",
                times: [0, 0.25, 0.75, 1],
              }}
            >
              <Image src={member.logoUrl} alt={member.displayName} />
              <Name>{member.displayName}</Name>
            </ImageContainer>
          ))}
          <MothContainer
            animate={{
              transform: [
                "translateY(-50%) scale(0)",
                "translateY(-50%) scale(1)",
                "translateY(-50%) scale(1)",
                "translateY(-50%) scale(0)",
              ],
            }}
            transition={{
              delay: 1.75,
              duration: 6,
              ease: "easeInOut",
              times: [0, 0.25, 0.75, 1],
            }}
          >
            <MothAndBanner />
          </MothContainer>
        </Container>
      )}
    </>
  );
}
