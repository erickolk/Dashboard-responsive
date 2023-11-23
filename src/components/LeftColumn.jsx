import AreaChartComponent from "./AreaChartComponent";
import CardItems from "./CardItems";
import TableComponent from "./TableComponent";




export default function LeftColumn() {
  return (
    <div className="w-full flex  flex-col  justify-between p-2">
      <div className="flex flex-col lg:flex-row gap-2 w-full">
        <CardItems />
        <CardItems />
        <CardItems />
      </div>
      <div className="flex-auto w-full">
        <AreaChartComponent />
        <TableComponent />
      </div>
    
        
      
    </div>
  );
}
