import BannerCarousel from "./bannerCarousel";


const BannerTop = { src:"../../../images/home/banner/bannerTop.jpeg", alt: "BannerTop" }; 
const BannerBottom = { src:"../../../images/home/banner/BannerBottom.jpeg", alt: "BannerBottom" }; 

const Items: React.FC = () => {
  return (
    <div className="w-[80px] rounded-2xl bg-slate-100 p-2">
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-bag"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
        </svg>
      </div>
      <p className="text-center">蝦皮商城</p>
    </div>
  );
};

const BannerSection: React.FC = () => {
  return (
    <>
      <div>
        <section className="w-[1200px] mx-[auto] shadow-sm pt-8 pb-2">
          <div className="flex justify-between mb-2">
            {/* 轮播图 */}
            <BannerCarousel />

            {/* 图片区域 */}
            <div>
              <div className="w-[395px] h-[147px] mb-[6px]">
                <img

                  src={BannerTop.src} // 使用 BannerTop 对象的 src 属性
                  alt={BannerTop.alt} // 使用 BannerTop 对象的 alt 属性
                  className="w-full h-full object-fill" // 确保图片按比例填充容器
                />
              </div>
              <div className=" w-[395px] h-[147px]">
              <img
                  src={BannerBottom.src} // 使用 BannerTop 对象的 src 属性
                  alt={BannerBottom.alt} // 使用 BannerTop 对象的 alt 属性
                  className="w-full h-full object-fill" // 确保图片按比例填充容器
                />
              </div>
            </div>
          </div>

          {/* 图标区域 */}
          <div className="my-4 flex justify-around">
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <Items key={index} />
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BannerSection;
