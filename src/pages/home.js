import React, { useEffect, useState } from "react";

import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";
import OurWorks from "@/components/Home/OurWorks";
import Partnership from "@/components/Home/Partnership";
import Blogs from "@/components/Home/Blogs";

import bgImage from "../assets/services/bg.png";
import {
  fetchBlogs,
  fetchCategories,
  fetchHeroBox,
  fetchPartnersWithFilter,
  fetchPortfolios,
  fetchServices,
  fetchDevelopments
} from "api";
import Loader from "@/components/UI/Loader";
import Review from "@/components/Home/Review";
import Mission from "@/components/Home/Mission";
import DigitalServicesTow from "@/components/Home/DigitalServicesTow";
import Bookconsultation from "@/components/Home/Bookconsultation";

const HomePage = () => {
  const [services, setServices] = useState([]);
  const [developments, setDevelopments] = useState([]);
  const [partners, setPartners] = useState([]);
  const [partnerType, setPartnerType] = useState("core");
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [portfolioName, setPortfolioName] = useState("");
  const [heroBox, setHeroBox] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getPortfolioData();
  }, [selectedCategory, portfolioName]);

  const getData = async () => {
    try {
      let heroBoxResponse = await fetchHeroBox();
      if (heroBoxResponse?.data?.data?.length) {
        setHeroBox(heroBoxResponse?.data?.data[0]);
      }
      let servicesResponse = await fetchServices(2);
      setServices(servicesResponse?.data?.data);
      let developmentResponse = await fetchDevelopments(2);
      setDevelopments(developmentResponse?.data?.data);
      let partnersResponse = await fetchPartnersWithFilter("core", 3);
      setPartners(partnersResponse?.data?.data);
      let blogsResponse = await fetchBlogs(4);
      setBlogs(blogsResponse?.data?.data);
      let categoriesResponse = await fetchCategories(6);
      setCategories(categoriesResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPortfolioData = async () => {
    try {
      let portfoliosResponse = await fetchPortfolios(
        selectedCategory,
        portfolioName,
        6
      );
      setPortfolios(portfoliosResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPartners = async (type) => {
    try {
      setPartners([]);
      let partnersResponse = await fetchPartnersWithFilter(type, 3);
      setPartners(partnersResponse?.data?.data);
      setPartnerType(type);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Hero heroBox={heroBox} />
      <Mission />
      <Services services={services} count1={ 0 }  count2={ 2 } name="Digital Services" image={bgImage} />
      {/* <Services services={services} name="Digital Services" image={bgImage} /> */}
      <Services services={developments} count1={1} count2={2} name="Development" image={bgImage} />
      <Bookconsultation/>
      <DigitalServicesTow />
      {/* <WhyUs /> */}
      {/* <OurWorks
        image={ourWorkImage}
        categories={categories}
        portfolios={portfolios}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        portfolioName={portfolioName}
        setPortfolioName={setPortfolioName}
      /> */}
      <OurWorks
      />
      {/* <Work /> */}
      {/* <Partnership
        partners={partners}
        getPartners={getPartners}
        partnerType={partnerType}
      /> */}
      <Blogs blogs={blogs} />
      <Review Review={Review} />
    </Layout>
  );
};

export default HomePage;
