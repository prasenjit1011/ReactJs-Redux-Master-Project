import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Listing(){
    const APIURL    = 'https://gh4csx-3000.csb.app/';
    const [hotelList, setHotelList] = useState([]);

    useEffect(()=>{
        fetch(APIURL+'api/hotels/list/')
            .then(response=>response.json())
            .then(result=>{

                setHotelList(result);
            })
            .catch(err=>console.log(err));
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
                                    <img src={APIURL+value.imageUrl} />
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