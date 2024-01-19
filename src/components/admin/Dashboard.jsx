import { useState } from "react";

export default function Dashboard(){

    const [bookingList, setBookingList] = useState([]);
    


    return (
        <div style={{height: "100vh", width: "1000px", margin:" 10px", border:"1px solid #000"}}>
            <div>
                <div className="adminPageTtitle">Dashboard</div>
                <button className="logout btn">Logout</button>
            </div>
            <div>
                <h3>Booking List</h3>
                <table className="bookingTable">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Place</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
}