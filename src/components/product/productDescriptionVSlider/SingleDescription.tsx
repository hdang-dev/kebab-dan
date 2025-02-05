// Product description includes only description
import styled from "styled-components";
import { IProduct } from "../../../interfaces";
import { primaryColor } from "../../../colors";

export const width = "400px";
export const height = "60px";

interface ISingleDescriptionProps {
  data: IProduct;
}

export default function SingleDescription({ data }: ISingleDescriptionProps) {
  return (
    <>
      <Description>{data.desciption}</Description>
    </>
  );
}

const Description = styled.span`
  width: ${width};
  height: ${height};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  font-style: italic;
  color: ${primaryColor};
`;
