export const getRandomPantherImgUrl = (): string => {
  const panthers = ["cool", "fire", "heart", "majick", "pewpew", "star"];
  return `/assets/panthers/${panthers[Math.floor(Math.random() * panthers.length)]}.png`;
};
