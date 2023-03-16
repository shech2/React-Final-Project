import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React from 'react'
import { userRows } from "../../dummyData";

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg " src={params.row.avatar}
                            alt="" />
                        {params.row.username}

                    </div>
                )

            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>

                        <button className="userListEdit">Edit</button>
                        <DeleteOutline className="userListDelete" />
                    </>
                )
            }
        },
    ];


    return (
        <div className="userList">
            <DataGrid
                rows={userRows}
                columns={columns}
                pageSize={8}
                checkboxSelection
            />

        </div>
    )
}
