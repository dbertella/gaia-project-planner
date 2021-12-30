import { styled } from "../stitches.config";

export const InputBase = styled("input", {
  // Reset
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  fontFamily: "inherit",
  margin: "0",
  outline: "none",
  padding: "0",
  width: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom
  backgroundColor: "$background",
  boxShadow: "inset 0 0 0 1px $colors$grey1",
  color: "$text",
  fontVariantNumeric: "tabular-nums",

  "&:-webkit-autofill": {
    boxShadow: "inset 0 0 0 1px $colors$blue, inset 0 0 0 100px $colors$blue",
  },

  "&:-webkit-autofill::first-line": {
    fontFamily: "$untitled",
    color: "$text",
  },

  "&:focus": {
    boxShadow:
      "inset 0px 0px 0px 1px $colors$blue, 0px 0px 0px 1px $colors$blue",
    "&:-webkit-autofill": {
      boxShadow:
        "inset 0px 0px 0px 1px $colors$blue, 0px 0px 0px 1px $colors$blue, inset 0 0 0 100px $colors$blue",
    },
  },
  "&::placeholder": {
    color: "$grey1",
  },
  "&:disabled": {
    pointerEvents: "none",
    backgroundColor: "$grey2",
    color: "$grey1",
    cursor: "not-allowed",
    "&::placeholder": {
      color: "$grey1",
    },
  },
  "&:read-only": {
    backgroundColor: "$grey1",
    "&:focus": {
      boxShadow: "inset 0px 0px 0px 1px $colors$grey1",
    },
  },

  variants: {
    size: {
      "1": {
        height: "$5",
        fontSize: "$1",
        px: "$1",
        lineHeight: "$sizes$5",
        "&:-webkit-autofill::first-line": {
          fontSize: "$1",
        },
      },
      "2": {
        height: "$9",
        width: "$9",
        fontSize: "$7",
        textAlign: "center",
        px: "$2",
        lineHeight: "$sizes$6",
        "&:-webkit-autofill::first-line": {
          fontSize: "$3",
        },
      },
    },
    variant: {
      ghost: {
        boxShadow: "none",
        backgroundColor: "transparent",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$grey2",
          },
        },
        "&:focus": {
          backgroundColor: "$background",
          boxShadow:
            "inset 0px 0px 0px 1px $colors$blue, 0px 0px 0px 1px $colors$blue",
        },
        "&:disabled": {
          backgroundColor: "transparent",
        },
        "&:read-only": {
          backgroundColor: "transparent",
        },
      },
    },
    state: {
      invalid: {
        boxShadow: "inset 0 0 0 1px $colors$red",
        "&:focus": {
          boxShadow:
            "inset 0px 0px 0px 1px $colors$red, 0px 0px 0px 1px $colors$red",
        },
      },
      valid: {
        boxShadow: "inset 0 0 0 1px $colors$green",
        "&:focus": {
          boxShadow:
            "inset 0px 0px 0px 1px $colors$green, 0px 0px 0px 1px $colors$green",
        },
      },
    },
    cursor: {
      default: {
        cursor: "default",
        "&:focus": {
          cursor: "text",
        },
      },
      text: {
        cursor: "text",
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});
