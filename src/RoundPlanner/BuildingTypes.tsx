import { useState } from "react";
import { sumBy } from "lodash";
import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Card,
  Flex,
  Text,
  TextField,
  NumberField,
  Label,
} from "../components";
import { Resources } from "../constants";
import { ActionType, RoundPlannerProps } from "./reducer";

const initialState = {
  title: "",
  credits: "",
  ore: "",
};

const MINE = { title: "Mine", credits: "2", ore: "1" };
const TRADING_STATION = { title: "Trading Station", credits: "3", ore: "2" };
const RESEARCH_LAB = { title: "Research Lab", credits: "5", ore: "3" };
const PLANETARY_INSTITUTE = {
  title: "Planetary Institute",
  credits: "6",
  ore: "4",
};
const ACADEMY = { title: "Academy", credits: "6", ore: "6" };

// RL+TS+M
const STANDARD_OPENING_1 = [
  TRADING_STATION,
  RESEARCH_LAB,
  TRADING_STATION,
  MINE,
];

const STANDARD_OPENING_2 = [TRADING_STATION, RESEARCH_LAB, ACADEMY];
const STANDARD_OPENING_3 = [TRADING_STATION, RESEARCH_LAB, MINE, MINE, MINE];
const STANDARD_OPENING_4 = [
  TRADING_STATION,
  PLANETARY_INSTITUTE,
  TRADING_STATION,
  RESEARCH_LAB,
];
const STANDARD_OPENING_5 = [
  TRADING_STATION,
  PLANETARY_INSTITUTE,
  TRADING_STATION,
  MINE,
];

const withUuid = (building: typeof initialState) => ({
  ...building,
  id: uuid(),
});

const StandardOpenings = ({
  dispatch,
}: {
  dispatch: RoundPlannerProps["dispatch"];
}) => (
  <Box>
    <Label>Standard Openings</Label>
    <Flex gap="1">
      <Button
        onClick={() => {
          dispatch({
            type: ActionType.Buildings,
            value: STANDARD_OPENING_1.map(withUuid),
          });
        }}
      >
        RL+TS+M
      </Button>
      <Button
        onClick={() =>
          dispatch({
            type: ActionType.Buildings,
            value: STANDARD_OPENING_2.map(withUuid),
          })
        }
      >
        A+M
      </Button>
      <Button
        onClick={() =>
          dispatch({
            type: ActionType.Buildings,
            value: STANDARD_OPENING_3.map(withUuid),
          })
        }
      >
        RL+M+M+M+M
      </Button>
      <Button
        onClick={() =>
          dispatch({
            type: ActionType.Buildings,
            value: STANDARD_OPENING_4.map(withUuid),
          })
        }
      >
        PI+RL
      </Button>
      <Button
        onClick={() =>
          dispatch({
            type: ActionType.Buildings,
            value: STANDARD_OPENING_5.map(withUuid),
          })
        }
      >
        PI+TS+M
      </Button>
    </Flex>
  </Box>
);

const Building = ({
  dispatch,
}: {
  dispatch: RoundPlannerProps["dispatch"];
}) => {
  const [{ title, credits, ore }, setInternal] = useState(initialState);

  return (
    <Card css={{ p: "$2" }}>
      <Flex direction="column" gap="2">
        <Box>
          <Label>Pre-fill buildings</Label>
          <Flex gap="1">
            <Button onClick={() => setInternal(MINE)}>M</Button>
            <Button onClick={() => setInternal(TRADING_STATION)}>TS</Button>
            <Button onClick={() => setInternal(RESEARCH_LAB)}>RL</Button>
            <Button onClick={() => setInternal(PLANETARY_INSTITUTE)}>PI</Button>
            <Button onClick={() => setInternal(ACADEMY)}>A</Button>
          </Flex>
        </Box>

        <Box css={{ flex: 1 }}>
          <TextField
            label="Title"
            value={title}
            placeholder="Mine"
            onChange={({ target: { value } }) =>
              setInternal((state) => ({ ...state, title: value }))
            }
          />
        </Box>

        <Flex gap="4" justify="center">
          <NumberField
            label={Resources.Credits}
            value={credits}
            placeholder="2"
            onChange={({ target: { value } }) => {
              setInternal((state) => ({ ...state, credits: value }));
            }}
          />
          <NumberField
            label={Resources.Ore}
            value={ore}
            placeholder="1"
            onChange={({ target: { value } }) => {
              setInternal((state) => ({ ...state, ore: value }));
            }}
          />
        </Flex>
        <Button
          onClick={() => {
            dispatch({
              type: ActionType.AddBuilding,
              value: { title, credits, ore, id: uuid() },
            });
            setInternal(initialState);
          }}
        >
          Add
        </Button>
      </Flex>
    </Card>
  );
};

const Single = ({
  title,
  credits,
  ore,
  onClick,
}: {
  title: string;
  credits: string;
  ore: string;
  onClick?: () => void;
}) => (
  <Flex align="center">
    <Text css={{ flex: 3 }}>{title}</Text>
    <Text css={{ flex: 1, textAlign: "center" }}>{credits}</Text>
    <Text css={{ flex: 1, textAlign: "center" }}>{ore}</Text>
    <Box css={{ flex: 1 }}>
      {onClick && <Button onClick={onClick}>Remove</Button>}
    </Box>
  </Flex>
);

const Planned = ({
  buildings,
  dispatch,
}: {
  buildings: RoundPlannerProps["state"]["buildings"];
  dispatch: RoundPlannerProps["dispatch"];
}) => {
  if (buildings.length === 0) return null;
  return (
    <Flex direction="column" gap="1">
      <Single title="Title" credits="Credits" ore="Ore" />
      <Box css={{ borderBottom: "1px solid $colors$gray2" }} />
      {buildings.map((b, i) => (
        <Single
          key={b.id}
          title={`# ${i + 1} · ${b.title}`}
          credits={b.credits}
          ore={b.ore}
          onClick={() =>
            dispatch({ type: ActionType.RemoveBuilding, value: b.id })
          }
        />
      ))}
      <Box css={{ borderBottom: "1px solid $colors$gray2" }} />
      <Single
        title="Total Planned"
        credits={String(sumBy(buildings, (it) => Number(it.credits)))}
        ore={String(sumBy(buildings, (it) => Number(it.ore)))}
      />
    </Flex>
  );
};

export const BuildingTypes = ({ state, dispatch }: RoundPlannerProps) => {
  return (
    <Flex direction="column" gap="2">
      <Box as="h3">Buildings</Box>
      <StandardOpenings dispatch={dispatch} />
      <Building dispatch={dispatch} />
      <Planned buildings={state.buildings} dispatch={dispatch} />
    </Flex>
  );
};
