import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import "./home.css"
import { userData } from "../../dummyData"
import { useEffect } from "react"
import { userRequest } from "../../requestMethods"

export default function Home() {
   
    return (
    
    <div className="home">
            <Featuredinfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
