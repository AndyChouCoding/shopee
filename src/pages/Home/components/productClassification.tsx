import Product from "../../../mockDate/porduct.json";


// 图标组件
interface ItemsProps {
  ListName: string;
  ListPic: string;
}

const Items: React.FC<ItemsProps> = ({ ListName, ListPic }) => {
  return (
    <div className="">
      <div className="flex justify-center p-4 w-[120px]">
        <img src={ListPic} alt={ListName} className="w-10 h-10" />
      </div>
      <p className="text-center text-sm ">{ListName}</p>
    </div>
  );
};

interface Product {
  productList: string;
  productName: string;
}

const ProductClassification: React.FC = () => {
  const product: Product[] = Product;
  return (
    <>
     <div>
      <section className="w-[1200px] mx-auto shadow-sm pb-2 bg-slate-200">
        {/* 图标区域 */}
        <div className="flex flex-wrap">
          {product.map((product, index) => (
            <Items key={index} ListName={product.productName} ListPic={product.productList} />
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default ProductClassification;
