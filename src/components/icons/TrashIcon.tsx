import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import { primaryColor } from "../../colors";

const size = "25px";

export default function TrashIcon() {
  return <Icon />;
}

const Icon = styled(BiTrash)`
  color: black;
  font-size: ${size};
  cursor: pointer;
  &:hover {
    color: ${primaryColor};
  }
`;
