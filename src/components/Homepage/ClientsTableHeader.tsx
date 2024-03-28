const ClientTableHeader = () => {
    return (
        <div className="flex flex-col xl:flex-row items-center justify-between space-y-3 md:space-y-2 xl:space-y-0 md:space-x-2 px-2 py-[6px]">
            <div className="flex justify-start xl:justify-center items-center">
                <h2 className="text-[16px] font-medium me-2 opacity-70">Active Clients</h2>
                <div className="text-[#769145] bg-[#F1F4EC] text-[10px] py-[3px] px-3 font-medium rounded">256</div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-2">
                <div className="w-full md:max-w-[177px]">
                    <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="#D2D2D2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-[#EBEBEB] outline-none text-sm rounded block w-full pl-10 p-2 focus-visible:ring-primary" placeholder="Search" />
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <div className="flex items-center space-x-2 w-full pt-2 md:pt-0 md:w-auto">
                        <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-[50%] md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-[#333E4D] focus:outline-none bg-white rounded border border-[#EBEBEB]" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none" className="h-4 w-4 mr-2 text-gray-400">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 0.365767C0 0.26876 0.0438986 0.175725 0.122039 0.107131C0.200179 0.038536 0.30616 0 0.416667 0H9.58333C9.69384 0 9.79982 0.038536 9.87796 0.107131C9.9561 0.175725 10 0.26876 10 0.365767C10 0.462774 9.9561 0.555809 9.87796 0.624403C9.79982 0.692998 9.69384 0.731534 9.58333 0.731534H0.416667C0.30616 0.731534 0.200179 0.692998 0.122039 0.624403C0.0438986 0.555809 0 0.462774 0 0.365767ZM0 2.92614C0 2.82913 0.0438986 2.73609 0.122039 2.6675C0.200179 2.59891 0.30616 2.56037 0.416667 2.56037H9.58333C9.69384 2.56037 9.79982 2.59891 9.87796 2.6675C9.9561 2.73609 10 2.82913 10 2.92614C10 3.02314 9.9561 3.11618 9.87796 3.18477C9.79982 3.25337 9.69384 3.2919 9.58333 3.2919H0.416667C0.30616 3.2919 0.200179 3.25337 0.122039 3.18477C0.0438986 3.11618 0 3.02314 0 2.92614ZM4.58333 5.48651C4.58333 5.3895 4.62723 5.29646 4.70537 5.22787C4.78351 5.15927 4.88949 5.12074 5 5.12074H9.58333C9.69384 5.12074 9.79982 5.15927 9.87796 5.22787C9.9561 5.29646 10 5.3895 10 5.48651C10 5.58351 9.9561 5.67655 9.87796 5.74514C9.79982 5.81374 9.69384 5.85227 9.58333 5.85227H5C4.88949 5.85227 4.78351 5.81374 4.70537 5.74514C4.62723 5.67655 4.58333 5.58351 4.58333 5.48651Z" fill="#333E4D" />
                            </svg>
                            Filter
                        </button>
                        <div id="filterDropdown" className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                            <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                <li className="flex items-center">
                                    <input id="apple" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                                </li>
                                <li className="flex items-center">
                                    <input id="fitbit" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (16)</label>
                                </li>
                                <li className="flex items-center">
                                    <input id="razor" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="razor" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor (49)</label>
                                </li>
                                <li className="flex items-center">
                                    <input id="nikon" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="nikon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon (12)</label>
                                </li>
                                <li className="flex items-center">
                                    <input id="benq" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="benq" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label>
                                </li>
                            </ul>
                        </div>
                        <div className="w-[50%] md:w-auto">
                            <button className="py-[11px] w-full md:w-auto px-5 bg-primary_500 text-white rounded text-[10px] font-semibold">Add Client</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientTableHeader;