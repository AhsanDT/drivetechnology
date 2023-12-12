import axios from "axios";
const baseURL = "https://possible-probable-crown.strapiapp.com/api";
// const baseURL = "http://localhost:1337/api";

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`;

  return config;
});

export const fetchServices = (limit = 100) => {
  return axios.get(
    `${baseURL}/services?populate=*&sort[0]=createdAt:desc&pagination[limit]=${limit}`
  );
};

export const fetchDevelopments = (limit = 100) => {
  return axios.get(
    `${baseURL}/developments?populate=*&sort[0]=createdAt:desc&pagination[limit]=${limit}`
  );
};

export const fetchPartners = () => {
  return axios.get(
    `${baseURL}/partners?populate=*&sort[0]=createdAt:desc&pagination[limit]=3`
  );
};

export const fetchPartnersWithFilter = (type, limit = 100) => {
  return axios.get(
    `${baseURL}/partners?populate=*&filters[type][$eq]=${type}&sort[0]=createdAt:desc&pagination[limit]=${limit}`
  );
};

export const fetchBlogs = (pageSize = 100, page = 1) => {
  return axios.get(
    `${baseURL}/blogs?populate=*&sort[0]=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );
};

export const fetchBlogBySlug = (slug) => {
  return axios.get(`${baseURL}/blogs?filters[slug][$eq]=${slug}&populate=*`);
};

export const updateBlog = (id, data) => {
  return axios.put(`${baseURL}/blogs/${id}`, data);
};

export const fetchCategories = (limit = 100) => {
  return axios.get(
    `${baseURL}/categories?sort[0]=createdAt:desc&pagination[limit]=${limit}`
  );
};

export const fetchPortfolios = (filter, search, limit = 100) => {
  if (search) {
    return axios.get(
      `${baseURL}/portfolios?filters[title][$containsi]=${search}&populate=*&sort[0]=createdAt:desc&pagination[limit]=${limit}`
    );
  } else if (filter === "all") {
    return axios.get(
      `${baseURL}/portfolios?populate=*&sort[0]=createdAt:desc&pagination[limit]=${limit}`
    );
  } else {
    return axios.get(
      `${baseURL}/portfolios?filters[category][id][$eq]=${filter}&populate=*&sort[0]=createdAt:desc&pagination[limit]=${limit}`
    );
  }
};

export const fetchPortfolioByISlug = (slug) => {
  return axios.get(`${baseURL}/portfolios?filters[slug][$eq]=${slug}`);
};

export const fetchHeroBox = () => {
  return axios.get(`${baseURL}/hero-boxes?populate=*&pagination[limit]=1`);
};

export const fetchPrivacyPolicies = () => {
  return axios.get(
    `${baseURL}/privacy-policies?populate=*&pagination[limit]=1`
  );
};

export const fetchCoockiePolicies = () => {
  return axios.get(
    `${baseURL}/coockie-policies?populate=*&pagination[limit]=1`
  );
};

export const fetchTermsAndConditions = () => {
  return axios.get(
    `${baseURL}/terms-and-conditions?populate=*&pagination[limit]=1`
  );
};

export const addEvent = (data) => {
  return axios.post(`${baseURL}/calendlies`, data);
};
