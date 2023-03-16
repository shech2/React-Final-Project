import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React from 'react'

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'username', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg " src={params.row.avatar}
                            alt="" />
                        {params.row.Username}

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

    const rows = [
        {
            id: 1, Username: 'jon Snow', avatar: "https://play-lh.googleusercontent.com/tmASL-0Jg5bq3RKsneEFVCcAth0M7jFLI7alQQyKSEqrpvLuMfW4mfkw4iSkLCj9_zo"
            , email: "jon@gmail.com", status: "active", transaction: "$120.00"
        },
        {
            id: 2, Username: 'jon Snow', avatar: "https://play-lh.googleusercontent.com/tmASL-0Jg5bq3RKsneEFVCcAth0M7jFLI7alQQyKSEqrpvLuMfW4mfkw4iSkLCj9_zo"
            , email: "jon@gmail.com", status: "active", transaction: "$120.00"
        },
        {
            id: 3, Username: 'jon Snow', avatar: "https://play-lh.googleusercontent.com/tmASL-0Jg5bq3RKsneEFVCcAth0M7jFLI7alQQyKSEqrpvLuMfW4mfkw4iSkLCj9_zo"
            , email: "jon@gmail.com", status: "active", transaction: "$120.00"
        },
        {
            id: 4, Username: 'jon Snow', avatar: "https://play-lh.googleusercontent.com/tmASL-0Jg5bq3RKsneEFVCcAth0M7jFLI7alQQyKSEqrpvLuMfW4mfkw4iSkLCj9_zo"
            , email: "jon@gmail.com", status: "active", transaction: "$120.00"
        },
        {
            id: 5, Username: 'jon Snow', avatar: "https://play-lh.googleusercontent.com/tmASL-0Jg5bq3RKsneEFVCcAth0M7jFLI7alQQyKSEqrpvLuMfW4mfkw4iSkLCj9_zo"
            , email: "jon@gmail.com", status: "active", transaction: "$120.00"
        },
        {
            id: 6, Username: 'jon Snow', avatar: "https://play-lh.googleusercontent.com/tmASL-0Jg5bq3RKsneEFVCcAth0M7jFLI7alQQyKSEqrpvLuMfW4mfkw4iSkLCj9_zo"
            , email: "jon@gmail.com", status: "active", transaction: "$120.00"
        },
        {
            id: 7, Username: 'jon Snow', avatar: "https://play-lh.googleusercontent.com/tmASL-0Jg5bq3RKsneEFVCcAth0M7jFLI7alQQyKSEqrpvLuMfW4mfkw4iSkLCj9_zo"
            , email: "jon@gmail.com", status: "active", transaction: "$120.00"
        },
        {
            id: 8, Username: 'jon Snow', avatar: "https://play-lh.googleusercontent.com/tmASL-0Jg5bq3RKsneEFVCcAth0M7jFLI7alQQyKSEqrpvLuMfW4mfkw4iSkLCj9_zo"
            , email: "jon@gmail.com", status: "active", transaction: "$120.00"
        },
        {
            id: 9, Username: 'jon Snow', avatar: "https://play-lh.googleusercontent.com/tmASL-0Jg5bq3RKsneEFVCcAth0M7jFLI7alQQyKSEqrpvLuMfW4mfkw4iSkLCj9_zo"
            , email: "jon@gmail.com", status: "active", transaction: "$120.00"
        },
        {
            id: 10, Username: 'jon Snow', avatar: "https://play-lh.googleusercontent.com/tmASL-0Jg5bq3RKsneEFVCcAth0M7jFLI7alQQyKSEqrpvLuMfW4mfkw4iSkLCj9_zo"
            , email: "jon@gmail.com", status: "active", transaction: "$120.00"
        },
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                checkboxSelection
            />

        </div>
    )
}
