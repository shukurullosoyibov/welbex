import React from "react";
import part1 from "../../assests/svg/part1.svg";
import { part2 } from "../../assests/svg/part2.svg";
import { telegram } from "../../assests/svg/telegram.svg";
import { whatsapp } from "../../assests/svg/whatsapp.svg";
import { viber } from "../../assests/svg/viber.svg";
import { svg_telegram, svg_viber, svg_whatsapp } from "../../assests/svg/svg";
const Footer = () => {
  return (
    <footer className="">
      <div className="container  mt-[55px] mx-auto flex md:justify-between relative md:flex-col md:flex-nowrap flex-wrap flex-row">
        <div className="flex md:flex-row flex-col justify-between" >
       
        <div className=" flex-shrink-0 md:mx-0 ml-0  md:text-right text-left md:mt-0 mt-10">
          <div className=" w-full px-4 flex flex-col md:items-end items-start">
            <h2 className="font-bold text-[#656566] text-[14px] uppercase  tracking-[0.7px]   mb-3">
              Контакты
            </h2>
            <nav className="list-none flex flex-col items-start md:items-end ">
              <li>
                <a className="text-[#E4E5EA] text-[16px] font-normal">
                  +7 555 555-55-55
                </a>
              </li>
              <li className="flex flex-nowrap gap-x-[10px]">
                <span>{svg_telegram}</span>
                <span>{svg_viber}</span>
                <span>{svg_whatsapp}</span>
              </li>
              <li>
                <a className="text-[#E4E5EA] text-[16px] font-normal">
                  Москва, Путевой проезд 3с1, к 902
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20  md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full  items-start flex flex-col px-4">
            <h2 className="  text-[#656566] text-[14px] uppercase font-bold  tracking-[0.7px]   mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none flex flex-col items-start mb-10">
              <li>
                <a className="text-[#E4E5EA] text-[16px] font-normal">
                  Партнёрская программа
                </a>
              </li>
              <li>
                <a className="text-[#E4E5EA] text-left text-[16px] font-normal">
                  Вакансии
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2  px-4">
            <h2 className=" font-bold text-[#656566] text-[14px] uppercase  tracking-[0.7px]   mb-3">
              Меню
            </h2>
            <nav className="list-none items-start flex flex-col mb-10">
              <li>
                <a className="text-[#E4E5EA] text-[16px] font-normal">Расчёт стоимости</a>
              </li>
              <li>
                <a className="text-[#E4E5EA] text-[16px] font-normal">Услуги</a>
              </li>
              <li>
                <a className="text-[#E4E5EA] text-[16px] font-normal">
                  Виджеты
                </a>
              </li>
              <li>
                <a className="text-[#E4E5EA] text-[16px] font-normal">
                  Интеграции
                </a>
              </li>
              <li>
                <a className="text-[#E4E5EA] text-[16px] font-normal">
                  Наши клиенты
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2  px-4 pt-8">
           
            <nav className="list-none items-start flex flex-col mb-10">
              <li>
                <a className="text-[#E4E5EA] text-[16px] font-normal">Кейсы</a>
              </li>
              <li>
                <a className="text-[#E4E5EA] text-[16px] w-[123px] md:w-full line-clamp-2 text-left font-normal">
                  Благодарственные письма
                </a>
              </li>
              <li>
                <a className="text-[#E4E5EA] text-[16px] font-normal">
                  Сертификаты
                </a>
              </li>
              <li>
                <a className="text-[#E4E5EA] text-[16px] font-normal">
                  Блог на Youtube
                </a>
              </li>
              <li>
                <a className="text-[#E4E5EA] text-[16px] font-normal">
                  Вопрос / Ответ
                </a>
              </li>
            </nav>
          </div>
        </div>
        </div>
        <div className="text-[12px] text-[#E4E5EA] font-normal md:right-0 md:bottom-0 md:absolute flex items-end gap-y-[5px]">
            <span className=" ml-4 ">
            ©WELBEX 2022. Все права защищены.<br/>
            <span className="underline">Политика конфиденциальности</span>
            </span>
        </div>
        
      </div>
      
    </footer>
  );
};

export default Footer;
