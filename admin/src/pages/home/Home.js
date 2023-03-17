import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import "./home.css"
import { userData } from "../../dummyData"
import { useMemo, useState } from "react"
import { useEffect } from "react"
import { userRequest } from "../../requestMethods"

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
            "Aug",
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
                const res = await userRequest.get("/users/stats", {
                    params: {
                        start: "2023-01-01",
                        end: "2023-12-31",
                    },
                });
                res.data.sort(function (a, b) {
                    return a._id - b._id;
                });
                res.data.map((item) =>
                    setUserStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], "Active User": item.total },
                    ])
                );
            } catch (err) {
                console.log(err);
            }
        };
        getStats();
    }, [MONTHS]);

    console.log(userStats);

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
