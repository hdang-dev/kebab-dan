import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { productListSelector, selectedProductSelector } from "../../../redux/selectors";
import styled from "styled-components";
import SingleDescription, { width, height } from "./SingleDescription";

// export default function ProductDescription({ data, slideUpBy, slideDownBy, id }: IDescriptionProps) {
export default function ProductDescription() {
  const productList = useSelector(productListSelector);
  const selectedProduct = useSelector(selectedProductSelector);

  // Add more descs to make slide animation smoothly
  const firstDesc = productList[productList.length - 1];
  const lastDesc = productList[0];
  const showedProductList = [firstDesc, ...productList, lastDesc];

  // Make slide animation base on change of selectedProduct
  const prevProduct = useRef(selectedProduct);
  const firstDescIndex = 0;
  const lastDescIndex = productList.length - 1;
  const offset = Number(height.replace("px", "")); // Offset of descList everytime slide
  const mostTopOffset = 0;
  const mostBottomOffset = -(productList.length + 1) * offset;

  useEffect(() => {
    const descList = document.getElementById("desc-list");
    if (descList) {
      descList.style.marginTop = -offset + "px";
    }
  }, []);

  useEffect(() => {
    const descList = document.getElementById("desc-list");
    if (descList) {
      let newIndex = productList.findIndex((product) => product.type === selectedProduct.type);
      let prevIndex = productList.findIndex((product) => product.type === prevProduct.current.type);

      // Slide from first desc to last desc
      if (prevIndex === firstDescIndex && newIndex === lastDescIndex) {
        descList.style.transition = "margin-top 1s";
        descList.style.marginTop = mostTopOffset + "px";
        setTimeout(() => {
          descList.style.transition = "margin-top 0s";
          descList.style.marginTop = -(lastDescIndex + 1) * offset + "px";
        }, 1000);
      }
      // Slide from last desc to first desc
      else if (prevIndex === lastDescIndex && newIndex === firstDescIndex) {
        descList.style.transition = "margin-top 1s";
        descList.style.marginTop = mostBottomOffset + "px";
        setTimeout(() => {
          descList.style.transition = "margin-top 0s";
          descList.style.marginTop = -(firstDescIndex + 1) * offset + "px";
        }, 1000);
      }
      // Slide between descs not includes 2 cases above
      else {
        const currOffset = Number(descList.style.marginTop.replace("px", ""));
        const indexOffset = Math.abs(prevIndex - newIndex);
        if (prevIndex < newIndex) {
          console.log("slide to top : ", prevIndex, newIndex, currOffset);
          descList.style.transition = "margin-top 1s";
          descList.style.marginTop = currOffset - indexOffset * offset + "px";
        } else if (prevIndex > newIndex) {
          console.log("slide to right : ", prevIndex, newIndex, currOffset);
          descList.style.transition = "margin-top 1s";
          descList.style.marginTop = currOffset + indexOffset * offset + "px";
        } else {
        }
      }
    }
    prevProduct.current = selectedProduct;
  }, [selectedProduct]);

  return (
    <>
      <VerticalSlider>
        <DescriptionList id="desc-list">
          {showedProductList.map((product, index) => (
            <SingleDescription key={index} data={product} />
          ))}
        </DescriptionList>
      </VerticalSlider>
    </>
  );
}

const VerticalSlider = styled.div`
  width: ${width};
  height: ${height};
  overflow: hidden;
`;

const DescriptionList = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
`;
