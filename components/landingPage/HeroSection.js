import Image from "next/image";
import React from "react";
import logo1 from "../../images/Rectangle 1.svg";
import img2 from "../../images/Rectangle 6 (1).svg";
import img3 from "../../images/Star 2.svg";
import style from "../../styles/Herosection.module.css";

const HeroSection = () => {
  return (
    <div className="px-10 md:px-20 mt-20">
      <div className={`${style.set_color} flex`}>
        <div className={`${style.set_color_one} hidden md:block`}></div>
        <div className={style.set_color_two}></div>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${style.parent_container}`}
      >
        <div className={`${style.item1} col-span-8`}>
          <div>
            <div className="text-right">
              <h2 className={style.h2}>React</h2>
              <h2 className={style.h2}>Conference</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
              <div className={`${style.first_img} order-3 md:order-1 mr-5`}>
                <Image className="" src={logo1} alt="logo" />
              </div>
              <div className="order-1 md:order-2">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  accusamus nemo provident voluptatum quaerat ipsa. Unde,
                  cupiditate quasi. Eligendi, reprehenderit.
                </p>
                <div className={style.bookiong_btn}>
                  <p className="mr-5">Buy Tickets</p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </p>
                </div>
                <div className={`flex ${style.scroll_down} items-center`}>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </p>
                  <p className="hidden md:block">Scroll down </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.item2} col-span-7 md:col-span-4 mt-28`}>
          <Image className={`${style.img2} w-full`} src={img2} alt="img2" />
          <Image className={`${style.img3}`} src={img3} alt="img3" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
