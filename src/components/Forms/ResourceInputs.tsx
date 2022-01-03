import { ComponentProps } from "react";
import { NumberField } from ".";
import { Resources } from "../../constants";
import creditsImg from "../../icons/Credits.svg";
import oreImg from "../../icons/Ore.svg";
import qicImg from "../../icons/QIC.svg";
import powerImg from "../../icons/PowerToken.svg";
import knowledgeImg from "../../icons/Knowledge.svg";

export const CreditsInput = (props: ComponentProps<typeof NumberField>) => (
  <NumberField
    variant="bold"
    label={Resources.Credits}
    css={{
      background: `url(${creditsImg}) no-repeat`,
      backgroundPositionX: "center",
      backgroundPositionY: "20px",
    }}
    {...props}
  />
);
export const OreInput = (props: ComponentProps<typeof NumberField>) => (
  <NumberField
    variant="bold"
    label={Resources.Ore}
    css={{
      background: `url(${oreImg}) no-repeat`,
      backgroundPositionX: "center",
      backgroundPositionY: "20px",
    }}
    {...props}
  />
);
export const QICInput = (props: ComponentProps<typeof NumberField>) => (
  <NumberField
    variant="bold"
    label={Resources.QIC}
    css={{
      background: `url(${qicImg}) center center no-repeat`,
      color: "$background",
      "&::placeholder": {
        color: "rgba(255,255,255,0.8)",
      },
    }}
    {...props}
  />
);
export const PowerBowl3Input = (props: ComponentProps<typeof NumberField>) => (
  <NumberField
    variant="bold"
    label={Resources.PowerBowl3}
    css={{
      background: `url(${powerImg}) no-repeat`,
      backgroundPositionX: "center",
      backgroundPositionY: "20px",
      color: "$background",
      "&::placeholder": {
        color: "rgba(255,255,255,0.8)",
      },
    }}
    {...props}
  />
);
export const KnowledgeInput = (props: ComponentProps<typeof NumberField>) => (
  <NumberField
    variant="bold"
    label={Resources.PowerBowl3}
    css={{
      background: `url(${knowledgeImg}) no-repeat`,
      backgroundPositionX: "center",
      backgroundPositionY: "20px",
      color: "$background",
      "&::placeholder": {
        color: "rgba(255,255,255,0.8)",
      },
    }}
    {...props}
  />
);
