import React from "react";

import BackGround from "../../assets/image/Homepage/1x/1Background.png";
import ConnecttionItems from "../../components/connection";
const PoolPage = () => {
  return (
    <div className="h-100vh p-100 flex flex-col items-center w-full bg-cover bg-center bg-great">
      <div className="w-full h-full border-2 px-250 gap-30 border-green4 rounded-2xl bg-gray1 bg-opacity-20 p-40 flex">
        <div className="h-full border-2 border-green4 rounded-2xl bg-gray1 p-60 flex flex-col w-3/5">
          <div className="flex">
            <div className="w-80 h-80 border-2 rounded-full border-green2"></div>
            <p className="text-20 text-green2">Xxertyoi</p>
            <div className="w-80 h-80 border-2 rounded-full border-green2"></div>
          </div>
          <div>
            <p>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            </p>
          </div>
          <div className="flex">
            <ConnecttionItems />
          </div>
          <div>
            <p className="text-20 text-green2 font-medium">POOL DETAILS</p>
          </div>
          <div className="flex gap-100">
            <div className="flex w-2/4">
              <p>Access type</p>
              <p>: level</p>
            </div>
            <div className="flex">
              <p>Access type</p>
              <p>: level</p>
            </div>
          </div>
          <div className="flex border-b-2 border-whtie">
            <span className="text-white font-bold text-12">Swap Rate</span>
            <div className="w-1/6"></div>
            <span className="text-white text-12 opacity-60">
              :1 IGNT = $0.02 | 1IGNT per 120XXX
            </span>
          </div>
          <div className="flex">
            <span className="text-white font-bold text-12">Swap Rate</span>
            <div className="w-1/6"></div>
            <span className="text-white text-12 opacity-60">
              :1 IGNT = $0.02 | 1IGNT per 120XXX
            </span>
          </div>
          <div className="flex">
            <span className="text-white font-bold text-10 opacity-60">
              Register
            </span>
            <span className="text-white text-10 opacity-60">
              Feb 23,11:10 - 16:00UTC
            </span>
          </div>
          <div className="flex">
            <div className="w-2/4">
            </div>
            <span className="text-white text-10 opacity-60 w-1/6">Register</span>
            <span className="text-white text-10 opacity-60">
              Feb 23,11:10 - 16:00UTC
            </span>
          </div>
          <p className="text-30 text-green1">TOKEN</p>
          <div className="flex">
            <span className="text-white text-20 w-1/6 font-medium">Tokens</span>
            <span className="text-green1 text-20">
              :Ignite DeFi(IGNT)
            </span>
          </div>
          <div className="flex">
            <span className="text-white text-20 w-1/6 font-medium">Types</span>
            <span className="text-white text-20">
              :BEP-20
            </span>
          </div>
        </div>
        <div className="h-full bg-gray1 bg-opacity-20 flex flex-col w-2/5 gap-30">
          <div className="w-full border-2 flex-col border-green4 rounded-2xl bg-gray1 bg-opacity-20 p-40 flex h-3/5">
            <div className="flex h-fit">
              <div className="relative bottom-20 right-20 w-100 h-100 border-2 border-green1 rounded-full"></div>
              <div className="flex flex-col h-full justify-between">
                <p className="text-20 text-green1 font-medium">Xxertyoi</p>
                <p className="text-15 text-white">@XXX</p>
                <div className="flex gap-10">
                  <button className=" border border-green1 w-fit h-fit text-10 px-10 text-white  rounded-xl">
                    BUY $IGNT
                  </button>
                  <button className="w-fit h-fit text-10 px-10 text-white bg-gradient-to-r from-green3 to-green2 rounded-xl">
                    level
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-black w-full h-80 px-30 py-20 rounded-xl">
              <button className="w-full h-full text-13 text-white bg-gradient-to-r from-green3 to-green2 rounded-xl">
                connect Wallet
              </button>
            </div>
            <div className="flex justify-end">
              <p className="text-20 text-white opacity-50 border-b">How to participate</p>
            </div>
            <p className="text-30 text-green1">1XXX = 0.02IGNT</p>
            <p className="text-20 text-green1">0.02IGNT = 1XXX</p>
            <div className="flex justify-between items-end pt-20">
              <p className="text-white text-12">
                registration closes in 2days,22hours
              </p>
              <p className="text-green1 text-12">45%</p>
            </div>
            <div className="w-full bg-gray1 rounded-full h-10 dark:bg-gray-700">
              <div
                className="bg-green1 h-10 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-white text-12 opacity-50">0XXX</p>
              <p className="text-white text-12 opacity-50">0/10 000 000 IDR</p>
            </div>
            <div className="flex">
              <p className="text-white text-12">IDO and distribution on BSC</p>
            </div>
            <div className="flex">
              <p className="pr-10">ddd</p>
              <p className="text-white text-12 w-1/5">Register</p>
              <p className="text-white text-12">IDO and distribution on BSC</p>
            </div>
          </div>
          <div className="w-full p-20 flex h-2/5 bg-gray-800 flex-col">
            <p className="text-white text-15 pb-15">Amount(max:2BNB)</p>
            <div className="border-2 border-white py-5 h-fit rounded-xl flex w-full px-10 mb-15">
              <p className="text-15 text-white w-[inherit]">0.0</p>
              <p className="text-15 text-green1">MAX</p>
            </div>
            <div className="border-2 border-white py-5 h-fit rounded-xl flex w-2/4 px-10 mb-25">
              <p className="text-15 text-green1 w-[inherit]">^</p>
              <p className="text-15 text-white ">Buy</p>
            </div>
            <div className="flex justify-between border-y border-white border-opacity-40">
              <p className="text-15 text-white">Status</p>
              <p className="text-15 text-green1 ">inprogress</p>
            </div>
            <div className="flex justify-between border-b border-white border-opacity-40">
              <p className="text-15 text-white">Sale type</p>
              <p className="text-15 text-green1 ">Publik</p>
            </div>
            <div className="flex justify-between border-b border-white border-opacity-40">
              <p className="text-15 text-white">Minimum Buy</p>
              <p className="text-15 text-white ">0.1 BNB</p>
            </div>
            <div className="flex justify-between border-b border-white border-opacity-40">
              <p className="text-15 text-white">Maximum Buy</p>
              <p className="text-15 text-white ">2 BNB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolPage;
