import { useRef } from "react";
import { Form,  useNavigate } from "react-router-dom";
import Menu from "../Menu";

export function Login(){
    const username  = useRef();
    const pwd       = useRef();
    const navigate  = useNavigate();

    const adminLogin = () => {
        navigate('/admin/dashboard');
    }

    return (
        <>
            <Menu pageType={"Home"} />
            <div className="container">
                <Form className="loginFrm">
                    <input ref={username} className="inputField frmInput" placeholder="User Name" /><br />
                    <input ref={pwd} className="inputField frmInput" placeholder="Password" /><br />
                    <button className="frmBtn btn" onClick={()=>{adminLogin()}}>Login</button>
                </Form>
            </div>
        </>
    )
}