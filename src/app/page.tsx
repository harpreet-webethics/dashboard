"use client"
import React from "react";
import Cards from "@/components/Homepage/cards";
import SummaryTabs from "@/components/Homepage/SummaryTabs";
import Alerts from "@/components/Homepage/Alerts";
import TrendingStory from "@/components/Homepage/TrendingStory";
import TrendingStoryFeed from "@/components/Homepage/TrendingStoryFeed";

export default function Home() {
  return (

    <main className="px-[19px] bg-[#F5F5F2]">
      <div>
        <div>
          <h1 className="font-medium py-[20px] text-[20px]">Dashboard</h1>
        </div>
        <Cards/>
        <section className="flex flex-col xl:flex-row w-full">
          <SummaryTabs/>
          <Alerts/>
        </section>
        <section  className="flex flex-col w-full">
          <div>
            <h2 className="text-[#030229] text-[20px] font-normal py-[20px]">
               Trending Stories
            </h2>
          </div>
          {/* trending-stories-wrapper  */}
          <div className="w-full overflow-y-scroll bg-white ">
            <div className="flex flex-col xl:flex-row justify-center items-start bg-white p-[15px] rounded">
              <TrendingStory/>
              <TrendingStoryFeed/>           
            </div>
          </div>
        </section>
      </div>
    </main>  
  );
}
