import React, { useEffect, useState } from "react";

import Layout from "@/components/Layout/Layout";
import Policy from "@/components/Policy/Policy";

import { fetchPrivacyPolicies } from "api";
import WhiteLoader from "@/components/UI/WhiteLoader";

const privacypolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let cookiePolicyResponse = await fetchPrivacyPolicies();
      setIsLoading(false)
      if (cookiePolicyResponse?.data?.data?.length) {
        setPrivacyPolicy(cookiePolicyResponse?.data?.data[0]);
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
        <Policy title="Privacy Policy" data={privacyPolicy} />
      )}
    </Layout>
  );
};

export default privacypolicy;
