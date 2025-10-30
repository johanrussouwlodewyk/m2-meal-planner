import { ComponentProps } from "react";

type ControlledInputProps = {
  name: string;
  label?: string;
  containerClassName?: string;
} & ComponentProps<"input">;

const ControlledInput = () => {
  return <></>;
};

export { ControlledInput };
