const panthers = [
  "rap",
  "coffee",
  "tattoo",
  "cool",
  "fire",
  "heart",
  "hype",
  "majick",
  "pewpew",
  "star",
];

export const getRandomPantherImgUrl = (): string => {
  const newRandomPanther = panthers[Math.floor(Math.random() * panthers.length)];
  return `/assets/panthers/${newRandomPanther}.png`;
};

export const getRandomPantherImgUrlLarge = (): string => {
  const newRandomPanther = panthers[Math.floor(Math.random() * panthers.length)];
  return `/assets/panthers/${newRandomPanther}-300.png`;
};
