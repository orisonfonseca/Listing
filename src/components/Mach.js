import React from 'react'
import { useMemo, useEffect, useState } from "react";
import axios from 'axios';

export default function Mach() {
const [time,settime]=useState();
const handle=(e)=>{
    settime(e.target.value);
    console.log(time);
}
const submit=()=>{
    const data = {
        start_time : "2021-01-28T07:30:00Z",
        end_time :"2021-01-28T13:30:00Z",

    }
   
    
    
    /*axios.post("https://cbkk6mg7i1.execute-api.ap-south-1.amazonaws.com/production/machstatz1",data)
    .then(res=>{
     console.log(res);
        }
        
        ).catch(err=>{
            console.log(err);
            
        })*/
}
const submit2=()=>{
    const data = {
        start_time : "2021-01-28T09:30:00Z",
        end_time : "2021-01-28T11:30:00Z",


    }
    axios.post("http://localhost:5000/machstatz3",data)
    .then(res=>{
     console.log(res);
        }
        
        ).catch(err=>{
            console.log("err");
            
        })
}
const submit3=()=>{
    const data = {
        start_time : "2021-01-28T06:30:00Z",
        end_time : "2021-01-28T08:30:00Z",

    }
    axios.post("http://localhost:5000/machstatz2",data)
    .then(res=>{
     console.log(res);
        }
        
        ).catch(err=>{
            console.log("err");
            
        })
}
    return (
        <div>
            <br></br>
            <input type="datetime-local" name="time" value={time} onChange={handle}></input>
            <button onClick={submit}>submit</button>
            <button onClick={submit2}>submit2</button>
            <button onClick={submit3}>submit3</button>

        </div>
    )
}
