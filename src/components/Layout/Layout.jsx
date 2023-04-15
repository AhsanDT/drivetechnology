import React, { useEffect, useState } from "react";
import { fetchDevelopments, fetchServices } from "../../../api";
import Idea from "../Home/Idea";
import ScrollToTop from "../ScrollToTop";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const [services, setServices] = useState([]);
  const [developments, setDevelopments] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let servicesResponse = await fetchServices();
      setServices(servicesResponse?.data?.data);
      let developmentsResponse = await fetchDevelopments();
      setDevelopments(developmentsResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header services={services} developments={developments} />
      <ScrollToTop />
      {children}
      <Idea title="Achieve Your Goals Faster With Us" />
      <Footer services={services} developments={developments} />
    </>
  );
};

export default Layout;
