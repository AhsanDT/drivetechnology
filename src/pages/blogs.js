import React, { useEffect, useState } from "react";

import Blogs from "@/components/Blogs/Blogs";
import Layout from "@/components/Layout/Layout";

import { fetchBlogs } from "api";

const blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(12);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let blogsResponse = await fetchBlogs(pageSize, page);
      setBlogs(blogsResponse?.data?.data);
      setTotalCount(blogsResponse?.data?.meta?.pagination?.total);
    } catch (error) {
      console.log(error);
    }
  };

  const onPageChange = async () => {
    setPage(page + 1);
    let blogsResponse = await fetchBlogs(pageSize, page + 1);
    setBlogs([...blogs, ...blogsResponse?.data?.data]);
    setTotalCount(blogsResponse?.data?.meta?.pagination?.total);
  };

  return (
    <Layout>
      <Blogs
        blogs={blogs}
        totalCount={totalCount}
        onPageChange={onPageChange}
      />
    </Layout>
  );
};

export default blogs;
