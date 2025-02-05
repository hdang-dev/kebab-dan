import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productListSelector, selectedProductSelector } from "../../redux/selectors";
import SelectedProductSlice from "../../redux/slices/SelectedProductSlice";
import styled, { css } from "styled-components";
import { primaryColor } from "../../colors";

export default function ProductNameHList() {
  const productList = useSelector(productListSelector);
  const selectedProduct = useSelector(selectedProductSelector);
  const [selectedProductIndex, setSelectedProductIndex] = useState(
    productList.findIndex((product) => product.type === selectedProduct.type)
  );
  const dispatch = useDispatch();

  const handleClick = (newIndex: number) => {
    setSelectedProductIndex(newIndex);
    let newSelectedProduct = productList[newIndex];
    dispatch(SelectedProductSlice.actions.toggleSelectedProduct(newSelectedProduct));
  };

  useEffect(() => {
    const newIndex = productList.findIndex((product) => product.type === selectedProduct.type);
    setSelectedProductIndex(newIndex);
  }, [selectedProduct]);

  return (
    <Container>
      {productList.map((product, index) => (
        <ProductName key={index} selected={index === selectedProductIndex} onClick={() => handleClick(index)}>
          {product.name}
        </ProductName>
      ))}
    </Container>
  );
}

interface StyledProductName {
  selected: boolean;
}

const ProductName = styled.label<StyledProductName>`
  font-size: 19px;
  transition: 0.2s;
  cursor: pointer;
  font-weight: bold;
  ${(props) =>
    props.selected &&
    css`
      color: ${primaryColor};
      text-decoration: underline;
    `}
  &:hover {
    font-size: 22px;
  }
`;

const Container = styled.div`
  display: flex;
  ${ProductName}:not(:first-child) {
    border-left: 1px solid black;
    padding-left: 45px;
    margin-left: 45px;
  }
`;
