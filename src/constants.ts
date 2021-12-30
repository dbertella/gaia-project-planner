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
