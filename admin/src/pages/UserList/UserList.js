import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React from 'react'
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export default function UserList() {


    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);

    const handleDelete = (uid) => {
        deleteUser(uid, dispatch);
    };

    const columns = [
        { field: 'uid', headerName: 'ID', width: 250 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg " src={params.row.img}
                            alt="" />
                        {params.row.username}

                    </div>
                )

            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'isAdmin',
            headerName: 'isAdmin',
            width: 150,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.uid} >
                            <button className="userListEdit">User Details</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.uid)} />
                    </>
                )
            }
        },
    ];


    return (
        <div className="userList">
            <DataGrid
                rows={users}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row.uid}
                pageSize={8}
                checkboxSelection
            />

        </div>
    )
}
