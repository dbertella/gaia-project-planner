export const Resources = {
  Credits: "Credits",
  Ore: "Ore",
  Knowledge: "Knowledge",
  QIC: "Q.I.C.",
  PowerBowl1: "Power Bowl 1",
  PowerBowl2: "Power Bowl 2",
  PowerBowl3: "Power Bowl 3",
} as const;
export type ResourceKind = keyof typeof Resources;

export const Conversions = {
  "Ore/Credits": 1,
  "Ore/PowerBowl1": 1,
  "Knowledge/Credits": 1,
  "QIC/Ore": 1,
  "PowerBowl3/Credits": 1,
  "PowerBowl3/Ore": 3,
  "PowerBowl3/Knowledge": 4,
  "PowerBowl3/QIC": 4,
  "PowerBowl2/PowerBowl3": 2,
} as const;
export type ConversionKind = keyof typeof Conversions;

export const MINE = {
  powerBowl3: "",
  qic: "",
  title: "Mine",
  credits: "2",
  ore: "1",
};
export const TRADING_STATION = {
  powerBowl3: "",
  qic: "",
  title: "Trading Station",
  credits: "3",
  ore: "2",
};
export const RESEARCH_LAB = {
  powerBowl3: "",
  qic: "",
  title: "Research Lab",
  credits: "5",
  ore: "3",
};
export const PLANETARY_INSTITUTE = {
  powerBowl3: "",
  qic: "",
  title: "Planetary Institute",
  credits: "6",
  ore: "4",
};
export const ACADEMY = {
  powerBowl3: "",
  qic: "",
  title: "Academy",
  credits: "6",
  ore: "6",
};

// RL+TS+M
export const STANDARD_OPENING_1 = [
  TRADING_STATION,
  RESEARCH_LAB,
  TRADING_STATION,
  MINE,
];

export const STANDARD_OPENING_2 = [TRADING_STATION, RESEARCH_LAB, ACADEMY];
export const STANDARD_OPENING_3 = [
  TRADING_STATION,
  RESEARCH_LAB,
  MINE,
  MINE,
  MINE,
];
export const STANDARD_OPENING_4 = [
  TRADING_STATION,
  PLANETARY_INSTITUTE,
  TRADING_STATION,
  RESEARCH_LAB,
];
export const STANDARD_OPENING_5 = [
  TRADING_STATION,
  PLANETARY_INSTITUTE,
  TRADING_STATION,
  MINE,
];
