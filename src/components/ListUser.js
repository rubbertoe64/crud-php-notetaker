import axios from 'axios';
import { useEffect, useState } from 'react';


export default function ListUser() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {
        axios.get('http://localhost/react/api/').then(function(response) {
            console.log(response.data);
            setUsers(response.data)
        })
    }

    return (
        <div className="row">
            <div className="col-12">
                <h1>List Users</h1>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>ID#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, key) =>
                            <tr key={key}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    Edit
                                    Delete
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
           </div>
        </div>
    )
}