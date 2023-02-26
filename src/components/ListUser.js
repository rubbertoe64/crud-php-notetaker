import axios from 'axios';
import { useEffect, useState } from 'react';
import { PencilFill, Trash3 } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


export default function ListUser() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {
        axios.get('http://localhost/react/api/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    };

    function deleteUser(event, id) {
        event.preventDefault();
        axios.delete(`http://localhost/react/api/${id}`).then(function(response) {
            console.log(response)
            getUsers();
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
                                    <Link to={`/user/${user.id}/edit`}><button className='btn btn-primary btn-margin-right'><PencilFill /></button></Link>
                                    <button className='btn btn-danger' onClick={(e) => {deleteUser(e, user.id)}}><Trash3 /></button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
           </div>
        </div>
    )
}