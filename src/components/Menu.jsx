import { Link } from "react-router-dom";

export function Menu(){
    return (
        <div>
            <Link to={'/'} >Product List</Link>
            <Link to={'/user'}>Customer List</Link>
            <Link to={'/add/product'} >Add Product</Link>
            <Link to={'/add/user'}>Add Customer</Link>
        </div>
    );
}