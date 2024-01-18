import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Listing(){
    const APIURL    = 'https://api.slingacademy.com/v1/sample-data/photos';
    const [hotelList, setHotelList] = useState([]);

    useEffect(()=>{
        fetch(APIURL)
            .then(response=>response.json())
            .then(result=>{
                setHotelList(result['photos']);
            })
            .catch(err=>console.log(err));
    },[]);

    return (
        <div style={{width:"88%", margin:"auto"}}>
            {
                hotelList.map((value, index)=>{
                    return (
                        <div className="box" key={index}>
                            <div className="box-inner">
                                <img src={value.url} />
                                <hr />
                                <Link to={'/details'}>
                                    {value.title}
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}