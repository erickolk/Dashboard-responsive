import SalesItem from "./SalesItem";
import ScoreList from "./ScoreList";
import WebAnalytics from "./WebAnalytics";

export default function RigthColumn() {
    return (
        <div className="w-full p-2">
            <SalesItem/>
            <WebAnalytics />
            <ScoreList />
        </div>
    )
}