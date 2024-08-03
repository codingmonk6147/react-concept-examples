import React, { useRef } from 'react';

function UncontrolledForm() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value
        };
        console.log('Submitted Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" ref={nameRef} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" ref={emailRef} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledForm;
