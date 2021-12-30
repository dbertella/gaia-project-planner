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
    backgroundColor: "$grey2",
    boxShadow: "inset 0 0 0 1px $colors$grey7",
    color: "$grey8",
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
        boxShadow: "inset 0 0 0 1px $colors$grey7",
        color: "$text",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$grey8",
          },
        },
        "&:active": {
          backgroundColor: "$grey2",
          boxShadow: "inset 0 0 0 1px $colors$grey8",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$grey8, 0 0 0 1px $colors$grey8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$grey4",
            boxShadow: "inset 0 0 0 1px $colors$grey8",
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
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$blue",
            boxShadow: "inset 0 0 0 1px $colors$blue",
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
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$green",
            boxShadow: "inset 0 0 0 1px $colors$green",
          },
      },
      red: {
        backgroundColor: "$background",
        boxShadow: "inset 0 0 0 1px $colors$grey7",
        color: "$red",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$grey8",
          },
        },
        "&:active": {
          backgroundColor: "$red",
          boxShadow: "inset 0 0 0 1px $colors$red",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$red, 0 0 0 1px $colors$red",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$red",
            boxShadow: "inset 0 0 0 1px $colors$red",
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
        backgroundColor: "$grey4",
        boxShadow: "inset 0 0 0 1px $colors$grey8",
        color: "$grey11",
        "@hover": {
          "&:hover": {
            backgroundColor: "$grey5",
            boxShadow: "inset 0 0 0 1px $colors$grey8",
          },
        },
        "&:active": {
          backgroundColor: "$grey5",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$grey8, 0 0 0 1px $colors$grey8",
        },
      },
      waiting: {
        backgroundColor: "$grey4",
        boxShadow: "inset 0 0 0 1px $colors$grey8",
        color: "transparent",
        pointerEvents: "none",
        "@hover": {
          "&:hover": {
            backgroundColor: "$grey5",
            boxShadow: "inset 0 0 0 1px $colors$grey8",
          },
        },
        "&:active": {
          backgroundColor: "$grey5",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$grey8",
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
