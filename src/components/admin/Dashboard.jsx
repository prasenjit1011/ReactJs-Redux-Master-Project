import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu";

export default function Dashboard(){
    const navigate  = useNavigate();
    const APIURL = 'http://localhost:3000/api/';
    const [bookingList, setBookingList] = useState([]);
    useEffect(()=>{
        fetch(APIURL+'hotels/booking/list')
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
                setBookingList(data)
            })
            .catch(err=>{
                console.log(err);
            });
    },[]);


    return (
        <>
        <Menu />
        <div style={{ backgroundColor:"#00bcd4", width:"1200px", padding:"25px", marginTop:"10px", height:"128vh", border:"0px solid #000"}}>
            
            <div>
                <h3>Booking List</h3>
                <table border="1" className="bookingTable">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Place</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingList.map((value, key)=>{
                                return (
                                    <tr key={value._id}>
                                        <td>{key+1}</td>
                                        <td>{value.dtd}</td>
                                        <td>{value.dtd}</td>
                                        <td>{value.dtd}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}