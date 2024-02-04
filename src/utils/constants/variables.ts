const arrayLinks: string[] = [
  "bets",
  "pro",
  "games",
  "streamers",
  "ladder",
  "promo",
  "news",
];

type TypeValue = {
  value: string;
  multiplayer: number;
};

const arrayValues: TypeValue[] = [
  { value: "USD", multiplayer: 1.1 },
  { value: "RUB", multiplayer: 100 },
  { value: "EUR", multiplayer: 1 },
];

type TypeVideoGames = string | Array<string>;

export const arrVideoGames: TypeVideoGames[] = [
  ["ALL", "GAMES"],
  "cs-go",
  "dota-2",
  "league-of-legends",
  "lol-wild-rift",
  "r6-siege",
  "ow",
  "starcraft-2",
  "rl",
  "call",
  ["MORE", "GAMES"],
];

const buttons: string[] = ["betslip", "history", "quest"];

// const switcherButtons = ["single", `multi(${list.length})`];
// const switcherButtonsHistory = ["All", "Pending", "Resulted"];

export { arrayLinks, arrayValues };
