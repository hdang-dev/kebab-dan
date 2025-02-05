import styled from "styled-components";
import { BiCart } from "react-icons/bi";
import { primaryColor } from "../../colors";

interface ICart {
  quantity?: number;
}

export default function CartIcon() {
  const quantity = 1;
  return (
    <>
      <Cart>
        <Icon />
        {/* <Quantity value={quantity}>{quantity}</Quantity> */}
      </Cart>
    </>
  );
}

const Icon = styled(BiCart)`
  color: ${primaryColor};
  font-size: 50px;
  cursor: pointer;
`;

const Cart = styled.div`
  width: 50px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: 1px 0 5px black; */
  /* padding: 0 80px; */
`;

const ProductNameList = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
`;
