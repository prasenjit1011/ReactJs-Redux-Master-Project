import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Details(){
    //const APIURL            = 'https://api.slingacademy.com/v1/sample-data/photos/';
    const APIBOOKING        = 'http://localhost:3000/';

    const [msg, setMsg]     = useState([]);

    const [price, setPrice]       = useState(0);
    const [guestNumber, setGuestNumber] = useState(1);
    const [hotelDetails, setHotelDetails] = useState([]);


    const {id}  = useParams();
    const dtd   = useRef();



    useEffect(()=>{
        fetch(APIBOOKING+'api/hotels/details/'+id).then(response=>response.json()).then(data=>{
            console.log(data);
            setPrice(data.price);
            setHotelDetails(data);
        }).catch(err=>console.log(err));

    }, []);

    const bookNow = () => {
        let dtdVal      = dtd.current.value;
        let frmData     = JSON.stringify({userId:1, hotelId:id, dtd:dtdVal, guestNumber:guestNumber, price: price, hotelName:hotelDetails.name});

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

    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substring(0,10);


    return (
        <>
            <Menu pageType={"Admin"} />
            <div className="container">
                <img src={APIBOOKING + hotelDetails.imageUrl} style={{width:"400px", border:"1px solid #000", margin:"10px", padding:"15px", float:"left"}} />
                <div className="details-content">
                    <h5>{hotelDetails.name}</h5>
                    <p>{hotelDetails.description}</p>
                    <p>{msg} &nbsp;</p>

                    <div className="bookingFrm">
                        <div>
                            <div className="bookingElement" onClick={()=> setGuestNumber((guestNumber) => {return guestNumber>1?guestNumber-1:1})}>-</div>
                            <div className="bookingElement bgWhite">
                                {guestNumber}
                            </div>
                            <div className="bookingElement" onClick={() => setGuestNumber((guestNumber) => guestNumber + 1)}>+</div>
                        </div>
                        <div>
                            <input type="date" ref={dtd} className="inputField" defaultValue={date} />
                            <button onClick={()=>{bookNow()}} className="btn">Book Now</button>
                        </div>
                        <div>
                            <div style={{float:"left"}}>
                                Price : {guestNumber} x {price} <br />
                                Total : {guestNumber*price} 
                            </div>
                        </div>
                    </div>
                    <Link to={'/'}><button className="btn" style={{float:"right"}}>Back</button></Link>

                </div>
            </div>
        </>
    )
}