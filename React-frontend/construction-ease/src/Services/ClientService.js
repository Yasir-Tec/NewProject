import axios from 'axios';

const CLIENT_BASE_RESTAPI_URL = 'http://localhost:8084/client';



class ClientService{



  signUp(userData)
  {
      return axios.post('http://localhost:8084/client/resister', userData)
     
  }

  validOtp(credintials) {
    const {email,otp}=credintials;
    return axios.put(`http://localhost:8084/client/verifyotp?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`);
  }
  loginClient(){
    return axios.get(CLIENT_BASE_RESTAPI_URL + '/get');
}
  getDetailsByEmail(email)
  {
    return axios.get(CLIENT_BASE_RESTAPI_URL+'/details/'+email)
  }

  getDetailsById(clientId)
  {
    return axios.get(CLIENT_BASE_RESTAPI_URL+'/detailsById/'+clientId)
  }

  clientFeedback(feedback){
    return axios.post('http://localhost:8084/admin/clientfeedback',feedback)
  }
  
  getAllClients(){
  
    return axios.get(CLIENT_BASE_RESTAPI_URL +'/get')
  }

// Assuming isChecked is a boolean variable
updateClientStatus(clientId) {
  return axios.put(CLIENT_BASE_RESTAPI_URL+'/status/'+clientId);
}

  



}

export default new ClientService();