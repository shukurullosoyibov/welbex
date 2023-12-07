import React from "react";

const Hero = () => {
  return (
    <section className="smal-bg">
      <div className="container mx-auto   flex px-5 mt-24 md:flex-row mb-[70px] md:justify-between flex-col items-center">
        <div className=" flex flex-col  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-[#E4E5EA] text-[48px] font-normal leading-tight text-left">
            Зарабатывайте
            <br className="inline-block" />
            больше
          </h1>
          <span className="text-bg text-[48px] font-black ">с WELBEX</span>
          <div className="flex justify-center">
            <span className="text-left text-[18px] text-[#E4E5EA] font-normal line-clamp-2 w-[275px] ">
              Развиваем и контролируем продажи за вас
            </span>
          </div>
        </div>
        <div className=" flex flex-col items-end ">
          <h1 className="w-[291px] text-white line-clamp-2 font-medium tracking-[0.9px] mb-10 text-[18px] text-right ">
            Вместе с <span className="text-bg font-bold  ">бесплатной </span>
            <span className="text-bg font-bold">консультацией </span>
            мы дарим:
          </h1>
          <div className="grid grid-cols-2 gap-[30px] mb-[61px] ">
            <div className="flex flex-col items-end text-[#E4E5EA]">
              <h3 className="text-[18px] flex items-center gap-x-1 font-medium tracking-[0.9px] ">
                <span className="md:hidden inline-block line-bg"></span> Виджеты
              </h3>
              <span className="text-right font-normal leading-4 text-[16px]">
                30 готовых <br /> решений
              </span>
            </div>
            <div className="flex flex-col items-end text-[#E4E5EA]">
              <h3 className="text-[18px] flex items-center gap-x-1 font-medium tracking-[0.9px] ">
              <span className="md:hidden inline-block line-bg"></span> Dashboard
              </h3>
              <span className="text-right font-normal leading-4 text-[16px]">
                с показателями <br /> вашего бизнеса
              </span>
            </div>
            <div className="flex flex-col items-end text-[#E4E5EA]">
              <h3 className="text-[18px] flex items-center gap-x-1 font-medium tracking-[0.9px] ">
              <span className="md:hidden inline-block line-bg"></span> Skype Аудит
              </h3>
              <span className="text-right font-normal leading-4 text-[16px]">
                отдела продаж <br /> и CRM системы
              </span>
            </div>
            <div className="flex flex-col items-end text-[#E4E5EA]">
              <h3 className="text-[18px] flex items-center gap-x-1 font-medium tracking-[0.9px] ">
              <span className="md:hidden inline-block line-bg"></span> 35 дней
              </h3>
              <span className="text-right font-normal leading-4 text-[16px]">
                использования <br /> CRM
              </span>
            </div>
          </div>
          <button className="bg-[#4077F3] transition-all duration-300 ease-in w-[262px] h-[61px] md:block hidden relative right-0 ">
            <span className="text-[16px] text-[#E4E5EA] font-medium text-center">
              Получить консультацию
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
