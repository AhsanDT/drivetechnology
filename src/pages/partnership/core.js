import React, { useEffect, useState } from "react";

import Partnership from "@/components/Home/Partnership";
import Layout from "@/components/Layout/Layout";

import { fetchPartnersWithFilter } from "api";

const core = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let partnersResponse = await fetchPartnersWithFilter("core");
      setPartners(partnersResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Partnership
        partners={partners}
        className="top-[130px] lg:top-[140px] pb-[100px]"
      />
    </Layout>
  );
};

export default core;
