import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectTables } from "../features/table/tableSlice";

interface TablesProps {}

const table_colors = ['#FFA754', '#FC5C61', '#53E3E8', '#E2E2E2', '#75D14E', '#FAFAFA']

const Tables = ({}: TablesProps) => {
  const tables = useAppSelector(selectTables);
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="table-card lg:h-[60px] h-max">
        <h1 className="text-[#393230] font-bold">Tables</h1>
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-3">
          <button className="btn-primary">Edit Position</button>
          <button className="btn-primary">Move Multiple Tables</button>
          <button className="btn-primary">Add Fees for Multiple Tables</button>
          <button className="rounded-[5px] bg-[#FAFAFA] md:py-1.5 md:px-2 text-[10px] sm:text-sm text-secondary border-solid border border-secondary font-semibold active:bg-secondary/50 transition-all">
            Remove Multiple Tables
          </button>
          <button className="btn-secondary">+ Add Table</button>
        </div>
      </div>
      <div className="table-card h-[40px]">
        <div className="flex gap-3">
          <button className="btn-secondary">General Hall</button>
          <button className="btn-muted">Smoking Area</button>
          <button className="btn-muted">Terrace</button>
        </div>
        <div className="flex gap-3">
          <button className="btn-outlined border-dashed border-2 border-[#ABA5A2] text-[#393230]">
            Edit Zone
          </button>
          <button className="btn-outlined border-dashed border-2 border-secondary text-secondary">
            + Add Zone
          </button>
        </div>
      </div>
      <div className="table-card mb-[480px] md:h-[calc(100vh-40%)] grid 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 items-start relative">
        {tables.map((table, idx) => (
          <div
            className={`w-[147px] h-[148px] bg-[${table_colors[idx]}] p-[10px] rounded-md text-black flex flex-col gap-2 border-[#30CCAF] border-2 cursor-pointer`}
            key={table.id}
            onClick={() => navigate(table.id)}
          >
            <div className="flex justify-between">
              <h1 className="uppercase text-xs font-bold">{table.name}</h1>
              <input type="checkbox" />
            </div>
            <span className="text-[10px]">Number of chairs: 4</span>
            <span className="text-[10px]">Sitting start time: 12:32</span>
            <button className="text-[10px] rounded-[5px] p-1 border-white border active:bg-[#D9D9D9]/50 transition-all">
              In Service - 10:32
            </button>
            <button className="text-[10px] rounded-[5px] p-1 border-white border active:bg-[#D9D9D9]/50 transition-all">
              New Order - 10:32
            </button>
          </div>
        ))}
        <div className="md:absolute bottom-0 left-0 sm:p-5 gap-3 flex items-center">
          <span className="sm:text-[15px] text-xs font-bold">Tags</span>
          <li className="sm:text-[13px] text-xs marker:text-[#FFA754]">Menu Scanned</li>
          <li className="sm:text-[13px] text-xs marker:text-[#FC5C61]">Need Help</li>
          <li className="sm:text-[13px] text-xs marker:text-[#53E3E8]">Need Payment</li>
          <li className="sm:text-[13px] text-xs marker:text-[#75D14E]">Table Paid</li>
          <li className="sm:text-[13px] text-xs marker:text-[#E2E2E2]">Table Reserved</li>
          <li className="sm:text-[13px] text-xs marker:text-[#ABA5A2]">Table Empty</li>
        </div>
      </div>
    </div>
  );
};

export default Tables;
