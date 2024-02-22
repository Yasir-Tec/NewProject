

import React from "react"
import { NavLink } from "react-router-dom"

const AdminHeaderComponent = () => {

    return(
            	
			<header className="header header-fixheight header--fixed">
				<div className="container">
					<div className="header__inner">
						<div className="header-logo"><a href="/"><img src="assets/img/logo_white.png" alt=""/></a></div>
						
					
						<nav className="raising-nav">
							
				
							<ul className="raising-menu">
								<li><a href="/user">ClientList</a>
								</li>
								<li><a href="/contractor">ContractorList</a>
								</li>
                                <li><a href="/clientPayment">Client's Payment</a>
								</li>
                                <li><a href="/contractorfeedbacklist">ContractorFeedback</a>
								</li>
                                <li><a href="/clientfeedbacklist">ClientFeedback</a>
								</li>
								<li><a href="/cont">ContactInfo</a>
								</li>
							</ul>
          
							<div className="navbar-toggle"><i class="fa fa-bars"></i></div>
						</nav>
						
					</div>
				</div>
			</header>
  
    )
}

export default AdminHeaderComponent;