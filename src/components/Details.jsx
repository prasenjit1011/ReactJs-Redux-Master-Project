import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Details(){
    const APIURL        = 'https://api.slingacademy.com/v1/sample-data/photos/';
    const APIBOOKING    = 'http://localhost:3000/';
    const [msg, setMsg] = useState([]);
    const [hotelDetails, setHotelDetails] = useState([]);
    const {id}  = useParams();
    const dtd   = useRef();

    useEffect(()=>{
        fetch(APIURL+id).then(response=>response.json()).then(data=>{
            console.log(data);
            setHotelDetails(data['photo']);
        }).catch(err=>console.log(err));

    }, []);

    const bookNow = () => {
        let dtdVal = dtd.current.value;
        let frmData = JSON.stringify({userId:1, hotelId:id, dtd:dtdVal});

        fetch(APIBOOKING+'api/hotels/book',{
            method:'post',
            mode:'cors',
            body:frmData,
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>{
            setMsg(data.msg);
        })
        .catch(err=>{
            console.log(err)
        });
    }


    return (
        <>
            <Menu />
            <div style={{ backgroundColor:"#00bcd4", width:"1200px", padding:"25px", height:"100vh", border:"0px solid #000"}}>
                <img src={hotelDetails.url} style={{width:"400px", border:"1px solid #000", margin:"10px", padding:"15px", float:"left"}} />
                <div className="details-content">
                    <h5>{id} :: {hotelDetails.title}</h5>
                    <p>{hotelDetails.description}</p>
                    <p>{msg} &nbsp;</p>
                    <input type="date" ref={dtd} className="inputField" />
                    <button onClick={()=>{bookNow()}} className="btn">Book Now</button>
                    <Link to={'/'}><button className="btn">Back</button></Link>

                </div>
            </div>
        </>
    )
}