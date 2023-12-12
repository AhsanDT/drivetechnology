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
    <>
    {/* <Layout>
      <Partnership
        partners={partners}
        className="top-28 md:top-20 pb-[80px] 2xl:min-h-[100vh] lg:top-10 lg:pb-20"
        getPartners={getPartners}
        partnerType={partnerType}
      />
    </Layout> */}
    </>
  );
};

export default core;
