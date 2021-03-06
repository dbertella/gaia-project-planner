import { styled } from "../stitches.config";

export const Button = styled("button", {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  height: "$5",
  px: "$2",
  fontFamily: "$untitled",
  fontSize: "$2",
  fontWeight: 500,
  fontVariantNumeric: "tabular-nums",

  "&:disabled": {
    backgroundColor: "$gray2",
    boxShadow: "inset 0 0 0 1px $colors$gray7",
    color: "$gray8",
    pointerEvents: "none",
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        height: "$5",
        px: "$2",
        fontSize: "$1",
        lineHeight: "$sizes$5",
      },
      "2": {
        borderRadius: "$2",
        height: "$6",
        px: "$3",
        fontSize: "$3",
        lineHeight: "$sizes$6",
      },
      "3": {
        borderRadius: "$2",
        height: "$7",
        px: "$4",
        fontSize: "$4",
        lineHeight: "$sizes$7",
      },
    },
    variant: {
      gray: {
        backgroundColor: "$background",
        boxShadow: "inset 0 0 0 1px $colors$gray7",
        color: "$text",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$gray8",
          },
        },
        "&:active": {
          backgroundColor: "$gray2",
          boxShadow: "inset 0 0 0 1px $colors$gray8",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8",
        },
      },
      blue: {
        backgroundColor: "$blue",
        boxShadow: "inset 0 0 0 1px $colors$blue",
        color: "$blue",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$blue",
          },
        },
        "&:active": {
          backgroundColor: "$blue",
          boxShadow: "inset 0 0 0 1px $colors$blue",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$blue, 0 0 0 1px $colors$blue",
        },
      },
      green: {
        backgroundColor: "$green",
        boxShadow: "inset 0 0 0 1px $colors$green",
        color: "$green",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$green",
          },
        },
        "&:active": {
          backgroundColor: "$green",
          boxShadow: "inset 0 0 0 1px $colors$green",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$green, 0 0 0 1px $colors$green",
        },
      },
      red: {
        backgroundColor: "$background",
        boxShadow: "inset 0 0 0 1px $colors$gray7",
        color: "$red11",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$gray8",
          },
        },
        "&:active": {
          backgroundColor: "$red3",
          boxShadow: "inset 0 0 0 1px $colors$red8",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$red8, 0 0 0 1px $colors$red8",
        },
      },
      transparentWhite: {
        backgroundColor: "hsla(0,100%,100%,.2)",
        color: "white",
        "@hover": {
          "&:hover": {
            backgroundColor: "hsla(0,100%,100%,.25)",
          },
        },
        "&:active": {
          backgroundColor: "hsla(0,100%,100%,.3)",
        },
        "&:focus": {
          boxShadow:
            "inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)",
        },
      },
      transparentBlack: {
        backgroundColor: "hsla(0,0%,0%,.2)",
        color: "black",
        "@hover": {
          "&:hover": {
            backgroundColor: "hsla(0,0%,0%,.25)",
          },
        },
        "&:active": {
          backgroundColor: "hsla(0,0%,0%,.3)",
        },
        "&:focus": {
          boxShadow:
            "inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)",
        },
      },
    },
    state: {
      active: {
        backgroundColor: "$gray4",
        boxShadow: "inset 0 0 0 1px $colors$gray8",
        color: "$gray11",
        "@hover": {
          "&:hover": {
            backgroundColor: "$gray5",
            boxShadow: "inset 0 0 0 1px $colors$gray8",
          },
        },
        "&:active": {
          backgroundColor: "$gray5",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8",
        },
      },
      waiting: {
        backgroundColor: "$gray4",
        boxShadow: "inset 0 0 0 1px $colors$gray8",
        color: "transparent",
        pointerEvents: "none",
        "@hover": {
          "&:hover": {
            backgroundColor: "$gray5",
            boxShadow: "inset 0 0 0 1px $colors$gray8",
          },
        },
        "&:active": {
          backgroundColor: "$gray5",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$gray8",
        },
      },
    },
    ghost: {
      true: {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
  },
  defaultVariants: {
    size: "1",
    variant: "gray",
  },
});
