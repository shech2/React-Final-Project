import "./widgetLg.css";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function WidgetLg() {

    const [Orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get('/orders');
                // add to order array the nickname of the user form backend
                res.data.map(async (order) => {
                    const user = await userRequest.get(`/users/${order.userId}`);
                    order.userId = user.data[0].username;
                    setOrders((prev) => [...prev, order]);
                    return order;
                });
            } catch (err) {
                console.log(err);
            }
        };
        getOrders();
    }, []);




    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {Orders.map((order) => (
                    <tr className="widgetLgTr" key={order._id} >
                        <td className="widgetLgUser">
                            <span className="widgetLgName">{order.userId}</span>
                        </td>
                        <td className="widgetLgDate">{dayjs(order.createdAt).fromNow()}</td>
                        <td className="widgetLgAmount">{order.amount}</td>
                        <td className="widgetLgStatus">
                            <Button type={order.status} />
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}