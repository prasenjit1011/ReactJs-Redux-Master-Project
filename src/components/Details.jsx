import { useEffect, useState } from "react";

export default function Details(){
    const APIURL = 'https://api.slingacademy.com/v1/sample-data/photos/1';
    const [hotelDetails, setHotelDetails] = useState([]);

    useEffect(()=>{
        fetch(APIURL).then(response=>response.json()).then(data=>{
            console.log(data);
            setHotelDetails(data['photo']);
        }).catch(err=>console.log(err));

    }, []);


    return (
        <div style={{ backgroundColor:"#00bcd4", width:"1200px", padding:"25px", height:"100vh"}}>

            <img src={hotelDetails.url} style={{width:"400px", border:"1px solid #000", margin:"10px", padding:"15px", float:"left"}} />
            <div style={{float:""}}>
                <h5>{hotelDetails.title}</h5>
                <p>{hotelDetails.description}</p>
            </div>
        </div>
    )
}