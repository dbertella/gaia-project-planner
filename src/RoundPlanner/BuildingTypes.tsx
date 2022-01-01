import { useState } from "react";
import { sumBy } from "lodash";
import { v4 as uuid } from "uuid";
import { CrossCircledIcon } from "@radix-ui/react-icons";
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
import {
  ACADEMY,
  MINE,
  PLANETARY_INSTITUTE,
  RESEARCH_LAB,
  Resources,
  TRADING_STATION,
} from "../constants";
import { ActionType, RoundPlannerProps } from "../components/planner-reducer";

const initialState = {
  title: "",
  credits: "",
  ore: "",
  qic: "",
  powerBowl3: "",
};

const Buildings = ({
  dispatch,
}: {
  dispatch: RoundPlannerProps["dispatch"];
}) => {
  const [{ title, credits, ore, qic, powerBowl3 }, setInternal] =
    useState(initialState);

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

        <Flex justify="between">
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
          <NumberField
            label={Resources.QIC}
            value={qic}
            placeholder="0"
            onChange={({ target: { value } }) => {
              setInternal((state) => ({ ...state, qic: value }));
            }}
          />
          <NumberField
            label={Resources.PowerBowl3}
            value={powerBowl3}
            placeholder="0"
            onChange={({ target: { value } }) => {
              setInternal((state) => ({ ...state, powerBowl3: value }));
            }}
          />
        </Flex>
        <Button
          onClick={() => {
            dispatch({
              type: ActionType.AddBuilding,
              value: { title, credits, ore, qic, powerBowl3, id: uuid() },
            });
            setInternal(initialState);
          }}
          disabled={!credits && !ore && !qic && !powerBowl3}
        >
          Add
        </Button>
      </Flex>
    </Card>
  );
};

const Header = ({
  title,
  credits,
  ore,
  qic,
  powerBowl3,
  onClick,
}: {
  title: string;
  credits: string;
  ore: string;
  qic: string;
  powerBowl3: string;
  onClick?: () => void;
}) => (
  <Flex align="center">
    <Text css={{ flex: 3, fontSize: "$1", fontWeight: 700 }}>{title}</Text>
    <Text
      css={{ flex: 1, textAlign: "center", fontSize: "$1", fontWeight: 700 }}
    >
      {credits}
    </Text>
    <Text
      css={{ flex: 1, textAlign: "center", fontSize: "$1", fontWeight: 700 }}
    >
      {ore || "0"}
    </Text>
    <Text
      css={{ flex: 1, textAlign: "center", fontSize: "$1", fontWeight: 700 }}
    >
      {qic || "0"}
    </Text>
    <Text
      css={{ flex: 1, textAlign: "center", fontSize: "$1", fontWeight: 700 }}
    >
      {powerBowl3 || "0"}
    </Text>
    <Box css={{ flex: 1 }} />
  </Flex>
);

const Building = ({
  title,
  credits,
  ore,
  qic,
  powerBowl3,
  onClick,
}: {
  title: string;
  credits: string;
  ore: string;
  qic: string;
  powerBowl3: string;
  onClick?: () => void;
}) => (
  <Flex align="center">
    <Text css={{ flex: 3, color: "$colors$gray11", fontSize: "$2" }}>
      {title}
    </Text>
    <Text
      css={{
        flex: 1,
        textAlign: "center",
        color: "$colors$gray11",
        fontSize: "$2",
      }}
    >
      {credits}
    </Text>
    <Text
      css={{
        flex: 1,
        textAlign: "center",
        color: "$colors$gray11",
        fontSize: "$2",
      }}
    >
      {ore || "0"}
    </Text>
    <Text
      css={{
        flex: 1,
        textAlign: "center",
        color: "$colors$gray11",
        fontSize: "$2",
      }}
    >
      {qic || "0"}
    </Text>
    <Text
      css={{
        flex: 1,
        textAlign: "center",
        color: "$colors$gray11",
        fontSize: "$2",
      }}
    >
      {powerBowl3 || "0"}
    </Text>
    <Box css={{ flex: 1 }}>
      {onClick && (
        <Button onClick={onClick}>
          <CrossCircledIcon />
        </Button>
      )}
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
      <Box>
        <Header
          title="Title"
          credits={Resources.Credits}
          ore={Resources.Ore}
          qic={Resources.QIC}
          powerBowl3="P.B.3"
        />
      </Box>
      <Box css={{ borderBottom: "1px solid $colors$gray2" }} />
      {buildings.map((b, i) => (
        <Building
          key={b.id}
          title={`# ${i + 1} · ${b.title}`}
          credits={b.credits}
          ore={b.ore}
          qic={b.qic}
          powerBowl3={b.powerBowl3}
          onClick={() =>
            dispatch({ type: ActionType.RemoveBuilding, value: b.id })
          }
        />
      ))}
      <Box css={{ borderBottom: "1px solid $colors$gray2" }} />
      <Header
        title="Total Planned"
        credits={String(sumBy(buildings, (it) => Number(it.credits)))}
        ore={String(sumBy(buildings, (it) => Number(it.ore)))}
        qic={String(sumBy(buildings, (it) => Number(it.qic)))}
        powerBowl3={String(sumBy(buildings, (it) => Number(it.powerBowl3)))}
      />
    </Flex>
  );
};

export const BuildingTypes = ({ state, dispatch }: RoundPlannerProps) => {
  return (
    <Flex direction="column" gap="2">
      <Box as="h3">Buildings</Box>
      <Buildings dispatch={dispatch} />
      <Planned buildings={state.buildings} dispatch={dispatch} />
    </Flex>
  );
};
