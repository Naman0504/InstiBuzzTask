import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className=" w-full h-80 flex justify-center p-3  bg-yellow1 ">
        <div className="h-full flex   items-center justify-evenly w-full  md:flex-row">
          <div className=" w-36  p-4 flex justify-center items-center md:w-auto">
            <img
              className=" md:w-56 object-cover"
              src="https://s3-alpha-sig.figma.com/img/d3ec/1426/12d21ccf04333a13ed3cc961cda78f41?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ftra3XdiK4xMZwG-cBY4T8ejwUd-UIGa-xBrQc267ayg67jt0SnCEcP5FCvGpg-Gsh5HH6I7YOJN15e42HBk~In2mldHXiRm5naqmlpWk0DdoPRai-QZCSKX7LLzUgOT5jsWUkNkCP4YMu7SvgKiTwv1y4k4QiKRGysj0rhyvFjega~KwXxvBH0eAX7ZZdF-OXjDCVbeuWMghU6XZkq7PmkhmgGw97COav0B7J1OY1gWagQhPyGTNzcz9TDhsdpsKKiJsxsoV01HG-UQBZdn47eOxcsbFIKvaLI5gDs9SEyo0K71Ho4SckAD~SJb7~ah2L8cQ7XzyYd~TKN4K-Y1tA__"
            />
          </div>

          <div className="w-40 p-4 hidden  justify-center items-center  md:flex md:flex-col">
            <h1 className="text-lg text-left mb-3 font-semibold">
              Useful Links
            </h1>
            <ul>
              <li className=" text-sm text-left  font-medium leading-7 ">
                FAQs
              </li>
              <li className=" text-sm text-left font-medium leading-7">
                About Us
              </li>
              <li className=" text-sm text-left font-medium leading-7">
                Contact Us
              </li>
              <li className=" text-sm text-left font-medium leading-7">
                Collab with Us
              </li>
            </ul>
          </div>

          <div className="w-40 p-4 hidden  justify-center md:flex md:flex-col">
            <h1 className="text-lg mb-3 text-left font-semibold">Policies</h1>
            <ul>
              <li className=" text-sm  font-medium leading-7 ">
                Terms & Condition
              </li>
              <li className=" text-sm font-medium leading-7 ">
                Exchange Policy
              </li>
              <li className=" text-sm font-medium leading-7 ">
                Shipping Policy
              </li>
              <li className=" text-sm font-medium leading-7 ">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div className=" w-auto p-4 flex flex-col justify-center">
            <h1 className="text-lg text-left pt-6  font-semibold">
              Contact Us
            </h1>
            <div className="w-full mt-3  flex flex-col">
              <a
                href=""
                className=" text-nowrap flex gap-2 py-2 border-b border-gray-900 "
              >
                <FaLocationDot size={20} />
                IIT Madras, Chennai-600036
              </a>
              <a href="" className=" text-nowrap py-2 flex gap-2 ">
                <IoMdCall size={20} />
                +91 99444 87273
              </a>
            </div>
            <div className="w-full flex my-2  ">
              <ul className="flex gap-2 ">
                <li className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 ">
                  <a href="">
                    <IoLogoWhatsapp size={26} />
                  </a>
                </li>
                <li className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300">
                  <a href="">
                    <FaLinkedin size={26} />
                  </a>
                </li>
                <li className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300">
                  <a href="">
                    <FaSquareInstagram size={26} />
                  </a>
                </li>
                <li className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300">
                  <a href="">
                    <IoMdMail size={26} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;