import { Dispatch, useContext, useEffect } from "react";
import AppContext, { RemoveClawShoutOutAction } from "../../AppContext";
import { Container, Image, MothContainer } from "./index.style";
import MothAndBanner from "./MothAndBanner";

type CoOrd = { x: number; y: number };

function getCircles(outerRadius: number, targetCircles: number, centerX = 960, centerY = 540) {
  let totNumCircles = 0;
  let curRadius = outerRadius;
  while (totNumCircles < targetCircles) {
    totNumCircles = getNumCircles(outerRadius, curRadius);
    curRadius -= 0.1;
  }
  const innerRadius = curRadius;
  let curOuterRadius = outerRadius;
  let circleLocations: CoOrd[] = [];
  while (outerRadius > 0) {
    const numCircles = ringCount(curOuterRadius, innerRadius);
    if (numCircles === 0) {
      break;
    }
    circleLocations = [
      ...circleLocations,
      ...getRing(curOuterRadius, numCircles, centerX, centerY),
    ];
    curOuterRadius -= innerRadius * 2;
  }
  return {
    circleRadius: innerRadius,
    locations: circleLocations,
  };
}

function getRing(ringRadius: number, numCircles: number, centerX: number, centerY: number) {
  const deltaTheta = (Math.PI * 2.0) / numCircles;
  if (deltaTheta < 0) {
    return [];
  } else if (numCircles === 1) {
    return [{ x: centerX, y: centerY }];
  } else {
    const locations = [];
    for (let i = 0; deltaTheta * i < 2.0 * Math.PI; i++) {
      const theta = deltaTheta * i;
      const x = Math.cos(theta) * ringRadius + centerX;
      const y = Math.sin(theta) * ringRadius + centerY;
      locations.push({ x, y });
    }
    return locations;
  }
}

function getNumCircles(outerRadius: number, innerRadius: number) {
  let numCircles = 0;
  while (outerRadius > 0) {
    const newCircles = ringCount(outerRadius, innerRadius);
    if (newCircles === 0) {
      break;
    }
    numCircles += newCircles;
    outerRadius -= innerRadius * 2;
  }
  return numCircles;
}

function ringCount(outerRingRadius: number, radius: number) {
  if (radius > outerRingRadius) {
    return 0;
  } else if (radius > outerRingRadius / 2.0) {
    return 1;
  }
  const numCircles = Math.floor((Math.PI * (outerRingRadius - radius)) / radius);
  const x0 = outerRingRadius - radius;
  const y0 = 0;
  const x1 = (outerRingRadius - radius) * Math.cos((2 * Math.PI) / numCircles);
  const y1 = (outerRingRadius - radius) * Math.sin((2 * Math.PI) / numCircles);
  const dist = Math.pow(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2), 0.5);
  return dist < 2 * radius ? numCircles - 1 : numCircles;
}

interface TheClawProps {
  dispatch: Dispatch<any>;
}

export default function TheClaw(props: TheClawProps) {
  const { state } = useContext(AppContext);
  const { clawShoutOut, clawShoutOutData } = state;
  const { dispatch } = props;

  const circles = getCircles(240, clawShoutOutData.length);

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
          <audio autoPlay>
            <source src={process.env.REACT_APP_AUDIO_ALERT_SHOUTOUT} type="audio/mp3" />
          </audio>
          {clawShoutOutData.map((member, index) => (
            <Image
              key={member.displayName}
              size={circles.circleRadius}
              coords={circles.locations[index]}
              src={member.logoUrl}
              alt={member.displayName}
              animate={{
                transform: [
                  "rotate(-60deg) scale(0)",
                  "rotate(0deg) scale(1)",
                  "rotate(0deg) scale(1)",
                  "rotate(60deg) scale(0)",
                ],
              }}
              transition={{
                duration: 9,
                ease: "easeInOut",
                times: [0, 0.1, 0.9, 1],
              }}
            />
          ))}
          <MothContainer
            animate={{
              transform: [
                "translate(-50%, -50%) scale(0)",
                "translate(-50%, -50%) scale(1)",
                "translate(-50%, -50%) scale(1)",
                "translate(-50%, -50%) scale(0)",
              ],
            }}
            transition={{
              delay: 2,
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
