import {
  Wrapper,
  Form,
  Label,
  Input,
  InputContent,
  Button,
  TextArea,
} from "./ContactStyle";

export const Contact = () => {
  return (
    <Wrapper>
      <Form>
        <InputContent>
          <Label></Label>
          <Input />
        </InputContent>
        <InputContent>
          <Label></Label>
          <Input />
        </InputContent>

        <TextArea />

        <Button>Send</Button>
      </Form>
    </Wrapper>
  );
};
