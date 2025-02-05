import styled from "styled-components";

interface IBuyButton {
  onClick: React.MouseEventHandler;
}
export default function BuyButton({ onClick }: IBuyButton) {
  return <StyledBuyButton onClick={onClick}>Đặt ngay</StyledBuyButton>;
}

const StyledBuyButton = styled.button`
  width: 190px;
  height: 80px;
  background-color: green;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 24px;
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
