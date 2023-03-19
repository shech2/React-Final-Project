import {
    CalendarToday,
    MailOutline,
    PermIdentity,
} from "@material-ui/icons";
import "./user.css";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase-config";
import { updateUser } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { Publish } from "@material-ui/icons";




export default function User() {
    const location = useLocation();
    const userId = location.pathname.split("/")[2];
    const [img, setImg] = useState(null);
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();


    const user = useSelector(state =>
        state.user.users.find(user => user.uid === userId)
    );


    const handleClick = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, "images/" + fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const userNew = { ...user, img: downloadURL };
                    updateUser(userId, userNew, dispatch).then(() => {
                        setImg(downloadURL);
                    })
                });
            }
        );
    };

    useEffect(() => {
        setImg(user.img);
    }, [user]);

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">User Details</h1>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src={img}
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
                                    name="username"
                                    type="text"
                                    placeholder=""
                                    className="userUpdateInput"
                                    value={user.username}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>First Name</label>
                                <input
                                    name="firstName"
                                    type="text"
                                    placeholder=""
                                    className="userUpdateInput"
                                    value={user.firstName}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Last Name</label>
                                <input
                                    name="lastName"
                                    type="text"
                                    placeholder=""
                                    className="userUpdateInput"
                                    value={user.lastName}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder=""
                                    className="userUpdateInput"
                                    value={user.email}
                                />
                            </div>
                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                <img src={img} alt="" className="productUploadImg" />
                                <label for="file">
                                    <Publish />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
                            </div>
                            <button onClick={handleClick} className="productButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}