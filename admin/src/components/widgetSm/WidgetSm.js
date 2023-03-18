import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import React from 'react'
import { useState } from 'react'
import { userRequest } from "../../requestMethods";
import { useEffect } from 'react'


export default function WidgetSm() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
          try {
            const now = new Date();
            const startOfWeek = new Date(now.getTime() - now.getDay() * 24 * 60 * 60 * 1000); // Get start of the week
            const endOfWeek = new Date(startOfWeek.getTime() + 7 * 24 * 60 * 60 * 1000 - 1); // Get end of the week
            const filter = {
              created_at: {
                $gte: startOfWeek,
                $lt: endOfWeek
              }
            };
            const config = { params: filter };
            const res = await userRequest.get('/users', config);
            setUsers(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getUsers();
      }, []);
      
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Active Users</span>
            <ul className="widgetSmList">
                {users.map((user) => (
                    <li className="widgetSmListItem" key={user._id}>
                        <img
                            src={
                                user.img ||
                                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                                }
                                alt=""
                                className="widgetSmImg"
                                />
                            <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.email}</span>
                            </div>
                                <button className="widgetSmButton">
                                    <Visibility className="widgetSmIcon" />
                                    Display
                                </button>
                            </li>
                ))}    
            </ul>
        </div>
    )
}
