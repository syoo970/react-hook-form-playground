import Input from "../components/Input";
import { useForm } from "react-hook-form";
import type { Meta, StoryObj } from "@storybook/react";
import { SyntheticEvent } from "react";

const meta: Meta = {
  title: "Components/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

type FormType = {
  id: number;
  email: string;
};

const BasicForm = () => {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        controllerProps={{
          control,
          name: "id",
        }}
      />
      <Input controllerProps={{ control, name: "email" }} />
      <button type="submit">제출</button>
    </form>
  );
};

export const Basic: Story = {
  render: () => {
    return <BasicForm />;
  },
};
