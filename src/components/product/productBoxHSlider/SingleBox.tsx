// Product box includes image, name, and price
import styled from "styled-components";
import { IProduct, ProductStatus } from "../../../interfaces";
import { primaryColor } from "../../../colors";

export const width = "330px";
export const height = "400px";
const imgWidth = "330px";

interface ISingleBoxProps {
  data: IProduct;
}

export default function SingleBox({ data }: ISingleBoxProps) {
  return (
    <>
      <Box>
        <ImageBox>
          <Image src={process.env.PUBLIC_URL + "images/" + data.type + ".png"} />
        </ImageBox>
        <Name>{data.name}</Name>
        <Price>{data.price} đ</Price>
        {data.status === ProductStatus.SOLDOUT && (
          <>
            <SoldOutBlur />
            <SoldOut>Hết món</SoldOut>
          </>
        )}
      </Box>
    </>
  );
}

const ImageBox = styled.div`
  width: ${imgWidth};
  height: ${imgWidth};
  display: flex;
  align-items: center;
  /* border: 1px solid pink; */
`;

const Image = styled.img`
  max-width: ${imgWidth};
  max-height: 100%;
`;

const Name = styled.span`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-top: -25px;
  height: 55px;
  display: flex;
  align-items: center;
  /* border: 1px solid blue; */
`;

const Price = styled.span`
  text-align: center;
  font-size: 22px;
  height: 20px;
  /* border: 1px solid yellow; */
`;

const Box = styled.div`
  width: ${width};
  height: ${height};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* border: 1px solid; */
`;

const SoldOutBlur = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 120px;
  height: 120px;
  opacity: 0.6;
  background-color: ${primaryColor};
  border-radius: 50%;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 160px;
    height: 160px;
    border: 16px solid ${primaryColor};
    border-radius: 50%;
    opacity: 0.5;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 250px;
    height: 250px;
    border: 8px solid ${primaryColor};
    border-radius: 50%;
    opacity: 0.4;
  }
`;

const SoldOut = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: green;
  font-size: 80px;
  font-weight: bold;
  rotate: -15deg;
`;
