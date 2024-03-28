'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import defistewardLogo from '@/assets/images/defisteward1.svg';
// import {MyDamnSvg} from '@/assets/icons/Category.svg'
const Aside = () => {
   const ToggleSideBar = () => {
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
      <aside id="db-sidebar" className="fixed top-0 left-0 z-40 w-[220px] bg-primary h-screen transition-transform -translate-x-full lg:translate-x-0" aria-label="Sidebar">
         <div className="h-full w-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-end absolute right-[5px] top-[5px] bg-primary">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white lg:hidden" onClick={ToggleSideBar} >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
               </svg>
            </div>
            <ul className="space-y-2 font-normal text-white">
               <li><a href="#" className="flex justify-center items-center pb-4">
                  <Image
                     src={defistewardLogo}
                     alt="Defisteward Logo"
                     width={111}
                     height={48}
                  />
               </a></li>
               <li>
                  <a href="#" className="flex items-center p-2 text-primary_600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.54 0H5.92C7.33 0 8.46 1.15 8.46 2.561V5.97C8.46 7.39 7.33 8.53 5.92 8.53H2.54C1.14 8.53 0 7.39 0 5.97V2.561C0 1.15 1.14 0 2.54 0ZM2.54 11.4697H5.92C7.33 11.4697 8.46 12.6107 8.46 14.0307V17.4397C8.46 18.8497 7.33 19.9997 5.92 19.9997H2.54C1.14 19.9997 0 18.8497 0 17.4397V14.0307C0 12.6107 1.14 11.4697 2.54 11.4697ZM17.4601 0H14.0801C12.6701 0 11.5401 1.15 11.5401 2.561V5.97C11.5401 7.39 12.6701 8.53 14.0801 8.53H17.4601C18.8601 8.53 20.0001 7.39 20.0001 5.97V2.561C20.0001 1.15 18.8601 0 17.4601 0ZM14.0801 11.4697H17.4601C18.8601 11.4697 20.0001 12.6107 20.0001 14.0307V17.4397C20.0001 18.8497 18.8601 19.9997 17.4601 19.9997H14.0801C12.6701 19.9997 11.5401 18.8497 11.5401 17.4397V14.0307C11.5401 12.6107 12.6701 11.4697 14.0801 11.4697Z" fill="currentColor" />
                     </svg>
                     <span className="ms-3 text-primary_600 text-[16px] font-normal">Dashboard</span>
                  </a>
               </li>
               <li>
                  <Accordion itemClasses={{ indicator: 'rotate-180', trigger: 'pt-2 pb-1', content: 'pt-[0px]' }}>
                     <AccordionItem key="1" aria-label="Accordion 1"
                        title={<a href="#" className="flex items-center text-primary_600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                           <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                              <path d="M7.94827 7.69238C8.709 7.69238 9.45259 7.46684 10.0851 7.04417C10.7176 6.6216 11.2106 6.02088 11.5016 5.31806C11.7928 4.61526 11.8689 3.84192 11.7205 3.09584C11.5721 2.34975 11.2058 1.66443 10.6679 1.12652C10.13 0.588622 9.44469 0.222311 8.69864 0.0739097C7.95258 -0.0745019 7.17924 0.0016628 6.47636 0.292773C5.77358 0.583884 5.17286 1.07686 4.75029 1.70936C4.32762 2.34187 4.10208 3.08549 4.10208 3.84619C4.10208 4.86626 4.50732 5.84457 5.22855 6.56591C5.94989 7.28715 6.92816 7.69238 7.94827 7.69238ZM7.94827 1.53848C8.40468 1.53848 8.85084 1.67382 9.23033 1.92739C9.60982 2.18098 9.90562 2.54139 10.0803 2.96306C10.255 3.38475 10.3007 3.84875 10.2117 4.2964C10.1225 4.74406 9.90285 5.15525 9.58008 5.478C9.25731 5.80077 8.84612 6.02057 8.39853 6.1096C7.95083 6.19862 7.48683 6.15288 7.06519 5.97821C6.64344 5.80354 6.28302 5.50774 6.02948 5.12828C5.77594 4.74878 5.64056 4.30262 5.64056 3.84619C5.64056 3.23414 5.88374 2.64717 6.31646 2.21439C6.74929 1.78161 7.33626 1.53848 7.94827 1.53848Z" fill="#CDF76B" />
                              <path d="M0.769116 14.872C0.972298 14.8694 1.16645 14.7875 1.31015 14.6438C1.45384 14.5001 1.53569 14.306 1.53835 14.1028C1.53835 12.1028 2.62554 10.7694 7.94867 10.7694C13.2718 10.7694 14.359 12.1028 14.359 14.1028C14.359 14.3068 14.44 14.5025 14.5843 14.6467C14.7285 14.791 14.9242 14.872 15.1282 14.872C15.3322 14.872 15.5279 14.791 15.6722 14.6467C15.8164 14.5025 15.8975 14.3068 15.8975 14.1028C15.8975 9.23096 10.3282 9.23096 7.94867 9.23096C5.56916 9.23096 -0.00012207 9.23096 -0.00012207 14.1028C0.0025444 14.306 0.0843916 14.5001 0.228086 14.6438C0.371778 14.7875 0.565935 14.8694 0.769116 14.872Z" fill="#CDF76B" />
                              <path d="M13.7739 8.52322H14.1021C14.9182 8.44435 15.6695 8.04455 16.1907 7.41173C16.712 6.7789 16.9605 5.96494 16.8816 5.14884C16.8028 4.33279 16.4029 3.5815 15.7701 3.06023C15.1373 2.53897 14.3233 2.29045 13.5073 2.36933C13.4026 2.37383 13.3 2.39965 13.2057 2.44521C13.1114 2.49076 13.0274 2.5551 12.9588 2.63426C12.8902 2.71343 12.8386 2.80577 12.8069 2.90561C12.7753 3.00546 12.7644 3.11071 12.7749 3.21492C12.7854 3.31912 12.8171 3.42009 12.8679 3.51163C12.9188 3.60317 12.9879 3.68334 13.0709 3.74726C13.1538 3.81117 13.249 3.85747 13.3505 3.88331C13.452 3.90916 13.5577 3.914 13.6611 3.89755C13.8613 3.87759 14.0635 3.89818 14.2556 3.9581C14.4477 4.01801 14.6257 4.11602 14.7791 4.24627C14.9348 4.37192 15.064 4.52732 15.1591 4.70341C15.2542 4.87951 15.3133 5.07276 15.3329 5.27192C15.3541 5.47355 15.335 5.67745 15.2766 5.87161C15.2183 6.06587 15.1218 6.24648 14.993 6.403C14.8641 6.55962 14.7053 6.68895 14.526 6.78352C14.3466 6.87808 14.1503 6.93603 13.9483 6.95398C13.6144 6.98259 13.2801 6.90352 12.9944 6.72834C12.8203 6.62095 12.6107 6.587 12.4116 6.63418C12.2125 6.68126 12.0404 6.80557 11.9329 6.97962C11.8254 7.15378 11.7915 7.36342 11.8386 7.5625C11.8858 7.76158 12.0101 7.93378 12.1842 8.04117C12.6599 8.34456 13.2098 8.51133 13.7739 8.52322Z" fill="#CDF76B" />
                              <path d="M19.2308 14.1027C19.434 14.1 19.6281 14.0182 19.7718 13.8745C19.9154 13.7308 19.9973 13.5366 20 13.3334C20 10.5642 19.2615 8.71802 15.641 8.71802C15.437 8.71802 15.2413 8.79904 15.0971 8.94335C14.9528 9.08756 14.8717 9.28325 14.8717 9.48726C14.8717 9.69126 14.9528 9.88695 15.0971 10.0312C15.2413 10.1755 15.437 10.2565 15.641 10.2565C18.0513 10.2565 18.4615 11.0257 18.4615 13.3334C18.4642 13.5366 18.5461 13.7308 18.6898 13.8745C18.8335 14.0182 19.0276 14.1 19.2308 14.1027Z" fill="#CDF76B" />
                           </svg>
                           <span className="flex-1 ms-3 whitespace-nowrap">Clients</span>
                        </a>}>
                        <ul className="ps-8 text-white text-[12px] font-normal">
                           <li><a href="#" className='before:content-["\2010"] before:me-1 before:text-[20px] before:leading-[1.2]'>Active Clients</a></li>
                           <li><a href="#" className='before:content-["\2010"] before:me-1 before:text-[20px] before:leading-[1.2]'>Accounts</a></li>
                           <li><a href="#" className='before:content-["\2010"] before:me-1 before:text-[20px] before:leading-[1.2]'>Wallets</a></li>
                        </ul>
                     </AccordionItem>
                  </Accordion>
               </li>
               <li>
                  <Accordion
                     itemClasses={{ indicator: 'rotate-180', trigger: 'pt-2 pb-1', content: 'pt-[0px]' }}
                  >
                     <AccordionItem key="1" aria-label="Accordion 1" title={<a href="#" className="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M17.1007 0.714355H6.41281C3.20643 0.714355 1.06885 2.31754 1.06885 6.05831V9.86321C1.06885 10.2587 1.47499 10.5045 1.82769 10.3442C2.87511 9.86321 4.08284 9.68152 5.3547 9.90596C8.16562 10.4083 10.2284 13.0161 10.1536 15.8698C10.1429 16.3187 10.0788 16.7569 9.96119 17.1844C9.87569 17.5158 10.1429 17.8257 10.4849 17.8257H17.1007C20.3071 17.8257 22.4447 16.2225 22.4447 12.4818V6.05831C22.4447 2.31754 20.3071 0.714355 17.1007 0.714355ZM11.7568 11.9367C10.2818 11.9367 9.08478 10.7396 9.08478 9.26469C9.08478 7.78976 10.2818 6.59271 11.7568 6.59271C13.2317 6.59271 14.4287 7.78976 14.4287 9.26469C14.4287 10.7396 13.2317 11.9367 11.7568 11.9367ZM19.5055 11.4023C19.5055 11.8405 19.1421 12.2039 18.7039 12.2039C18.2657 12.2039 17.9023 11.8405 17.9023 11.4023V7.1271C17.9023 6.6889 18.2657 6.32551 18.7039 6.32551C19.1421 6.32551 19.5055 6.6889 19.5055 7.1271V11.4023Z" fill="#CDF76B" />
                           <path d="M4.27517 11.4021C1.91314 11.4021 0 13.3152 0 15.6773C0 16.4789 0.224446 17.2377 0.619899 17.879C1.35737 19.1188 2.71473 19.9524 4.27517 19.9524C5.8356 19.9524 7.19297 19.1188 7.93043 17.879C8.32589 17.2377 8.55033 16.4789 8.55033 15.6773C8.55033 13.3152 6.6372 11.4021 4.27517 11.4021ZM6.38069 15.3246L4.10416 17.4301C3.95453 17.569 3.75146 17.6438 3.55908 17.6438C3.35601 17.6438 3.15294 17.569 2.99262 17.4087L1.93451 16.3506C1.62456 16.0407 1.62456 15.5276 1.93451 15.2177C2.24446 14.9077 2.75748 14.9077 3.06743 15.2177L3.58045 15.7307L5.29052 14.1489C5.61116 13.8496 6.12418 13.871 6.42344 14.1916C6.7227 14.5123 6.70132 15.0253 6.38069 15.3246Z" fill="#CDF76B" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Invest</span>
                     </a>}>
                        <ul className="ps-8 text-white text-[12px] font-normal">
                           <li><a href="#" className='before:content-["\2010"] before:me-1 before:text-[20px] before:leading-[1.2]'>Active Clients</a></li>
                           <li><a href="#" className='before:content-["\2010"] before:me-1 before:text-[20px] before:leading-[1.2]'>Accounts</a></li>
                           <li><a href="#" className='before:content-["\2010"] before:me-1 before:text-[20px] before:leading-[1.2]'>Wallets</a></li>
                        </ul>
                     </AccordionItem>
                  </Accordion>
               </li>
               <li>
                  <Accordion
                     itemClasses={{ indicator: 'rotate-180', trigger: 'pt-2 pb-1', content: 'pt-[0px]' }}
                  >
                     <AccordionItem key="1" aria-label="Accordion 1" title={<a href="#" className="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M6.6906 4.45966H5.94883C5.53855 4.45966 5.20557 4.79264 5.20557 5.20292C5.20557 5.6132 5.53855 5.94618 5.94883 5.94618H6.69357L6.69506 6.69093C6.6958 7.1012 7.02952 7.43344 7.4398 7.4327C7.85008 7.43196 8.18232 7.09823 8.18158 6.68795L8.18009 5.94618H8.92186C9.33214 5.94618 9.66512 5.6132 9.66512 5.20292C9.66512 4.79264 9.33214 4.45966 8.92186 4.45966H8.17712L8.17563 3.71492C8.17489 3.30464 7.84116 2.9724 7.43088 2.97315C7.02061 2.97389 6.68837 3.30761 6.68911 3.71789L6.6906 4.45966Z" fill="#CDF76B" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M14.8652 5.20281V2.22978C14.8652 1.63814 14.6303 1.07104 14.2119 0.653325C13.7941 0.23487 13.227 0 12.6354 0C10.0615 0 4.80368 0 2.22978 0C1.63814 0 1.07104 0.23487 0.653325 0.653325C0.23487 1.07104 0 1.63814 0 2.22978V18.5815C0 19.1731 0.23487 19.7402 0.653325 20.1579C1.07104 20.5764 1.63814 20.8113 2.22978 20.8113C4.16225 20.8113 9.89724 20.8113 12.6347 20.8113C13.0449 20.8113 13.3779 20.4783 13.3779 20.068C13.3779 19.6577 13.0449 19.3247 12.6347 19.3247C9.89724 19.3247 4.16225 19.3247 2.22978 19.3247C2.03281 19.3247 1.84328 19.2467 1.70429 19.107C1.56456 18.968 1.48652 18.7784 1.48652 18.5815V2.22978C1.48652 2.03281 1.56456 1.84328 1.70429 1.70429C1.84328 1.56456 2.03281 1.48652 2.22978 1.48652H12.6354C12.8324 1.48652 13.0219 1.56456 13.1609 1.70429C13.3006 1.84328 13.3787 2.03281 13.3787 2.22978V5.20281C13.3787 5.61309 13.7116 5.94607 14.1219 5.94607C14.5322 5.94607 14.8652 5.61309 14.8652 5.20281Z" fill="#CDF76B" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M13.3653 9.07214C12.5039 9.37985 11.8862 10.2041 11.8862 11.1718C11.8862 12.4049 12.877 13.392 14.1101 13.392C14.5211 13.392 14.8593 13.7249 14.8593 14.136C14.8593 14.5462 14.5263 14.8792 14.116 14.8792C13.7057 14.8792 13.3727 14.5462 13.3727 14.136C13.3727 13.7257 13.0398 13.3927 12.6295 13.3927C12.2192 13.3927 11.8862 13.7257 11.8862 14.136C11.8862 15.1037 12.5046 15.9287 13.3675 16.2364L13.3638 17.1008C13.3623 17.5111 13.6938 17.8456 14.1041 17.8471C14.5144 17.8493 14.8489 17.517 14.8503 17.1068L14.8541 16.2401C15.7222 15.9354 16.3458 15.1081 16.3458 14.136C16.3458 12.9059 15.3394 11.9054 14.1101 11.9054C13.702 11.9054 13.3727 11.5799 13.3727 11.1718C13.3727 10.7616 13.7057 10.4286 14.116 10.4286C14.5248 10.4286 14.857 10.7593 14.8593 11.1674V11.177C14.8622 11.5844 15.1937 11.9151 15.6025 11.9151C16.0128 11.9151 16.3458 11.5821 16.3458 11.1718C16.3458 10.1989 15.7214 9.37093 14.8518 9.06693L14.8593 8.19063C14.8622 7.78035 14.5322 7.44514 14.122 7.44143C13.7117 7.43845 13.3757 7.7692 13.3727 8.17874L13.3653 9.07214Z" fill="#CDF76B" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M3.7164 11.1628H9.66247C10.0728 11.1628 10.4057 10.8298 10.4057 10.4195C10.4057 10.0092 10.0728 9.67627 9.66247 9.67627H3.7164C3.30612 9.67627 2.97314 10.0092 2.97314 10.4195C2.97314 10.8298 3.30612 11.1628 3.7164 11.1628Z" fill="#CDF76B" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M3.7164 14.145H9.66247C10.0728 14.145 10.4057 13.812 10.4057 13.4017C10.4057 12.9914 10.0728 12.6584 9.66247 12.6584H3.7164C3.30612 12.6584 2.97314 12.9914 2.97314 13.4017C2.97314 13.812 3.30612 14.145 3.7164 14.145Z" fill="#CDF76B" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M3.7164 17.1039H9.66247C10.0728 17.1039 10.4057 16.771 10.4057 16.3607C10.4057 15.9504 10.0728 15.6174 9.66247 15.6174H3.7164C3.30612 15.6174 2.97314 15.9504 2.97314 16.3607C2.97314 16.771 3.30612 17.1039 3.7164 17.1039Z" fill="#CDF76B" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Billing</span>
                     </a>}>
                        <ul className="ps-8 text-white text-[12px] font-normal">
                           <li><a href="#" className='before:content-["\2010"] before:me-1 before:text-[20px] before:leading-[1.2]'>Active Clients</a></li>
                           <li><a href="#" className='before:content-["\2010"] before:me-1 before:text-[20px] before:leading-[1.2]'>Accounts</a></li>
                           <li><a href="#" className='before:content-["\2010"] before:me-1 before:text-[20px] before:leading-[1.2]'>Wallets</a></li>
                        </ul>
                     </AccordionItem>
                  </Accordion>
               </li>
               <li className="pb-10">
                  <Accordion
                     itemClasses={{ indicator: 'rotate-180', trigger: 'pt-2 pb-1', content: 'pt-[0px]' }}
                  >
                     <AccordionItem key="1" aria-label="Accordion 1" title={<a href="#" className="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8.11652 10.3912C10.7098 10.3912 12.8121 8.28894 12.8121 5.69562C12.8121 3.1023 10.7098 1 8.11652 1C5.5232 1 3.4209 3.1023 3.4209 5.69562C3.4209 8.28894 5.5232 10.3912 8.11652 10.3912Z" stroke="#CDF76B" strokeWidth="1.56521" strokeMiterlimit="10" />
                           <path d="M1 14.5007C1.72117 13.2513 2.75853 12.2138 4.0078 11.4925C5.25707 10.7711 6.67423 10.3914 8.1168 10.3914C9.55937 10.3914 10.9765 10.7711 12.2258 11.4925C13.4751 12.2138 14.5124 13.2513 15.2336 14.5007" stroke="#CDF76B" strokeWidth="1.56521" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Admin</span>
                     </a>}>
                        <ul className="ps-7 text-white text-[12px] font-normal">
                           <li><a href="#" className='before:content-["\2010"] before:me-1 before:text-[20px] before:leading-[1.2]'>Active Clients</a></li>
                           <li><a href="#" className='before:content-["\2010"] before:me-1 before:text-[20px] before:leading-[1.2]'>Accounts</a></li>
                           <li><a href="#" className='before:content-["\2010"] before:me-1 before:text-[20px] before:leading-[1.2]'>Wallets</a></li>
                        </ul>
                     </AccordionItem>
                  </Accordion>
               </li>
               <li className="pt-6 border-t border-[#6A833D]">
                  <a href="#" className="flex items-center py-2 ps-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#CDF76B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z" stroke="#CDF76B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
                  </a>
               </li>
               <li>
                  <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.2344 4.04688L13.1875 7L10.2344 9.95312" stroke="#CDF76B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.3125 7H13.1875" stroke="#CDF76B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.3125 13.1875H1.375C1.22582 13.1875 1.08274 13.1282 0.977253 13.0227C0.871763 12.9173 0.8125 12.7742 0.8125 12.625V1.375C0.8125 1.22582 0.871763 1.08274 0.977253 0.977253C1.08274 0.871763 1.22582 0.8125 1.375 0.8125H5.3125" stroke="#CDF76B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                  </a>
               </li>
            </ul>
         </div>
      </aside>
   )
}

export default Aside;