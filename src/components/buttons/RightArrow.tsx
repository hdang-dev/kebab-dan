import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedProductSelector } from "../../redux/selectors";
import SelectedProductSlice from "../../redux/slices/SelectedProductSlice";
import styled from "styled-components";
import { BiCaretRight } from "react-icons/bi";
import { primaryColor } from "../../colors";
import { useState } from "react";

interface IButtonProps {
  id?: string;
}

interface IArrowButtonProps {
  disable?: boolean;
  onClick?: Function;
}

export default function RightArrow({}: IArrowButtonProps) {
  const selectedProduct = useSelector(selectedProductSelector);
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(SelectedProductSlice.actions.moveNext());
  };

  useEffect(() => {
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 1000);
  }, [selectedProduct]);
  return <RightArrowButton disable={disable} onClick={handleClick} />;
}

const RightArrowButton = styled(BiCaretRight)<IArrowButtonProps>`
  font-size: 100px;
  transition: font-size 0.5s;
  color: ${(props) => (props.disable ? "grey" : primaryColor)};
  cursor: ${(props) => !props.disable && "pointer"};
  pointer-events: ${(props) => props.disable && "none"};
  &:hover {
    font-size: ${(props) => !props.disable && "120px"};
  }
`;
