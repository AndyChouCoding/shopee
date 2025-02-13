import React from "react";
import BannerCarousel from "./bannerCarousel";
import ProductList from "../../../mockDate/bannerList.json";
import BannerRightArea from "../../../mockDate/bannerR.json";

// 图标组件
interface ItemsProps {
  ListName: string;
  ListPic: string;
}

const Items: React.FC<ItemsProps> = ({ ListName, ListPic }) => {
  return (
    <a className="w-[100px] rounded-2xl bg-slate-100 p-2" href="#">
      <div className="flex justify-center">
        <img src={ListPic} alt={ListName} className="w-10 h-10" />
      </div>
      <p className="text-center text-sm">{ListName}</p>
    </a>
  );
};

// 定义 ProductList 的类型
interface Product {
  ListName: string;
  ListPic: string;
}

const BannerSection: React.FC = () => {
  // 将 ProductList 明确为 Product[] 类型
  const productList: Product[] = ProductList;

  return (
    <div>
      <section className="w-[1200px] mx-auto shadow-sm pt-8 pb-2">
        {/* 轮播图和图片区域 */}
        <div className="flex justify-between mb-2">
          {/* 轮播图 */}
          <BannerCarousel />

          {/* 图片区域 */}
          <div>
            <div className="w-[395px] h-[147px] mb-2">
              <img
                src={BannerRightArea[0].src}
                alt={BannerRightArea[0].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[395px] h-[147px]">
              <img
                src={BannerRightArea[1].src}
                alt={BannerRightArea[1].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 图标区域 */}
        <div className="my-4 flex justify-around">
          {productList.map((product, index) => (
            <Items key={index} ListName={product.ListName} ListPic={product.ListPic} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BannerSection;
