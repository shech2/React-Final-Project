
import {
    CalendarToday,
    MailOutline,
    PermIdentity,
} from "@material-ui/icons";
import "./user.css";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";


export default function User() {
    const location = useLocation();
    const userId = location.pathname.split("/")[2];
    
    const user = useSelector(state => 
        state.user.users.find(user => user.uid === userId)
    );

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">User Details</h1>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://play-lh.googleusercontent.com/tmASL-0Jg5bq3RKsneEFVCcAth0M7jFLI7alQQyKSEqrpvLuMfW4mfkw4iSkLCj9_zo"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{user.firstName} {user.lastName}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.username}</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">{new Date(user.createdAt).toLocaleDateString('en-GB').split("/").join(".")}</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.email}</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">User Details</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    name = "username"
                                    type="text"
                                    placeholder= ""
                                    className="userUpdateInput"
                                    value = {user.username}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>First Name</label>
                                <input
                                    name = "firstName"
                                    type="text"
                                    placeholder= ""
                                    className="userUpdateInput"
                                    value = {user.firstName}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Last Name</label>
                                <input
                                    name = "lastName"
                                    type="text"
                                    placeholder= ""
                                    className="userUpdateInput"
                                    value={user.lastName}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    name = "email"
                                    type="text"
                                    placeholder=""
                                    className="userUpdateInput"
                                    value={user.email}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}