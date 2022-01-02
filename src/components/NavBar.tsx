import {
  LightningBoltIcon,
  MixIcon,
  RulerSquareIcon,
} from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import { NavLink } from "react-router-dom";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import { Flex, Box, Text } from ".";

const UiLink = styled(Box, {
  textAlign: "center",
  flex: 1,
  color: "$colors$gray9",
  textDecoration: "none",
  "&.active": { color: "$colors$text" },
});

const Link = ({
  title,
  to,
  icon: Icon,
}: {
  title: string;
  to: string;
  icon: typeof MixIcon;
}) => (
  <UiLink as={NavLink} to={to}>
    <Icon width={30} height={30} />

    <Text size="1" css={{ color: "inherit" }}>
      {title}
    </Text>
  </UiLink>
);

export const NavBar = () => {
  const isKeyboardOpen = useDetectKeyboardOpen();
  return (
    <Flex
      css={{
        position: isKeyboardOpen ? "static" : "sticky",
        bottom: 0,
        height: 50,
        background: "rgba(255,255,255,0.7)",
      }}
    >
      <Link to="/" icon={RulerSquareIcon} title="Planner" />
      <Link to="/openings" icon={LightningBoltIcon} title="Openings" />
      <Link to="/conversion" icon={MixIcon} title="Conversion" />
    </Flex>
  );
};
