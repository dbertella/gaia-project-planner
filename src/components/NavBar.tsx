import { MixIcon, RulerSquareIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import { NavLink } from "react-router-dom";
import { Flex, Box, Text } from ".";

const Link = styled(Box, {
  textAlign: "center",
  flex: 1,
  color: "$colors$gray9",
  textDecoration: "none",
  "&.active": { color: "$colors$text" },
});

export const NavBar = () => {
  return (
    <Flex
      css={{
        position: "sticky",
        bottom: 0,
        height: 50,
        background: "rgba(255,255,255,0.7)",
      }}
    >
      <Link as={NavLink} to="/">
        <RulerSquareIcon width={30} height={30} />

        <Text size="1" css={{ color: "inherit" }}>
          Planner
        </Text>
      </Link>
      <Link as={NavLink} to="/conversion">
        <MixIcon width={30} height={30} />

        <Text size="1" css={{ color: "inherit" }}>
          Conversion
        </Text>
      </Link>
    </Flex>
  );
};
