import React from "react";
import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";
import bgImage from "../assets/services/bg.png";
import { fetchDevelopments } from "api";
import Heading from "@/components/Home/Heading";
import Bookconsultation from "@/components/Home/Bookconsultation";


const development = ({ developments = [] }) => {

  return (
    <Layout>
      <Heading heading="Development" />
      <Services services={developments} count1={ 1 }  count2={ 3 } name="Development" image={bgImage} />
      <Bookconsultation/>
    </Layout>
  );
};

development.getInitialProps = async () => {
  try {
    let developmentsResponse = await fetchDevelopments();
    return { developments: developmentsResponse?.data?.data };
  } catch (error) {
    return { developments: [] };
  }
};

export default development;
