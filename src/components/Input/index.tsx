import { Input as AntdInput, InputProps } from "antd";
import { useController } from "react-hook-form";
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

interface CustomInputProps<T extends FieldValues, K extends FieldPath<T>>
  extends InputProps {
  controllerProps: UseControllerProps<T, K>;
}

const Input = <T extends FieldValues, K extends FieldPath<T>>({
  controllerProps,
  ...props
}: CustomInputProps<T, K>) => {
  const { field } = useController({ ...controllerProps });

  return <AntdInput {...field} {...props} />;
};

export default Input;
