'use client'
import React from "react";
import AlertTringleImage from '@/assets/icons/alert_tringle1.svg';
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from 'next/image';

const Alerts = () => {

    const AlertFeed = [
        {
            image_url: AlertTringleImage,
            heading: 'Ellie joined team developers',
            alertTime: '04 April,2021 | 04:00 PM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue.',
        },
        {
            image_url: AlertTringleImage,
            heading: 'Ellie joined team developers',
            alertTime: '04 April,2021 | 04:00 PM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue.',
        },
        {
            image_url: AlertTringleImage,
            heading: 'Ellie joined team developers',
            alertTime: '04 April,2021 | 04:00 PM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue.',
        },
        {
            image_url: AlertTringleImage,
            heading: 'Ellie joined team developers',
            alertTime: '04 April,2021 | 04:00 PM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue.',
        },
        {
            image_url: AlertTringleImage,
            heading: 'Ellie joined team developers',
            alertTime: '04 April,2021 | 04:00 PM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue.',
        }
    ]

    return (
        <div className="w-full xl:w-[40%] xl:ps-8">
            <div className="flex justify-between items-center">
                <h2 className="text-[20px] font-normal py-5">Alerts</h2>
                <a href="#" className="text-primary text-[14px] font-semibold">View All</a>
            </div>
            <div>
                <div className='bg-white rounded'>
                    <ol className="py-10 px-6">
                        {
                            AlertFeed.map((data, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#" className="items-center p-3 flex flex-col justify-between bg-[#F8FAF6] rounded mb-[21px] w-full">
                                                <Accordion 
                                                itemClasses={{ indicator: 'hidden', trigger: 'pt-2 pb-1', content: 'pt-[0px]' }}
                                                >
                                                    <AccordionItem key="1" aria-label="Accordion 1" title = {
                                                        <>
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className='flex items-start'>
                                                                <div className='shrink-0 me-3 w-[36px] h-[36px] bg-white rounded flex items-center justify-center'>
                                                                    <Image
                                                                        className="w-[18px] h-[15px] mx-auto"
                                                                        src={data.image_url}
                                                                        alt="Jese Leos image"
                                                                        width={18}
                                                                        height={16}
                                                                    />
                                                                </div>
                                                                <div className="text-black">
                                                                    <div className="text-[13px] font-normal">{data.heading}</div>
                                                                    <div className="text-[12px] font-normal text-[#717171]">{data.alertTime}</div>
                                                                   
                                                                </div>
                                                            </div>
                                                            <div className="text-primary font-medium text-[12px]">Read More</div>
                                                        </div>
                                                        </>
                                                    }>
                                                        <div className="ms-[49px]">
                                                        <div>
                                                            <p className='text-[#717171] text-[12px] font-normal mt-[6px]'>
                                                                {data.description}
                                                            </p>
                                                        </div>
                                                        <div className="text-primary font-medium text-[12px] mt-[6px]">Archive</div>
                                                        </div>
                                                    </AccordionItem>
                                                </Accordion>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Alerts;