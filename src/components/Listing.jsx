import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Listing(){

    const server    = false;
    const apiHost   = server ? 'http://localhost:3000/' : 'https://gh4csx-3000.csb.app/';
    const [hotelList, setHotelList] = useState([]);

    useEffect(()=>{
        fetch(apiHost+'api/hotels/list/')
            .then(response=>response.json())
            .then(result=>{

                setHotelList(result);
            })
            .catch((err)=>{
                alert('Something bad happened; Please check your API or Restart sandbox, https://codesandbox.io/p/github/prasenjit1011/bookingSystem/booking-master');
                console.log(err)
            });
    },[]);

    return (
        <>
            <Menu pageType={"Admin"} />
            <div className="container">
                {
                    hotelList.map((value, index)=>{
                        return (
                            <div className="box" key={index}>
                                <div className="box-inner">
                                    <img src={apiHost+value.imageUrl} />
                                    <hr />
                                    <Link to={'/details/'+value._id}>
                                        {value.name}
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}