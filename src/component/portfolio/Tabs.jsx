import React, { useState } from "react";
import All from "../portfolio/All";
import Coded from "../portfolio/Coded";
import Designed from "../portfolio/Designed";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "All",
      content: <All />,
    },
    {
      id: 2,
      tabTitle: "CODED",
      content: <Coded />,
    },
    {
      id: 3,
      tabTitle: "DESIGNED",
      content: <Designed />,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="tab--container font-[satoshi]">
      <div className="tabs flex justify-center items-center text-[#7C7C7C] bg-black space-x-10 ">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className=" hover:text-white w-[132px] mb-3 pb-2 border-white disabled:border-b-2 font-[500] text-[15px] disabled:text-white py-5"
            id={tab.id}
            disabled={currentTab === String(tab.id)}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === String(tab.id) && <div>{tab.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
