import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, generatePath, useNavigate, useParams } from "react-router-dom";

export function User(){
    /** Fetch store data */
    const userList = useSelector((state)=>{
        return state.userstore.data;
    });

    return (
        <div>
            <b>Customer List : </b>
            {
                userList.map((val,key)=>(
                    <span key={key}>{val}, </span>)
                )
            }
        </div>
    );
}


export function AddUser(){

    /** Update store data */
    const dispatch      = useDispatch();
    const createAction  = (type,action) => ({type, action});

    const userName      = useRef();
    const navigate      = useNavigate();
    //const params      = useParams();

    const ADDNEWUSER    = (data) => {
        return createAction('ADDUSER', data);
    }

    const addNewCustomer = () => {
        let customerName = userName.current.value;
        userName.current.value = '';
        dispatch(ADDNEWUSER(customerName));
        navigate(generatePath('/user'), { replace: true });
    }

    return (
        <div>
            <b>Add User Redirect: </b>
            <input ref={userName} placeholder='User' />
            <button type='button' onClick={()=>{addNewCustomer()}} className='btn btn-primary btn-sm'>Save</button>
        </div>
    );
}


