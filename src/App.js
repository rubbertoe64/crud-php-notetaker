import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './App.css';
import ListUser from './components/ListUser'
import CreateUser from'./components/CreateUser'

function App() {
  return (
    <div className='container'>
      <div className='App'>
        <h1 className='page-header text-center'> React CRUD with PHP</h1>

        <BrowserRouter>
          <Link to="user/create"><Button variant="success">Add New User</Button></Link>

          <Routes>
            <Route index element={<ListUser/>} />
            <Route path='user/create' element={<CreateUser />} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
