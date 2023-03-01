import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CreateUser() {
    
    const [inputs ,setInputs] = useState([])
    const [message, setMessage] =useState('')
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/react/api/save', inputs).then(function(response) {
            console.log(response.data)
            setMessage(response.data.message)
        })
        
    }

    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Name</label>
                    <input type='text' className="form-control" name="name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type='text' className="form-control" name="email" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Mobile</label>
                    <input type='text' className="form-control" name="mobile" onChange={handleChange} />
                </div>
                <button type="submit" name="add" className="btn btn-primary btn-margin-right">Save</button>
                <Link to='/'><button className="btn btn-secondary">Back</button></Link>
            </form>
            </div>
            <div>{message}</div>
        </div>
    )
}