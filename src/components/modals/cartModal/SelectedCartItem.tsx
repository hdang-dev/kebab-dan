import { useDispatch } from "react-redux";
import CartSlice from "../../../redux/slices/CartSlice";
import styled from "styled-components";
import { TrashIcon } from "../../icons";
import { ICartItem } from "../../../interfaces";
import { primaryColor } from "../../../colors";
import React, { useState } from "react";

interface ICartModalItem {
  cartItem: ICartItem;
}

export default function SelectedCartItem({ cartItem }: ICartModalItem) {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(CartSlice.actions.setCartItem({ ...cartItem, quantity: 0 }));
  };
  const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CartSlice.actions.setCartItem({ ...cartItem, quantity: Number(e.target?.value) }));

  };
  return (
    <Container>
      <ImageBox>
        <Image src={process.env.PUBLIC_URL + "images/" + cartItem.product.type + ".png"} />
      </ImageBox>
      <Name>{cartItem.product.name}</Name>
      <QuantityBox>
        <span>x</span>
        <Quantity placeholder={cartItem.quantity.toString()} onChange={changeQuantity} value={cartItem.quantity.toString()}/>
      </QuantityBox>
      <Price>{cartItem.product.price} đ</Price>
      <TrashIconBox onClick={removeCartItem}>
        <TrashIcon />
      </TrashIconBox>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 15% 50% 15% 15% 5%;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${primaryColor};
    border-radius: 10px;
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
const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Quantity = styled.input.attrs({ type: "number" })`
  // Remove arrows
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: 30px;
  height: 25px;
  border: none;
  border-radius: 2px;
  background-color: #ededed;
  text-align: end;
  font: inherit;
  outline: none;
  &:focus {
    border: ${primaryColor} 1px solid;
    color: ${primaryColor};
  }
`;

const TrashIconBox = styled.div`
  display: flex;
  align-items: center;
`;
