import Logo from "../../assets/image/Homepage/SVG/Asset 410.svg";
import HeaderMenu from "../../components/HeaderMenu";
import Web3modal from "../../components/Web3modal";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="w-full h-150 bg-black flex justify-center" >
      <div className="container flex items-center justify-between px-20">
        <img src={Logo} alt="logo" className="h-65 md:h-95" />
        <div className="max-w-xl w-full px-30 hidden 2xl:flex justify-between items-center" role="group">
          <Link to="/"><span className="text-white text-17 hover:border-b hover:border-green2">POOLS</span></Link>
          <span className="text-white text-17 hover:border-b hover:border-green2">TOKEN CREATION</span>
          <span className="text-white text-17 hover:border-b hover:border-green2">ABOUT</span>
          <span className="text-white text-17 hover:border-b hover:border-green2">TOKEN LOCKER</span>
        </div>
        <div className="flex justify-between">
          <div className="h-50 bg-gradient-to-r from-green3 to-green2 hidden xl:flex
         flex-row items-center rounded-xl">
            <button className="bg-gradient-to-r from-red1 to-red2 rounded-lg
           text-white text-20 px-35 drop-shadow-xl mx-10">IGNITE DEFI</button>
            <button className="bg-gradient-to-r from-blue1 to-blue2 rounded-lg
           text-white text-20 px-35 shadow-lg shadow-black mx-10">PYRE GAMES</button>
          </div>

        </div>
        <div className="flex">
          <Web3modal />
          {/* <button className="bg-black h-45 border-3 rounded-2xl border-green2 text-white text-18 px-5">CONNECT WALLET</button> */}
          <HeaderMenu />
        </div>
      </div>
    </div>

  );
};

export default Header;
