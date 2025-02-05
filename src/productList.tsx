import { IProduct, ProductType, ProductStatus } from "./interfaces";

export const productList: Array<IProduct> = [
  {
    type: ProductType.BREAD,
    name: "Bánh mì Kebab",
    desciption:
      "Gồm các nguyên liệu: thịt Kebab, dưa, cà, xà lách ăn cùng với tương ớt, sốt mayone thơm giòn ngon cực!",
    price: 19000,
    status: ProductStatus.AVAILABLE,
  },
  {
    type: ProductType.SKEWER,
    name: "Xiên thịt Kebab",
    desciption: "Thịt được ướp với công thức bí mật siêu thơm ngon khó cưỡng!",
    price: 10000,
    status: ProductStatus.AVAILABLE,
  },
  {
    type: ProductType.ROLL,
    name: "Bánh cuộn Kebab",
    desciption:
      "Bánh tráng cuộn thịt Kebab với lớp vỏ dai mềm cùng với nhân thịt nóng hỏi thơm ngon ghiền ơi là ghiền!",
    price: 19000,
    status: ProductStatus.SOLDOUT,
  },
  {
    type: ProductType.SALAD,
    name: "Salad trộn",
    desciption:
      "Thành phần: cà chua, dưa leo, bắp cải tím, cải thảo",
    price: 15000,
    status: ProductStatus.AVAILABLE,
  },
];
