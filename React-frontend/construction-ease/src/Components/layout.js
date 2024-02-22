import React, { useEffect } from "react"
import PlansComponent from "./PlansComponent"
import AboutComponent from "./AboutComponent"
import TestimonialComponent from "./Testimonial"
import TeamComponent from "./Team"
import ContactusComponent from "./Contactus"
import HeaderComponent from "./HeaderComponent"
import HomeComponent from "./HomeComponent"
import  { useState } from 'react';
// import GalleryComponent from "./GalleryComponent"


const LayoutComponent = (props) => {

    const [cid, setCid] = useState('');

    useEffect(()=>{
        console.log('id in layout',cid);
        setCid(props.id);
    }, [props.id]);


    return(

        <div>
            <h1>{cid}</h1>
            <div class="page-wrap">
             <div class="md-content">
             
                <HeaderComponent></HeaderComponent>
                <HomeComponent></HomeComponent>
                {/* <GalleryComponent></GalleryComponent> */}
                  <PlansComponent id={cid}></PlansComponent>
                  
                  <AboutComponent></AboutComponent>
                  
                 
                  <TestimonialComponent></TestimonialComponent>
                  <TeamComponent></TeamComponent>

                  <ContactusComponent></ContactusComponent>
                    
            </div>
            </div>
        </div>
        
    )
}

export default LayoutComponent