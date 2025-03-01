import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination(){
    const {page, handlePageChange, totalPages} = useContext(AppContext)
    console.log(` Total page ${totalPages}`);
    return(
        <div className="w-full flex items-center justify-center border border-gray-400 fixed bottom-0 bg-white py-3">
            <div className="flex justify-between gap-x-3 w-11/12 max-w-[630px]  " >
                <div className="flex  gap-x-3">
                { page > 1 &&
                   ( <button className="border border-gray-400 rounded-md px-2 py-1 cursor-pointer" onClick={()=> handlePageChange(page-1)}>Previous</button>)
                }
                 
                {   page < totalPages &&
                    (<button className="border border-gray-400 rounded-md px-3  py-1 cursor-pointer" onClick={()=> handlePageChange(page+1)}>Next</button>)
                }
                </div>
            
            
            <p className="font-bold">
                Page {page} of {totalPages}
            </p>
        </div>
        </div>
    )
}
export default Pagination;