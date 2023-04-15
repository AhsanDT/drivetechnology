import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ProjectDetail from "@/components/portfolio/ProjectDetail";

import img1 from "../../assets/ourwork/img1.png";
import img2 from "../../assets/ourwork/img2.png";
import img3 from "../../assets/ourwork/img3.png";
import img4 from "../../assets/ourwork/img4.png";
import img5 from "../../assets/ourwork/img5.png";
import img6 from "../../assets/ourwork/img6.png";

import { fetchPortfolioByISlug } from "api";
import { richTextReducer } from "helpers/utils";

const DATA = [
  {
    id: "d1",
    img: img1,
    founder: "Juan Smith",
    title: "The Project Title",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit. Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit. Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "SaaS Solutions",
  },
  {
    id: "d2",
    img: img2,
    founder: "Juan Smith",
    title: "The Project Title",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit. Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit. Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "AI & ML",
  },
  {
    id: "d3",
    img: img3,
    founder: "Juan Smith",
    title: "The Project Title",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit. Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit. Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "EdTech",
  },
  {
    id: "d4",
    img: img4,
    founder: "Juan Smith",
    title: "The Project Title",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit. Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit. Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "Heallth Tech",
  },
  {
    id: "d5",
    img: img5,
    founder: "Juan Smith",
    title: "The Project Title",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit. Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit. Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "Ecommerce",
  },
  {
    id: "d6",
    img: img6,
    founder: "Juan Smith",
    title: "The Project Title",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit. Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit. Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.  Sit amet, consectetur adipiscing elit.  Ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "Crypto",
  },
];

const Post = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const [project, setProject] = useState([]);
  const [portfolio, setPortfolio] = useState();

  useEffect(() => {
    if (projectId) {
      getData();
    }
  }, [projectId]);

  const getData = async () => {
    try {
      let portfolioResponse = await fetchPortfolioByISlug(projectId);
      if (portfolioResponse?.data?.data?.length) {
        portfolioResponse.data.data[0].attributes.description = richTextReducer(
          portfolioResponse?.data?.data[0].attributes.description
        );
        setPortfolio(portfolioResponse?.data?.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProjectDetail
      id={projectId}
      DATA={project}
      portfolio={portfolio?.attributes}
    />
  );
};

export default Post;
