import React, { useEffect, useState } from 'react';
import ClientService from '../Services/ClientService';
import AdminHeaderComponent from './AdminHeader';
import { useNavigate } from 'react-router-dom';
const ListClientsComponent = () => {
  const [client, setClient] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllClients();
  }, []);
  const BackButtonClick = () => {
  
    navigate('/admin');
  };

  const getAllClients = () => {
    ClientService.getAllClients()
      .then((response) => {
        console.log(response.data);
        setClient(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };




  const deleteClient = (clientId) => {
    console.log(".........code is .....");
    console.log(clientId);
    ClientService.deleteClient(clientId)
      .then((response) => {
        getAllClients();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <AdminHeaderComponent></AdminHeaderComponent>
    <section style={{
          
          backgroundImage: `url(${require('./demo.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'whitesmoke',
          padding: '60px'
        }}> 
    <div className="container" style={{ marginTop: "100px" }}>
      <h2 className="text-center">Client List</h2>
     
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {client.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.email}</td>
              <td>{client.mobile}</td>
              <td>{client.username}</td>
              <td>{client.password}</td>
              <td>
            
                <button
                  className="btn btn-danger"
                  onClick={() => deleteClient(client.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <button className="btn btn-danger btn-lg text-center" onClick={BackButtonClick}>
  BACK
</button>
    </section>
    </>
  );
};

export default ListClientsComponent;
