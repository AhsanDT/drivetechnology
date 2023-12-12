import React from "react";

import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";

import bgImage from "../assets/services/bg3.png";

import { fetchServices } from "api";
import Heading from "@/components/Home/Heading";
import Bookconsultation from "@/components/Home/Bookconsultation";



const services = ({ services = [] }) => {
  return (
    <Layout>
      <Heading heading="Services" />
       <Services services={services} count1={ 0 }  count2={ 2 } image={bgImage} name="Services" />
       <Bookconsultation/>
    </Layout>
  );
};

services.getInitialProps = async () => {
  let servicesResponse = await fetchServices();
  return { services: servicesResponse?.data?.data };
};

export default services;
