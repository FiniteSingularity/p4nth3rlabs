import {
  BattleSnakeContainer,
  CornerTriangle,
  ColorLogoContainer,
  BadgeContainer,
  WatermarkContainer,
  BottomBar,
} from "./index.style";

interface BattleSnakeProps {}

export default function BattleSnake(props: BattleSnakeProps) {
  return (
    <BattleSnakeContainer>
      <CornerTriangle />

      <BadgeContainer
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
        }}
      >
        <img src="/assets/special/battlesnake/badge.png" alt="battlesnake logo" />
      </BadgeContainer>

      <WatermarkContainer>
        <img src="/assets/special/battlesnake/wordmark.png" alt="battlesnake logo" />
      </WatermarkContainer>
      <ColorLogoContainer>
        <img src="/assets/special/battlesnake/wordmark_white.png" alt="battlesnake logo" />
      </ColorLogoContainer>
      <BottomBar />
    </BattleSnakeContainer>
  );
}
