import Link from 'next/link';

const TempTable = function({ headers, data, rowsPerPage, currentPage }) {
    return (
        <div>
            <table className="table-auto w-full">
                <thead>
                    <tr className="font-light bg-[#F4F7FC]">
                    <th className="p-2 text-left">
                        <input type="checkbox" />
                    </th>
                    {/* Dynamically create headers */}
                    {headers.map((header, index) => (
                        <th key={index} className="p-2 text-left font-semibold">
                        {header.label || header}
                        </th>
                    ))}
                    </tr>
                   
                </thead>
                <tbody>
                    {data.slice(currentPage * rowsPerPage - rowsPerPage, currentPage * rowsPerPage).map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#EEEEEE]'}>
                        
                        <td className="p-[10px]">
                        <input type="checkbox" className="form-checkbox" />
                        </td>
                        {headers.map((header, colIndex) => {
                        const rowKey = header.key || header;
                        
                        if (header.isLink) {
                            const className = header.className;
                            return (
                              <td key={colIndex} className="p-4">
                                <Link href={header.linkUrl(row)} className={className}>
                                  {row[header.key]}
                                </Link>
                              </td>
                            );
                        }

                        if (header.key === "status") {
                            return (
                            <td key={colIndex} className="p-2">
                                <span
                                className={`px-2 py-1 text-sm rounded-full ${
                                    row[rowKey] === 'Open' ? 'bg-[#F4F7FC] text-[#4F5AEd]'
                                    : row[rowKey] === 'Troubleshooting' ? 'bg-[#F0F1FA] text-[#4F5AED]'
                                    : row[rowKey] === 'Closed' ? 'bg-[#E9EDF5] border border-black text-[#8F8F8F]'
                                    : row[rowKey] === 'Overdue' ? 'bg-[#FAF0F3] text-[#D12953]'
                                    : row[rowKey] === 'Pending Staff' ? 'bg-[#FAF0F3] text-[#D12953]'
                                    : row[rowKey] === 'Newly Assigned' ? 'bg-[#FFF3CD] text-[#FFC107]'
                                    : row[rowKey] === 'Ready for closure' ? 'bg-[#E1FCEF] text-[#14804A]'
                                    : 'bg-[#E9EDF5] border border-black text-[#8F8F8F]'
                                }`}
                                >
                                {row[rowKey]}
                                </span>
                            </td>
                            );
                        }

                        // For other keys, display normally
                        return (
                            <td key={colIndex} className="p-2">
                            {row[rowKey]}
                            </td>
                        );
                        })}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TempTable;