import { Controller } from "react-hook-form";
import type { ControllerProps } from "react-hook-form";
import { Input as AInput } from "antd";

interface CustomInputProps {
  controlProp: ControllerProps;
  Component: typeof AInput;
}

const Input = ({ controlProp, Component }: CustomInputProps) => {
  return (
    <Controller
      {...controlProp}
      render={(...props) => <Component {...props} />}
    />
  );
};

export default Input;
