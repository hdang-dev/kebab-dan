import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { productListSelector, selectedProductSelector } from "../../../redux/selectors";
import styled from "styled-components";
import SingleBox, { width, height } from "./SingleBox";

export default function ProductBox() {
  const productList = useSelector(productListSelector);
  const selectedProduct = useSelector(selectedProductSelector);

  // Add more boxes to make slide animation smoothly
  const twoFirstBoxes = productList.slice(0, 2);
  const twoLastBoxes = productList.slice(productList.length - 2, productList.length);
  const showedProductList = [...twoLastBoxes, ...productList, ...twoFirstBoxes];

  // Make slide animation base on change of selectedProduct
  const prevProduct = useRef(selectedProduct);
  const firstBoxIndex = 0;
  const lastBoxIndex = productList.length - 1;
  const offset = Number(width.replace("px", "")); // Offset of boxList everytime slide
  const mostLeftOffset = 0;
  const mostRightOffset = -(productList.length + 1) * offset;

  useEffect(() => {
    const boxList = document.getElementById("box-list");
    if (boxList) {
      boxList.style.marginLeft = -offset + "px";
    }
  }, []);

  useEffect(() => {
    const boxList = document.getElementById("box-list");
    if (boxList) {
      let newIndex = productList.findIndex((product) => product.type === selectedProduct.type);
      let prevIndex = productList.findIndex((product) => product.type === prevProduct.current.type);

      // Slide from first box to last box
      if (prevIndex === firstBoxIndex && newIndex === lastBoxIndex) {
        boxList.style.transition = "margin-left 1s";
        boxList.style.marginLeft = mostLeftOffset + "px";
        setTimeout(() => {
          boxList.style.transition = "margin-left 0s";
          boxList.style.marginLeft = -(lastBoxIndex + 1) * offset + "px";
        }, 1000);
      }
      // Slide from last box to first box
      else if (prevIndex === lastBoxIndex && newIndex === firstBoxIndex) {
        boxList.style.transition = "margin-left 1s";
        boxList.style.marginLeft = mostRightOffset + "px";
        setTimeout(() => {
          boxList.style.transition = "margin-left 0s";
          boxList.style.marginLeft = -(firstBoxIndex + 1) * offset + "px";
        }, 1000);
      }
      // Slide between boxes not includes 2 cases above
      else {
        const currOffset = Number(boxList.style.marginLeft.replace("px", ""));
        const indexOffset = Math.abs(prevIndex - newIndex);
        if (prevIndex < newIndex) {
          console.log("slide to left : ", prevIndex, newIndex, currOffset);
          boxList.style.transition = "margin-left 1s";
          boxList.style.marginLeft = currOffset - indexOffset * offset + "px";
        } else if (prevIndex > newIndex) {
          console.log("slide to right : ", prevIndex, newIndex, currOffset);
          boxList.style.transition = "margin-left 1s";
          boxList.style.marginLeft = currOffset + indexOffset * offset + "px";
        } else {
        }
      }
    }
    prevProduct.current = selectedProduct;
  }, [selectedProduct]);

  return (
    <>
      <HorizontalSlider>
        <LeftBlur />
        <BoxList id="box-list">
          {showedProductList.map((product, index) => (
            <SingleBox key={index} data={product} />
          ))}
        </BoxList>
        <RightBlur />
      </HorizontalSlider>
    </>
  );
}

const LeftBlur = styled.div`
  width: ${width};
  height: ${height};
  background-image: linear-gradient(
    to right,
    white,
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.65),
    transparent
  );
`;

const RightBlur = styled.div`
  width: ${width};
  height: ${height};
  background-image: linear-gradient(
    to left,
    white,
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.65),
    transparent
  );
`;

const BoxList = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
`;

const HorizontalSlider = styled.div`
  width: ${Number(width.replace("px", "")) * 3 + "px"};
  height: ${Number(height.replace("px", "")) + 2 + "px"};
  overflow: hidden;

  position: relative;
  ${LeftBlur} {
    position: absolute;
    left: 0;
    z-index: 1;
  }
  ${BoxList} {
    position: absolute;
  }
  ${RightBlur} {
    position: absolute;
    right: 0;
    z-index: 1;
  }
`;
