import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartItemListSelector, orderListSelector } from "../../../redux/selectors";
import styled from "styled-components";
import { primaryColor } from "../../../colors";
import CartItem from "./UnSelectedCartItem";
import { BiPlusCircle } from "react-icons/bi";
import CartSlice from "../../../redux/slices/CartSlice";
import SelectedCartItem from "./SelectedCartItem";
import UnSelectedCartItem from "./UnSelectedCartItem";
import { ICartItem, ProductStatus } from "../../../interfaces";
import InputArea from "./InputArea";
import OrderButton from "../../buttons/OrderButton";
import CancelOrderButton from "../../buttons/CancelOrderButton";
import OrderListSlice from "../../../redux/slices/OrderListSlice";

interface ICartModal {
  isShowed: boolean;
}

export default function CartModal({ isShowed }: ICartModal) {
  const cartItemList = useSelector(cartItemListSelector);
  const [selectedCartItemList, setSelectedCartItemList] = useState<ICartItem[]>([]);
  const [unSelectedCartItemList, setUnSelectedCartItemList] = useState<ICartItem[]>(
    cartItemList.filter((item) => item.product.status === ProductStatus.AVAILABLE)
  );
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [note, setNote] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const changeNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target?.value);
  };
  const changeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target?.value);
  };
  const changePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target?.value);
  };
  const cacelOrder = () => {
    if (selectedCartItemList.length > 0) {
      dispatch(CartSlice.actions.resetCart());
      setNote("");
      setAddress("");
      setPhone("");
      alert("Huỷ đơn hàng thành công");
    }
  };

  const verifyOrder = () => {
    if (selectedCartItemList.length > 0 && address && phone) {
      dispatch(
        OrderListSlice.actions.addOrder({
          detailList: selectedCartItemList,
          totalQuantity,
          totalPrice,
          note,
          address,
          phone,
        })
      );
      dispatch(CartSlice.actions.resetCart());
      setNote("");
      setAddress("");
      setPhone("");
      alert("Đơn hàng của quý khách đã được gửi đi. Vui lòng chờ từ 5'->30' để nhận bánh.");
    } else {
      alert("Không thể đặt hàng. Có thể do quý khách chưa chọn món, chưa điền thông tin địa chỉ hoặc di động.");
    }
  };

  useEffect(() => {
    setSelectedCartItemList(
      cartItemList.filter((item) => item.quantity > 0 && item.product.status === ProductStatus.AVAILABLE)
    );
    setUnSelectedCartItemList(
      cartItemList.filter((item) => item.quantity === 0 && item.product.status === ProductStatus.AVAILABLE)
    );
    setTotalQuantity(cartItemList.reduce((accum, item) => accum + item.quantity, 0));
    setTotalPrice(cartItemList.reduce((accum, item) => accum + item.product.price * item.quantity, 0));
  }, [cartItemList]);

  // test order
  const orderList = useSelector(orderListSelector);
  useEffect(() => {
    console.log(orderList);
  }, [orderList]);

  return (
    <Container isShowed={isShowed}>
      <Title>ĐẶT HÀNG</Title>

      <Line />

      <CartItemList>
        {selectedCartItemList.map((item, index) => (
          <SelectedCartItem key={index} cartItem={item} />
        ))}
      </CartItemList>

      {selectedCartItemList.length < cartItemList.length && (
        <AddMoreBox>
          <AddMore>
            <PlusCircleIcon />
          </AddMore>
          <CartItemList>
            {unSelectedCartItemList.map((item, index) => (
              <UnSelectedCartItem key={index} cartItem={item} />
            ))}
          </CartItemList>
        </AddMoreBox>
      )}

      <Line />

      <TotalQuantityBox>
        <span>Tổng số lượng: </span>
        <span>x </span>
        <TotalQuantity>{totalQuantity}</TotalQuantity>
      </TotalQuantityBox>
      <TotalPrice>
        <span>Tổng tiền: </span>
        <span>{totalPrice} đ</span>
      </TotalPrice>

      <InputAreaList>
        <InputArea title="Ghi chú: " text={note} onChange={changeNote} />
        <InputArea title="*Địa chỉ: " text={address} onChange={changeAddress} />
        <InputArea title="*Di động: " text={phone} onChange={changePhone} />
      </InputAreaList>

      <ButtonArea>
        <CancelOrderButton onClick={cacelOrder} />
        <OrderButton onClick={verifyOrder} />
      </ButtonArea>
    </Container>
  );
}

interface styledContainer {
  isShowed: boolean;
}

const Container = styled.div<styledContainer>`
  display: ${(props) => (props.isShowed ? "block" : "none")};
  width: 500px;
  height: fit-content;
  border: 5px solid ${primaryColor};
  background-color: white;
  border-radius: 0 35px;
  padding: 10px 30px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${primaryColor};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const PlusCircleIcon = styled(BiPlusCircle)`
  font-size: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const AddMore = styled.div`
  width: 100%;
  height: 46px;
  border-radius: 10px;
  background-color: silver;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 2px 0;
  border: 1px solid transparent;
`;

const CartItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const AddMoreBox = styled.div`
  display: flex;
  flex-direction: column;

  ${CartItemList} {
    display: none;
  }
  &:hover {
    ${AddMore} {
      display: none;
    }
    ${CartItemList} {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  border-top: 2px solid ${primaryColor};
  margin: 6px 0;
`;

const TotalQuantityBox = styled.div`
  display: grid;
  height: 32px;
  grid-template-columns: 65% 8% 27%;
  padding: 0 15px;
  font-weight: 600;

  margin-top: 5px;
`;

const TotalQuantity = styled.span`
  text-align: end;

  margin-left: -20px;
  width: 30px;
`;

const TotalPrice = styled.div`
  display: grid;
  height: 32px;
  grid-template-columns: 80% 20%;
  padding: 0 15px;
  font-weight: 600;
  margin-top: 5px;
`;

const InputAreaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 25px 15px 0;
`;
