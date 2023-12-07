import React from "react";
import {
  svg_part1,
  svg_part2,
  svg_telegram,
  svg_viber,
  svg_whatsapp,
} from "../../assests/svg/svg";

const Navbar = () => {
  return (
    <header className=" ">
      <div className="container mx-auto  bg-black md:bg-transparent  pt-[11px]">
        
    
      <div className=" max-w-[1180px] w-full px-4   fixed flex flex-wrap flex-col md:flex-row md:justify-between  items-center  top-5">
        <a className="md:flex hidden flex-col gap-y-[10px] cursor-pointer">
          <span className="flex ">
            {svg_part1}
            <span className="pl-2"></span>
            {svg_part2}
          </span>

          <span className="w-[165px] font-inter text-[#E4E5EA] text-[10px] font font-light cursor-pointer leading-normal " >
            крупный интегратор CRM <br /> в Росcии и ещё 8 странах
          </span>
        </a>
        <nav className="xl:ml-auto xl:mr-auto  font-inter flex flex-nowrap items-center text-[#E4E5EA] font-medium leading-normal overflow-y-hidden justify-center">
          <a className="mr-5  font-inter  cursor-pointer">Услуги</a>
          <a className="mr-5  cursor-pointer">Виджеты</a>
          <a className="mr-5  cursor-pointer">Интеграции</a>
          <a className="mr-5  cursor-pointer">Кейсы</a>
          <a className=" md:block hidden cursor-pointer">Сертификаты</a>
        </nav>
        <div className=" flex-row gap-x-[47px] xl:flex hidden cursor-pointer text-[#E4E5EA]  text-[16px] font-medium text-right "> 
          <span className="font-inter">+7 555 555-55-55</span>
          <article className="flex flex-row gap-x-[30px] cursor-pointer">
            <span>{svg_telegram}</span>
            <span>{svg_viber}</span>
            <span>{svg_whatsapp}</span>
          </article>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Navbar;
