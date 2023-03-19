import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import "./home.css"
import { useEffect } from "react"
import { userRequest } from "../../requestMethods"
import { useState } from "react"
import { useMemo } from "react"

export default function Home() {
  const [orderStats, setOrderStats] = useState([]);

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
        const res = await userRequest.get("/orders/income");
        const statData = res.data.map((item) => ({
          name : MONTHS[item._id - 1],
          "Total Amount" : item.total,
      }));
        setOrderStats(statData);
      } catch { }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <Featuredinfo />
      <Chart data={orderStats} title="Order Analytics" grid dataKey="Total Amount" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
