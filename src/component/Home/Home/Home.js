import React from 'react';
import About from '../About/About';
import Blogs from '../Blog/Blogs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import OurBestPlan from '../OurBestPlan/OurBestPlan';
import ServiceArea from '../ServiceArea/ServiceArea';
import ServiceProvide from '../ServiceProvide/ServiceProvide';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>  
            <Blogs></Blogs>
            <OurBestPlan></OurBestPlan>
            <ServiceProvide></ServiceProvide>
            <ServiceArea></ServiceArea>
            <About></About>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;