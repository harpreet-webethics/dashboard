const ClientTableHeader = () => {
    return (
        <div className="flex flex-col xl:flex-row items-center justify-between space-y-3 md:space-y-2 xl:space-y-0 md:space-x-2 px-2 py-[13px]">
            <div className="flex justify-start xl:justify-center items-center">
                <h2 className="text-[16px] font-medium me-2 opacity-70">Accounts</h2>
                <div className="text-[#769145] bg-[#F1F4EC] text-[10px] py-[3px] px-3 font-medium rounded">256</div>
            </div>
        </div>
    )
}

export default ClientTableHeader;