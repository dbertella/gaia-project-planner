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
} from "../components";
import { Resources } from "../constants";
import { ActionType, RoundPlannerProps } from "./reducer";

const initialState = {
  title: "",
  credits: "",
  ore: "",
};

const Building = ({
  dispatch,
}: {
  dispatch: RoundPlannerProps["dispatch"];
}) => {
  const [{ title, credits, ore }, setInternal] = useState(initialState);

  return (
    <Card css={{ p: "$2" }}>
      <Flex direction="column" gap="2">
        <TextField
          label="Title"
          value={title}
          placeholder="Mine"
          onChange={({ target: { value } }) =>
            setInternal((state) => ({ ...state, title: value }))
          }
        />
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
      <Box css={{ borderBottom: "1px solid $colors$grey2" }} />
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
      <Box css={{ borderBottom: "1px solid $colors$grey2" }} />
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
      <Building dispatch={dispatch} />
      <Planned buildings={state.buildings} dispatch={dispatch} />
    </Flex>
  );
};
