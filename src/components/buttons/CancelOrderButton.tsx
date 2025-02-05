import styled from "styled-components";

interface IButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CancelOrderButton({ onClick }: IButton) {
  return <StyledCancelOrderButton onClick={onClick}>Huỷ đơn</StyledCancelOrderButton>;
}

const StyledCancelOrderButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: red;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  color: white;
  font-weight: bold;
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
    color: red;
    background-color: white;
    border: 3px solid red;
  }
`;
