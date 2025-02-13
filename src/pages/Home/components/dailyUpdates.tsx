import React from "react";
import productItemData from "../../../mockDate/productList/productItems.json";

interface ProductItem {
  productName: string;
  productImage: string;
  productPrice: number;
}

// 单个商品组件
const Items: React.FC<ProductItem> = ({ productName, productImage, productPrice }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "TWD",
  }).format(productPrice);

  return (
    <a className="w-full p-2" href="#">
      <div>
        <img src={productImage} alt={productName} className="w-full h-[150px] object-cover" />
      </div>
      <div>
        <p className="text-center">{productName}</p>
        <p className="text-center text-[#f63] font-bold">{formattedPrice}</p>
      </div>
    </a>
  );
};

// 每日新发现组件
const DailyUpdate: React.FC = () => {
  const productItems: ProductItem[] = productItemData;

  return (
    <div className="mt-2">
      <h3 className="flex justify-center p-2 text-[#f63] font-bold border-b-[6px] border-[#f63] mb-2">
        每日新發現
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {productItems.map((product, index) => (
          <Items
            key={index}
            productName={product.productName}
            productImage={product.productImage}
            productPrice={product.productPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyUpdate;
