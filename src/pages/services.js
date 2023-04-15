import React, { useEffect, useState } from "react";

import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";

import bgImage from "../assets/services/bg3.png";

import { fetchServices } from "api";

const services = ({ services = [] }) => {
  return (
    <Layout>
      <Services services={services} image={bgImage} name="Services" />
    </Layout>
  );
};

services.getInitialProps = async () => {
  let servicesResponse = await fetchServices();
  return { services: servicesResponse?.data?.data };
};

export default services;
