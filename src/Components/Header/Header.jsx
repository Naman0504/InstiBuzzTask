import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function Header() {
  return (
    <>
      <div className="w-full flex flex-col px-2 py-4">
        <div className="flex justify-around gap-6 md:p-2 md:shadow-slate-50  ">
          <div className=" flex justify-left md:justify-center w-full md:w-1/4  md:p-3 ">
            <img
              className="w-fit h-12"
              src="https://s3-alpha-sig.figma.com/img/dea5/01cb/d3675a3507d4c446558e12e5383e1193?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CgLHlPLnlcVOAO9SXe8PJ~qrn7MdaEmfoUjYiRqFkY2ienZHZvE4eEKEAokDb3WQdRt0xTebg5~2ELXqSAqd3Xd19ukNpMbzBE0skhsZPxSHOUFAAgDUL9zZc2ZhHpbOflkUWxgNNuYNXnPOkdvAfesSwf81q6GO6ocP4WFO5SAzwYy~9Rf4duVtyE4GH4YEPeNS7XMlKkLYD1zN317ld9Q5uHlQ1iNSsEgJ-bClPSWKUIfremAyx3zmn~14yunouvSUUUdJjVy~DmVzru~ddkKwFL4lMJNo-mygfVJqnEGWFGLoT5NyvaqjK8kw1zrri0JN9S4tNLWa0oZ0C3BReA__"
            />
          </div>
          <div className="hidden md:flex py-auto justify-center w-full ">
            <ul className="flex justify-center items-center px-3  gap-10 text-base font-semibold ">
              <li>Home</li>
              <li>Shop</li>
              <li>Our Services</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="hidden  md:flex justify-center items-center py-auto">
            <button className=" px-6 h-fit py-3  border border-brown1   bg-transparent rounded-lg font-medium hover:bg-brown1 hover:text-white hover:duration-500 ">
              Login/Signup
            </button>
          </div>
        </div>

        <div className="bg-yellow1 rounded-lg flex justify-between p-4 md:hidden">
          <div className="flex justify-center items-center gap-2">
            <ul className="flex justify-center items-center gap-1">
              <li>
                <RxHamburgerMenu size={22} />
              </li>
              <li>
                <img
                  src="https://s3-alpha-sig.figma.com/img/d3ec/1426/12d21ccf04333a13ed3cc961cda78f41?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ftra3XdiK4xMZwG-cBY4T8ejwUd-UIGa-xBrQc267ayg67jt0SnCEcP5FCvGpg-Gsh5HH6I7YOJN15e42HBk~In2mldHXiRm5naqmlpWk0DdoPRai-QZCSKX7LLzUgOT5jsWUkNkCP4YMu7SvgKiTwv1y4k4QiKRGysj0rhyvFjega~KwXxvBH0eAX7ZZdF-OXjDCVbeuWMghU6XZkq7PmkhmgGw97COav0B7J1OY1gWagQhPyGTNzcz9TDhsdpsKKiJsxsoV01HG-UQBZdn47eOxcsbFIKvaLI5gDs9SEyo0K71Ho4SckAD~SJb7~ah2L8cQ7XzyYd~TKN4K-Y1tA__"
                  alt=""
                  srcset=""
                  className="h-6 w-6"
                />
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center gap-2">
            <ul className="flex justify-center items-center ">
              <li>
                <CiSearch size={24} />
              </li>
              <li>
                <CiHeart size={24} />
              </li>
              <li>
                <CiShoppingCart size={24} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
