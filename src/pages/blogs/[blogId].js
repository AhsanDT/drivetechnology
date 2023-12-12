import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import BlogDetails from "@/components/Blogs/BlogDetails";

import { fetchBlogBySlug, updateBlog } from "api";
import { richTextReducer } from "helpers/utils";

const Post = () => {
  const router = useRouter();
  const { blogId } = router.query;
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    if (blogId) {
      getData();
    }
  }, [blogId]);

  const getData = async () => {
    try {
      let blogResponse = await fetchBlogBySlug(blogId);
      if (blogResponse?.data?.data?.length) {
        await updateBlog(blogResponse?.data?.data[0]?.id, {
          data: {
            count: +blogResponse?.data?.data[0]?.attributes?.count + 1,
          },
        });
        blogResponse.data.data[0].attributes.description = richTextReducer(
          blogResponse?.data?.data[0].attributes.description
        );
        setBlog(blogResponse?.data?.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onLikeHandler = async () => {
    let blogResponse = await updateBlog(blog?.id, {
      data: {
        likes: +(blog?.attributes?.likes || 0) + 1,
      },
    });
    let blogDup = { ...blog };
    if (blogDup.attributes) {
      blogDup.attributes.likes = blogResponse?.data?.data?.attributes?.likes;
      setBlog(blogDup);
    }
  };

  return <BlogDetails blog={blog} onLike={onLikeHandler} />;
};

export default Post;
