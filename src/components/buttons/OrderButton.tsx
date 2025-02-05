import styled from "styled-components";

interface IButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function OrderButton({ onClick }: IButton) {
  return <StyledOrderButton onClick={onClick}>Đặt ngay</StyledOrderButton>;
}

const StyledOrderButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: green;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  color: white;
  font-weight: bold;
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
    color: green;
    background-color: white;
    border: 3px solid green;
  }
`;
