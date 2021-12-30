import { useState } from "react";
import { sumBy } from "lodash";
import { v4 as uuid } from "uuid";
import { Box, Button, Card, Flex, Label, Text, TextField } from "../components";
import { Resources } from "../constants";
import { ActionType, RoundPlannerProps } from "./reducer";

const initialState = {
  title: "Mine",
  credits: "2",
  ore: "1",
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
        <Box>
          <Label>Title</Label>
          <TextField
            value={title}
            onChange={({ target: { value } }) =>
              setInternal((state) => ({ ...state, title: value }))
            }
          />
        </Box>
        <Flex gap="4" justify="center">
          <Box>
            <Label>{Resources.Credits}</Label>
            <TextField
              size="2"
              inputMode="numeric"
              pattern="[0-9]*"
              value={credits}
              onChange={({ target: { value } }) => {
                setInternal((state) => ({ ...state, credits: value }));
              }}
            />
          </Box>
          <Box>
            <Label>{Resources.Ore}</Label>
            <TextField
              size="2"
              inputMode="numeric"
              pattern="[0-9]*"
              value={ore}
              onChange={({ target: { value } }) => {
                setInternal((state) => ({ ...state, ore: value }));
              }}
            />
          </Box>
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
