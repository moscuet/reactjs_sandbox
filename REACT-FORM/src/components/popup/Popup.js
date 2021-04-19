import React from 'react'
import './popup.css'
export default function Popup({data,submit}) {

const closeHandler = () =>{
    window.location.reload()
}

let {firstname,lastname,phonenumber,role,message} = data

    return (
        <div className="overlay">
            <div className="popup">
               <h1>Your Notes: </h1>

               <div>
                    <p>First name: <span> {firstname}</span>  </p>
                    <p>Last name: <span> {lastname}</span> </p>
                    <p>Phone number: <span> {phonenumber}</span> </p>
                    <p>Role: <span> {role}</span> </p>
                    <p>Message: <span> {message}</span></p>
                   
                    <button onClick={submit}>Yes, I am sure</button>
                    <button className="secondary" submit ={submit} onClick={closeHandler}>
                        Nope, don't want to post it
                    </button>

               </div>
                
           </div>
        </div>

    )
}
