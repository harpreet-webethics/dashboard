import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import TotalAssets from '@/assets/images/total_assets.svg';
import ClientsTable from "./ClientsTable";
import ClientTableHeader from "./ClientsTableHeader";
import AccountTableHeader from './AccountTableHeader';
import WalletsTableHeader from './WalletsTableHeader';


const SummaryTabs = () => {
    return (
        <div className="w-full xl:w-[60%]">
            <div>
                <h2 className="text-[20px] font-normal py-5">Summary</h2>
            </div>
            <div className="flex w-full flex-col bg-white rounded-[4px]">
                <Tabs aria-label="Tabs colors" radius="none" color="primary" className="w-full overflow-x-auto md:overflow-x-hidden"
                    classNames={{
                        tabList: "min-w-[500px] w-full p-0 border-b border-primary overflow-x-hidden",
                        tab: 'py-[30px] text-black',
                        tabContent: "group-data-[selected=true]:text-[white] text-primary_500 font-medium",
                        panel:'px-0'
                    }}
                >
                    <Tab key="photos" title="Total Assets" >
                        <Card>
                            <CardBody className="px-10 pb-5">
                                <h2 className="font-semibold opacity-70 pb-6">Total Assets</h2>
                                <div>
                                    <Image
                                        src={TotalAssets}
                                        alt="Total Assets"
                                        width={644}
                                        height={400}
                                        className="w-full max-w-[100%] xl:h-[395px]"
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="music" title="Clients" >
                        <Card>
                            <CardBody>
                                <section className="bg-gray-50 dark:bg-gray-900">
                                    <div className="mx-auto max-w-screen-xl">
                                        {/* <!-- Start coding here --> */}
                                        <div className="bg-white dark:bg-gray-800 relative sm:rounded-lg overflow-hidden">
                                            <ClientTableHeader />
                                            <ClientsTable />
                                        </div>
                                    </div>
                                </section>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="videos" title="Accounts">
                        <Card>
                            <CardBody>
                                <section className="bg-gray-50 dark:bg-gray-900">
                                    <div className="mx-auto max-w-screen-xl">
                                        {/* <!-- Start coding here --> */}
                                        <div className="bg-white dark:bg-gray-800 relative sm:rounded-lg overflow-hidden">
                                            <AccountTableHeader />
                                            <ClientsTable />
                                        </div>
                                    </div>
                                </section>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="Wallets" title="Wallets">
                        <Card>
                            <CardBody>
                                <section className="bg-gray-50 dark:bg-gray-900">
                                    <div className="mx-auto max-w-screen-xl">
                                        {/* <!-- Start coding here --> */}
                                        <div className="bg-white dark:bg-gray-800 relative sm:rounded-lg overflow-hidden">
                                            <WalletsTableHeader/>
                                            <ClientsTable/>
                                        </div>
                                    </div>
                                </section>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
export default SummaryTabs;
