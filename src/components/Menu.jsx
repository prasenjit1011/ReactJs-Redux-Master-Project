import { Link } from "react-router-dom";

export function Menu({getMsg}){
    return (
        <div className="headerMenu">
            <Link to={'/'} onClick={()=>{getMsg('PL')}} >Product List</Link>
            <Link to={'/user'} onClick={()=>{getMsg('CL')}}>Customer List</Link>
            <Link to={'/employee'} onClick={()=>{getMsg('EL')}}>Employee List</Link>
            <Link to={'/add/product'}  onClick={()=>{getMsg('AP')}}>Add Product</Link>
            <Link to={'/add/user'} onClick={()=>{getMsg('AC')}}>Add Customer</Link>
            <hr />
        </div>
    );
}