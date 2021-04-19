import React from 'react'
import './view.css'
export default function View({firstname,lastname,phonenumber,role,message}) {

    //let {firstname,lastname,phonenumber,role,message} = data
    return (
        <div className = 'view_container'>
            <h1>These are your input</h1>
            <div className = 'notepad'>
                <p>First name: <span> {firstname}  </span> </p>
                <p>Last name: <span>{lastname} </span> </p>
                <p>Phone number: <span>{phonenumber } </span> </p>
                <p>Role:<span> {role} </span> </p>
                <p>Message: <span>{message} </span> </p >
            </div>
        </div>
    )
}
