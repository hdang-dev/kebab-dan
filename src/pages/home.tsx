import {
  ProductNameHList as C_ProductNameHList,
  ProductBoxHSlider as C_ProductBoxHSlider,
  ProductDescriptionVSlider as C_ProductDescriptionVSlider,
} from "../components/product";
import { LogoIcon as C_LogoIcon } from "../components/icons";
import {
  LeftArrow as C_LeftArrow,
  RightArrow as C_RightArrow,
  BuyButton as C_BuyButton,
} from "../components/buttons";
import { CartModal as C_CartModal } from "../components/modals";
import C_Footer from "../components/footer";

import { useSelector, useDispatch } from "react-redux";
import { selectedProductSelector } from "../redux/selectors";
import CartSlice from "../redux/slices/CartSlice";

import styled from "styled-components";
import { useState } from "react";
import { ProductStatus } from "../interfaces";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const selectedProduct = useSelector(selectedProductSelector);
  const dispatch = useDispatch();
  const buy = () => {
    if (selectedProduct.status === ProductStatus.AVAILABLE) {
      dispatch(
        CartSlice.actions.setCartItem({ product: selectedProduct, quantity: 1 })
      );
      setShowModal(true);
    } else {
      alert("Món này đã bán hết. Quý khách vui lòng chọn món khác nhé!");
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <Container>
      {/* Header */}
      <HeaderArea>
        <C_ProductNameHList />
      </HeaderArea>

      {/* Body */}
      <BodyArea>
        {/* Left*/}
        <LeftArea>
          <C_LeftArrow />
        </LeftArea>

        {/* Main */}
        <MainArea>
          {/* Product */}
          <ProductArea>
            <C_ProductBoxHSlider />
            <C_ProductDescriptionVSlider />
          </ProductArea>

          {/* Buy and Add cart button */}
          <ButtonArea>
            <C_BuyButton onClick={buy} />
          </ButtonArea>
        </MainArea>

        {/* Right */}
        <RightArea>
          <C_RightArrow />
        </RightArea>
      </BodyArea>

      {/* Footer */}
      <FooterArea>
        <C_Footer />
      </FooterArea>

      {/* Modal */}
      <Blur isShowed={showModal} onClick={closeModal} />
      <C_CartModal isShowed={showModal} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 10% 80% 10%;
`;

// Header
const HeaderArea = styled.div`
  display: flex;
  /* box-shadow: 1px 0 5px black; */
  border-bottom: 1px solid orange;
  justify-content: center;
  align-items: center;
`;

// Body
const BodyArea = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
`;

const LeftArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const RightArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const MainArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProductArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const ButtonArea = styled.div`
  position: fixed;
  bottom: 15%;
  right: 5%;
  z-index: 1;
`;

// Footer
const FooterArea = styled.div``;

// Modals
interface styledBlur {
  isShowed: boolean;
}

const Blur = styled.div<styledBlur>`
  display: ${(props) => (props.isShowed ? "block" : "none")};
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
`;
