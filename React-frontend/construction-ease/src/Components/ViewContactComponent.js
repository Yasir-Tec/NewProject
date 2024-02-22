import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import AdminService from '../Services/AdminService';
import AdminHeaderComponent from './AdminHeader';
import {useNavigate}  from 'react-router-dom';
import ContactusService from '../Services/ContactusService';
const ViewContactComponent = () => {
  const [contactus, setContactus] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
    ViewCOntact();
  }, []);

  const ViewCOntact = () => {
    ContactusService.viewcontactus()
      .then((response) => {
        console.log(response.data);
        // Ensure that the response.data is an array before updating the state
        if (Array.isArray(response.data)) {
          setContactus(response.data);
        } else {
          console.error("Invalid data format. Expected an array.");
          setContactus([]); // Set feedback to an empty array to prevent the error
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const BackButtonClick = () => {
  
    navigate('/admin');
  };
  return (
    <><AdminHeaderComponent></AdminHeaderComponent>
    <section 
    style={{
          
      backgroundImage: `url(${require('./demo.jpg')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'whitesmoke',
      padding: '60px'
    }}>   
     <div className="container" style={{ marginTop: "100px" }}>
      <h2 className="text-center">Contractor Feedback List</h2>
     
      <Table bordered striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contactus.map((ContactusItem) => (
            <tr key={ContactusItem.id}>
              <td>{ContactusItem.id}</td>
              <td>{ContactusItem.name}</td>
              <td>{ContactusItem.email}</td>
              <td>{ContactusItem.message}</td>
              <td>{ContactusItem.mobile}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    <button className="btn btn-danger btn-lg text-center" onClick={BackButtonClick}>
  BACK
</button>
    </section>
    </>

  );
};

export default ViewContactComponent;
