import { useDispatch} from "react-redux";
import CartSlice from "../../../redux/slices/CartSlice";
import styled from "styled-components";
import { ICartItem } from "../../../interfaces";
import { primaryColor } from "../../../colors";
import { BiPlusCircle } from "react-icons/bi";

interface ICartModalITem {
  cartItem: ICartItem;
}

export default function UnSelectedCartItem({ cartItem }: ICartModalITem) {
  const dispatch = useDispatch();
  const AddOne = ()=>{
    dispatch(CartSlice.actions.setCartItem({...cartItem, quantity: 1}))
  }
  return (
    <Container onClick={AddOne}>
      <PlusCircleIcon />
      <ImageBox>
        <Image src={process.env.PUBLIC_URL + "images/" + cartItem.product.type + ".png"} />
      </ImageBox>
      <Name>{cartItem.product.name}</Name>
      <Quantity>x {cartItem.quantity}</Quantity>
      <Price>{cartItem.product.price} đ</Price>
    </Container>
  );
}

const PlusCircleIcon = styled(BiPlusCircle)`
  font-size: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const Container = styled.div`
  
  justify-content: center;
  align-items: center;
  /* font-weight: bold; */
  padding: 0 15px;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: silver;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 15% 60% 10% 15%;
  
  position: relative;
  &:hover {
    border: 1px solid ${primaryColor};
    border-radius: 10px;
    ${PlusCircleIcon} {
      color: ${primaryColor};
    }
  }
`;

const ImageBox = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  max-height: 50px;
`;

const Name = styled.span``;
const Price = styled.span``;
const Quantity = styled.span``;
