import React, { useEffect, useState } from "react";

// 使用图片的相对路径


const BannerCarousel: React.FC = () => {
  // 图片数组
  const images = [
    { src: "../../../images/home/carousel/banner1.jpeg", alt: "Banner 1" },
    { src: "../../../images/home/carousel/banner2.jpeg", alt: "Banner 2" },
    { src: "../../../images/home/carousel/banner3.jpeg", alt: "Banner 3" },
    { src: "../../../images/home/carousel/banner1.jpeg", alt: "Banner 1" },
    { src: "../../../images/home/carousel/banner2.jpeg", alt: "Banner 2" },
    { src: "../../../images/home/carousel/banner3.jpeg", alt: "Banner 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000; // 3 秒

  // 自动切换图片的效果
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => clearInterval(interval); // 清除定时器
  }, [currentIndex]);

  // 切换到上一张
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // 切换到下一张
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // 手动选择某张图片
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-[800px]">
      {/* 显示当前图片 */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* 左右切换按钮 */}
      <button
        onClick={prevSlide}
        className="absolute top-[50%] left-4 transform -translate-y-1/2 bg-slate-500 text-white p-2 rounded-full">
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-[50%] right-4 transform -translate-y-1/2 bg-slate-500 text-white p-2 rounded-full">
        ❯
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
