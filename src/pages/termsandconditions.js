import React, { useEffect, useState } from "react";

import Layout from "@/components/Layout/Layout";
import Policy from "@/components/Policy/Policy";

import { fetchTermsAndConditions } from "api";
import WhiteLoader from "@/components/UI/WhiteLoader";

const termsandconditions = () => {
  const [termsAndCondition, setTermsAndCondition] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let termsAndConditionResponse = await fetchTermsAndConditions();
      setIsLoading(false);
      if (termsAndConditionResponse?.data?.data?.length) {
        setTermsAndCondition(termsAndConditionResponse?.data?.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
            {isLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <WhiteLoader />
        </div>
      ) : (
      <Policy title="Terms & Conditions" data={termsAndCondition} />
      )}
    </Layout>
  );
};

export default termsandconditions;
