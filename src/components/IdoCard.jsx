import React, { useContext } from "react";
import styled from "styled-components";
import ConnecttionItems from "./connection";
// import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ContentContext } from "../context/PoolContext";

export const IdoBoxRadius = styled.div``;

const p1 = {
  title: "asdfasdf",
  avatar: "joe",
  price: "$30",
  islive: true,
  detail: "asdf",
  totalsize: 300,
  starts: "asdf",
  price1: "asdf",
};

const p2 = {
  title: "ertwret",
  avatar: "alex",
  price: "$30",
  islive: true,
  detail: "asdf",
  totalsize: 300,
  starts: "asdf",
  price1: "asdf",
};

const p3 = {
  title: "zxvcxczv",
  avatar: "maxim",
  price: "$30",
  islive: true,
  detail: "asdf",
  totalsize: 300,
  starts: "asdf",
  price1: "asdf",
};

export const IdoItems = [p1, p2, p3];

export const IdoCard = (props) => {

  const {content, setContentIndex} = useContext(ContentContext);

  const SetContent = () => {
    setContentIndex(1);
    console.log(content);
  }

  return (
    <>
      <Link to="/pool">
        <div onClick={SetContent} className="w-400 h-fit border-2 border-green4 rounded-2xl bg-gray1 bg-opacity-50 p-40">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-18 text-green4 flex justify-start">
                  {props.title}
                </p>
                <div className="text-14 text-white flex justify-start opacity-50">
                  ${props.avatar}
                </div>
              </div>
              <div className="w-100 h-100 border-2 border-green4 rounded-full bg-gray1 relative left-15 bottom-15"></div>
            </div>
            <div className="flex">
              <ConnecttionItems />
            </div>
            <div className="flex gap-10 pt-25">
              <button className="text-white border-2 border-green1 text-10  bg-transparent rounded-full w-80 h-25">
                LIVE
              </button>
              <button className="text-white font-bold  bg-green1 rounded-full text-10 w-80 h-25">
                UPCOMING
              </button>
            </div>
            <div className="pt-20">
              <p className="text-white text-12">
                lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <div className="flex justify-between items-end pt-20">
              <p className="text-white text-20 font-medium">Total Rasie</p>
              <p className="text-green1 text-25 font-medium">{props.price}</p>
            </div>
            <div className="flex justify-between items-end pt-10">
              <p className="text-white text-20 font-medium">Starts</p>
              <p className="text-green1 text-20">Feb 15, 10:00 UTC</p>
            </div>
            <div className="flex justify-between items-end pt-10">
              <p className="text-white text-20 font-medium">Price</p>
              <p className="text-green1 text-20">1XXX = 0.02IGNT</p>
            </div>
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
            <div className="flex justify-between items-end pt-30">
              <p className="text-white text-12">1x(approx)=</p>
              <p className="text-white text-12">Listing Time</p>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-green1 text-20 font-medium">$42.08</p>
              <p className="text-green1 text-20 font-medium">
                Mar 1,2022 3:00 RM UTC
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
