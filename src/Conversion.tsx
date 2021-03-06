import { useReducer } from "react";
import {
  CreditsInput,
  Flex,
  OreInput,
  PowerBowl3Input,
  QICInput,
  Select,
  Text,
  KnowledgeInput,
} from "./components";
import {
  ConversionKind,
  Conversions,
  ResourceKind,
  Resources,
} from "./constants";
import { CSS } from "./stitches.config";

const InputMap = {
  Credits: CreditsInput,
  Ore: OreInput,
  QIC: QICInput,
  PowerBowl1: PowerBowl3Input,
  PowerBowl2: PowerBowl3Input,
  PowerBowl3: PowerBowl3Input,
  Knowledge: KnowledgeInput,
};

const ResourceSelect = ({
  onChange,
  options,
  value,
  ...rest
}: {
  value: ResourceKind;
  onChange: (val: ResourceKind) => void;
  options: [ResourceKind, string][];
} & { css?: CSS }) => (
  <Select
    value={value}
    onChange={(e) => onChange(e.target.value as ResourceKind)}
    disabled={options.length === 1}
    css={{ width: "$9" }}
    {...rest}
  >
    {options.map(([key, val]) => (
      <option key={key} value={key}>
        {val}
      </option>
    ))}
  </Select>
);

const allOptions = Object.entries(Resources) as [ResourceKind, string][];

const filteredOptions = (value: ResourceKind) =>
  allOptions.filter(
    ([opt]) => !!Conversions[`${value}/${opt}` as ConversionKind]
  );
const initialState: {
  inputFrom: string;
  inputTo: string;
  mod: string;
  selectFrom: ResourceKind;
  selectTo: ResourceKind;
  selectFromOptions: [ResourceKind, string][];
  selectToOptions: [ResourceKind, string][];
} = {
  inputFrom: "1",
  inputTo: String(1 * Conversions["Ore/Credits"]),
  mod: "0",
  selectFrom: "Ore",
  selectTo: "Credits",
  selectFromOptions: allOptions.filter(
    ([key]) => !["Credits", "PowerBowl1"].includes(key)
  ),
  selectToOptions: filteredOptions("Ore"),
};

const ActionType = {
  InputFrom: "inputFrom",
  InputTo: "inputTo",
  SelectFrom: "selectFrom",
  SelectTo: "selectTo",
} as const;

type Action =
  | { type: typeof ActionType.InputFrom; value: string }
  | { type: typeof ActionType.InputTo; value: string }
  | { type: typeof ActionType.SelectFrom; value: ResourceKind }
  | { type: typeof ActionType.SelectTo; value: ResourceKind };

const getConversion = (
  value: string,
  selectFrom: ResourceKind,
  selectTo: ResourceKind
) => {
  const left = Number(value);
  const right = Conversions[`${selectFrom}/${selectTo}` as ConversionKind];
  return [String(Math.floor(left / right)), String(left % right)];
};

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case ActionType.InputFrom: {
      const [inputTo, mod] = getConversion(
        action.value,
        state.selectFrom,
        state.selectTo
      );
      return {
        ...state,
        inputFrom: action.value,
        inputTo,
        mod,
      };
    }
    case ActionType.InputTo: {
      return {
        ...state,
        inputTo: action.value,
        inputFrom: String(
          Number(action.value) *
            Conversions[
              `${state.selectFrom}/${state.selectTo}` as ConversionKind
            ]
        ),
        mod: "0",
      };
    }
    case ActionType.SelectFrom: {
      let selectTo =
        state.selectTo === action.value ? state.selectFrom : state.selectTo;
      const selectToOptions = filteredOptions(action.value as ResourceKind);

      if (!selectToOptions.map(([key]) => key).includes(selectTo)) {
        selectTo = selectToOptions[0][0];
      }

      const [inputTo, mod] = getConversion(
        state.inputFrom,
        action.value,
        selectTo
      );
      return {
        ...state,
        selectTo,
        selectToOptions,
        selectFrom: action.value,
        inputTo,
        mod,
      };
    }
    case ActionType.SelectTo:
      const selectFrom =
        state.selectFrom === action.value ? state.selectTo : state.selectFrom;

      const [inputTo, mod] = getConversion(
        state.inputFrom,
        selectFrom,
        action.value
      );
      return {
        ...state,
        selectFrom,
        selectTo: action.value,
        inputTo,
        mod,
      };
    default: {
      throw new Error();
    }
  }
};

export const Conversion = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const FromInput = InputMap[state.selectFrom];
  const ToInput = InputMap[state.selectTo];
  return (
    <>
      <h2>Free Conversions</h2>
      <Flex gap="2">
        <Flex gap="1" direction="column">
          <ResourceSelect
            value={state.selectFrom}
            onChange={(value: ResourceKind) => {
              dispatch({ type: ActionType.SelectFrom, value });
            }}
            options={state.selectFromOptions}
          />
          <FromInput
            label={null}
            value={state.inputFrom}
            onChange={({ target: { value } }) => {
              dispatch({ type: ActionType.InputFrom, value });
            }}
          />
        </Flex>
        <Flex gap="1" direction="column">
          <ResourceSelect
            value={state.selectTo}
            onChange={(value: ResourceKind) => {
              dispatch({ type: ActionType.SelectTo, value });
            }}
            options={state.selectToOptions}
          />
          <ToInput
            label={null}
            value={state.inputTo}
            onChange={({ target: { value } }) => {
              dispatch({ type: ActionType.InputTo, value });
            }}
          />
        </Flex>
        {state.mod !== "0" && (
          <Flex gap="1" direction="column" justify="end">
            <Text size="1" css={{ height: "$4" }}>
              ({Resources[state.selectFrom]})
            </Text>
            <FromInput label={null} value={state.mod} readOnly />
          </Flex>
        )}
      </Flex>
    </>
  );
};
