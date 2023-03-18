
import "./featuredinfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function Featuredinfo() {
    const [income , setIncome] = useState([]);
    const [perc, setPerc] = useState([]);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get("orders/income");
                setIncome(res.data);
                setPerc((res.data[1].total * 100 ) / res.data[0].total - 100);
            } catch (err) {
                console.log(err);
            }
        };
        getIncome();
    }, []);
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    {income.length > 1 && income[1].total ? (
                    <span className="featuredMoney">${income[1].total}</span>
                    ):(
                        <span className="featuredMoney">N/A</span>
                        )}
                    <span className="featuredMoneyRate">
                        %{Math.floor(perc)}{" "} 
                        {perc < 0 ? (
                         <ArrowDownward className="featuredIcon negative" />
                         ): (<ArrowUpward className="featuredIcon" />
                         )}
                        </span>
                    </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,615</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDownward /></span>

                    /</div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">2.4 <ArrowUpward /></span>

                    /</div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div >
    )
}
