import { useEffect, useState } from "react";

export function Employee(){
    const [employee, setEmployee] = useState([]);

    useEffect(()=>{
        let URL = 'https://dummy.restapiexample.com/api/v1/employees';
        URL = 'https://reqres.in/api/users?page=2';

        fetch(URL,{
            mode:'cors'
        })
        .then(res=>res.json())
        .then(res=>{
            //console.log(res.data);
            setEmployee(res.data)
        })
        .catch();
    },[]);

    return (
        <div>
            <b>Employee List : </b>Fetch API<br />
            <div>
            {
                employee.map((val, key)=>(
                    <div key={key} style={{float:'left', margin:'15px'}}>
                        <img src={val['avatar']} style={{width:'100px'}} />
                        <div>{val['first_name']}</div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}