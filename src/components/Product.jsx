import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, generatePath, useNavigate, useParams } from "react-router-dom";

export function Product(){
    /** Fetch store data */
    const prodList = useSelector((state)=>{
        return state.productstore.data;
    });
    
    return (
        <div>
            <b>Product List : </b>
            {
                prodList.map((val,key)=>(
                    <span key={key}>{val}, </span>)
                )
            }
        </div>
    );
}

export function AddProduct(){
    /** Update store data */
    const dispatch      = useDispatch();
    const createAction  = (type,action) => ({type, action});

    const prodName      = useRef();
    const navigate      = useNavigate();
    //const params      = useParams();

    const ADDNEWPROD    = (data) => {
        return createAction('ADDPROD', data);
    }
    const addNewProduct = () => {
        let productName = prodName.current.value;
        dispatch(ADDNEWPROD(productName));

        navigate(generatePath('/'), { replace: true });
    }

    return (
        <div>
            <b>Add Product : </b>
            <input ref={prodName} placeholder='Product' />
            <button type='button' onClick={()=>{addNewProduct()}} className='btn btn-primary btn-sm'>Save</button>
        </div>
    );
}


