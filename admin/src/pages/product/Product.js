import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { userRequest , publicRequest } from "../../requestMethods";
import { useEffect } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase-config";
import { updateProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";


export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [pStats, setPStats] = useState([]);
    const [inputs, setInputs] = useState([]);
    const [file, setFile] = useState(null);
    const[product , setProduct] = useState([]);
    const [img, setImg] = useState(null);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs(prev=>{
            return {...prev, [e.target.name]: e.target.value}
        })
    };
    

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
              const product = { ...inputs, img: downloadURL};
              updateProduct(productId, product, dispatch);
              setImg(downloadURL);
              setInputs(...inputs);
            });
          }
        );
    };


    const MONTHS = useMemo(
        () => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
    []
    );

    useEffect(() => {
    const getStats = async () => {
        try {
            const res = await publicRequest.get("orders/income?pid=" + productId);
            const list = res.data.sort((a, b) => {
                return a._id - b._id;
            });
            list.map((item) => 
                setPStats((prev) => [
                    ...prev,
                    { name: MONTHS[item._id - 1], Sales: item.total},
                ])
            );
        } catch (err) {
            console.log(err);
        }
    };
    getStats();
}, [MONTHS, productId]);

                
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await userRequest.get("/products/find/" + productId);
                setProduct(res.data);
                setImg(res.data.img);
            } catch (err) {
                console.log(err);
            }
        };
        getProduct();
    }, [product.img]);

    console.log(product);
    
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
                </div>
                {product && (
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={img} alt="" className="productInfoImg" />
                        <span className="productName">{product.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{product._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">{product.inStock}</span>
                        </div>
                    </div>
                </div>)}
            </div>
            {product && (
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input name="title" type="text" placeholder={product.title} onChange={handleChange} />
                        <label>Product Description</label>
                        <input name="description" type="text" placeholder={product.desc} onChange={handleChange} />
                        <label>Product Price</label>
                        <input name="price" type="text" placeholder={product.price} onChange={handleChange} />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock" onChange={handleChange}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={img} alt="" className="productUploadImg"/>
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} onChange={e=>setFile(e.target.files[0])} />
                        </div>
                        <button  onClick={handleClick} className="productButton">Update</button>
                    </div>
                </form>
            </div>)}
        </div>
    );
}