import React, { useEffect, useState } from "react";

import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";

import bgImage from "../assets/services/bg.png";

import { fetchDevelopments } from "api";

const development = ({ developments = [] }) => {
  return (
    <Layout>
      <Services services={developments} name="Development" image={bgImage} />
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
