

import "./widgetLg.css";


export default function WidgetLg() {


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

                <tr className="widgetLgTr" >
                    <td className="widgetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGLZOfEaK9TIgFtXB9OFFfFc38bFnQJI2nk2a966iwFxowxFk02VIgWvtGJ1bivKEfmM&usqp=CAU"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="approved" />
                    </td>
                </tr>

                <tr className="widgetLgTr" >
                    <td className="widgetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROy042Ohwpj-WF3jn4LTF5hpnHnCoekiWVhyg-jwdZpW0Uli3LBe9fVb8brXNztDLdXMM&usqp=CAU"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Sem Rol</span>
                    </td>
                    <td className="widgetLgDate">8 Jun 2021</td>
                    <td className="widgetLgAmount">$12.00</td>
                    <td className="widgetLgStatus">
                        <Button type="declined" />
                    </td>
                </tr>

                <tr className="widgetLgTr" >
                    <td className="widgetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwXyzIYNSWeHyVWX3VkhDN3pyR6uYIpnSdqgDJZrV_Ajv7YppGWiztcZYGWrmkAUydNqo&usqp=CAU"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Jony Potz</span>
                    </td>
                    <td className="widgetLgDate">12 Jun 2021</td>
                    <td className="widgetLgAmount">$42.00</td>
                    <td className="widgetLgStatus">
                        <Button type="pending" />
                    </td>
                </tr>
            </table>
        </div>
    )
}