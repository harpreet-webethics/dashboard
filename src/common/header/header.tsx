'use client'
import React from "react";
import Image from "next/image";
import BurgurIcon from '@/assets/icons/Burgar Icon.svg';
const Header = () => {
    const ToggleSideBar = () => {
        console.log('click')
        const SideBar = document.querySelector('#db-sidebar');
        const ContentWrapper = document.querySelector('#content-wrapper');
        if (innerWidth > 1023) {
            SideBar?.classList.toggle('lg:translate-x-0')
            SideBar?.classList.toggle('lg:-translate-x-full')
            ContentWrapper?.classList.toggle('lg:ms-[220px]')
        } else {
            SideBar?.classList.toggle('-translate-x-full')
            SideBar?.classList.toggle('translate-x-0')
        }
    }

    return (
        <header className="shadow">
            <div className="flex justify-between p-4 w-full ">
                <div className="flex items-center justify-center">
                    <a href="#">
                        <Image
                            src={BurgurIcon}
                            alt="Burgur Icon"
                            width={23}
                            height={18}
                            onClick={ToggleSideBar}
                        />
                    </a>
                </div>
                <div className="flex">
                    <a href="#" className="bg-[#EDF0E7] w-[32px] h-[32px] rounded-full flex items-center">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto block">
                            <path d="M8.00003 11H2.55556C1.69645 11 1 10.2302 1 9.2807V2.40345C1 1.45395 1.69645 0.684165 2.55556 0.684165H5.05265M11.6843 11H13.4445C14.3036 11 15.0001 10.2302 15.0001 9.2807V2.40345C15.0001 1.45395 14.3036 0.684165 13.4445 0.684165H8.00003M15.0001 8.05262H9.47372C8.25284 8.05262 7.26319 7.06296 7.26319 5.84208C7.26319 4.6212 8.25284 3.63155 9.47372 3.63155H15.0001M9.47372 5.84208V5.83471" stroke="#6D6E6A" strokeWidth="1.10527" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="#" className="flex items-center justify-center w-[32px] h-[32px] bg-[#EDF0E7] rounded-full ms-2">
                        <span className="text-[12px] text-[#6D6E6A]" >SL</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;