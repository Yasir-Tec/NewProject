import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ClientService from "../Services/ClientService";

const PlansComponent = ({ id }) => {
  const [isPaid, setIsPaid] = useState(false);
  const [isActive, setActive] = useState(false);

  const getDetailsById = (id) => {
    ClientService.getDetailsById(id)
      .then((response) => {
        console.log('Data in plans:', response.data);

        const isActive = Boolean(response.data.active);
        const isPaid = Boolean(response.data.status);

        setActive(isActive);
        setIsPaid(isPaid);

        console.log('isActive:', isActive);
        console.log('isPaid:', isPaid);
      })
      .catch((error) => {
        console.log('Error in getDetailsById:', error);
      });
  };

  useEffect(() => {
    getDetailsById(id);
  }, [id]);

  return (
    <div>
      <section className="md-section" id="id">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
              <div className="sec-title sec-title__lg-title md-text-center">
                <h2 className="sec-title__title">Our Plans</h2><span className="sec-title__divider"></span>
              </div>
            </div>
          </div>

          <div className="row row-eq-height">
            <>
              <div className="col-sm-6 col-md-6 col-lg-4 ">
                <div className="services">
                  <div className="services__img"><img src="assets/img/service/1.jpg" alt=""/></div>
                  <h2 className="services__title"><a href="/regularPlans">Regular Plans</a></h2>
                  <div className="services__desc">Curabitur elementum urna augue, eu porta purus gravida in. Cras consectetur, lorem a cursus vestibulum, ligula purus</div>
                  {isActive && isPaid && (
                    <a className="btn  btn-outline-primary btn-custom">
                      <Link to="/ExplorePlans/Regular">Regular Plans</Link>
                    </a>
                  )}
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4 ">
                <div className="services">
                  <div className="services__img"><img src="assets/img/service/2.jpg" alt=""/></div>
                  <h2 className="services__title"><a href="/silverPlans">Silver Premium Plans</a></h2>
                  <div className="services__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet ut lacus a tincidunt. Quisque luctus nibh augue, non</div>
                  {isActive && isPaid && (
                    <a className="btn  btn-outline-primary btn-custom">
                      <Link to="/ExplorePlans/Silver Premium">Silver Premium</Link>
                    </a>
                  )}
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4 ">
                <div className="services">
                  <div className="services__img"><img src="assets/img/service/3.jpg" alt=""/></div>
                  <h2 className="services__title"><a href="/goldPlans">Gold Premium plans</a></h2>
                  <div className="services__desc">Duis porttitor libero ac egestas euismod. Maecenas quis felis turpis. Nulla quis turpis sed augue egestas dapibus vel at</div>
                  {isActive && isPaid && (
                    <a className="btn  btn-outline-primary btn-custom">
                      <Link to="/ExplorePlans/Gold Premium">Gold Premium</Link>
                    </a>
                  )}
                </div>
              </div>

              {!isActive || !isPaid && (
                <div className="col-md-12 text-center">
                  <h3>Please pay the registration fee to explore different plans.</h3>
                </div>
              )}
            </>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlansComponent;
