
const ClientsTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-[12px] text-left text-gray-500 dark:text-gray-400 min-w-[700px]">
                <thead className="text-xs">
                    <tr className="border-b border-[#F1F4EC]">
                        <th scope="col" className="px-4 py-4 font-medium text-primary_800">Name</th>
                        <th scope="col" className="px-4 py-4 font-medium text-primary_800">Balance</th>
                        <th scope="col" className="px-4 py-4 font-medium text-primary_800">Email</th>
                        <th scope="col" className="px-4 py-4 font-medium text-primary_800">Mobile Phone</th>
                        <th scope="col" className="px-4 py-4 font-medium text-primary_800">Advisor</th>
                    </tr>
                </thead>
                <tbody  >
                    <tr className="odd:bg-white even:bg-[#F1F4EC]">
                        <td className="px-4 py-4">Pratik Test</td>
                        <td className="px-4 py-4 text-primary_800">$3.17</td>
                        <td className="px-4 py-4">example.ex@gamil.com</td>
                        <td className="px-4 py-4">2547896547</td>
                        <td className="px-4 py-4">Anthony Garrett</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-[#F1F4EC] rounded">
                        <td className="px-4 py-4">Pratik Test</td>
                        <td className="px-4 py-4 text-primary_800">$3.17</td>
                        <td className="px-4 py-4">example.ex@gamil.com</td>
                        <td className="px-4 py-4">2547896547</td>
                        <td className="px-4 py-4">Anthony Garrett</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-[#F1F4EC]">
                        <td className="px-4 py-4">Pratik Test</td>
                        <td className="px-4 py-4 text-primary_800">$3.17</td>
                        <td className="px-4 py-4">example.ex@gamil.com</td>
                        <td className="px-4 py-4">2547896547</td>
                        <td className="px-4 py-4">Anthony Garrett</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-[#F1F4EC] rounded">
                        <td className="px-4 py-4">Pratik Test</td>
                        <td className="px-4 py-4 text-primary_800">$3.17</td>
                        <td className="px-4 py-4">example.ex@gamil.com</td>
                        <td className="px-4 py-4">2547896547</td>
                        <td className="px-4 py-4">Anthony Garrett</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-[#F1F4EC]">
                        <td className="px-4 py-4">Pratik Test</td>
                        <td className="px-4 py-4 text-primary_800">$3.17</td>
                        <td className="px-4 py-4">example.ex@gamil.com</td>
                        <td className="px-4 py-4">2547896547</td>
                        <td className="px-4 py-4">Anthony Garrett</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ClientsTable;



