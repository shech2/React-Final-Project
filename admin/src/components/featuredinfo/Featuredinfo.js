
import "./featuredinfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function Featuredinfo() {
    const [lastMonthIncome, setLastMonthIncome] = useState([]);
    const [perc, setPerc] = useState([]);



    // sales for last month
    useEffect(() => {
        const getLastMonthIncome = async () => {
            var sum = 0;
            try {
                const res = await userRequest.get("orders/income");
                for (let i = 0; i < res.data.length; i++) {
                    // get last month sales
                    sum += res.data[i].total;
                }
                setPerc((res.data[1].total * 100) / res.data[0].total - 100);
                setLastMonthIncome(sum);
            } catch (err) {
                console.log(err);
            }
        };
        getLastMonthIncome();
    }, []);



    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    {lastMonthIncome ? (
                        <span className="featuredMoney">${lastMonthIncome}</span>
                    ) : (
                        <span className="featuredMoney">N/A</span>
                    )}
                    <span className="featuredMoneyRate">
                        %{Math.floor(perc)}{" "}
                        {perc < 0 ? (
                            <ArrowDownward className="featuredIcon negative" />
                        ) : (<ArrowUpward className="featuredIcon" />
                        )}
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    {lastMonthIncome ? (
                        <span className="featuredMoney">${lastMonthIncome}</span>
                    ) : (
                        <span className="featuredMoney">N/A</span>
                    )}
                    <span className="featuredMoneyRate">
                        %{Math.floor(perc)}{" "}
                        {perc < 0 ? (
                            <ArrowDownward className="featuredIcon negative" />
                        ) : (<ArrowUpward className="featuredIcon" />
                        )}
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$0</span>
                    <span className="featuredMoneyRate">0 <ArrowUpward /></span>

                    /</div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div >
    )
}
