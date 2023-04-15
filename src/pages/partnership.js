import React, { useEffect, useState } from "react";

import Partnership from "@/components/Home/Partnership";
import Layout from "@/components/Layout/Layout";

import { fetchPartnersWithFilter } from "api";

const core = () => {
  const [partners, setPartners] = useState([]);
  const [partnerType, setPartnerType] = useState("core");

  useEffect(() => {
    getPartners("core");
  }, []);

  const getPartners = async (type) => {
    try {
      setPartners([]);
      let partnersResponse = await fetchPartnersWithFilter(type);
      setPartners(partnersResponse?.data?.data);
      setPartnerType(type);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Partnership
        partners={partners}
        className="top-[130px] lg:top-[140px] pb-[100px]"
        getPartners={getPartners}
        partnerType={partnerType}
      />
    </Layout>
  );
};

export default core;
