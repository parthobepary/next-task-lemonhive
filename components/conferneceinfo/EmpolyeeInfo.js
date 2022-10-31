import Image from "next/image";
import React, { useEffect, useState } from "react";
import vector from "../../images/Vector.svg";
import empolyee from "../../json/empolyee.json";
import style from "../../styles/Employee.module.css";

const EmpolyeeInfo = () => {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [button5, setButton5] = useState(false);
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/data")
      .then((res) => res.json())
      .then((data) => {
        setEmployee(data);
      });
  }, []);

  const isActive1 = () => {
    setButton1(true);
    setButton2(false);
    setButton3(false);
    setButton4(false);
    setButton5(false);
    setEmployee(empolyee);
  };
  const isActive2 = () => {
    setButton1(false);
    setButton2(true);
    setButton3(false);
    setButton4(false);
    setButton5(false);
    setEmployee(empolyee);
  };
  const isActive3 = () => {
    setButton1(false);
    setButton2(false);
    setButton3(true);
    setButton4(false);
    setButton5(false);
    setEmployee(empolyee);
  };
  const isActive4 = () => {
    setButton1(false);
    setButton2(false);
    setButton3(false);
    setButton4(true);
    setButton5(false);
    setEmployee(empolyee);
  };
  const isActive5 = () => {
    setButton1(false);
    setButton2(false);
    setButton3(false);
    setButton4(false);
    setButton5(true);
    setEmployee(empolyee);
  };

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className={`col-span-10 md:col-span-4`}>
          <div className="mx-auto">
            <div
              onClick={isActive1}
              className={
                !button1
                  ? style.custom_btn
                  : `${style.custom_btn} bg-yellow-400`
              }
            >
              <div>
                <Image
                  className="bg-white py-2 px-2 rounded-md"
                  src={vector}
                  alt="hello"
                  height="40%"
                  width="30%"
                />
              </div>
              <p className="ml-16">jfghfdgfg</p>
            </div>
            <div
              className={
                button1
                  ? `${style.show_table} my-4-10 block md:hidden`
                  : `${style.show_table} my-4-10 hidden md:hidden`
              }
            >
              {employees.map((e, i) => {
                return (
                  <div key={i}>
                    <div className="flex mb-4">
                      <div className="mr-6">
                        <Image
                          height="200px"
                          width="200px"
                          className={style.img_body}
                          src={e.img}
                          alt="hello"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <p className={style.heading}>{e.author}</p>
                          <p className={style.heading}>{e.company}</p>
                        </div>
                        <div>
                          <p className={style.pera}>{e.pera}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              onClick={isActive2}
              className={
                !button2
                  ? style.custom_btn
                  : `${style.custom_btn} bg-yellow-400`
              }
            >
              <div>
                <Image
                  className="bg-white py-2 px-2 rounded-md"
                  src={vector}
                  alt="hello"
                  height="40%"
                  width="30%"
                />
              </div>
              <p className="ml-16">jfghfdgfg</p>
            </div>
            <div
              className={
                button2
                  ? `${style.show_table} my-4-10 block md:hidden`
                  : `${style.show_table} my-4-10 hidden md:hidden`
              }
            >
              {employees.map((e, i) => {
                return (
                  <div key={i}>
                    <div className="flex mb-4">
                      <div className="mr-6">
                        <Image
                          height="200px"
                          width="200px"
                          className={style.img_body}
                          src={e.img}
                          alt="hello"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <p className={style.heading}>{e.author}</p>
                          <p className={style.heading}>{e.company}</p>
                        </div>
                        <div>
                          <p className={style.pera}>{e.pera}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              onClick={isActive3}
              className={
                !button3
                  ? style.custom_btn
                  : `${style.custom_btn} bg-yellow-400`
              }
            >
              <div>
                <Image
                  className="bg-white py-2 px-2 rounded-md"
                  src={vector}
                  alt="hello"
                  height="40%"
                  width="30%"
                />
              </div>
              <p className="ml-16">jfghfdgfg</p>
            </div>
            <div
              className={
                button3
                  ? `${style.show_table} my-4-10 block md:hidden`
                  : `${style.show_table} my-4-10 hidden md:hidden`
              }
            >
              {employees.map((e, i) => {
                return (
                  <div key={i}>
                    <div className="flex mb-4">
                      <div className="mr-6">
                        <Image
                          height="200px"
                          width="200px"
                          className={style.img_body}
                          src={e.img}
                          alt="hello"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <p className={style.heading}>{e.author}</p>
                          <p className={style.heading}>{e.company}</p>
                        </div>
                        <div>
                          <p className={style.pera}>{e.pera}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              onClick={isActive4}
              className={
                !button4
                  ? style.custom_btn
                  : `${style.custom_btn} bg-yellow-400`
              }
            >
              <div>
                <Image
                  className="bg-white py-2 px-2 rounded-md"
                  src={vector}
                  alt="hello"
                  height="40%"
                  width="30%"
                />
              </div>
              <p className="ml-16">jfghfdgfg</p>
            </div>
            <div
              className={
                button4
                  ? `${style.show_table} my-4-10 block md:hidden`
                  : `${style.show_table} my-4-10 hidden md:hidden`
              }
            >
              {employees.map((e, i) => {
                return (
                  <div key={i}>
                    <div className="flex mb-4">
                      <div className="mr-6">
                        <Image
                          height="200px"
                          width="200px"
                          className={style.img_body}
                          src={e.img}
                          alt="hello"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <p className={style.heading}>{e.author}</p>
                          <p className={style.heading}>{e.company}</p>
                        </div>
                        <div>
                          <p className={style.pera}>{e.pera}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              onClick={isActive5}
              className={
                !button5
                  ? style.custom_btn
                  : `${style.custom_btn} bg-yellow-400`
              }
            >
              <div>
                <Image
                  className="bg-white py-2 px-2 rounded-md"
                  src={vector}
                  alt="hello"
                  height="40%"
                  width="30%"
                />
              </div>
              <p className="ml-16">jfghfdgfg</p>
            </div>
            <div
              className={
                button5
                  ? `${style.show_table} my-4-10 block md:hidden`
                  : `${style.show_table} my-4-10 hidden md:hidden`
              }
            >
              {employees.map((e, i) => {
                return (
                  <div key={i}>
                    <div className="flex mb-4">
                      <div className="mr-6">
                        <Image
                          height="200px"
                          width="200px"
                          className={style.img_body}
                          src={e.img}
                          alt="hello"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <p className={style.heading}>{e.author}</p>
                          <p className={style.heading}>{e.company}</p>
                        </div>
                        <div>
                          <p className={style.pera}>{e.pera}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-9 md:col-span-8">
          <div className={`ml-10 ${style.show_table} hidden md:block`}>
            {employees.map((e, i) => {
              return (
                <div key={i}>
                  <div className="flex mb-4">
                    <div className="mr-6">
                      <Image
                        height="200px"
                        width="200px"
                        className={style.img_body}
                        src={e.img}
                        alt="hello"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <p className={style.heading}>{e.author}</p>
                        <p className={style.heading}>{e.company}</p>
                      </div>
                      <div>
                        <p className={style.pera}>{e.pera}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpolyeeInfo;
