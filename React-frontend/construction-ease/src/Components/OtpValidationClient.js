import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ClientService from "../Services/ClientService";
import SuccessfullyRegister from "./SuccessfullyRegister";

const OTPValidationClient = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");

    if (emailParam) {
      setEmail(emailParam);
      getDetailsByEmail(emailParam);
    }
  }, [email, location.search]);

  const validateOTP = () => {
    setError(null);

    ClientService.validOtp({ email, otp })
      .then((response) => {
        console.log('Success:', response.data);
        navigate(`/SuccessfullyRegister?email=${encodeURIComponent(email)}`);
    
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Invalid OTP. Please try again.');
      });
  }

  const getDetailsByEmail = (email) => {
    ClientService.getDetailsByEmail(email)
      .then((response) => {
        console.log('-------email data--------');
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
        setError('Failed to fetch email details.');
      });
  }

  return (
    <div>
      <section className="md-section" style={{ backgroundColor: "#fff", padding: "120px 0 0" }}>
        <div className="row">
          <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
            <div className="sec-title sec-title__lg-title md-text-center">
              <h2 className="sec-title__title">Verify OTP</h2><span className="sec-title__divider"></span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9  col-lg-push-3">
              <div className="main-content">
                <div className="row">
                  <div className="col-lg-6 ">
                    <form className="contact-form">
                      <div className="form-item">
                        <input className="form-control" type="text" name="email" value={email} placeholder="Enter email" readOnly />
                      </div>
                      <div className="form-item">
                        <input className="form-control" type="text" name="otp" value={otp} placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
                      </div>
                      <button className="btn btn-primary btn-round mb-30" type="button" onClick={validateOTP} >
                        Verify
                      </button>
                      {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OTPValidationClient;
