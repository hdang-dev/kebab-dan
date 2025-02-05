import styled from "styled-components";
import { BiStore } from "react-icons/bi";
import { primaryColor } from "../../colors";

const size = "50px";

export default function LogoIcon() {
  return (
    <Logo>
      <Icon />
      <Slogan>KEBAB nóng giòn, thơm ngon, giao bánh hỏa tốc</Slogan>
    </Logo>
  );
}

const Slogan = styled.div`
  display: none;
  cursor: pointer;
  width: 420px;
  text-align: center;
  border: 3px solid ${primaryColor};
  padding: 15px;
  border-radius: 35px;
  color: ${primaryColor};
  background-color: #fff;
  font-size: 20px;
  font-style: italic;

  /* Up triangle */
  &::after {
    content: "";
    width: 0;
    height: 0;
    border-color: transparent transparent ${primaryColor} transparent;
    border-width: 0 6px 6px;
    border-style: solid;
    position: absolute;
    top: -8px;
    left: 21px;
  }
`;

const Icon = styled(BiStore)`
  color: ${primaryColor};
  font-size: ${size};
  cursor: pointer;
`;

const Logo = styled.div`
  width: ${size};
  height: ${size};
  position: relative;
  ${Slogan} {
    position: absolute;
    z-index: 2;
    bottom: -58px;
    left: -5px;
  }
  &:hover {
    ${Slogan} {
      display: block;
      opacity: 1;
    }
  }
`;
