import { Link } from "react-router-dom";

export function Errorpage(){
    return (
        <div className="container">
            <h1>404 Page</h1>
            <Link to={'/'}>Back To Home</Link>
        </div>
    );
}