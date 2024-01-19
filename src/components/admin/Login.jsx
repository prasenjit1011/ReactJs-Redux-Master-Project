import { useRef } from "react";
import { Form,  useNavigate } from "react-router-dom";

export function Login(){
    const username  = useRef();
    const pwd       = useRef();
    const navigate  = useNavigate();

    const adminLogin = () => {
        navigate('/admin/dashboard');
    }

    return (
        <div>
            <Form>
                <input ref={username} className="inputField" placeholder="User Name" />
                <input ref={pwd} className="inputField" placeholder="Password" />
                <button className="btn" onClick={()=>{adminLogin()}}>Login</button>
            </Form>
        </div>
    )
}