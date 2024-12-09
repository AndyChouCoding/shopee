const ProductClassification = () => {
  return (
    <>
      <div className=" shadow-xl ">
        <h2 className=" ">
          <p className="p-4">分類</p>
        </h2>
        <div className="flex flex-wrap border-[1px] border-solid border-gray">
          {Array(24)
            .fill(null)
            .map((_, index) => (
              <div key={index} className=" w-1/12 items-center text-center border-[1px] border-solid border-gary p-1">
                product
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductClassification;
