import "./widgetSm.css";
import React from 'react'
import { useState } from 'react'
import { userRequest } from "../../requestMethods";
import { useEffect } from 'react'
import { useSocket } from "../../contexts/SocketContext";


export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState([]); // [
  const { socket } = useSocket();

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

  // if a user is connected , display a green dot in the widget otherwise a red dot
  useEffect(() => {
    socket.on('login', (list) => {
      setConnectedUsers(list);
    });
  }, [socket, users]);

  useEffect(() => {
    socket.on('logout', (list) => {
      setConnectedUsers(list);
    });
  }, [socket, users]);



  console.log('connectedUsers', connectedUsers)


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
            <img
              src={
                connectedUsers.includes(user.email) ?
                  "https://png.pngtree.com/png-clipart/20201029/ourlarge/pngtree-circle-clipart-green-circle-png-image_2381999.jpg"
                  :
                  "https://png.pngtree.com/png-clipart/20201029/ourlarge/pngtree-circle-clipart-red-circle-png-image_2381952.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
