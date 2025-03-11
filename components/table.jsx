import { format } from "date-fns";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

const Table = function ({ headers: tableHeader, data, rowsPerPage, currentPage, isFetching, view = true }) {
  const headers = view ? tableHeader : tableHeader.filter((head) => head.key != "action");
  return (
    <div>
      <table className="table-auto w-full px-3">
        <thead>
          <tr className="font-light bg-[#F4F7FC]">
            {headers.map((header, index) => (
              <th key={header.label} className="p-2 text-left font-semibold">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        {isFetching ? (
          <tbody>
            {new Array(5).fill(true).map((_, index) => {
              return (
                <tr key={index}>
                  <td colSpan="6" className="py-4">
                    <Skeleton key={index} className="w-full py-5 bg-slate-200" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            {data.slice(currentPage * rowsPerPage - rowsPerPage, currentPage * rowsPerPage).map((ticket, index) => {
              return (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#EEEEEE]"}>
                  {Object.keys(ticket).map((props, iin) => {
                    if (props == "description") {
                      return (
                        <td key={iin + props + ticket.id} className="p-4">
                          {view ? (
                            ticket[props].slice(0, 30) + "..."
                          ) : (
                            <Link href={"/ticket/" + ticket.id} className="text-[#4F5AED] hover:underline">
                              {" "}
                              {ticket[props].slice(0, 30) + "..."}{" "}
                            </Link>
                          )}
                        </td>
                      );
                    }
                    if (props == "id") {
                      return (
                        <td key={iin + props + ticket.id} className="p-2">
                          {format(new Date(), "yyMMdd") + ticket[props].replace(/[^0-9]/g, "").substring(0, 4)}
                        </td>
                      );
                    }
                    if (props == "status") {
                      return (
                        <td key={iin + props + ticket.id} className="p-2">
                          <span
                            className={`px-2 py-1 text-sm rounded-full ${
                              ticket[props] === "resolved"
                                ? "bg-[#E9EDF5] border border-black/60 text-[#8F8F8F]"
                                : "bg-[#E1FCEF] border border-green-800 text-[#14804A]"
                            }`}
                          >
                            {ticket[props]}
                          </span>
                        </td>
                      );
                    }
                    if (props == "ratings") {
                      return (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ticket[props].replace(/★/g, "<span class='text-yellow-500'>★</span>"),
                          }}
                        ></span>
                      );
                    }
                    return (
                      <td key={iin + ticket.id} className="p-2">
                        {ticket[props]}
                      </td>
                    );
                  })}
                  {view && (
                    <td className="p-4">
                      <Link href={"/ticket/" + ticket.id} className="underline text-xs">
                        View More
                      </Link>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};

// underline sm
export default Table;
