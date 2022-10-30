import Image from "next/image";
import React from "react";
import img2 from "../../images/download (1).png";
import img3 from "../../images/download (2).png";
import img1 from "../../images/download.png";

function Footer() {
  return (
    <div>
      <footer className="footer px-5 md:px-20 bg-gray-900 text-white mx-auto py-20">
        <div>
          <p>
            <span className="text-3xl mb-4">dEMO</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Ratione fugiat <br /> deserunt dolore harum eaque <br /> cumque
            dignissimos rem <br /> labore sequi nisi.
          </p>
          <div className="flex">
            <a className="w-6" href="#f">
              <Image
                className="rounded-full"
                src={img1}
                alt="Facebook"
              />
            </a>
            <a className="w-6 mx-2" href="#f">
              <Image
                className="rounded-full"
                src={img2}
                alt="Linkedin"
              />
            </a>
            <a className="w-6" href="#f">
              <Image
                className="rounded-full"
                src={img3}
                alt="Youtube"
              />
            </a>
          </div>
          <div>
            <p>copyright&copy;2022</p>
          </div>
        </div>
        <div className="md:mx-auto">
          <span className="footer-title">Services</span>
          <hr className="horaizantal" />
          <a href="#f" className="link link-hover">
            Consolting
          </a>
          <a href="#f" className="link link-hover">
            Human resiurse
          </a>
          <a href="#f" className="link link-hover">
            Accounting
          </a>
          <a href="#f" className="link link-hover">
            Marcketing & seo
          </a>
        </div>
        <div className="md:mx-auto">
          <span className="footer-title">about</span>
          <hr className="horaizantal" />
          <a href="#f" className="link link-hover">
            About us
          </a>
          <a href="#f" className="link link-hover">
            Our Services
          </a>
          <a href="#f" className="link link-hover">
            Our blogs
          </a>
          <a href="#f" className="link link-hover">
            Contact us
          </a>
        </div>
        <div className="md:mx-auto">
          <span className="footer-title">contact</span>
          <hr className="horaizantal" />
          <p className="link link-hover">+566676723</p>
          <p className="link link-hover">+566785853</p>
          <p className="link link-hover">Contact@info.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
