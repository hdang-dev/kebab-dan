import styled from "styled-components";
import { BiPlusCircle } from "react-icons/bi";
import { primaryColor } from "../../colors";

const size = "25px";

export default function PlusCircleIcon() {
  return <Icon />;
}

const Icon = styled(BiPlusCircle)`
  color: black;
  font-size: ${size};
  cursor: pointer;
  &:hover {
    color: ${primaryColor};
  }
`;
