import styled from "styled-components";
import { primaryColor } from "../../../colors";

interface IInputArea {
  title: string;
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputArea({ title, text, onChange }: IInputArea) {
  return (
    <Container>
      <Title>{title}</Title>
      <InputText placeholder={text} value={text} onChange={onChange} />
    </Container>
  );
}

const InputText = styled.input.attrs({ type: "textarea" })`
  width: 100%;
  height: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  font: inherit;
`;

const Container = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  background-color: #ededed;
  border-radius: 5px;
  padding: 0 15px;
  border: 1px solid transparent;
  &:focus-within {
    border: 1px solid ${primaryColor};
    ${InputText} {
      color: ${primaryColor};
    }
  }
`;
const Title = styled.span`
  width: 83px;
  font-weight: bold;
`;
