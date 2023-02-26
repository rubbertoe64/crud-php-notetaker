import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

export default function EditUsers() {
    const [inputs, setInputs] = useState(
        {name: '', email: '', mobile: ''}
    );
    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/react/api/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data)
        })
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost/react/api/${id}`, inputs).then(function(response) {
            console.log(response)
        })
        
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(inputs)
    // }

    return (
        <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Name</label>
                <input type='text' className="form-control" value={inputs.name} name="name" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input type='text' className="form-control" value={inputs.email} name="email" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label>Mobile</label>
                <input type='text' className="form-control" value={inputs.mobile} name="mobile" onChange={handleChange} />
            </div>
            <button type="submit" name="add" className="btn btn-primary btn-margin-right">Save</button>
            <Link to='/'><button className="btn btn-secondary">Back</button></Link>

        </form>
        </div>
        <div className="col-2"></div>
    </div>
    )


}