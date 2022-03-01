import React from "react";
// import {
//   FooterWrapper,
//   FooterContainer,
//   FooterLinkGroup,
//   TextGroup,
//   NavGroup,
//   NavText,
//   DetailGroup,
//   DetailOneGroup,
//   DetailOne,
//   DetailTwoGroup,
//   DetailTwo,
//   FooterEnd,
//   SubscribeInput,
//   SubscribeButton,

// } from "./footer.styled";
import Logo from "../../assets/image/Homepage/SVG/Asset 410.svg";
import ConnecttionItems from "../../components/connection";
const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="container flex flex-row px-20">
        <div className=" flex justify-center flex-row">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="logo" className="h-65 md:h-95" />
          </div>
          <div className="mx-60 mb-20 flex items-end justify-between box-border">
            <ConnecttionItems />
          </div>
        </div>



        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="flex justify-between flex-row my-20">
              <div className="text-white text-16 mr-40">POOLS</div>
              <div className="text-white text-16 mr-40">TOKEN CREATION</div>
              <div className="text-white text-16 mr-40">ABOUT</div>
              <div className="text-white text-16">TOKEN LOCKER</div>
            </div>
            <div className="flex flex-row my-20">
              <div className="w-full flex flex-col">
                <div className="text-white mb-10">@ Copyright IgniteDefi 2022.</div>
                <div className="text-white"> proudly Made for IgniteDefi.</div>
              </div>
              <div className="w-full flex flex-col pl-40">
                <div className="text-white underline mb-5">Privacy Policy</div>
                <div className="text-white underline">Terms of use</div>
              </div>
            </div>
          </div>


          <div className="flex flex-col justify-center items-end ml-160">
            <div className="text-white text-18 mb-15 mr-20">Subscribe to our Newsletter</div>
            <input className="px-30 box-border border-2 border-green3 rounded-xl mb-15"></input>
            <button className="text-white bg-gradient-to-r from-green3 to-green2 px-15 rounded-lg text-18">Subscribe</button>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Footer;

