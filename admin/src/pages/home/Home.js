import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import "./home.css"
import { userData } from "../../dummyData"
import { useEffect } from "react"
import { userRequest } from "../../requestMethods"
import { useState } from "react"
import { useMemo } from "react"

export default function Home() {
    const [userStats, setUserStats] = useState([]);

    const MONTHS = useMemo(
      () => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      []
    );
  
    useEffect(() => {
      const getStats = async () => {
        try {
          const res = await userRequest.get("/users/stats");
          res.data.map((item) =>
            setUserStats((prev) => [
              ...prev,
              { name: MONTHS[item._id - 1], "Active User": item.total },
            ])
          );
        } catch {}
      };
      getStats();
    }, [MONTHS]);
  
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
