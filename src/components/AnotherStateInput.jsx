import React, { useState } from 'react';


function AnotherStateInput(){

    const [name, setName]=useState({firstname:"", lastname:""});
    const handleInput =(event)=>{
        const { name, value } = event.target;
        setName((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    return (
        <>
        <input
                name="firstname"
                value={name.firstname}
                onChange={handleInput}
                placeholder="First Name"
            />
            <input
                name="lastname"
                value={name.lastname}
                onChange={handleInput}
                placeholder="Last Name"
            />
        <h1>FirstName : {name.firstname}</h1>
        <h2>LastName : {name.lastname}</h2>
        {/* <h5>{name}</h5> */}
        <h5>{JSON.stringify(name)}</h5>
        </>
    );
}

export default AnotherStateInput;