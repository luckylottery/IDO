import React, { useContext } from "react";
import { ContentContext } from "../../context/PoolContext";
import BackGround from "../../assets/image/Homepage/1x/1Background.png";
import ConnecttionItems from "../../components/connection";
import etherSmallIcon from "../../assets/image/Presales Page/SVG/Asset 705.svg";
import bnbSmallIcon from "../../assets/image/Presales Page/SVG/WIbhqs.tif.svg";
import checkSmallIcon from "../../assets/image/Presales Page/SVG/Asset 826.svg";
import roundSmallIcon from "../../assets/image/Presales Page/SVG/Asset 875.svg";
import lockSmallIcon from "../../assets/image/Presales Page/SVG/Asset 876.svg";
import dropSmallIcon from "../../assets/image/Presales Page/SVG/Asset 871.svg";
import idoSmallIcon from "../../assets/image/Presales Page/SVG/Asset 861.svg";
import fcfsSmallIcon from "../../assets/image/Presales Page/SVG/Asset 854.svg";
import saleSmallIcon from "../../assets/image/Presales Page/SVG/Asset 855.svg";
import registerSmallIcon from "../../assets/image/Presales Page/SVG/Asset 856.svg";
import { IdoItems } from "../../components/IdoCard";

const PoolPage = () => {
  const [amount, setAmount] = React.useState(0.0);
  const {content, setContentIndex} = useContext(ContentContext);

  const ChangeAmount = (val) => {
    setAmount(val);
  };

  const checkAmount = (e) => {
    console.log(e.target.value);
    console.log(content);
    console.log(IdoItems[1].price);
  };
  return (
    <div className="h-100vh p-80 flex flex-col items-center w-full bg-cover bg-center bg-great">
      <div className="border rounded-2xl border-white flex items-center px-10 py-5 gap-10 relative bottom-40">
        <img src={etherSmallIcon} alt="ehtericon" className="w-20 h-20" />
        <p className="text-white text-15">Mainnet</p>
        <img src={dropSmallIcon} alt="dropsmallicon" className="w-10 h-10"/>
      </div>
      <div className="w-full h-full border-2 px-200 gap-30 border-green4 rounded-2xl bg-gray1 bg-opacity-20 p-40 flex">
        <div className="h-full border-2 border-green4 rounded-2xl bg-gray1 p-60 flex flex-col w-3/5 bg-opacity-80">
          <div className="flex justify-between">
            <div className="flex relative right-20 bottom-20 gap-20 items-center">
              <div className="w-80 h-80 border-2 rounded-full border-green2"></div>
              <p className="text-20 text-green2">Xxertyoi</p>
            </div>
            <div className="w-80 h-80 rounded-full relative left-20 bottom-20">
              <img src={bnbSmallIcon} alt="bnbicon" />
            </div>
          </div>
          <div className="mb-20">
            <p className="text-white text-15 opacity-70">
              {IdoItems[1].price}
            </p>
          </div>
          <div className="flex mb-20">
            <ConnecttionItems />
          </div>
          <div>
            <p className="text-20 text-green2 font-medium mb-10">
              POOL DETAILS
            </p>
          </div>
          <div className="flex mb-30">
            <div className="flex w-2/4">
              <p className="text-15 text-white font-bold">Access type</p>
              <p className="text-15 text-white">: level</p>
            </div>
            <div className="flex">
              <p className="text-15 text-white font-bold">Hard Cap:</p>
              <p className="text-15 text-white">$500 000</p>
            </div>
          </div>
          <div className="flex border-b-2 border-whtie border-opacity-30">
            <span className="w-2/6 text-15 text-white font-bold">
              Swap Rate
            </span>
            <span className="text-15 text-white">
              :1 IGNT = $0.02 | 1IGNT per 120XXX
            </span>
          </div>
          <div className="flex border-b-2 border-whtie border-opacity-30">
            <span className="w-2/6 text-15 text-white font-bold">
              Start/end
            </span>
            <span className="text-15 text-white">
              :1 IGNT = $0.02 | 1IGNT per 120XXX
            </span>
          </div>
          <div className="flex border-b-2 border-whtie border-opacity-30">
            <span className="w-2/6 text-15 text-white font-bold">
              registration
            </span>
            <span className="text-15 text-white">:Feb 21 11:00 UTC</span>
          </div>
          <div className="flex border-b-2 border-whtie border-opacity-30">
            <span className="w-2/6 text-15 text-white font-bold">
              FCFS Opens
            </span>
            <span className="text-15 text-white">:Feb 21 11:00 UTC</span>
          </div>
          <div className="flex mb-10">
            <span className="w-2/6 text-15 text-white font-bold">
              Base Allocation
            </span>
            <span className="text-15 text-white">:1x = $189.98(approx)</span>
          </div>
          <div className="flex mb-10">
            <div className="w-2/4"></div>
            <span className="text-white text-10 opacity-60 w-1/6">
              Register
            </span>
            <span className="text-white text-10 opacity-60">
              Feb 23,11:10 - 16:00UTC
            </span>
          </div>
          <div className="flex mb-10">
            <div className="w-2/4"></div>
            <span className="text-white text-10 opacity-60 w-1/6">Sale</span>
            <span className="text-white text-10 opacity-60">
              Feb 23,11:10 - 16:00UTC
            </span>
          </div>
          <div className="flex mb-10">
            <div className="w-2/4"></div>
            <span className="text-white text-10 opacity-60 w-1/6">FCFS</span>
            <span className="text-white text-10 opacity-60">
              Feb 23,11:10 - 16:00UTC
            </span>
          </div>
          <p className="text-25 text-green1 font-bold mb-10">TOKEN</p>
          <div className="flex mb-10">
            <span className="text-white text-15 w-1/5 font-medium">Tokens</span>
            <span className="text-green1 text-15">:Ignite DeFi(IGNT)</span>
          </div>
          <div className="flex">
            <span className="text-white text-15 w-1/5 font-medium">Types</span>
            <span className="text-white text-15">:BEP-20</span>
          </div>
        </div>
        <div className="h-full bg-gray1 flex flex-col w-2/5 gap-30 bg-opacity-80">
          <div className="w-full border-2 flex-col border-green4 rounded-2xl bg-gray1 bg-opacity-20 p-40 flex h-3/5">
            <div className="flex h-fit">
              <div className="relative bottom-20 right-20 w-100   h-100 border-2 border-green1 rounded-full"></div>
              <div className="flex flex-col h-full justify-between">
                <p className="text-20 text-green1 font-bold">Xxertyoi</p>
                <p className="text-15 text-white opacity-50">$XXX</p>
                <div className="flex gap-10 mt-20 mb-20">
                  <button className="flex border border-green1 w-fit h-fit text-7 px-10 py-5 text-white  rounded-xl gap-10">
                    <img
                      src={roundSmallIcon}
                      alt="roundsmallicon"
                      className="w-10 h-10"
                    />
                    Register
                  </button>
                  <button className="flex w-fit h-fit text-7 px-10 py-5 text-white bg-gradient-to-r from-green3 to-green2 rounded-xl gap-10">
                    <img
                      src={lockSmallIcon}
                      alt="locksmallicon"
                      className="w-10 h-10"
                    />
                    level
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-black w-full h-100 px-30 py-20 rounded-xl">
              <button className="flex w-full h-full text-15 text-white bg-gradient-to-r from-green3 to-green2 rounded-xl items-center justify-center gap-20">
                connect Wallet
                <img
                  src={dropSmallIcon}
                  alt="dropsmallicon"
                  className="w-15 h-15"
                />
              </button>
            </div>
            <div className="flex justify-end">
              <p className="text-20 text-white opacity-50 border-b">
                How to participate
              </p>
            </div>
            <p className="text-25 text-green1 mb-10">1XXX = 0.02IGNT</p>
            <p className="text-20 text-green1">0.02IGNT = 1XXX</p>
            <div className="flex justify-between items-end mt-20">
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
            <div className="flex justify-between items-end mb-10">
              <p className="text-white text-12 opacity-50">0XXX</p>
              <p className="text-white text-12 opacity-50">0/10 000 000 IDR</p>
            </div>
            <div className="flex mb-10">
              <img
                src={idoSmallIcon}
                alt="idoicon"
                className="w-20 h-20 mr-15"
              />
              <p className="text-white text-12">IDO and distribution on BSC</p>
            </div>
            <div className="flex mb-10">
              <img
                src={registerSmallIcon}
                alt="registericon"
                className="w-20 h-20 mr-15"
              />
              <p className="text-white text-12 w-1/5">Register</p>
              <p className="text-white text-12">
                Feb 23 11:00 - Feb 26 16:00 UTC
              </p>
            </div>
            <div className="flex mb-10">
              <img
                src={saleSmallIcon}
                alt="saleicon"
                className="w-20 h-20 mr-15"
              />
              <p className="text-white text-12 w-1/5">Sale</p>
              <p className="text-white text-12">Feb 23 11:00 - 16:00 UTC</p>
            </div>
            <div className="flex mb-10">
              <img
                src={fcfsSmallIcon}
                alt="fcfsicon"
                className="w-20 h-20 mr-15"
              />
              <p className="text-white text-12 w-1/5">FCFS</p>
              <p className="text-white text-12">Feb 23 12:00</p>
            </div>
          </div>
          <div className="w-full p-20 flex h-2/5 bg-gray-800 flex-col">
            <p className="text-white text-15 pb-15">Amount(max:2BNB)</p>
            <div className="border-2 border-white py-5 h-fit rounded-xl flex w-full px-10 mb-15 justify-between">
              <input
                type="number"
                min="0.001"
                max="2"
                className="bg-transparent text-white w-full"
                onChange={(e) => checkAmount(e)}
              />
              <p className="text-15 text-green1">MAX</p>
            </div>
            <div className="border-2 border-white py-5 h-fit rounded-xl flex w-1/4 px-10 mb-25 justify-between items-center">
              <img
                src={checkSmallIcon}
                alt="checksmallicon"
                className="w-15 h-15"
              />
              <button className="text-15 text-white ">Buy</button>
            </div>
            <div className="flex justify-between border-t border-b border-white border-opacity-20">
              <p className="text-15 text-white">Status</p>
              <p className="text-15 text-green1 ">inprogress</p>
            </div>
            <div className="flex justify-between border-b border-white border-opacity-20">
              <p className="text-15 text-white">Sale type</p>
              <p className="text-15 text-green1 ">Publik</p>
            </div>
            <div className="flex justify-between border-b border-white border-opacity-20">
              <p className="text-15 text-white">Minimum Buy</p>
              <p className="text-15 text-white ">0.1 BNB</p>
            </div>
            <div className="flex justify-between border-b border-white border-opacity-20">
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
