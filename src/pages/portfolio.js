// import { useEffect, useState } from "react";

// import OurWorks from "@/components/Home/OurWorks";
// import Layout from "@/components/Layout/Layout";

// import image from "../assets/ourwork/design2.png";

// import { fetchCategories, fetchPortfolios } from "api";

// const portfolio = () => {
//   const [categories, setCategories] = useState([]);
//   const [portfolios, setPortfolios] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [portfolioName, setPortfolioName] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     getPortfolioData();
//   }, [selectedCategory, portfolioName]);

//   const getData = async () => {
//     try {
//       let categoriesResponse = await fetchCategories();
//       setCategories(categoriesResponse?.data?.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getPortfolioData = async () => {
//     try {
//       setLoading(true);
//       let portfoliosResponse = await fetchPortfolios(
//         selectedCategory,
//         portfolioName
//       );
//       setPortfolios(portfoliosResponse?.data?.data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   const categoryData = [
//     {
//       id: "portfolio1",
//       image: { image },
//       description: "Portfolio 1 description",
//     },
//     {
//       id: "portfolio2",
//       image: { image },
//       // "image": "/path/to/image2.jpg",
//       description: "Portfolio 2 description",
//     },
//     // Add more data as needed
//   ];

//   return (
//     <Layout>
//       <OurWorks
//         image={image}
//         categories={categoryData}
//         portfolios={portfolios}
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//         portfolioName={portfolioName}
//         setPortfolioName={setPortfolioName}
//         loading={loading}
//       />
//     </Layout>
//   );
// };

// export default portfolio;


import { useEffect, useState } from "react";

import OurWorks from "@/components/Home/OurWorks";
import Layout from "@/components/Layout/Layout";

import image from "../assets/ourwork/design2.png";

import { fetchCategories, fetchPortfolios } from "api";

const portfolio = () => {
  const [categories, setCategories] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [portfolioName, setPortfolioName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getPortfolioData();
  }, [selectedCategory, portfolioName]);

  const getData = async () => {
    try {
      let categoriesResponse = await fetchCategories();
      setCategories(categoriesResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPortfolioData = async () => {
    try {
      setLoading(true);
      let portfoliosResponse = await fetchPortfolios(
        selectedCategory,
        portfolioName
      );
      setPortfolios(portfoliosResponse?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const categoryData = [
    {
      id: "portfolio1",
      image: { image },
      description: "Portfolio 1 description",
    },
    {
      id: "portfolio2",
      image: { image },
      // "image": "/path/to/image2.jpg",
      description: "Portfolio 2 description",
    },
    // Add more data as needed
  ];

  return (
    <Layout showFooter={false} showIdea={false}>
      <OurWorks
        image={image}
        categories={categoryData}
        portfolios={portfolios}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        portfolioName={portfolioName}
        setPortfolioName={setPortfolioName}
        loading={loading}
      />
    </Layout>
  );
};

export default portfolio;
