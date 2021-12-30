import { ComponentProps, forwardRef } from "react";
import { Box, Label, InputBase } from "..";

export const TextField = forwardRef<
  HTMLInputElement,
  {
    label: string;
  } & ComponentProps<typeof InputBase>
>(({ label, value, onChange, ...rest }, ref) => (
  <Box>
    <Label>{label}</Label>
    <InputBase
      ref={ref}
      value={value}
      onChange={onChange}
      onFocus={(e) => e.target.select()}
      {...rest}
    />
  </Box>
));