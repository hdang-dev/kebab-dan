import styled from "styled-components";
import { BiPhone, BiPhoneCall } from "react-icons/bi";
import { primaryColor } from "../colors";

export default function C_Footer() {
  return (
    <>
      <Container>
        <PhoneIcon />
        <PhoneNumber>0123401234</PhoneNumber>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 0px 5px black;
  padding: 0 80px;
  justify-content: flex-end;
`;

const PhoneIcon = styled(BiPhoneCall)`
  font-size: 26px;
  color: ${primaryColor};
  margin-right: 7px;
`;

const PhoneNumber = styled.span`
  font-size: 20px;
  color: ${primaryColor};
`;
