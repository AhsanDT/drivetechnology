import React, { useEffect, useState } from "react";

import Layout from "@/components/Layout/Layout";
import Policy from "@/components/Policy/Policy";

import { fetchCoockiePolicies } from "api";
import WhiteLoader from "@/components/UI/WhiteLoader";

const cookiepolicy = () => {
  const [cookiePolicy, setCookiePolicy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let cookiePolicyResponse = await fetchCoockiePolicies();
      setIsLoading(false)
      if (cookiePolicyResponse?.data?.data?.length) {
        setCookiePolicy(cookiePolicyResponse?.data?.data[0]);
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
        <Policy title="Cookie Policy" data={cookiePolicy} />
      )}
    </Layout>
  );
};

export default cookiepolicy;
