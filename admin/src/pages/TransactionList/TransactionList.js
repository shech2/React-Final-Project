import "./TransactionList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React from 'react'
import { deleteOrder,getOrders,updateOrder } from "../../redux/apiCalls";
import { useDispatch , useSelector} from "react-redux";
import { useEffect  ,useState} from "react";
import { userRequest } from "../../requestMethods";



export default function OrderList() {
    const dispatch = useDispatch();
    const  orders  = useSelector((state) => state.order.orders);
    const [Orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get('/orders');
                // add to order array the nickname of the user form backend
                res.data.map(async (order) => {
                    const user = await userRequest.get(`/users/${order.userId}`);
                    order.userId = user.data[0].username;
                    console.log(order);
                    setOrders((prev) => [...prev, order]);
                    return order;
                });
            } catch (err) {
                console.log(err);
            }
        };
        getOrders();
    }, []);


    useEffect(() => {
        getOrders(dispatch);
    }, [dispatch]);
        
    const handleDelete = (_id) => {
        deleteOrder(_id, dispatch);        
    };


    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'amount', headerName: 'Amount', width: 200, renderCell: (params) => {
                return (
                    <div className="transactionListTransaction">
                        {params.row.amount}$
                    </div>
                )

            }
        },
        { field: 'userId', headerName: 'UserID', width: 200, renderCell : (params) => {
            return (
                <div className="transactionListUser">
                    {Orders.filter((order) => order._id === params.row._id).map((order) => order.userId)}
                </div>
            )
        } 
    },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <DeleteOutline className="transactionListDelete" onClick={() => handleDelete(params.row._id)} />
                )
            }
        },
    ];


    return (
        <div className="transactionList">
            <DataGrid
                rows={orders}
                disableSelectionOnClick
                columns={columns}
                getRowId = {(row) => row._id}
                pageSize={8}
                checkboxSelection
            />
        </div>
    )
}
